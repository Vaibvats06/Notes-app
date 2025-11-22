import React from 'react'
import { useNavigate } from 'react-router-dom'

const YearCard = ({data}) => {
  const navigate= useNavigate()

  const handler=(e)=>{
    const formatted = data.title.replace(/\s+/g, ""); 
    
    navigate(`/year/${formatted}`);
  };

  
  return (
<div className="card bg-base-100 w-80 shadow-sm cursor-pointer" onClick={handler}>
  <div className="card-body">
    <h2 className="card-title">{`${data.title}`}</h2>
    <p>{`${data.content}`}</p>
  </div>
  <figure>
    <img
      src={data.images}
      alt="Shoes" />
  </figure>
</div>
  )
}

export default YearCard



// "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"