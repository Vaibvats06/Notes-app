import React from "react";

const ExploreCard = ({note}) => {
  return (
    
    <div className=" border px-4">
      <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
      <p className="text-gray-700">{note.content}</p>
    </div>
    
  );
};

export default ExploreCard;
