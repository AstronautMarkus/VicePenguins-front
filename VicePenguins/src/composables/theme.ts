import { ref, provide, inject } from 'vue';

const THEME_KEY = 'theme_preference';

export function useThemeProvider() {
  const theme = ref(localStorage.getItem(THEME_KEY) || 'light');

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value);
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, theme.value);
    applyTheme();
  };

  applyTheme();

  provide('theme', theme);
  provide('toggleTheme', toggleTheme);

  return { theme, toggleTheme };
}

export function useThemeConsumer() {
  const theme = inject('theme', ref('light'));
  const toggleTheme = inject('toggleTheme', () => {});

  return { theme, toggleTheme };
}
