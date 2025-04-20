import { create } from 'zustand'

const useCastStore = create((set) => ({
  cast: ['Shah Rukh Khan', 'Tom Hanks', 'Emma Watson'],
  addCast: (name) =>
    set((state) => ({
      cast: [...state.cast, name],
    })),
  search: '',
  setSearch: (search) => set({ search }),
}))

export default useCastStore
