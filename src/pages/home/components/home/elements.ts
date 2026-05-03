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

const Main = styled('main')({
  width: '100%',
  overflowX: 'hidden',
  boxSizing: 'border-box',
});

const HomeSection = styled(Grid)({
  position: 'relative',
  height: 'calc(100vh - 3rem)',
  rowGap: '1rem',
  backgroundColor: 'var(--body-color)',
  transition: 'background-color 0.3s ease',
  '@media screen and (min-width: 768px)': { height: '100vh' },
});

const HomeData = styled(Box)({
  alignSelf: 'center',
  '@media screen and (min-width: 768px)': { alignSelf: 'flex-end' },
});

const HomeTitle = styled('h1')({
  fontSize: 'var(--big-font-size)',
  marginBottom: 'var(--mb-5)',
  color: 'var(--text-color)',
  marginTop: 0,
});

const HomeTitleColor = styled('span')({
  color: 'var(--first-color)',
});

const HomeSubtitle = styled('p')({
  color: 'var(--text-color)',
  fontWeight: 600,
  marginBottom: '0.4rem',
});

const HomeDescription = styled('p')({
  color: 'var(--text-color-light)',
  lineHeight: 1.6,
  maxWidth: '680px',
});

const HomeCtaText = styled('p')({
  color: 'var(--text-color-light)',
  lineHeight: 1.6,
  maxWidth: '680px',
});

const HomeSocial = styled(Box)({
  display: 'inline-flex',
  flexDirection: 'row',
  gap: '1.5rem',
  '@media screen and (min-width: 768px)': {
    paddingTop: 0,
    paddingBottom: '2.5rem',
    alignSelf: 'flex-end',
  },
});

const HomeSocialLink = styled(Link)({
  width: 'max-content',
  marginBottom: 'var(--mb-2)',
  fontSize: '1.25rem',
  color: 'var(--text-color)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: 'var(--first-color)',
    transform: 'translateY(-3px) scale(1.1)',
  },
  '@media screen and (min-width: 768px)': {
    marginBottom: 0,
    marginRight: 'var(--mb-4)',
  },
});

const HomeImageWrap = styled(Box)({
  position: 'absolute',
  right: 0,
  marginRight: '-23%',
  bottom: 0,
  width: '295px',
  height: '295px',
  overflow: 'hidden',
  borderRadius: '50%',
  boxShadow: '0 10px 40px var(--shadow-color)',
  transition: 'all 0.3s ease',
  backgroundColor: 'var(--container-color)',
  '&:hover': {
    boxShadow: '0 15px 50px var(--shadow-hover)',
    transform: 'scale(1.05)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  '@media screen and (max-width: 768px)': { display: 'none' },
  '@media screen and (min-width: 768px)': {
    width: '457px',
    height: '457px',
    bottom: '15%',
    top: 0,
  },
  '@media screen and (min-width: 1024px)': { right: '-10%' },
});

const Section = styled('section')({
  paddingTop: '3rem',
  paddingBottom: '2rem',
  backgroundColor: 'var(--body-color)',
  '@media screen and (min-width: 768px)': {
    paddingTop: '4rem',
    paddingBottom: '3rem',
  },
});

const SectionTitle = styled('h2')({
  position: 'relative',
  fontSize: 'var(--h2-font-size)',
  color: 'var(--first-color)',
  marginTop: 'var(--mb-2)',
  marginBottom: 'var(--mb-4)',
  textAlign: 'center',
  '&::after': {
    position: 'absolute',
    content: '""',
    width: '64px',
    height: '0.18rem',
    left: 0,
    right: 0,
    margin: 'auto',
    top: '2rem',
    backgroundColor: 'var(--first-color)',
  },
  '@media screen and (min-width: 768px)': {
    marginBottom: 'var(--mb-6)',
    '&::after': { width: '80px', top: '3rem' },
  },
});

export {
  Grid,
  Main,
  HomeSection,
  HomeData,
  HomeTitle,
  HomeTitleColor,
  HomeSubtitle,
  HomeDescription,
  HomeCtaText,
  HomeSocial,
  HomeSocialLink,
  HomeImageWrap,
  Section,
  SectionTitle,
};
