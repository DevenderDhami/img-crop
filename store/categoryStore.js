import { create } from 'zustand'

const useCategoryStore = create((set) => ({
  categories: ['Action', 'Comedy', 'Drama'],
  addCategory: (name) =>
    set((state) => ({
      categories: [...state.categories, name],
    })),
  search: '',
  setSearch: (search) => set({ search }),
}))

export default useCategoryStore
