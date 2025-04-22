// app/api/movies/[id]/route.js
import connectDB from '@/lib/middleware/mongoose';
import Movie from '@/models/Movie';
import { auth } from '@clerk/nextjs/server'

export async function GET(req, { params }) {
  const { userId } = await auth()
  
  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }
  await connectDB();
  const movie = await Movie.findById(params.id);
  return Response.json(movie);
}

export async function PUT(req, { params }) {
  const { userId } = await auth()
  
  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }
  await connectDB();
  const body = await req.json();
  const updatedMovie = await Movie.findByIdAndUpdate(params.id, body, { new: true });
  return Response.json(updatedMovie);
}

export async function DELETE(req, { params }) {
  const { userId } = await auth()
  
  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }
  await connectDB();
  await Movie.findByIdAndDelete(params.id);
  return Response.json({ message: 'Movie deleted' });
}