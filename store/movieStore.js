import axios from 'axios'
import { create } from 'zustand'


const useMovieStore = create((set) => ({
  movies: [],
  searchQuery: '',

  setMovies: (movies) => set({ movies }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  fetchMovies: async () => {
    try {
      const res = await axios.get('/api/movies')
      set({ movies: res.data })
    } catch (error) {
      console.error('Failed to fetch movies:', error)
    }
  },

  addMovie: async (movieData) => {
    try {
      const res = await axios.post('/api/movies', movieData)
      set((state) => ({ movies: [...state.movies, res.data] }))
    } catch (error) {
      console.error('Failed to add movie:', error)
    }
  },

  updateMovie: async (movieId, updatedData) => {
    try {
      const res = await axios.put(`/api/movies/${movieId}`, updatedData)
      const updatedMovie = res.data
      set((state) => ({
        movies: state.movies.map((movie) =>
          movie._id === updatedMovie._id ? updatedMovie : movie
        ),
      }))
    } catch (error) {
      console.error('Failed to update movie:', error)
    }
  },

  deleteMovie: async (movieId) => {
    try {
      await axios.delete(`/api/movies/${movieId}`)
      set((state) => ({
        movies: state.movies.filter((movie) => movie._id !== movieId),
      }))
    } catch (error) {
      console.error('Failed to delete movie:', error)
    }
  },
}))

export default useMovieStore