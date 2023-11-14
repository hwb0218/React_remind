import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
}

type ThemeContext = {
  theme: boolean;
  handleToggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export function ThemeProvider(
  { children }: ThemeProviderProps,
) {
  const [theme, setTheme] = useState(false);

  const handleToggleTheme = useCallback(() => {
    setTheme((prevTheme) => !prevTheme);
  }, []);

  const value = useMemo(() => ({ theme, handleToggleTheme }), [theme, handleToggleTheme]);

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}
