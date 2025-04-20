import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseDate: Date,
  genres: [String], 
  language: String, 
  duration: Number, 
  posterUrl: String,
  trailerUrl: String,
  cast: [String], 
  director: String,
  averageRating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema);
