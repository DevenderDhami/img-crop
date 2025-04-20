// models/Cast.js
import mongoose from 'mongoose';

const castSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photoUrl: String,
  bio: String,
  dob: Date,
});

export default mongoose.models.Cast || mongoose.model('Cast', castSchema);
