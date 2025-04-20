import connectDB from '@/lib/middleware/mongoose';
import Category from '@/models/Category';

export async function GET() {
  await connectDB();
  const categories = await Category.find();
  return Response.json(categories);
}

export async function POST(req) {
  await connectDB();
  const { name } = await req.json();
  if (!name) return Response.json({ error: 'Name is required' }, { status: 400 });

  try {
    const newCategory = await Category.create({ name });
    return Response.json(newCategory, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
