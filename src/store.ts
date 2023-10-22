import { create } from 'zustand';

interface ThemeStore {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()((set) => ({
  isDarkTheme: false,
  toggleTheme: () => {
    set((store) => ({
      isDarkTheme: !store.isDarkTheme,
    }));
  },
}));

export default useThemeStore;
