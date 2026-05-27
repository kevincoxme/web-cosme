import { Box, Link, styled } from '@mui/material';

export const HeaderContainer = styled('header')({
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 'var(--z-fixed)',
  backgroundColor: 'var(--header-bg)',
  boxShadow: '0 2px 8px var(--shadow-color)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  '@media screen and (min-width: 769px)': {
    backdropFilter: 'blur(10px)',
  },
});

export const Grid = styled(Box)({
  maxWidth: '1024px',
  display: 'grid',
  gridTemplateColumns: '100%',
  columnGap: '2rem',
  width: 'calc(100% - 2rem)',
  marginLeft: 'var(--mb-2)',
  marginRight: 'var(--mb-2)',
  boxSizing: 'border-box',
  '@media screen and (max-width: 768px)': {
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  '@media screen and (min-width: 1024px)': {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export const Nav = styled('nav')({
  height: 'var(--header-height)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'var(--font-semi)',
  '@media screen and (min-width: 768px)': {
    height: 'calc(var(--header-height) + 1rem)',
  },
});

export const NavLogo = styled(Link)({
  color: 'var(--nav-link-color)',
  fontWeight: 700,
  transition: 'color 0.3s ease',
  '&:hover': { color: 'var(--first-color)' },
});

export const NavActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});

export const ThemeToggle = styled('button')({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.25rem',
  color: 'var(--nav-link-color)',
  padding: '0.5rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  width: '2.5rem',
  height: '2.5rem',
  '&:hover': {
    backgroundColor: 'var(--shadow-color)',
    transform: 'rotate(15deg) scale(1.1)',
  },
});

export const NavToggle = styled(Box)({
  color: 'var(--nav-link-color)',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': { transform: 'scale(1.1)' },
  '@media screen and (min-width: 768px)': { display: 'none' },
  display: 'flex',
});

export const NavMenu = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
  '@media screen and (max-width: 768px)': {
    position: 'fixed',
    top: 'var(--header-height)',
    right: open ? 0 : '-100%',
    width: '80%',
    height: 'calc(100vh - var(--header-height))',
    padding: '2rem',
    backgroundColor: 'var(--nav-menu-bg)',
    transition: '0.5s',
    boxShadow: '-2px 0 10px var(--shadow-color)',
    zIndex: 'var(--z-fixed)',
    overflowY: 'auto',
  },
  '@media screen and (max-width: 480px)': {
    width: '85%',
  },
}));

export const NavList = styled('ul')({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  '@media screen and (min-width: 768px)': {
    display: 'flex',
    paddingTop: 0,
  },
});

export const NavItem = styled('li')({
  marginBottom: 'var(--mb-4)',
  '@media screen and (min-width: 768px)': {
    marginLeft: 'var(--mb-6)',
    marginBottom: 0,
  },
});

export const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ isActive }) => ({
  position: 'relative',
  color: 'var(--nav-link-color-mobile)',
  transition: 'color 0.3s ease',
  '@media screen and (min-width: 768px)': { color: 'var(--nav-link-color)' },
  '&:hover::after': {
    position: 'absolute',
    content: '""',
    width: '100%',
    height: '0.18rem',
    left: 0,
    top: '2rem',
    backgroundColor: 'var(--first-color)',
  },
  ...(isActive && {
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '0.18rem',
      left: 0,
      top: '2rem',
      backgroundColor: 'var(--first-color)',
    },
  }),
}));

export const LogoArea = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.25rem 2rem 0',
  flexShrink: 0,
  '@media screen and (max-width: 768px)': {
    padding: '1rem 1.25rem 0',
  },
});

export const LogoMark = styled(Box)({
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  border: '1.5px solid var(--border-strong)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.85rem',
  fontWeight: 700,
  color: '#ed6958',
  letterSpacing: '0.05em',
  fontFamily: '"SFMono-Regular", monospace',
  flexShrink: 0,
  backgroundColor: 'rgba(237,105,88,0.06)',
});

export const ThemeBtn = styled('button')({
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  border: '1px solid var(--border-strong)',
  backgroundColor: 'var(--bg-card)',
  color: 'var(--text-muted)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flexShrink: 0,
  '&:hover': {
    borderColor: 'rgba(237,105,88,0.5)',
    color: 'var(--first-color)',
    backgroundColor: 'rgba(237,105,88,0.08)',
  },
});
