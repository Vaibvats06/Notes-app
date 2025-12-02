import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUserData } from '../redux/userSlice';

const useGetCurrentUser = async() => {
   const dispatch = useDispatch();
   useEffect(() => {
   const fetchUser=async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/find/user`, {withCredentials:true});
      dispatch(setUserData(response.data));
    } catch (error) {
      console.error("Error fetching notes:", error);
    }   
}
fetchUser();
}, []);

}

export default useGetCurrentUser;