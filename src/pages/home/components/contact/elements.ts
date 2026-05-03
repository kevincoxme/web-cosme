import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Grid } from '../home/elements';

const BodyText = styled(Typography)({
  color: 'var(--text-color-light)',
  lineHeight: 1.6,
});

const ContactContainer = styled(Grid)(({ theme }) => ({
  rowGap: '2rem',

  [theme.breakpoints.up('md')]: {
    alignItems: 'start',
    justifyItems: 'center',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  marginBottom: 'var(--mb-4)',

  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

const ContactSubtitle = styled(Typography)({
  fontSize: '1.25rem',
  color: 'var(--text-color)',
  marginBottom: 'var(--mb-2)',
  fontWeight: 'var(--font-semi)',
});

const ContactDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--mb-3)',
  marginBottom: 'var(--mb-4)',
  marginTop: '8px',
});

const ContactDetailItem = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'var(--mb-2)',
  padding: 'var(--mb-2)',
  backgroundColor: 'var(--container-color)',
  borderRadius: '.5rem',
  boxShadow: '0 2px 10px var(--shadow-color)',
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: '0 4px 20px var(--shadow-hover)',
    transform: 'translateX(5px)',
  },
});

const ContactIcon = styled(Box)({
  fontSize: '1.4rem',
  color: 'var(--first-color)',
  marginTop: '0.25rem',
});

const ContactDetailTitle = styled(Typography)({
  fontSize: '0.875rem',
  color: 'var(--text-color-light)',
  margin: '0 0 0.25rem 0',
  fontWeight: 500,
});

const ContactDetailText = styled(Typography)({
  fontSize: 'var(--normal-font-size)',
  color: 'var(--text-color)',
});

const SocialWrap = styled(Box)({
  display: 'flex',
  gap: 'var(--mb-2)',
  marginTop: 'var(--mb-3)',
});

const RoundIconLink = styled('a')({
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--container-color)',
  color: 'var(--text-color)',
  borderRadius: '50%',
  fontSize: '1.25rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 10px var(--shadow-color)',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: 'var(--first-color)',
    color: '#fff',
    transform: 'translateY(-3px)',
    boxShadow: '0 4px 20px var(--shadow-hover)',
  },
});

const ContactForm = styled(Box)(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.up('md')]: {
    width: '360px',
  },
}));

const ContactInput = styled('input')({
  width: '100%',
  fontSize: 'var(--normal-font-size)',
  fontWeight: 'var(--font-semi)',
  padding: '1rem',
  borderRadius: '.5rem',
  border: '1.5px solid var(--input-border)',
  outline: 'none',
  marginBottom: 'var(--mb-4)',
  backgroundColor: 'var(--input-bg)',
  color: 'var(--text-color)',
  fontFamily: 'inherit',

  '&:focus': {
    borderColor: 'var(--first-color)',
    boxShadow: '0 0 0 3px var(--shadow-hover)',
  },
});

export {
  BodyText,
  ContactContainer,
  ContactInfo,
  ContactSubtitle,
  ContactDetails,
  ContactDetailItem,
  ContactIcon,
  ContactDetailTitle,
  ContactDetailText,
  SocialWrap,
  RoundIconLink,
  ContactForm,
  ContactInput,
};
