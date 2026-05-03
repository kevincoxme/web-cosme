import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const Card = styled(Box)({
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

const RowBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: 'var(--mb-1)',
  marginBottom: 'var(--mb-2)',
});

const AccentTitle = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 'var(--font-semi)',
  color: 'var(--first-color)',
  margin: 0,
});

const Pill = styled(Box)({
  fontSize: '0.875rem',
  color: 'var(--text-color-light)',
  backgroundColor: 'var(--body-color)',
  padding: '0.25rem 0.75rem',
  borderRadius: '1rem',
});

const CompanyText = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'var(--font-semi)',
  color: 'var(--text-color)',
  marginBottom: 'var(--mb-2)',
});

const TechWrap = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: 'var(--mb-2)',
});

const TechTag = styled(Box)({
  fontSize: '0.75rem',
  padding: '0.25rem 0.75rem',
  backgroundColor: 'var(--first-color)',
  color: '#fff',
  borderRadius: '1rem',
  fontWeight: 500,
});

const BodyText = styled(Typography)({
  color: 'var(--text-color-light)',
  lineHeight: 1.6,
});

export { Card, RowBetween, AccentTitle, Pill, CompanyText, TechWrap, TechTag, BodyText };
