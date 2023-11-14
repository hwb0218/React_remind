import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../context/ThemeContext';

function ProductDetail() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      ProductDetail
      <p>{`Theme: ${theme}`}</p>
      <button type="button" onClick={handleToggleTheme}>toggle</button>
    </div>
  );
}

export default function AppTheme() {
  return (
    <ThemeProvider>
      <ProductDetail />
    </ThemeProvider>
  );
}
