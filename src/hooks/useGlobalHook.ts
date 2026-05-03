import { useEffect, useState } from 'react';

export function useGlobalHook() {
  const [isDark, setIsDark] = useState<boolean>(
    () => (localStorage.getItem('theme') || 'dark') === 'dark',
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      return;
    }

    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return {
    isDark,
    toggleTheme,
  };
}
