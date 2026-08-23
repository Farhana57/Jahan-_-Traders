const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Database Connection with SRV String
async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://farhana5253:JahantradersAnisuzzaman317@cluster0.aqlxqdi.mongodb.net/jahan_traders?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Detailed Database Connection Error:', error.message);
  }
}

connectDB();

// Test Route
app.get('/', (req, res) => {
  res.send('Jahan Traders Backend is running...');
});

// Contact POST Route (নতুন কন্টাক্ট বা মেসেজ ডাটাবেজে সেভ করার জন্য)
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ 
        success: true, 
        message: 'Contact saved successfully!',
        data: newContact 
    });
  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message: 'Failed to save contact', 
        error: error.message 
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});