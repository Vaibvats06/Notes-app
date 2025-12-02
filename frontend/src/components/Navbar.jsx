import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import useGetCurrentUser from '../hooks/useGetCurrentUser'
import axios from 'axios';

const Navbar = () => {
  const user=useSelector((state)=>state.user.userData); 
  console.log(user); // Replace with actual user data retrieval logic
  const navigate = useNavigate(); 

  const handleSignOut = async() => {
    // Add sign-out logic here (e.g., clear auth tokens, update state)
    await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`, { withCredentials: true })
    navigate('/');
     // Redirect to home or login page after sign-out
  };


  return (
    <div className="flex lg:px-10 lg:py-3 py-3 justify-between border border-gray-300 items-center shadow-md fixed top-0 left-0 right-0 bg-white z-80 overflow-hidden">
    <div><a className="font-bold text-xl text-green-600" href='/'>NotesGP<span className='text-orange-600 '>T</span></a></div>
    <div className='w-md hidden md:block'><input type="search" placeholder="Search best notes here..." className="w-full px-2 border text-lg font-normal tracking-wide border-gray-400 outline-0  p-1 rounded" /></div>
    <div className='flex gap-4 items-center'>
    {user ?<div className='border px-2 py-1 rounded text-center justify-center shadow-md hover:translate-y-px  border-[#185ce6] cursor-pointer text-white bg-[#185ce6]' onClick={() => navigate("/upload-notes")}>Upload Notes</div> :<div className='border px-2 py-1 rounded shadow-md hover:translate-y-px  border-orange-600 cursor-pointer text-white bg-orange-600' onClick={() => navigate("/register")}>Register</div>}
    {user?<div className='border px-2 py-1 rounded text-center justify-center shadow-md hover:translate-y-px  border-orange-600 cursor-pointer text-white bg-orange-600' onClick={handleSignOut}>Logout</div>:
    <div className='border px-2 py-1 rounded text-center justify-center shadow-md hover:translate-y-px  border-orange-600 cursor-pointer text-white bg-orange-600' onClick={() => navigate("/login")}>Login</div>}
    </div>
</div>
  )
}

export default Navbar