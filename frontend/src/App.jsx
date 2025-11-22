import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { Route,Routes ,useLocation } from 'react-router-dom'
import FirstYearPage from './pages/FirstYearPage'
import Dashboard from './pages/Dashboard'
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
         <Route path="/dashboard/add/notes" element={<Dashboard/>} />
         <Route path="/year/1STYEAR/*" element={<NotesPdf/>} />
         <Route path="/upload-notes" element={<UploadNotes/>} />
      </Routes>
      
      <div><Toaster/></div>
    </div>
    </>
  )
}

export default App