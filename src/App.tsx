import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import { queryClient } from '@/lib/queryClient';
import { router } from '@/routes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './utils';
import { useGlobalHook } from './hooks/useGlobalHook';

export function App() {
  const { isDark } = useGlobalHook();
  return (
    <ThemeProvider theme={getTheme(isDark ? 'dark' : 'light')}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
