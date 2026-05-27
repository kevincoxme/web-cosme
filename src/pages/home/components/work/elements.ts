import { styled } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';

const WorkGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '0.75rem',
  [theme.breakpoints.up('sm')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
}));

const WorkCard = styled(Box)({
  padding: '1.1rem',
  borderRadius: '10px',
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border)',
  transition: 'all 0.2s ease',
  '&:hover': {
    border: '1px solid rgba(237,105,88,0.25)',
    backgroundColor: 'rgba(237,105,88,0.04)',
    transform: 'translateY(-2px)',
  },
});

const WorkTitle = styled(Typography)({
  fontSize: '0.95rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  margin: '0 0 0.4rem',
});

const WorkUrl = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: '0.72rem',
  color: 'var(--first-color)',
  marginTop: '0.5rem',
  textDecorationLine: 'none',
  opacity: 0.75,
  transition: 'opacity 0.2s ease',
  '& svg': { fontSize: '0.7rem', flexShrink: 0 },
  '&:hover': { opacity: 1, textDecoration: 'underline' },
});

const WorkText = styled(Typography)({
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  fontSize: '0.82rem',
  textAlign: 'justify',
});

export const TechWrap = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.4rem',
  margin: '0.65rem 0 0.5rem',
});

export const TechTag = styled(Box)({
  fontSize: '0.65rem',
  padding: '2px 8px',
  backgroundColor: 'var(--bg-card)',
  color: 'var(--text-muted)',
  borderRadius: '8px',
  border: '1px solid var(--border)',
});

export { WorkGrid, WorkCard, WorkTitle, WorkUrl, WorkText };
