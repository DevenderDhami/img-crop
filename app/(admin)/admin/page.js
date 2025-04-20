'use client'
import React from 'react'
import useMovieStore from '@/store/movieStore'
import useGenreStore from '@/store/genreStore'
import useCategoryStore from '@/store/categoryStore'
import useCastStore from '@/store/castStore'

const DashboardPage = () => {
  const movies = useMovieStore((state) => state.movies)
  const genres = useGenreStore((state) => state.genres)
  const categories = useCategoryStore((state) => state.categories)
  const cast = useCastStore((state) => state.cast)

  const stats = [
    { label: 'Total Movies', value: movies.length, color: 'bg-blue-600' },
    { label: 'Genres', value: genres.length, color: 'bg-green-600' },
    { label: 'Categories', value: categories.length, color: 'bg-orange-500' },
    { label: 'Cast Members', value: cast.length, color: 'bg-purple-600' },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded shadow-md border`}
          >
            <h2 className="text-xl font-semibold">{item.label}</h2>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
