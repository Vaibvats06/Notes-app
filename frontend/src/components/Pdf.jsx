import React from 'react'
import { GoFileSubmodule } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
const Pdf = () => {
  return (
    <div className='text-base-100  mx-2 lg:mx-5 lg:w-full pt-5'>
        <div className='bg-white'>
            <div className='flex justify-between items-center py-2 pl-2 lg:pl-5 font-semibold text-slate-500 cursor-pointer'>
                <div className='flex gap-3 lg:gap-10'>
                    <h1 className=''><GoFileSubmodule className='text-yellow-300 text-3xl' /></h1>
                <h1>UNIT-1</h1>
                <h1 className='uppercase'>Nuclear Atom and its components</h1>
                <h1>25kB</h1>
                <h1><HiDotsVertical /></h1>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Pdf