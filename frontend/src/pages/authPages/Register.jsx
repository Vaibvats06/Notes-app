import React, { useState } from 'react'
import { BiHide } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setNotesData } from '../../redux/notesSlice.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Register = () => {  
  const navigate=useNavigate()
  const [fullName,setFullName]=useState()
  const [email,setEmail]=useState()
  const [mobileNumber,setMobileNumber]=useState()
  const [password,setPassword]=useState()
  const [showPassword,setShowPassword]=useState(false)
  const [err,setErr]=useState()
  const dispatch=useDispatch()
const SignupHandler=async()=>{
  try {
    const registerResponse = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/register`,{fullName,email,password,mobileNumber},{withCredentials:true})
    if(registerResponse.status===201){
      toast.success("Registered Successfully!")
    }
    console.log(registerResponse);
    dispatch(setNotesData(registerResponse.data));
    setErr(registerResponse.data.message)
    navigate("/");
  } catch (error) {
    setErr(error.response.data.message)
  }
}

  return (
    <div className='bg-[#fff9f6] min-h-screen w-full flex justify-center items-center p-4 '>
      <div className='w-full p-8 rounded-xl shadow-lg max-w-md bg-white h-2/3 border border-gray-200'>
        <h1 className='text-3xl font-bold mb-2 text-green-600 '>
          NotesGP<span className="text-orange-600">T</span> 
        </h1>
        <p className='text-gray-800 mb-8'>Create your account to get started with all the features!</p>
        <div className=' mb-4 '>
        <label htmlFor="fullName" className='mb-2 block text-gray-700 font-medium'>Full Name</label>
        <input type="text" name="fullName" id="fullName" placeholder='Enter your Full Name' className='px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded' onChange={(e)=>{setFullName(e.target.value)}}/>
      </div>

      <div className=' mb-4 '>
        <label htmlFor="email" className='mb-2 block text-gray-700 font-medium'>Email</label>
        <input type="email" name="email" id="email" placeholder='Enter your Email' className='px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded' onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>

      <div className=' mb-4 '>
        <label htmlFor="mobileNumber" className='mb-2 block text-gray-700 font-medium'>Mobile</label>
        <input type="text" name="mobileNumber" id="mobileNumber" placeholder='Enter your Mobile Number' className='px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded' onChange={(e)=>{setMobileNumber(e.target.value)}}/>
      </div>

      <div className=' mb-4 '>
        <label htmlFor="password" className='mb-2 block text-gray-700 font-medium'>Password</label>
        <div className='relative'>
        <input type={showPassword?'text':'password'} name="Password" id="Password" placeholder='Enter your Password' className='px-3 py-2 w-full focus:outline-none focus:border-orange-500 border rounded tracking-wide' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className='absolute top-[14px] right-3'>{showPassword?<BiHide onClick={()=>{setShowPassword(false)}}/>:<IoEyeOutline onClick={()=>{setShowPassword(true)}}/>}</button>
        </div>
      </div>


      
      

      <button className='mb-4 w-full font-semibold  transition duration-200 justify-center border py-2 rounded cursor-pointer items-center bg-orange-600 border-orange-600 text-white hover:bg-[#e64323]' onClick={SignupHandler}>Sign Up</button>
      <button className='w-full bg-gray-100 hover:cursor-pointer hover:bg-gray-200 transition duration-200 justify-center items-center flex gap-2 border-[1px] py-2 rounded'>
        <FcGoogle className='size-5'/>
        <span>Sign up with Google</span>
      </button>
      {err && <p className='text-center mt-1 text-red-600'>{`* ${err}`}</p>}
      <p className='mt-6  text-center'>Already have an account ? <Link to={"/login"} className='text-orange-600 cursor-pointer'>Sign in</Link></p>

      </div>
    </div>
  )
}

export default Register