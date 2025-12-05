import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { BiHide } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import axios from "axios";

const ForgotPassword = () => {
    const [step,setStep]=React.useState(1)
    const [email,setEmail]=React.useState("");
    const navigate=useNavigate();
    const [otp, setOtp] = React.useState("");
    const [newPassword,setNewPassword]=React.useState("")
    const [showNewPassword,setShowNewPassword]=React.useState(false)
    const [confirmPassword,setConfirmPassword]=React.useState("")
    const [showConfirmPassword,setShowConfirmPassword]=React.useState(false)
    const [passwordMatch,setPasswordMatch]=React.useState(false)
    const [err,setErr]=useState()

    const sendOtpHandler=async()=>{
        // API call to send OTP to email
        try {
          const response=await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/forgot-password/send-otp`,{email},{withCredentials:true});
          setErr(response.data.message);
          setStep(2);
        }catch(error){
            setErr(error.response.data.message);
        }
    }

     const verifyOtpHandler=async()=>{
        // API call to send OTP to email
        try {
          const response=await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/forgot-password/verify-otp`,{email, otp},{withCredentials:true});
          setErr(response.data.message);
            setStep(3);
        }catch(error){
            setErr(error.response.data.message);
        }
    }


    const changePasswordHandler=async()=>{
        // API call to send OTP to email
        try {
            if(newPassword!==confirmPassword){
                setPasswordMatch(true);
                return;
            }
          const response=await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/forgot-password/change-password`,{email, newPassword},{withCredentials:true});
          setErr(response.data.message);
            navigate('/login');

        }catch(error){
            setErr(error.response.data.message);
        }
    }


  return (
    <div className="bg-[#fff9f6] min-h-screen w-full flex justify-center items-center p-8">
      <div className="w-full p-8 rounded-xl shadow-lg max-w-md bg-white h-2/3 border-[1px] border-gray-200">
        <div className="flex gap-4 items-center mb-4">
          <IoArrowBack onClick={() => navigate('/login')} className="text-orange-600" />
          <h1 className="text-xl font-bold text-orange-600 ">
            Forgot Password
          </h1>
        </div>
        {/* if step 1 show*/}

        {step===1 &&
        <div>
        <div className=" mb-6 ">
          <label
            htmlFor="email"
            className="mb-2 block text-gray-600 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="px-3 py-2 w-full focus:outline-none focus:border-orange-500 border border-gray-200 rounded"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        {err&&<p className="text-center mb-2 text-red-600">{`* ${err}`}</p>}
        <button className='mb-4 w-full font-semibold  transition duration-200 justify-center border py-2 rounded cursor-pointer items-center bg-orange-600 border-orange-600 text-white hover:bg-[#e64323]' 
        onClick={sendOtpHandler}
        >Sent OTP</button>
        </div>
        }

        {/* if step 2 show*/}

        {step===2 &&
        <div>
        <div className=" mb-6 ">
          <label
            htmlFor="otp"
            className="mb-2 block text-gray-600 font-medium"
          >
            OTP
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your otp here"
            className="px-3 py-2 w-full focus:outline-none focus:border-orange-500 border border-gray-200 rounded"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />
        </div>
        <button className='mb-4 w-full font-semibold  transition duration-200 justify-center border py-2 rounded cursor-pointer items-center bg-orange-600 border-orange-600 text-white hover:bg-[#e64323]' 
        onClick={verifyOtpHandler}
        >Verify OTP</button>
        </div>
        }

         {/* if step 3 show*/}


         {step===3 &&
        <div>
        <div className=' mb-6 '>
                <label htmlFor="password" className='mb-2 block text-gray-700 font-medium'>New Password</label>
                <div className='relative'>
                <input type={showNewPassword?'text':'password'} name="Password" id="Password" placeholder='Enter your Password' className='px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded tracking-wide' onChange={(e)=>{setNewPassword(e.target.value)}}/>
                <button className='absolute top-[14px] right-3'>{showNewPassword?<BiHide onClick={()=>{setShowNewPassword(false)}}/>:<IoEyeOutline onClick={()=>{setShowNewPassword(true)}}/>}</button>
                </div>
              </div>

             <div className=' mb-6 '>
                <label htmlFor="password" className='mb-2 block text-gray-700 font-medium'>Confirm New Password</label>
                <div className='relative'>
                <input type={showConfirmPassword?'text':'password'} name="Password" id="Password" placeholder='Enter your Password' className='px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded tracking-wide' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                {passwordMatch && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match</p>)}
                <button className='absolute top-[14px] right-3'>{showConfirmPassword?<BiHide onClick={()=>{setShowConfirmPassword(false)}}/>:<IoEyeOutline onClick={()=>{setShowConfirmPassword(true)}}/>}</button>
                </div>
              </div> 
        <button className='mb-4 w-full font-semibold  transition duration-200 justify-center border py-2 rounded cursor-pointer items-center bg-orange-600 border-orange-600 text-white hover:bg-[#e64323]' 
        onClick={changePasswordHandler}
        >Change Password</button>
        </div>
        }








      </div>
    </div>
  );
};

export default ForgotPassword;
