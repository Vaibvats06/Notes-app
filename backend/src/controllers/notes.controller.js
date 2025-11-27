import Notes from '../models/notes.js';
import { v4 as uuid } from 'uuid';
import { fileUpload } from '../utlis/StorageService.js';
export async function uploadNotes(req, res) {
    try {
        const {chapterName, subject, department, courseName, year, semester,file} = req.body;
        console.log(chapterName);
        console.log(req.file);
        const result=await fileUpload(req.file.buffer,uuid())
        const notesData = await Notes.create({
            chapterName,
            subject,
            department,
            courseName,
            year,
            semester,
            url: result.url
        });
        res.status(201).json({ message: 'Notes uploaded successfully', notes: notesData });

        
    } catch (error) {
        console.error('Error uploading notes:', error);
        
    }
}

export async function fetchNotes(req, res) {
    try {
        console.log("fetch notes called");
        const notes = await Notes.find({});
        res.status(200).json({ notes });
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}