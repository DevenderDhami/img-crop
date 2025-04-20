'use client'
import React, { useState } from 'react'
import useGenreStore from '@/store/genreStore'

const GenresPage = () => {
  const { genres, addGenre, search, setSearch } = useGenreStore()
  const [name, setName] = useState('')
  const [showDialog, setShowDialog] = useState(false)

  const filtered = genres.filter((g) =>
    g.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = () => {
    if (name) {
      addGenre(name)
      setName('')
      setShowDialog(false)
    }
  }

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">🎭 Genres</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button
            className="px-6 py-1 border rounded"
            onClick={() => setShowDialog(true)}
          >
            Add
          </button>
        </div>
      </div>

      <ul className="space-y-2">
        {filtered.map((genre, idx) => (
          <li key={idx} className="border p-2 rounded">
            {genre}
          </li>
        ))}
      </ul>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-6 rounded w-full max-w-md">
            <h2 className="text-xl mb-4 font-bold">Add Genre</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Genre Name"
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded"
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

export default GenresPage
