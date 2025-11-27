import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setNotesData } from '../redux/notesSlice';

const useNotesFetch = () => {
   const dispatch = useDispatch();
   useEffect(() => {
   const fetchNotes=async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/notes/fetch-notes`, {withCredentials:true});
      dispatch(setNotesData(response.data.notes));
    } catch (error) {
      console.error("Error fetching notes:", error);
    }   
}
fetchNotes();
}, []);

}

export default useNotesFetch;