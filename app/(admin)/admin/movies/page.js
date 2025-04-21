'use client'
import React, { useEffect, useState } from 'react'
import useMovieStore from '@/store/movieStore'
import useCategoryStore from '@/store/categoryStore'
import useCastStore from '@/store/castStore'
import useGenreStore from '@/store/genreStore'
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText, Chip, Input } from '@mui/material'

const MoviesPage = () => {
  const {
    movies,
    addMovie,
    searchQuery,
    setSearchQuery,
    fetchMovies
  } = useMovieStore()
  const { categories, getCategory } = useCategoryStore()
  const { cast, getCast } = useCastStore()
  const { genres, getGenre } = useGenreStore()
  const [showDialog, setShowDialog] = useState(false)
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    releaseDate: '',
    genres: [],
    language: '',
    duration: '',
    posterUrl: '',
    trailerUrl: '',
    cast: [],
    director: '',
    averageRating: '',
    categoryId: '',
  })

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }

  const handleAddMovie = () => {
    const movieToAdd = {
      ...newMovie,
      genreIds: newMovie.genres,
      castIds: newMovie.cast,
      categoryId: newMovie.categoryId,
      duration: parseInt(newMovie.duration),
      averageRating: parseFloat(newMovie.averageRating),
    }

    addMovie(movieToAdd)
    fetchMovies()
    setShowDialog(false)
    setNewMovie({
      title: '',
      description: '',
      releaseDate: '',
      genres: [],
      language: '',
      duration: '',
      posterUrl: '',
      trailerUrl: '',
      cast: [],
      director: '',
      averageRating: '',
      categoryId: '',
    })
  }

  useEffect(() => {
    fetchMovies()
    getCategory()
    getCast()
    getGenre()
  }, [])
  console.log(movies);
  
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">🎬 All Movies</h1>
        <div className="flex gap-2">
          <TextField
            label="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            className='border border-gray-700'
          />
          <Button variant="outlined" onClick={() => setShowDialog(true)}>
            Add Movie
          </Button>
        </div>
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <div key={movie._id} className="rounded-xl shadow-md overflow-hidden p-4 space-y-2">
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{movie.description}</p>
              <div className="text-xs text-gray-500">🎬 {movie.language} | 🕒 {movie.duration} mins</div>
              <div className="text-xs text-gray-500">📅 {new Date(movie.releaseDate).toLocaleDateString()}</div>
              <div className="flex flex-wrap gap-1 text-xs">
                {movie.genres?.map((genreId) => {
                  const genre = genres.find((g) => g._id === genreId)
                  return genre ? (
                    <span key={genreId} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      {genre.name}
                    </span>
                  ) : null
                })}
              </div>
              <div className="text-xs text-gray-600">
                Cast: {movie.cast?.map((castId) => {
                  const castMember = cast.find((c) => c._id === castId)
                  return castMember ? castMember.name : ''
                }).join(', ')}
              </div>
            </div>
          ))}
      </div>


      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Add New Movie</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Title"
              name="title"
              margin="dense"
              value={newMovie.title}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              margin="dense"
              value={newMovie.description}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              name="releaseDate"
              type="date"
              value={newMovie.releaseDate}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Language"
              name="language"
              value={newMovie.language}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Duration (mins)"
              name="duration"
              type="number"
              value={newMovie.duration}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Poster URL"
              name="posterUrl"
              value={newMovie.posterUrl}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Trailer URL"
              name="trailerUrl"
              value={newMovie.trailerUrl}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Director"
              name="director"
              value={newMovie.director}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Avg Rating"
              name="averageRating"
              type="number"
              value={newMovie.averageRating}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />

            {/* Category Dropdown */}
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={newMovie.categoryId}
                onChange={(e) => setNewMovie({ ...newMovie, categoryId: e.target.value })}
                label="Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Genre Multi-select Dropdown */}
            <FormControl fullWidth>
              <InputLabel>Genres</InputLabel>
              <Select
                multiple
                label="Genres"
                value={newMovie.genres}
                onChange={(e) => setNewMovie({ ...newMovie, genres: e.target.value })}
                renderValue={(selected) => (
                  <div className="flex flex-wrap gap-2">
                    {selected.map((value) => {
                      const genre = genres.find((g) => g._id === value)
                      return genre ? <Chip key={value} label={genre.name} /> : null
                    })}
                  </div>
                )}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre._id} value={genre._id}>
                    <Checkbox checked={newMovie.genres.indexOf(genre._id) > -1} />
                    <ListItemText primary={genre.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Cast Multi-select Dropdown */}
            <FormControl fullWidth>
              <InputLabel>Cast</InputLabel>
              <Select
                multiple
                value={newMovie.cast}
                label="cast"
                onChange={(e) => setNewMovie({ ...newMovie, cast: e.target.value })}
                renderValue={(selected) => (
                  <div className="flex flex-wrap gap-2">
                    {selected.map((value) => {
                      const castMember = cast.find((c) => c._id === value)
                      return castMember ? <Chip key={value} label={castMember.name} /> : null
                    })}
                  </div>
                )}
              >
                {cast.map((castMember) => (
                  <MenuItem key={castMember._id} value={castMember._id}>
                    <Checkbox checked={newMovie.cast.indexOf(castMember._id) > -1} />
                    <ListItemText primary={castMember.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddMovie} color="primary">
            Add Movie
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MoviesPage
