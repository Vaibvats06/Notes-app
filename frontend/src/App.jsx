import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { Route,Routes ,useLocation } from 'react-router-dom'
import FirstYearPage from './pages/BTechYearPage/FirstYearPage'

import NotesPdf from './components/NotesPdf'
import UploadNotes from './pages/UploadNotes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const location =useLocation();
  // Hide navbar on dashboard routes
  const hideNavbar = location.pathname.startsWith('/dashboard');
  return (<>
    {!hideNavbar && <Navbar />}
    <div>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/year/1STYEAR" element={<FirstYearPage />} />
        
         <Route path="/year/1STYEAR/*" element={<NotesPdf/>} />
         <Route path="/upload-notes" element={<UploadNotes/>} />
         <Route path="/year/4THYEAR/*" element={<NotesPdf/>} />
      </Routes>
      
      <div><Toaster/></div>
    </div>
    </>
  )
}

export default App