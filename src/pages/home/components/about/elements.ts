import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid as HomeGrid } from '../home/elements';
import { ButtonLink } from '@/components';

const Grid = styled(HomeGrid)(({ theme }) => ({
  rowGap: '2rem',
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'start',
    textAlign: 'initial',
  },
}));

const AboutImageWrap = styled(Box)({
  justifySelf: 'center',
});

const AboutImage = styled('img')(({ theme }) => ({
  width: '200px',
  borderRadius: '.5rem',
  boxShadow: '0 4px 25px var(--shadow-color)',
  transition: 'all 0.3s ease',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 35px var(--shadow-hover)',
  },

  [theme.breakpoints.up('md')]: {
    width: '300px',
  },
}));

const AboutSubtitle = styled(Typography)({
  marginBottom: 'var(--mb-2)',
  color: 'var(--text-color)',
});

const BodyText = styled(Typography)({
  color: 'var(--text-color-light)',
  lineHeight: 1.6,
});

const AboutInfo = styled(Box)({
  marginTop: 'var(--mb-4)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--mb-2)',
});

const AboutInfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--mb-2)',
  color: 'var(--text-color)',
});

const AboutInfoIcon = styled(Box)({
  fontSize: '1.35rem',
  color: 'var(--first-color)',
});

const ButtonSecondarySpacing = styled(ButtonLink)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export {
  Grid,
  AboutImageWrap,
  AboutImage,
  AboutSubtitle,
  BodyText,
  AboutInfo,
  AboutInfoItem,
  AboutInfoIcon,
  ButtonSecondarySpacing,
};
