// app/page.tsx (or app/home/page.tsx if you're nesting)
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 3600 // ⏰ Revalidate every 1 hour

const getMovies = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movies`)
    return res.data
}


const MovieDetailPage = async ({ params }) => {
    const { id } = params
    const movies = await getMovies()
    const MovieById = movies?.find(m => m._id === id)
    return (
        <main className="container mx-auto ">
            <div className="flex flex-row">
                <div key={MovieById?._id} className="w-full px-0 py-12 md:px-20">
                    <Image
                        src={MovieById?.posterUrl}
                        alt={MovieById?.title}
                        height={400}
                        width={400}
                        className="w-full  h-auto object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">{MovieById?.title}</h2>
                        <p className="text-sm text-gray-600 line-clamp-2">{MovieById?.description}</p>
                        <p className="text-xs text-gray-500 mt-1">📅 {new Date(MovieById?.releaseDate).toLocaleDateString()}</p>
                        <p className="text-xs text-gray-500">🕒 {MovieById?.duration} mins</p>
                    </div>
                </div>

                <div className="hidden md:flex flex-col related w-1/3">
                    <h2 className="font-bold text-center pt-3 sticky top-0  z-10">
                        Related Movies
                    </h2>
                    <div className="h-[77vh] overflow-y-auto">
                        <div className="grid grid-cols-1 gap-4 ">
                            {movies.map((movie) => (
                                <Link
                                    href={`/movie/${movie?._id}`}
                                    key={movie._id}
                                    className="rounded-lg shadow-md overflow-hidden border hover:cursor-pointer"
                                >
                                    <Image
                                        src={movie.posterUrl || '/default-image.jpg'} // Fallback image if posterUrl is missing
                                        alt={movie.title}
                                        height={200}
                                        width={200}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                                        <p className="text-xs text-gray-600 line-clamp-2">{movie.description}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            📅 {new Date(movie.releaseDate).toLocaleDateString()}
                                        </p>
                                        <p className="text-xs text-gray-500">🕒 {movie.duration} mins</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MovieDetailPage
