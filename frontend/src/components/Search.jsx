import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    const [search, setSearch] = React.useState("");
  return (
    <div className="lg:w-3/5  rounded-md  border border-gray-400 flex bg-gray-200 ">
        <div className='py-2 px-2'><IoIosSearch size={25} className='text-gray-400' /></div>
    <input type="text" name="" id="" className='w-full h-full py-2 outline-0' onChange={(e)=>{setSearch(e.target.value)}} />
    {search && search.length > 0 && (<div className='absolute bg-white mt-12 shadow-lg rounded-md max-h-60 overflow-y-auto lg:w-3/5'>
        {/* map through search results */}
        <p className='p-4 border-b lg:w-3/5  border-gray-300'>Search result 1 for "{search}"</p>
        <p className='p-4 border-b border-gray-300'>Search result 2 for "{search}"</p>
        <p className='p-4 border-b border-gray-300'>Search result 3 for "{search}"</p>
        <p className='p-4 border-b border-gray-300'>Search result 4 for "{search}"</p>
        <p className='p-4 border-b border-gray-300'>Search result 5 for "{search}"</p>
    </div>
    )}
    </div>
  )
}

export default Search