import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const Grid = styled(Box)({
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

const HomeSection = styled(Box)({
  padding: '1.5rem 1.5rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  '@media screen and (min-width: 768px)': { padding: '2rem 2.5rem' },
  '@media screen and (min-width: 1024px)': { padding: '2.5rem 3rem' },
});

const HomeData = styled(Box)({ maxWidth: '520px' });

const HomeImageCircle = styled(Box)({
  width: '110px',
  height: '110px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '2px solid rgba(237,105,88,0.4)',
  marginBottom: '1.5rem',
  flexShrink: 0,
  willChange: 'transform',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%',
    imageRendering: 'auto',
    display: 'block',
  },
});

const HomeTitle = styled('h1')({
  fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
  marginBottom: '0.5rem',
  color: 'var(--text-primary)',
  marginTop: 0,
  fontWeight: 700,
  lineHeight: 1.1,
});

const HomeTitleColor = styled('span')({ color: 'var(--first-color)' });

const HomeSubtitle = styled('p')({
  color: 'var(--first-color)',
  fontWeight: 600,
  marginBottom: '0.5rem',
  marginTop: 0,
  fontSize: '0.78rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

const HomeDescription = styled('p')({
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
  maxWidth: '480px',
  fontSize: '0.95rem',
  margin: '0 0 1.5rem',
});

const HomeSocial = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  marginTop: '1.5rem',
});

const HomeSocialLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: '1px solid var(--border-strong)',
  fontSize: '1rem',
  color: 'var(--text-muted)',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: 'var(--first-color)',
    borderColor: 'rgba(237,105,88,0.5)',
    backgroundColor: 'rgba(237,105,88,0.08)',
    transform: 'translateY(-2px)',
  },
});

const Section = styled('section')({
  padding: '1.5rem 1.5rem 2rem',
  backgroundColor: 'transparent',
  '@media screen and (min-width: 768px)': { padding: '2rem 2.5rem' },
  '@media screen and (min-width: 1024px)': { padding: '2.5rem 3rem' },
});

const SectionTitle = styled('h2')({
  position: 'relative',
  fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
  color: 'var(--first-color)',
  marginTop: 0,
  marginBottom: '1.75rem',
  paddingBottom: '0.75rem',
  '&::after': {
    position: 'absolute',
    content: '""',
    width: '40px',
    height: '2px',
    left: 0,
    bottom: 0,
    backgroundColor: 'var(--first-color)',
    opacity: 0.6,
  },
});

export {
  Grid,
  HomeSection,
  HomeData,
  HomeImageCircle,
  HomeTitle,
  HomeTitleColor,
  HomeSubtitle,
  HomeDescription,
  HomeSocial,
  HomeSocialLink,
  Section,
  SectionTitle,
};
