import { create } from 'zustand';

const useNavbarStore = create((set) => ({
  isOpen: false, // Estado inicial cerrado
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNavbarStore;
