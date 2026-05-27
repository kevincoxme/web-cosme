import { Box, Link, styled } from '@mui/material';

const footerBase = {
  borderTop: '1px solid rgba(255,255,255,0.08)',
  padding: '0.9rem 1rem',
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap' as const,
  flexShrink: 0,
};

export const ContactFooter = styled(Box)({
  ...footerBase,
  marginTop: 'auto',
  backgroundColor: 'var(--footer-bg)',
  borderTopColor: 'var(--panel-divider)',
  transition: 'background-color 0.25s ease, border-color 0.25s ease',
  '@media screen and (min-width: 768px)': { padding: '0.9rem 2.5rem' },
});

export const MobileFooter = styled(Box)({
  ...footerBase,
  display: 'none',
  '@media screen and (max-width: 768px)': {
    display: 'flex',
  },
});

export const FooterItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
  fontSize: '0.72rem',
  color: 'var(--text-muted)',
  '& svg': { color: 'var(--first-color)', fontSize: '0.78rem', flexShrink: 0 },
});

export const FooterLink = styled(Link)({
  fontSize: '0.72rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': { color: 'var(--first-color)' },
});

export const FooterCredit = styled(Link)({
  marginLeft: 'auto',
  fontSize: '0.68rem',
  color: 'var(--text-faint)',
  textDecoration: 'none',
  letterSpacing: '0.01em',
  whiteSpace: 'nowrap',
  transition: 'color 0.2s ease',
  '&:hover': { color: 'var(--text-muted)' },
});
