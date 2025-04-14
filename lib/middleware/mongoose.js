import mongoose from 'mongoose';


const url = process.env.MONGO_URI;
if (!url) {  // In production mode, connect normally without global caching
  throw new Error("Mongo URI not available");
}

let clientPromise;

if (process.env.NODE_ENV === 'development') {

  if (!global._mongooseClientPromise) {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("MongoDB connected");
    }).catch((err) => {
      console.log("Error connecting to MongoDB:", err);
    });
    global._mongooseClientPromise = mongoose.connection;
  }
  clientPromise = global._mongooseClientPromise;
} else {
  clientPromise = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connected");
  }).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
}

export default clientPromise;