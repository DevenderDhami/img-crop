import connectDB from '@/lib/middleware/mongoose';
import Category from '@/models/Category';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';

const objectIdSchema = z
  .string()
  .refine((val) => /^[a-f\d]{24}$/i.test(val), {
    message: 'Invalid ObjectId format',
  });

const categorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
});

export async function PUT(req, { params }) {
  const { userId } = await auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  await connectDB();

  try {
    objectIdSchema.parse(params.id);

    const body = await req.json();

    categorySchema.parse(body);

    const updatedCategory = await Category.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!updatedCategory) {
      return new Response('Category not found', { status: 404 });
    }

    return Response.json(updatedCategory);
  } catch (error) {
    console.error('Error updating category:', error);
    return new Response(error.message || 'Failed to update category', { status: 400 });
  }
}

export async function DELETE(req, { params }) {
  const { userId } = await auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  await connectDB();

  try {
    objectIdSchema.parse(params.id);

    const deletedCategory = await Category.findByIdAndDelete(params.id);

    if (!deletedCategory) {
      return new Response('Category not found', { status: 404 });
    }

    return Response.json({ message: 'Category deleted' });
  } catch (error) {
    console.error('Error deleting category:', error);
    return new Response(error.message || 'Failed to delete category', { status: 400 });
  }
}
