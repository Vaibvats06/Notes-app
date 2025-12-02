import express from 'express'
const routes=express.Router();
import {register,login,logout,forgotPassword,verifyOtp, resetPassword,googleAuth} from '../controllers/auth.controller.js';
import isauth from '../middlewares/isauth.js';


routes.post('/register',register)
routes.post('/login',login)
routes.get('/logout',logout)
routes.post('/forgot-password/send-otp',forgotPassword)
routes.post('/forgot-password/verify-otp',verifyOtp)
routes.post('/forgot-password/change-password',resetPassword)
routes.post('/google',googleAuth)






export default routes;