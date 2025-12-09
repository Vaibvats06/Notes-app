import React from "react";
import { MdDownload } from "react-icons/md";

const ExploreCard = ({ note }) => {
  
  return (
    <div className="flex flex-col   ">
      <div className="  px-4 h-45 border-t-2 border-purple-200 rounded-t-2xl bg-linear-360 from bg-purple-100 to-red-200   items-center text-center justify-center flex flex-col ">
        <h2 className="text-xl font-semibold">{note.courseName}</h2>
        <p className="text-gray-700  ">{note.subject}</p>
      </div>
      <div className="h-10 bg-red-50  rounded-b-2xl border-red-100 border-b-2  ">
        <button onClick={}>Delete</button>
        <div className="flex justify-end px-2  py-1.5  items-center">
          <a href={note.url} target="_blank" className=""><MdDownload
            size={25}
            className="text-gray-500 cursor-pointer"
          /></a>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
