import express from 'express';
import { uploadNotes } from '../controllers/notes.controller.js';
import multer from 'multer'

const router = express.Router();
const upload=multer({storage:multer.memoryStorage()})


router.post('/upload-notes',upload.single('file'), uploadNotes);


export default router;