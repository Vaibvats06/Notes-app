  import React, { use } from 'react'
  import { useNavigate } from 'react-router-dom'
  import {useSelector,useDispatch} from 'react-redux'
  import useGetCurrentUser from '../hooks/useGetCurrentUser'
  import { setUserData } from '../redux/userSlice.js';
  import axios from 'axios';

  const Navbar = () => {
    const user=useSelector((state)=>state.user.userData); 
    const navigate = useNavigate(); 
    const dispatch=useDispatch();
    const [showLibrary,setShowLibrary]=React.useState(false);
    //Signout Handler
    const handleSignOut = async() => {
      await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`, { withCredentials: true })
      navigate('/');
      dispatch(setUserData(null));
    };
    //toggle My Library
    const toggleLibrary=()=>{
      setShowLibrary(prev=>!prev);

    }

    return (
      <div className="flex lg:px-10 lg:py-3 py-3 px-2 md:px-5 justify-between 
border border-gray-300 items-center shadow-md fixed top-0 left-0 right-0  
bg-white z-999 overflow-visible">
      <div><a className="font-bold text-xl text-green-600" href='/'>NotesGP<span className='text-orange-600 '>T</span></a></div>
      
      {/* register or login and then upload notes */}
      <div className='flex gap-4 items-center'>
        {user &&  <div className='relative'>
          <div className='border px-2 py-1 rounded text-center justify-center shadow-md border-[#c0c6d0] cursor-pointer text-white bg-[#c7ccd7]' onClick={toggleLibrary}>My Library</div>
          {showLibrary&&<div className='absolute top-10 -right-3 bg-white border border-gray-300 shadow-md rounded w-28 p-2 text-left z-1000 flex flex-col  gap-2 '>
            <p className='text-sm pb-2 cursor-pointer  border-gray-200 border-b' onClick={() => navigate("my-library/mynotes")}>My Notes</p>
            <p className='text-sm cursor-pointer' onClick={()=>{navigate("my-library/myUploadNotes")}}>Shared Notes</p>
          </div>}
        </div>
        }
        
      {user && <div className='border px-2 py-1 rounded text-center justify-center shadow-md hover:translate-y-px  border-[#185ce6] cursor-pointer text-white bg-[#185ce6]' onClick={() => navigate("/upload-notes")}>Upload Notes
        </div>}
      {user?<div className='border px-2 py-1 rounded text-center justify-center shadow-md hover:translate-y-px  border-orange-600 cursor-pointer text-white bg-orange-600' onClick={handleSignOut}>Logout</div>:
      <div className='border px-4 py-1 rounded-xl font-medium  text-xl text-center justify-center shadow-md hover:translate-y-px  border-[#16C47F] duration-300 cursor-pointer text-white bg-[#16C47F]' onClick={() => navigate("/login")}>Login</div>}
      </div>
  </div>
    )
  }

  export default Navbar