import { Box, styled, Typography } from '@mui/material';

const SkillsSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: 'var(--mb-2)',
  color: 'var(--text-color)',
  marginLeft: '1rem',

  [theme.breakpoints.up('md')]: {
    marginLeft: '10px',
  },
}));

const SkillsText = styled(Typography)(({ theme }) => ({
  marginBottom: 'var(--mb-4)',
  color: 'var(--text-color-light)',
  marginLeft: '1rem',

  [theme.breakpoints.up('md')]: {
    marginLeft: '10px',
  },
}));

const SkillsCategory = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: 'var(--first-color)',
  marginBottom: 'var(--mb-3)',
  marginTop: 'var(--mb-4)',
  fontWeight: 'var(--font-semi)',
  textAlign: 'left',
  marginLeft: '1rem',

  [theme.breakpoints.up('md')]: {
    marginLeft: '10px',
  },
}));

const SkillsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  marginTop: 'var(--mb-4)',

  [theme.breakpoints.up('sm')]: {
    gap: '1rem',
  },
}));

const SkillItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '85px',
  minHeight: '100px',
  padding: '6px 4px',
  borderRadius: '.5rem',
  boxShadow: '0 4px 25px var(--shadow-color)',
  marginBottom: '10px',
  transition: 'all 0.3s ease',
  marginLeft: 0,
  backgroundColor: 'var(--container-color)',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  '&:hover': {
    transform: 'translateY(-5px) scale(1.1)',
    boxShadow: '0 8px 30px var(--shadow-hover)',
  },

  [theme.breakpoints.up('sm')]: {
    width: '100px',
    minHeight: '110px',
    padding: '8px 5px',
    marginLeft: '5px',
  },
}));

const SkillIconLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.6rem',
  color: 'var(--text-color)',
  textAlign: 'center',
  lineHeight: 1.2,

  [theme.breakpoints.up('sm')]: {
    fontSize: '0.65rem',
  },
}));

export { SkillsSubtitle, SkillIconLabel, SkillItem, SkillsCategory, SkillsSection, SkillsText };
