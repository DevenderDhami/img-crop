import connectDB from '@/lib/middleware/mongoose';
import Cast from '@/models/Cast';

export async function GET() {
  await connectDB();
  const Casts = await Cast.find();
  return Response.json(Casts);
}

export async function POST(req) {
  await connectDB();
  const { name } = await req.json();
  if (!name) return Response.json({ error: 'Name is required' }, { status: 400 });

  try {
    const newCast = await Cast.create({ name });
    return Response.json(newCast, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
