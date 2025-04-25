import axios from 'axios'
import { create } from 'zustand'
import toast from 'react-hot-toast'
import useGlobalStore from '@/store/globalStore'

const { setLoading } = useGlobalStore.getState()
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
      setLoading(true)
      const res = await axios.post('/api/category', { name });
      toast.success('Added successfully!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      set((state) => ({
        categories: [...state.categories, res.data],
      }));
    } catch (error) {
      toast.error('Failed to add.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        },
      })
      console.error('Error adding category:', error.response?.data || error.message);
    }finally{
      setLoading(false)
    }
  },
  editCategory: async (id) => {
    const toastId = toast.loading('Deleting category...',{style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },})
    try {
      const res = await axios.put(`/api/category/${id}`)
      set((state) => ({
        categories: state.categories.map(category =>
          category._id === id ? res.data.updatedCategory : category
        ),
      }))
      toast.success('Updated successfully!', {
        id: toastId,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      },)
    } catch (error) {
      toast.error('Failed to update.', {
        id: toastId,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        },
      })
      console.error('Error updating', error.response?.data || error.message);
    }
  },
  deleteCategory: async (id) => {
    const toastId = toast.loading('Deleting category...',{style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },})
    try {
      const res = await axios.delete(`/api/category/${id}`)
      set((state) => ({
        categories: state.categories.filter(category => category._id !== id),
      }))
      toast.success('Delete successfully!', {
        id: toastId,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      },)
    } catch (error) {
      toast.error('Failed to delete.', {
        id: toastId,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        },
      })
      console.error('Error deleting', error.response?.data || error.message);
    }
  }
}));

export default useCategoryStore;