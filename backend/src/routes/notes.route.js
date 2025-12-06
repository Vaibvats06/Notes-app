import express from 'express';
import { uploadNotes,fetchNotes } from '../controllers/notes.controller.js';
import multer from 'multer'
import isauth from '../middlewares/isauth.js';

const router = express.Router();
const upload=multer({storage:multer.memoryStorage()})


router.post('/upload-notes',upload.single('file'), isauth, uploadNotes);
router.get('/fetch-notes', fetchNotes);

export default router;