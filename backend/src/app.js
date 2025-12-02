import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// import routes for notes
import notesRoutes from './routes/notes.route.js';

// import routes for auth
import authRoutes from './routes/auth.route.js';

// import routes for user
import userRoutes from './routes/user.route.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:'http://localhost:5173',
        credentials:true    

    }
));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// notes routes
app.use('/api/notes', notesRoutes);
// auth routes
app.use('/api/auth', authRoutes);
// user routes
app.use('/api/find', userRoutes);

export default app;