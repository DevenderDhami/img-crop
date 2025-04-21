'use client'
import React, { useEffect, useState } from 'react'
import useCastStore from '@/store/castStore'

const CastPage = () => {
  const { cast, addCast, search, setSearch, getCast } = useCastStore()
  const [name, setName] = useState('')
  const [showDialog, setShowDialog] = useState(false)

  const filtered = cast.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = () => {
    if (name) {
      addCast(name)
      getCast()
      setName('')
      setShowDialog(false)
    }
  }

  useEffect(() => {
    getCast()
  }, [])
  

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">🎬 Cast</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button
            className="border px-6 dark:bg-gray-800 py-1 rounded"
            onClick={() => setShowDialog(true)}
          >
            Add
          </button>
        </div>
      </div>

      <ul className="space-y-2">
        {filtered.map((member, idx) => (
          <li key={idx} className="border p-2 rounded">
            {member.name}
          </li>
        ))}
      </ul>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-6 rounded w-full max-w-md">
            <h2 className="text-xl mb-4 font-bold">Add Cast Member</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Cast Name"
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 border py-1 rounded"
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

export default CastPage
