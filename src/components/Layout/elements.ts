import { Box, styled } from '@mui/material';

export const LayoutContainer = styled(Box)({
  /* ── spacing & typography ─────────────── */
  '--header-height': '3rem',
  '--font-semi': '600',
  '--big-font-size': '2rem',
  '--h2-font-size': '1.25rem',
  '--normal-font-size': '0.938rem',
  '--mb-1': '0.5rem',
  '--mb-2': '1rem',
  '--mb-3': '1.5rem',
  '--mb-4': '2rem',
  '--mb-5': '2.5rem',
  '--mb-6': '3rem',
  '--z-fixed': 100,

  /* ── light theme (default) ───────────── */
  '--first-color': '#d4503f',
  '--bg': '#f4f4f5',
  '--bg-panel': '#ffffff',
  '--bg-card': 'rgba(0,0,0,0.04)',
  '--border': 'rgba(0,0,0,0.1)',
  '--border-strong': 'rgba(0,0,0,0.18)',
  '--text-primary': '#0f0f0f',
  '--text-secondary': '#3a3a3a',
  '--text-muted': '#6b6b6b',
  '--text-faint': '#9a9a9a',
  '--panel-divider': 'rgba(0,0,0,0.09)',
  '--right-panel-bg': '#1c1c1e',
  '--footer-bg': '#f0f0f1',
  '--shadow-color': 'rgba(0,0,0,0.1)',
  '--shadow-hover': 'rgba(212,80,63,0.2)',
  '--skeleton-bg': 'rgba(0,0,0,0.08)',

  /* ── legacy aliases ──────────────────── */
  '--body-color': 'var(--bg)',
  '--container-color': 'var(--bg-panel)',
  '--text-color': 'var(--text-primary)',
  '--text-color-light': 'var(--text-muted)',

  minHeight: '100vh',
  width: '100%',
  backgroundColor: 'var(--bg)',
  color: 'var(--text-primary)',
  transition: 'background-color 0.25s ease, color 0.25s ease',

  /* ── dark theme ──────────────────────── */
  '[data-theme="dark"] &': {
    '--bg': '#000000',
    '--bg-panel': '#000000',
    '--bg-card': 'rgba(255,255,255,0.03)',
    '--border': 'rgba(255,255,255,0.07)',
    '--border-strong': 'rgba(255,255,255,0.14)',
    '--text-primary': '#e0e0e0',
    '--text-secondary': 'rgba(255,255,255,0.6)',
    '--text-muted': 'rgba(255,255,255,0.4)',
    '--text-faint': 'rgba(255,255,255,0.25)',
    '--panel-divider': 'rgba(255,255,255,0.06)',
    '--right-panel-bg': '#000000',
    '--footer-bg': '#000000',
    '--shadow-color': 'rgba(0,0,0,0.5)',
    '--shadow-hover': 'rgba(237,105,88,0.25)',
    '--skeleton-bg': 'rgba(255,255,255,0.07)',
  },

  '@media screen and (min-width: 768px)': {
    '--big-font-size': '3.5rem',
    '--h2-font-size': '2rem',
    '--normal-font-size': '1rem',
  },
  overflowX: 'hidden',
});
