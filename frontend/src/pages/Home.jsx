import React from 'react'
import Navbar from '../components/Navbar'
import useGetCurrentUser from '../hooks/useGetCurrentUser';

const Home = () => {
  useGetCurrentUser(); 
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className="w-full h-[85%]  bg-[#452829]">
        <p>hello</p>
      </div>
      <div className='w-full h-screen text-black'>
        <h1 >Welcome to NotesGPT</h1>
      </div>
    </div>
  )
}

export default Home