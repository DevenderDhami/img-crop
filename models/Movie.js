// models/Movie.js
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Date,
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
  language: String,
  duration: Number,
  posterUrl: String,
  trailerUrl: String,
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cast' }],
  director: String,
  averageRating: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, 
});

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema);
