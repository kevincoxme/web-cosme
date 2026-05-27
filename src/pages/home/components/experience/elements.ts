import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const Card = styled(Box)({
  padding: '1.25rem',
  borderRadius: '10px',
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border)',
  transition: 'all 0.2s ease',
  marginBottom: '1rem',
  '&:hover': {
    border: '1px solid rgba(237,105,88,0.25)',
    backgroundColor: 'rgba(237,105,88,0.04)',
  },
});

const RowBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '0.4rem',
});

const AccentTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  margin: 0,
});

const Pill = styled(Box)({
  fontSize: '0.7rem',
  color: 'var(--first-color)',
  backgroundColor: 'rgba(237,105,88,0.1)',
  padding: '2px 10px',
  borderRadius: '12px',
  border: '1px solid rgba(237,105,88,0.2)',
  flexShrink: 0,
});

const CompanyText = styled(Typography)({
  fontSize: '0.85rem',
  color: 'var(--text-muted)',
  marginBottom: '0.75rem',
});

const TechWrap = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.4rem',
  marginTop: '0.75rem',
});

const TechTag = styled(Box)({
  fontSize: '0.65rem',
  padding: '2px 8px',
  backgroundColor: 'var(--bg-card)',
  color: 'var(--text-muted)',
  borderRadius: '8px',
  border: '1px solid var(--border)',
});

const BodyText = styled(Typography)({
  color: 'var(--text-secondary)',
  lineHeight: 1.65,
  fontSize: '0.875rem',
  textAlign: 'justify',
});

export { Card, RowBetween, AccentTitle, Pill, CompanyText, TechWrap, TechTag, BodyText };
