import axios from 'axios'
import { create } from 'zustand'

const useGenreStore = create((set) => ({
  genres: [],
  search: '',
  getGenre: async () => {
    try {
      const response = await axios.get('/api/genre');
      set({ genres: response.data })
    } catch (error) {
      console.error('Failed to fetch genre:', error.response?.data || error.message);
    }
  },
  addGenre: async (name) => {
    try {
      const res = await axios.post('/api/genre', { name });
      set((state) => ({
        genres: [...state.genres, res.data],
      }));
    } catch (error) {
      console.error('Error adding category:', error.response?.data || error.message);
    }
  },
}));

export default useGenreStore;