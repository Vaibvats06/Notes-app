import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    chapterName: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    courseName:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    semester:{
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unqiue:false
    }
}, 
{ timestamps: true }

);

const notes=mongoose.model("notes",notesSchema);

export default notes;