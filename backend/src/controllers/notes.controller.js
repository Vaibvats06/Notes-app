import Notes from '../models/notes.js';
import { v4 as uuid } from 'uuid';
import { fileUpload } from '../utils/StorageService.js';
export async function uploadNotes(req, res) {
    try {
        const {chapterName, subject, department, courseName, year, semester,file} = req.body;
        const userId=req.userId;
        const result=await fileUpload(req.file.buffer,uuid())
        const notesData = await Notes.create({
            chapterName,
            subject,
            department,
            courseName,
            year,
            semester,
            url: result.url,
            userID:userId
            
        });
        res.status(201).json({ message: 'Notes uploaded successfully', notes: notesData });

        
    } catch (error) {
        console.error('Error uploading notes:', error);
        
    }
}

export async function fetchNotes(req, res) {
    try {
        const notes = await Notes.find({});
        res.status(200).json({ notes });
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export async function deleteNote(req, res) {
    try {
    const {noteId}=req.body
        console.log(noteId);
        const NoteDelete=await Notes.deleteOne({_id:noteId})
        console.log(NoteDelete)
        res.status(204).json({"message":"Delete Successfully",NoteDelete });
    } catch (error) {
        console.error('Error delete notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
