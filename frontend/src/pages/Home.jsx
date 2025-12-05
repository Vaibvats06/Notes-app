import React from "react";
import Navbar from "../components/Navbar";
import useGetCurrentUser from "../hooks/useGetCurrentUser";
import Search from "../components/Search";
const Home = () => {
  useGetCurrentUser();
  return (
    <div>
      <Navbar />

      {/* add spacing so content doesn't hide behind navbar */}
      <div className="pt-[58px] w-full">
        {/* hero background */}
        <div className="w-full h-[85vh] bg-[#C2E2FA] flex items-center justify-center gap-4">
          <div className="w-1/2 h-full flex flex-col items-start justify-center px-20">
            <p className="text-5xl font-bold mb-4 text-yellow-100">
              Welcome in NotesGPT
            </p>
            <h1 className="text-3xl font-bold mb-4 tracking-wide text-[#9da58b]">
              Share and Manage Your Notes Effortlessly with AI-Powered
              Assistance
            </h1>
          </div>
          <div className="w-1/2 flex items-center justify-center h-full clip-curve bg-green-500 ">
            <img
              src="../visual-hp.svg"
              alt="hero_images"
              className="rounded-2xl   relative"
            />
          </div>
          {/* add hero content here later */}
        </div>

        {/* below section */}
        <div className="w-full h-screen bg-[#E3E3E3] text-black">
          <div className="w-full h-full flex flex-col items-center pt-20 px-20 gap-6">
            <p className="text-4xl font-bold mb-4 text-gray-600">
              Organize Your Notes Seamlessly
            </p>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
