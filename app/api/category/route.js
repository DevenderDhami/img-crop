import connectDB from '@/lib/middleware/mongoose';
import Category from '@/models/Category';
import { auth } from '@clerk/nextjs/server'
import { z } from 'zod';

const categorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
});


export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }
  await connectDB();
  const categories = await Category.find();
  return Response.json(categories);
}

export async function POST(req) {
  const { userId } = await auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  await connectDB();

  try {
    const body = await req.json();
    const parsed = categorySchema.safeParse(body);

    if (!parsed.success) {
      return Response.json({ error: parsed.error.errors[0].message }, { status: 400 });
    }

    const newCategory = await Category.create(parsed.data);
    return Response.json(newCategory, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
