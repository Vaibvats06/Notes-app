import React from 'react'
import DashboardNavbar from '../../components/DashboardNavbar'
import useNotesFetch from '../../hooks/useNotesFetch'
import useGetCurrentUser from '../../hooks/useGetCurrentUser'
import { useSelector } from 'react-redux'

const MyUploadNotes = () => {
  useNotesFetch();
  useGetCurrentUser()
  const notes=useSelector((state)=>state.notes.notesData)
  
  const userId=useSelector((state)=>state.user.userData?._id)
  const myNotes=notes.filter((item)=>item.userID===userId)

  
  return (
    <div>
        <DashboardNavbar />
        <div className='pt-[58px] flex flex-col'>
          <h1 className='p-5 font-semibold text-xl text-gray-500'>My Notes</h1>
          <div className='mx-10'>
            <div className="">
              {myNotes.map((item)=>
                (<div >
                  <p>{item.chapterName}</p>

                </div>))}

            </div>

          </div>
        </div>
    </div>
  )
}

export default MyUploadNotes