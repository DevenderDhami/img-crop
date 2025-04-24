// app/page.tsx (or app/home/page.tsx if you're nesting)
import React from 'react'
import axios from 'axios'
import Link from 'next/link'

export const revalidate = 3600 // ⏰ Revalidate every 1 hour

const getMovies = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movies`)
  return res.data
}

const HomePage = async () => {
  const movies = await getMovies()

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link href={`/movie/${movie?._id}`} key={movie._id} className="rounded-lg shadow-md overflow-hidden border hover:cursor-pointer">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{movie.description}</p>
              <p className="text-xs text-gray-500 mt-1">📅 {new Date(movie.releaseDate).toLocaleDateString()}</p>
              <p className="text-xs text-gray-500">🕒 {movie.duration} mins</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default HomePage
