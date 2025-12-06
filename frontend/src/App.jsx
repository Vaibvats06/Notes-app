import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/authPages/Login.jsx";
import Register from "./pages/authPages/Register.jsx";
import ForgotPassword from "./pages/authPages/ForgotPassword.jsx";
import UploadNotes from "./pages/UploadNotes";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyNotes from "./pages/myLibrary/MyNotes.jsx";
import MyUploadNotes from "./pages/myLibrary/MyUploadNotes.jsx";

const App = () => {
  const userData = useSelector((state) => state.user.userData); // Replace with actual user data retrieval logic
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/upload-notes"
          element={!userData ? <Login /> : <UploadNotes />}
        />

        <Route
          path="/login"
          element={!userData ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!userData ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* My Library Routes */}
        <Route path="/my-library/mynotes" element={userData && <MyNotes />} />
        <Route path="/my-library/myuploadnotes" element={<MyUploadNotes />} />
      </Routes>

      {/* Toast notification container */}

      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default App;
