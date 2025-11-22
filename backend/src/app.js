import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// import routes
import notesRoutes from './routes/notes.route.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:'http://localhost:5173',
        credentials:true    

    }
));

// notes routes
app.use('/api/notes', notesRoutes);

export default app;