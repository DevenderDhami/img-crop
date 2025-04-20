// store/movieStore.js
import { create } from 'zustand'

const useMovieStore = create((set) => ({
  movies: [
    {
      _id: '1',
      title: 'Inception',
      description: 'A mind-bending thriller',
      releaseDate: '2010-07-16',
      genres: ['Sci-Fi', 'Thriller'],
      language: 'English',
      duration: 148,
      posterUrl: '',
      trailerUrl: '',
      cast: ['Leonardo DiCaprio'],
      director: 'Christopher Nolan',
      averageRating: 4.8,
    },
    // ... other mock movies
  ],
  addMovie: (movie) =>
    set((state) => ({
      movies: [...state.movies, { ...movie, _id: Date.now().toString() }],
    })),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}))

export default useMovieStore
