const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'https://your-vercel-app.vercel.app' }));

// Connect to MongoDB
connectDB();
app.get('/demo',(req,res)=>{
    res.send("Hello, Backend is running .............");
})
// Routes
app.use("/api", contactRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
