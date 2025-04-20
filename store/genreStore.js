import { create } from 'zustand'

const useGenreStore = create((set) => ({
  genres: ['Action', 'Horror', 'Romance'],
  addGenre: (name) =>
    set((state) => ({
      genres: [...state.genres, name],
    })),
  search: '',
  setSearch: (search) => set({ search }),
}))

export default useGenreStore
