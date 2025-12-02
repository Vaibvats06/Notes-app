import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route,Routes ,useLocation } from 'react-router-dom'
import FirstYearPage from './pages/BTechYearPage/FirstYearPage'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import NotesPdf from './components/NotesPdf'
import UploadNotes from './pages/UploadNotes'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  const location =useLocation();
  const userData=useSelector((state) => state.user.userData); // Replace with actual user data retrieval logic
  // Hide navbar on dashboard routes
  const hideNavbar = ['/upload-notes', '/login' ,'/'].some(path => location.pathname.startsWith(path));
  return (<>
    {!hideNavbar && <Navbar />}
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/year/1STYEAR" element={<FirstYearPage />} />
        
         <Route path="/year/1STYEAR/*" element={<NotesPdf/>} />
         <Route path="/upload-notes" element={!userData?<Login/>:<UploadNotes/>} />
         <Route path="/year/4THYEAR/*" element={<NotesPdf/>} />
     
        <Route path="/login" element={!userData?<Login />:<Navigate to="/" />} />
         <Route path="/register" element={!userData?<Register />:<Navigate to="/" />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
      
      <div><Toaster/></div>
    </div>
    </>
  )
}

export default App