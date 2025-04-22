// app/api/genre/route.js
import connectDB from '@/lib/middleware/mongoose';
import Genre from '@/models/Genre';
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  const { userId } = await auth()
  
    if (!userId) {
      return new Response('Unauthorized', { status: 401 })
    }
  await connectDB();
  try {
    const genres = await Genre.find();
    return Response.json(genres, { status: 200 });
  } catch (err) {
    return Response.json({ error: 'Failed to fetch genres' }, { status: 500 });
  }
}

export async function POST(req) {
  const { userId } = await auth()
  
    if (!userId) {
      return new Response('Unauthorized', { status: 401 })
    }
  await connectDB();

  try {
    const { name } = await req.json();

    if (!name) {
      return Response.json({ error: 'Name is required' }, { status: 400 });
    }

    const newGenre = await Genre.create({ name });
    return Response.json(newGenre, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
