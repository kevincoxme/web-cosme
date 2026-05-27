import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonLink } from '@/components';

export const TagRow = styled(Box)({ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' });

export const Tag = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent?: boolean }>(({ accent }) => ({
  fontSize: '0.72rem',
  padding: '3px 10px',
  borderRadius: '20px',
  border: accent ? '1px solid rgba(237,105,88,0.3)' : '1px solid var(--border)',
  color: accent ? '#ed6958' : 'var(--text-secondary)',
  backgroundColor: accent ? 'rgba(237,105,88,0.07)' : 'var(--bg-card)',
}));

export const AboutSubtitle = styled(Typography)({
  fontSize: '1.15rem',
  fontWeight: 600,
  marginBottom: 'var(--mb-2)',
  color: 'var(--text-primary)',
});

export const BodyText = styled(Typography)({
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
  fontSize: '0.95rem',
});

export const AboutInfo = styled(Box)({
  marginTop: 'var(--mb-3)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--mb-2)',
});

export const AboutInfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--mb-2)',
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
});

export const AboutInfoIcon = styled(Box)({
  fontSize: '1rem',
  color: 'var(--first-color)',
  flexShrink: 0,
});

export const ButtonSecondarySpacing = styled(ButtonLink)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));
