import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Contact from './models/Contact.js';

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON body parser
app.use(cors());
app.use(express.json());

// Establish Database Connection
connectDB();

// Test Health Endpoint
app.get('/', (req, res) => {
  res.json({ status: 'running', service: 'Arfico MERN API', timestamp: new Date() });
});

// POST Route to Verify Admin Passcode
app.post('/api/admin/login', (req, res) => {
  const { passcode } = req.body;
  const correctPasscode = process.env.ADMIN_PASSCODE || 'admin123';

  if (passcode === correctPasscode) {
    return res.status(200).json({
      success: true,
      message: 'Authentication successful.'
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Access Denied. Invalid Admin Passcode.'
    });
  }
});

// POST Route to Process Contact Inquiries
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Check if database is connected
  if (mongoose.connection.readyState !== 1) {
    console.warn(`⚠️  [DATABASE OFFLINE]: Submission rejected. MONGODB_URI connection is not active.`);
    return res.status(503).json({
      success: false,
      message: 'Database connection is currently offline. Please configure your MONGODB_URI in server/.env with your MongoDB Atlas cluster URI string.'
    });
  }

  try {
    // 1. Instantiate the Mongoose Contact model with request body parameters
    const newContactInquiry = new Contact({
      name,
      email,
      subject,
      message
    });

    // 2. Save inquiry to MongoDB Atlas database
    const savedInquiry = await newContactInquiry.save();

    console.log(`\n📬 [NEW INQUIRY RECEIVED]`);
    console.log(`👤 Name: ${savedInquiry.name}`);
    console.log(`📧 Email: ${savedInquiry.email}`);
    console.log(`📂 Area: ${savedInquiry.subject}`);
    console.log(`ID: ${savedInquiry._id}\n`);

    // 3. Respond with 201 Created and payload confirmation
    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been stored successfully.',
      data: {
        id: savedInquiry._id,
        name: savedInquiry.name,
        email: savedInquiry.email
      }
    });
  } catch (error) {
    // Catch Mongoose schema validation errors
    if (error.name === 'ValidationError') {
      const errorMessages = Object.values(error.errors).map((err) => err.message);
      console.warn(`⚠️  [VALIDATION REJECTION]: ${errorMessages.join(' | ')}`);
      return res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors: errorMessages
      });
    }

    // Catch database connection or server-side write failures
    console.error(`❌ [SERVER ROUTE EXCEPTION]: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Database transmission failed.'
    });
  }
});

// GET Route to Retrieve All Contact Inquiries
app.get('/api/contact', async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: 'Database connection is currently offline.'
    });
  }

  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: inquiries
    });
  } catch (error) {
    console.error(`❌ [SERVER GET EXCEPTION]: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Failed to retrieve inquiries.'
    });
  }
});

// DELETE Route to Remove a Contact Inquiry
app.delete('/api/contact/:id', async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: 'Database connection is currently offline.'
    });
  }

  try {
    const deletedInquiry = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedInquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found.'
      });
    }
    console.log(`🗑️  [INQUIRY DELETED] ID: ${req.params.id}`);
    return res.status(200).json({
      success: true,
      message: 'Inquiry deleted successfully.'
    });
  } catch (error) {
    console.error(`❌ [SERVER DELETE EXCEPTION]: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Failed to delete inquiry.'
    });
  }
});

// App Listener
app.listen(PORT, () => {
  console.log(`🟢 Arfico Express Server is running on port ${PORT}`);
  console.log(`🔗 API Endpoint: http://localhost:${PORT}/api/contact`);
});
