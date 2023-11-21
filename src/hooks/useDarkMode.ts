import {
  useState, useCallback, useLayoutEffect,
} from 'react';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../utils/webStorage';

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(() => {
    const storedTheme = getLocalStorage({ key: 'theme' });
    return storedTheme ?? false;
  });

  useLayoutEffect(() => {
    if (localStorage.theme === 'true') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    if (isDarkMode) {
      removeLocalStorage({ key: 'theme' });
      setDarkMode(false);
    } else {
      setLocalStorage<boolean>({ key: 'theme', value: true });
      setDarkMode(true);
    }
  }, [isDarkMode]);

  return {
    toggle: toggleTheme,
  };
}
