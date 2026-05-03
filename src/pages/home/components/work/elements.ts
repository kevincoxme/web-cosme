import { styled } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';
import { Grid } from '../home';

const WorkContainer = styled(Grid)(({ theme }) => ({
  rowGap: '1rem',

  [theme.breakpoints.up('md')]: {
    display: 'grid', // ⚠️ needed if you're using gridTemplateColumns
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '2rem',
  },
}));

const WorkCard = styled(Box)({
  padding: 'var(--mb-3)',
  borderRadius: '.5rem',
  backgroundColor: 'var(--container-color)',
  boxShadow: '0 4px 25px var(--shadow-color)',
  transition: 'all 0.3s ease',
  marginBottom: 'var(--mb-3)',

  '&:hover': {
    boxShadow: '0 8px 35px var(--shadow-hover)',
    transform: 'translateY(-3px)',
  },
});

const WorkTitle = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 'var(--font-semi)',
  color: 'var(--first-color)',
  margin: 0,
});

const WorkUrl = styled(Link)({
  fontSize: '14px',
  color: 'var(--text-color)',
  marginTop: '8px',
  cursor: 'pointer',
  textDecorationLine: 'none',
});

const WorkText = styled(Typography)({
  color: 'var(--text-color-light)',
  lineHeight: 1.6,
});

export { WorkContainer, WorkCard, WorkTitle, WorkUrl, WorkText };
