'use client'
import React, { useEffect, useState } from 'react'
import useCategoryStore from '@/store/categoryStore'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const CategoriesPage = () => {
  const { categories, addCategory, search, setSearch, getCategory, deleteCategory } = useCategoryStore()
  const [name, setName] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [deleteDialog, setDeleteDialog] = useState({ state: false, id: "" })

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = () => {
    if (name) {
      addCategory(name)
      setName('')
      setShowDialog(false)
    }
  }
  

  const handleDelete = () => {
    deleteCategory(deleteDialog.id)
    setDeleteDialog({ state: false, id: '' })
  }


  useEffect(() => {
    getCategory()
  }, [])

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
        {filtered.map((category) => (
          <li key={category._id} className="border p-2 rounded flex justify-between items-center">
            <span>{category.name}</span>
            <div className="flex gap-4">
              <Edit className="cursor-pointer text-blue-900" onClick={() => handleEdit(category._id)} />
              <Delete className="cursor-pointer text-red-950" onClick={() => setDeleteDialog({
                state: true,
                id: category._id
              })} />
            </div>
          </li>
        ))}
      </ul>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="p-6 rounded w-full max-w-md border">
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
                className="border dark:bg-gray-950 px-6 py-1 rounded-md"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Dialog */}
      <Dialog open={deleteDialog.state} onClose={() => setDeleteDialog({ state: false, id: '' })} className='backdrop-blur-sm'>

        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>Are you sure you want to delete this stream?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ state: false, id: '' })} color="success">
            Cancel</Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CategoriesPage
