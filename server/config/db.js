import mongoose from 'mongoose';

/**
 * Connect to MongoDB Database
 * Reads connection string from environment variables.
 */
export const connectDB = async () => {
  try {
    const connString = process.env.MONGODB_URI;
    if (!connString) {
      throw new Error('MONGODB_URI is not defined in environment variables.');
    }
    
    const conn = await mongoose.connect(connString);
    console.log(`\n=========================================`);
    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
    console.log(`📁 Database Name: ${conn.connection.name}`);
    console.log(`=========================================\n`);
  } catch (error) {
    console.error(`\n❌ Database connection failure: ${error.message}`);
    console.error(`⚠️  Server is running in OFFLINE database mode. Configure a valid MONGODB_URI in server/.env to resolve.\n`);
  }
};
