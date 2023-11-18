import { useEffect, useState } from 'react';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../utils/webStorage';

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(() => {
    const storedTheme = getLocalStorage({ key: 'theme' });
    return storedTheme ?? false;
  });

  useEffect(() => {
    if (localStorage.theme === 'true') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode) {
      removeLocalStorage({ key: 'theme' });
      setDarkMode(false);
    } else {
      setLocalStorage<boolean>({ key: 'theme', value: true });
      setDarkMode(true);
    }
  };

  return {
    toggle: toggleTheme,
  };
}
