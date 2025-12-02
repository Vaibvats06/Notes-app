import express from 'express'
const routes=express.Router();
import {findUser} from '../controllers/user.controller.js';
import isauth from '../middlewares/isauth.js';

routes.get('/user',isauth, findUser)





export default routes;