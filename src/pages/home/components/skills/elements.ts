import { Box, styled, Typography } from '@mui/material';

const SkillsCategory = styled(Typography)({
  fontSize: '0.7rem',
  color: 'var(--text-muted)',
  marginBottom: '0.6rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

const SkillsSection = styled(Box)({ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' });

const SkillItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '68px',
  padding: '0.6rem 0.4rem',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--bg-card)',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  transition: 'all 0.2s ease',
  '&:hover': {
    border: '1px solid rgba(237,105,88,0.3)',
    backgroundColor: 'rgba(237,105,88,0.06)',
    transform: 'translateY(-2px)',
  },
});

const SkillIconLabel = styled(Typography)({
  fontSize: '0.6rem',
  color: 'var(--text-secondary)',
  textAlign: 'center',
  lineHeight: 1.2,
});

export { SkillIconLabel, SkillItem, SkillsCategory, SkillsSection };
