import React from 'react'
import DashboardNavbar from '../../components/DashboardNavbar'

const MyNotes = () => {
  return (
    <div>
        <DashboardNavbar />
        <div className='pt-16 flex justify-center items-center'>
            <h1 className='text-xl font-bold mx-4 my-2 text-gray-500'>My Notes</h1>
        </div>
    </div>
  )
}

export default MyNotes