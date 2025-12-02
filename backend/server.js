// import app and connectDB
import connectDB from "./src/config/db.js";
import app from "./src/app.js";

//import PORT from .env
const PORT = process.env.PORT||9000;

// this is a database connnection 
connectDB().then(()=>{
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
})
