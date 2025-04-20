// app/api/movies/[id]/route.js
import connectDB from '@/lib/middleware/mongoose';
import Movie from '@/models/Movie';

export async function GET(req, { params }) {
  await connectDB();
  const movie = await Movie.findById(params.id);
  return Response.json(movie);
}

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  const updatedMovie = await Movie.findByIdAndUpdate(params.id, body, { new: true });
  return Response.json(updatedMovie);
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Movie.findByIdAndDelete(params.id);
  return Response.json({ message: 'Movie deleted' });
}
