import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Footer container
const FooterContainer = styled(Box)({
  backgroundColor: 'var(--footer-bg)',
  color: 'var(--footer-text)',
  textAlign: 'center',
  fontWeight: 'var(--font-semi)',
  padding: '2rem 0', // py: '2rem'
});

// Links list
const FooterLinksList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  gap: '6px',
});

// Single link
const FooterLink = styled('a')({
  color: '#fff',
  fontWeight: 400,
  fontSize: '12px',
  textDecoration: 'none',

  '&:hover': {
    color: 'var(--first-color)',
  },
});

export { FooterContainer, FooterLinksList, FooterLink };
