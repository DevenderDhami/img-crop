import connectDB from '@/lib/middleware/mongoose';
import Movie from '@/models/Movie';
import { auth } from '@clerk/nextjs/server'

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const genre = searchParams.get('genre');
  const language = searchParams.get('language');
  const minRating = parseFloat(searchParams.get('minRating')) || 0;

  const filter = {};
  if (genre) filter.genres = genre;
  if (language) filter.language = language;
  if (minRating) filter.averageRating = { $gte: minRating };

  const movies = await Movie.find(filter).sort({ releaseDate: -1 });
  return Response.json(movies);
}

export async function POST(req) {
  const { userId } = await auth()
  
  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }
  await connectDB();
  const body = await req.json();

  const newMovie = await Movie.create(body);
  return Response.json(newMovie, { status: 201 });
}
