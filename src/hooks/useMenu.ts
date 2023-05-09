import { create } from 'zustand'

interface MenuState {
  opened: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export default create<MenuState>((set) => ({
  opened: false,
  open: () => set({ opened: true }),
  close: () => set({ opened: false }),
  toggle: () => set((state) => ({ opened: !state.opened })),
}))
