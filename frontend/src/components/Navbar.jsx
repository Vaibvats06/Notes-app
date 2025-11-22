import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate(); 
  return (
    <div className="navbar bg-base-100 shadow-sm flex items-center justify-between ">

    <div><a className="btn btn-ghost text-xl">Intelligence Learning</a></div>
    <div className='lg:ml-96'><input type="text" placeholder="Search" className="lg:w-96 border-2 border-white p-1 rounded" /></div>
    <div className='border px-2 py-0.5 rounded shadow-xl hover:translate-y-px  cursor-pointer' onClick={() => navigate("/upload-notes")}>Upload Notes</div>
 
</div>
  )
}

export default Navbar