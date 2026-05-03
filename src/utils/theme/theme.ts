// theme.ts
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#ff7a6b' : '#ed6958',
      },
      text: {
        primary: mode === 'dark' ? '#e0e0e0' : '#0E2431',
        secondary: mode === 'dark' ? '#a0a0a0' : '#6c757d',
      },
      background: {
        default: mode === 'dark' ? '#1a1a2e' : '#ffffff',
        paper: mode === 'dark' ? '#16213e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
