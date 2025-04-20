'use client';

import { useEffect, useState } from 'react';

export default function CategoriesPage() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    const res = await fetch('/api/categories');
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      setName('');
      fetchCategories();
    } else {
      const { error } = await res.json();
      alert(error);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Movie Categories</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 flex-1"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? 'Adding...' : 'Add'}
        </button>
      </form>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat._id} className="border p-2 rounded">
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
