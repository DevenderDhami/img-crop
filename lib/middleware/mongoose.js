import mongoose from 'mongoose';

const url = process.env.MONGO_URI;

if (!url) {
  throw new Error("Mongo URI not available");
}

// This function handles caching of the database connection in serverless environments
let clientPromise;

if (mongoose.connections[0].readyState === 0) {
  // If there is no connection, connect to the database
  clientPromise = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connected");
  }).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
} else {
  // If connection already exists, return the existing connection
  clientPromise = Promise.resolve(mongoose.connection);
}

export default clientPromise;
