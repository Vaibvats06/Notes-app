import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setUserData} from '../redux/userSlice';

const DashboardNavbar = () => {
   // Replace with actual user data retrieval logic
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  //signOut handler
  const handleSignOut = async() => {
    // Add sign-out logic here (e.g., clear auth tokens, update state)
    await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`, { withCredentials: true })
    
    dispatch(setUserData(null));
    navigate('/');
     // Redirect to home or login page after sign-out
  };
  return (
    <div className="flex px-3 lg:px-10 lg:py-3 py-3 justify-between border border-gray-300 items-center shadow-md fixed top-0 left-0 right-0 bg-white z-80 overflow-hidden">
    <div><a className="font-bold text-xl text-green-600" href='/'>NotesGP<span className='text-orange-600 '>T</span></a></div>
    <div className='flex gap-4 items-center'>
    <div className='border px-2 py-1 rounded shadow-md hover:translate-y-px  border-orange-600 cursor-pointer text-white bg-orange-600' onClick={handleSignOut}>Logout</div>
    </div>
</div>
  )
}

export default DashboardNavbar