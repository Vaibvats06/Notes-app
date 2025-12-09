import React from 'react'
import DashboardNavbar from '../../components/DashboardNavbar'
import useNotesFetch from '../../hooks/useNotesFetch'
import useGetCurrentUser from '../../hooks/useGetCurrentUser'
import { useSelector } from 'react-redux'
import ExploreCardLibrary from '../../components/myLibraryComponent/ExploreCardLibrary'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


const MyUploadNotes = () => {
  useNotesFetch();
  useGetCurrentUser()
  const notes=useSelector((state)=>state.notes.notesData)
  const navigate=useNavigate();
  const userId=useSelector((state)=>state.user.userData?._id)
  const myNotes=notes.filter((item)=>item.userID===userId)

  
  return (
    <div>
        <DashboardNavbar />
        <div className='pt-[58px] flex flex-col'>
          <div className=' p-5 flex items-center'>
            <span className='px-2'><FaArrowLeftLong size={15} className='text-gray-400 cursor-pointer'
            onClick={()=>{navigate('/')}}
            /></span>
            <h1 className=' font-semibold text-xl text-gray-500'>My Notes</h1>
          </div>
          
          <div className='mx-10'>
            {!myNotes?(<p className="text-center text-gray-400 pt-10">
                  No notes available. Start by creating a new note!
                </p>)
            :
            <div className="grid grid-cols-3 gap-8">
              {myNotes.map((item)=>
                (<div >
                  <ExploreCardLibrary note={item}/>
                </div>))}
            
            </div>
}
          </div>
        </div>
    </div>
  )
}

export default MyUploadNotes