'use client'
import React, { useState } from 'react'
import useMovieStore from '@/store/movieStore'

const MoviesPage = () => {
  const {
    movies,
    addMovie,
    searchQuery,
    setSearchQuery
  } = useMovieStore()

  const [showDialog, setShowDialog] = useState(false)
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    releaseDate: '',
    genres: '',
    language: '',
    duration: '',
    posterUrl: '',
    trailerUrl: '',
    cast: '',
    director: '',
    averageRating: '',
  })

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }

  const handleAddMovie = () => {
    const movieToAdd = {
      ...newMovie,
      genres: newMovie.genres.split(',').map((g) => g.trim()),
      cast: newMovie.cast.split(',').map((c) => c.trim()),
      duration: parseInt(newMovie.duration),
      averageRating: parseFloat(newMovie.averageRating),
    }

    addMovie(movieToAdd)
    setShowDialog(false)
    setNewMovie({
      title: '',
      description: '',
      releaseDate: '',
      genres: '',
      language: '',
      duration: '',
      posterUrl: '',
      trailerUrl: '',
      cast: '',
      director: '',
      averageRating: '',
    })
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">🎬 All Movies</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <button
            className="border dark:bg-gray-800 px-6 py-1 rounded"
            onClick={() => setShowDialog(true)}
          >
            Add Movie
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.map((movie) => (
          <div key={movie._id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p className="text-sm text-gray-500">
              Genres: {movie.genres.join(', ')}
            </p>
            <p className="text-sm text-gray-500">Language: {movie.language}</p>
          </div>
        ))}
      </div>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Movie</h2>
            <div className="grid grid-cols-1 gap-2">
              {[
                'title',
                'description',
                'releaseDate',
                'genres',
                'language',
                'duration',
                'posterUrl',
                'trailerUrl',
                'cast',
                'director',
                'averageRating',
              ].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  value={newMovie[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="border p-2 rounded"
                />
              ))}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMovie}
                  className="border dark:bg-gray-800 px-6 py-2 rounded"
                >
                  Add Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MoviesPage
