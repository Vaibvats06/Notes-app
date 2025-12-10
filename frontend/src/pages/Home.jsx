import React, { useState } from "react";
import Navbar from "../components/Navbar";
import useGetCurrentUser from "../hooks/useGetCurrentUser";
import Search from "../components/Search";
import { data } from "../tempDB/NotesData";
import ExploreCard from "../components/ExploreCard";
import { useSelector } from "react-redux";
import useNotesFetch from "../hooks/useNotesFetch";
import { useEffect } from "react";


const Home = () => {
  useGetCurrentUser();
  useNotesFetch();  
  const user=useSelector((state)=>state.user.userData)
  const notes=useSelector((state)=>state.notes.notesData)
  console.log(notes)
  const userId=useSelector((state)=>state.user.userData?._id)
  const myNotes=notes.filter((item)=>item.userID===userId)
  
  const [userNotes,setUserNotes]=useState(data)
  
    
  
  
  return (
    <div>

      {/*Navbar*/}
      <Navbar />
      
      <div className="pt-[58px] w-full">
        {/* Hero Container */}
        <div className="w-full h-[85vh] bg-[#C2E2FA] flex items-center justify-center gap-4">
        
          {/* left side container */}
          <div className="w-1/2 h-full flex flex-col items-start justify-center px-20">
            <p className="text-5xl font-bold mb-4 text-yellow-100">
              Welcome in NotesGPT
            </p>
            <h1 className="text-3xl font-bold mb-4 tracking-wide text-[#9da58b]">
              Share and Manage Your Notes Effortlessly with AI-Powered
              Assistance
            </h1>
          </div>

          {/* right side container with image */}
          <div className="w-1/2 flex items-center justify-center h-full clip-curve bg-green-500 ">
            <img
              src="../visual-hp.svg"
              alt="hero_images"
              className="rounded-2xl   relative"
            />
          </div>

        </div>

        {/* below hero section */}
        <div className="w-full h-screen bg-[#E3E3E3] ">

          {/* Organise and search*/}
          <div className="w-full h-1/3 flex flex-col items-center pt-20 px-20 gap-6">
            <p className="text-4xl font-bold mb-4 text-gray-600">
              Organize Your Notes Seamlessly
            </p>
            <Search />
          </div>

          {/* Explore */}
          <div className="w-full h-2/3 flex flex-col">
            <h1 className="my-5 font-bold text-3xl text-gray-500 ml-30">Explore</h1>
            {/* notes grid */}
            <div className="mx-30 bg-[#EFE9E3] h-[55%] max-h-[55%] overflow-auto rounded-2xl">
              {/* notes will be displayed here */}
              {user === null ? (
                <p className="text-center text-gray-400 pt-10">
                  No notes available. Start by creating a new note!
                </p>
              ) : (
                // Render notes here
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mx-5 mt-5  h-full">
                  {myNotes?.map((note) => (
                    <ExploreCard key={note.id}  note={note} />
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
