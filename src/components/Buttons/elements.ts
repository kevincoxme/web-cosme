import { Link, styled } from '@mui/material';

const ButtonLinkContainer = styled(Link)({
  display: 'inline-block',
  backgroundColor: 'var(--first-color)',
  color: '#fff',
  padding: '.75rem 2.5rem',
  fontWeight: 'var(--font-semi)',
  borderRadius: '.5rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  marginTop: '50px',
  textDecoration: 'none',
  '&:hover': {
    boxShadow: '0 10px 36px var(--shadow-hover)',
    transform: 'translateY(-2px)',
  },
});

export { ButtonLinkContainer };
