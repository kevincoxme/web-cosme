import { Box, styled } from '@mui/material';

export const MobileTabBar = styled(Box)({
  display: 'none',
  '@media screen and (max-width: 768px)': {
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(10,10,10,0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '0.4rem 0 calc(0.4rem + env(safe-area-inset-bottom))',
  },
});

export const MobileTabBtn = styled('button', {
  shouldForwardProp: (p) => p !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: '0.35rem 0',
  color: active ? '#ed6958' : 'rgba(255,255,255,0.4)',
  transition: 'color 0.2s ease',
  '& svg': { fontSize: '1.2rem' },
  '&:active': { transform: 'scale(0.92)' },
}));

export const MobileTabLabel = styled('span')({
  fontSize: '0.6rem',
  fontWeight: 600,
  letterSpacing: '0.02em',
  lineHeight: 1,
});

export const MobileNavSpacer = styled(Box)({
  display: 'none',
  '@media screen and (max-width: 768px)': {
    display: 'block',
    height: '64px',
    flexShrink: 0,
  },
});
