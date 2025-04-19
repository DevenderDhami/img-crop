// lib/mongodb.js
import mongoose from 'mongoose';

const url = process.env.MONGO_URI;

if (!url) {
  throw new Error("Mongo URI not available");
}

const connectDB = async () => {
  if (mongoose.connections[0].readyState === 0) {
    try {
      await mongoose.connect(url, {
        dbName: 'your-db-name', // optional
      });
      console.log("MongoDB connected");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      throw err;
    }
  }
};

export default connectDB;
