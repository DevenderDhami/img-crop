import axios from 'axios'
import { create } from 'zustand'

const useCategoryStore = create((set) => ({
  categories: [],
  search: '',
  getCategory: async () => {
    try {
      const response = await axios.get('/api/category');
      set({ categories: response.data })
    } catch (error) {
      console.error('Failed to fetch categories:', error.response?.data || error.message);
    }
  },
  addCategory: async (name) => {
    try {
      const res = await axios.post('/api/category', { name });
      set((state) => ({
        categories: [...state.categories, res.data],
      }));
    } catch (error) {
      console.error('Error adding category:', error.response?.data || error.message);
    }
  },
}));

export default useCategoryStore;