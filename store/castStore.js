import axios from 'axios'
import { create } from 'zustand'

const useCastStore = create((set) => ({
  cast: [],
  search: '',
  getCast: async () => {
    try {
      const response = await axios.get('/api/cast');
      set({ cast: response.data })
    } catch (error) {
      console.error('Failed to fetch cast:', error.response?.data || error.message);
    }
  },
  addCast: async (name) => {
    try {
      const res = await axios.post('/api/cast', { name });
      set((state) => ({
        cast: [...state.cast, res.data],
      }));
    } catch (error) {
      console.error('Error adding cast:', error.response?.data || error.message);
    }
  },
}));

export default useCastStore;