import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 0, max: 10, required: true },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
