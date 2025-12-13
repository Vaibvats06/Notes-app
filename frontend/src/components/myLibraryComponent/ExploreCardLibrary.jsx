import React, { useState } from "react";
import { MdDownload } from "react-icons/md";
import axios from 'axios'

const ExploreCard = ({ note }) => {
  // const [stepFirst,setStepFirst]=useState(1)
  async function handleDelete(noteId){
    const result=await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/notes/delete`,{noteId})
    window.location.reload();
    console.log(result)
    // setStepFirst(2);
    // console.log(stepFirst)

  }
  
  return (
    <div className="flex flex-col   ">
      <div>
        <div className="  px-4 h-45 border-t-2 border-purple-200 rounded-t-2xl bg-linear-360 from bg-purple-100 to-red-200   items-center text-center justify-center flex flex-col ">
        <h2 className="text-xl font-semibold">{note.courseName}</h2>
        <p className="text-gray-700  ">{note.subject}</p>
      </div>
      <div className="h-10 bg-red-50  rounded-b-2xl border-red-100 border-b-2 flex items-center justify-between">
        <button type="button" className="mx-2 px-2 rounded-lg border border-gray-400 bg-green-400 text-white hover:text-orange-600 transition-colors duration-200  cursor-pointer" onClick={(e)=>{handleDelete(note._id)}}>Delete</button>
        <div className="flex pr-2">
          <a href={note.url} target="_blank" className="text-gray-500 cursor-pointer "
          ><MdDownload size={25}/>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ExploreCard;
