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

const corsOptions = {
  origin: 'https://codebyharsh.vercel.app', // Allow this domain to access your backend
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type'], // Allow specific headers
};

// Use the CORS middleware with the defined options
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send("Hello, Backend is running .............");
});

// Routes
app.use("/api", contactRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
