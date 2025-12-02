import { json } from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import getToken from "../utils/token.js";
import sendOtp from "../utils/forgotpasswordOtpSender.js";

export async function register(req, res) {
  try {
    const { fullName, email, password, mobileNumber } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "Account already exist" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "password must be atleast 8 character." });
    }
    if (mobileNumber.length != 10) {
      return res
        .status(400)
        .json({ message: "Mobile number  must be 10 character long." });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
      mobileNumber,
    });
    const token = await getToken(newUser.id);

    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({ message: "Somethong went wrong" });
    }
    const decryptPassword = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!decryptPassword) {
      return res.status(400).json({ message: "invaild username/password" });
    }
    const token = await getToken(isUserExist.id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7*24*60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(201).json({ message: "User login successful" });
  } catch (error) {
    console.log(error);
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("token");
    res.status(201).json({ message: "user logout successfully" });
  } catch (error) {
    console.log("error occured during logout", error);
  }
}

export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({ message: "User doesn't exist" });
    }
    const otpSented=await sendOtp(isUserExist.email)
    isUserExist.otp=otpSented;
    isUserExist.otpExpires=Date.now()+5*60*1000;
    await isUserExist.save();
    res.status(201).json({"message":"Otp sent successfully"})


  } catch (error) {
    console.log("error occured during logout", error);
  }
}


export async function verifyOtp(req, res) {
  try {
    const { email,otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Somethong went wrong" });
    }
    if( user.otp!==otp){
        return res.status(400).json({ message: "invalid otp" });
    }
     if( user.otpExpires<Date.now()){
        return res.status(400).json({ message: "otp expire" });
    }
    user.isOtpVerified=true;
    user.otp=undefined,
    user.otpExpires=undefined
    await user.save();
    res.status(201).json({"message":"otp verified successfully"})

  } catch (error) {
    console.log("error occured verify otp", error);
  }
}



export async function resetPassword(req, res) {
  try {
    const { email,newPassword} = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.isOtpVerified) {
      return res.status(400).json({ message: "otp verification required" });
    }
    const hashPassword=await bcrypt.hash(newPassword,10)
    user.password=hashPassword
    user.isOtpVerified=false;
    await user.save();
    res.status(201).json({"message":"password change successfully"})

  } catch (error) {
    console.log("error occured during change password", error);
  }
}


export async function googleAuth(req, res) {
  try {
    const { email} = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Account not exist" });
    }
    const token=await getToken(user.id)
     res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7*24*60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(201).json({ message: "User login successful" });
    

  } catch (error) {
    console.log("error occured during change password", error);
  }
}
