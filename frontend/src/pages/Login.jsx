import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// Sign in with google
import { auth, provider } from "../utlis/firebase.auth.js";
import { signInWithPopup } from "firebase/auth";
import { setUserData } from "../redux/userSlice.js";
import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch=useDispatch()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const LoginHandler = async () => {
    try {
      if (!email || !password) {
        setErr("Please fill all the fields");
        return;
      }
      setErr("");
      const loginResponse = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
         
      );
      console.log("Login successful:", loginResponse);
      if (  loginResponse.data.message === "User login successful" && loginResponse.status === 201){
        toast.success("Login successful");
        navigate("/");
      }
      dispatch(setUserData(loginResponse.data))
      
    } catch (error) {
      setErr(error.response.data.message);
      console.log(error);
    }
  };

  // Google Sign In Handler
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/google`,
        { email: user.email },
        { withCredentials: true }
      );
      console.log("Google Sign-In successful:", response);
      if (
        response.data.message === "User login successful" ||
        response.status === 201
      )
        dispatch(setUserData(response.data))
    } catch (error) {
      setErr(error.response.data.message);
      console.log("Error during Google Sign-In:", error);
    }
  };

  return (
    <div className="bg-[#fff9f6] min-h-screen w-full flex justify-center items-center p-4 ">
      <div className="w-full p-8 rounded-xl shadow-lg max-w-md bg-white h-2/3 border border-gray-200">
        <h1 className="text-3xl font-bold mb-2 text-green-600 ">NotesGP<span className="text-orange-600">T</span> </h1>
        <p className="text-gray-800 mb-8">
          Log in to your account to continue enjoying all the features!
        </p>

        <div className=" mb-4 ">
          <label
            htmlFor="email"
            className="mb-2 block text-gray-700 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded"
            onChange={(e) => {
              setEmail(e.target.value);
              setErr("");
            }}
          />
        </div>

        <div className=" mb-2 ">
          <label
            htmlFor="password"
            className="mb-2 block text-gray-700 font-medium"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              id="Password"
              placeholder="Enter your Password"
              className="px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded tracking-wide"
              onChange={(e) => {
                setPassword(e.target.value);
                setErr("");
              }}
              required
            />
            <button className="absolute top-[14px] right-3">
              {showPassword ? (
                <BiHide
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <IoEyeOutline
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              )}
            </button>
          </div>
        </div>
        <div
          className="text-right mb-2 text-orange-600 cursor-pointer"
          onClick={() => {
            navigate("/forgot-password");
          }}
        >
          Forgot your password?
        </div>

        <button
          className="mb-4 w-full font-semibold  transition duration-200 justify-center border py-2 rounded cursor-pointer items-center bg-orange-600 border-orange-600 text-white hover:bg-[#e64323]"
          onClick={LoginHandler}
        >
          Log In
        </button>
        <button
          className="w-full bg-gray-100 hover:cursor-pointer hover:bg-gray-200 transition duration-200 justify-center items-center flex gap-2 border-[1px] py-2 rounded"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="size-5" />
          <span>Sign up with Google</span>
        </button>
        {err && <p className="text-red-600 mt-2 text-center">{`* ${err}`}</p>}
        <p className="mt-4  text-center">
          Create an account ?{" "}
          <Link to={"/register"} className="text-orange-600 cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
