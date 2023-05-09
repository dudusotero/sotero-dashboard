import { create } from 'zustand'

interface ShopMenuState {
  opened: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export default create<ShopMenuState>((set) => ({
  opened: false,
  open: () => set({ opened: true }),
  close: () => set({ opened: false }),
  toggle: () => set((state) => ({ opened: !state.opened })),
}))
