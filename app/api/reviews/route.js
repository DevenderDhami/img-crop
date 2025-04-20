import connectDB from '@/lib/middleware/mongoose';
import Review from '@/models/Review';
import Movie from '@/models/Movie';
import { auth } from '@clerk/nextjs/server';

export async function POST(req) {
  const { userId } = auth();
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();

  const { movieId, rating, comment } = await req.json();

  if (!movieId || typeof rating !== 'number') {
    return Response.json({ error: 'Missing movieId or rating' }, { status: 400 });
  }

  // Create the review
  await Review.create({ movie: movieId, userId, rating, comment });

  // Recalculate average rating
  const agg = await Review.aggregate([
    { $match: { movie: new mongoose.Types.ObjectId(movieId) } },
    { $group: { _id: null, avgRating: { $avg: '$rating' } } }
  ]);

  const avgRating = agg[0]?.avgRating || 0;
  await Movie.findByIdAndUpdate(movieId, { averageRating: avgRating });

  return Response.json({ message: 'Review added successfully' });
}
