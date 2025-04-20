'use client'
import React, { useState } from 'react'
import useCategoryStore from '@/store/categoryStore'

const CategoriesPage = () => {
  const { categories, addCategory, search, setSearch } = useCategoryStore()
  const [name, setName] = useState('')
  const [showDialog, setShowDialog] = useState(false)

  const filtered = categories.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = () => {
    if (name) {
      addCategory(name)
      setName('')
      setShowDialog(false)
    }
  }

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">📂 Categories</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button
            className="dark:bg-gray-800 px-6 py-1 rounded"
            onClick={() => setShowDialog(true)}
          >
            Add
          </button>
        </div>
      </div>

      <ul className="space-y-2">
        {filtered.map((category, idx) => (
          <li key={idx} className="border p-2 rounded">
            {category}
          </li>
        ))}
      </ul>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-6 rounded w-full max-w-md">
            <h2 className="text-xl mb-4 font-bold">Add Category</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Category Name"
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="border px-4 py-1 rounded"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="border dark:bg-gray-800 px-6 py-1 rounded"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoriesPage
