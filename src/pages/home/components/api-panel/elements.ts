import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavButtonsRow = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem',
  '@media screen and (max-width: 768px)': {
    gap: '0.4rem',
    marginBottom: '1rem',
  },
});

export const NavButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  padding: '0.6rem 1rem',
  borderRadius: '8px',
  border: `1px solid ${active ? 'rgba(237,105,88,0.6)' : 'rgba(255,255,255,0.1)'}`,
  backgroundColor: active ? 'rgba(237,105,88,0.12)' : 'transparent',
  color: active ? '#ed6958' : 'rgba(255,255,255,0.6)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flex: 1,
  minWidth: '80px',
  textAlign: 'left',
  '@media screen and (max-width: 768px)': {
    flex: '0 0 calc(33% - 0.4rem)',
    minWidth: '0',
    padding: '0.5rem 0.75rem',
  },
  '&:hover:not(:disabled)': {
    borderColor: 'rgba(237,105,88,0.4)',
    backgroundColor: 'rgba(237,105,88,0.07)',
    color: '#ed6958',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.45,
  },
}));

export const NavButtonLabel = styled('span')({
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.02em',
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
});

export const NavButtonDesc = styled('span')({
  fontSize: '0.65rem',
  opacity: 0.7,
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
});

export const ApiViewerRoot = styled(Box)({
  fontFamily: '"SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", monospace',
  fontSize: '0.78rem',
  lineHeight: 1.6,
  overflow: 'hidden',
});

export const EndpointRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '0.75rem',
});

export const MethodBadge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'method',
})<{ method?: string }>(({ method }) => {
  const colors: Record<string, string> = {
    GET: '#61afef',
    POST: '#98c379',
    PATCH: '#e5c07b',
    PUT: '#d19a66',
    DELETE: '#e06c75',
  };
  return {
    color: colors[method ?? 'GET'] ?? '#abb2bf',
    fontWeight: 700,
    fontSize: '0.8rem',
    letterSpacing: '0.05em',
  };
});

export const PathText = styled('span')({
  color: '#abb2bf',
  fontSize: '0.8rem',
});

export const HeadersSection = styled(Box)({
  marginBottom: '1rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
});

export const HeaderRow = styled(Box)({
  display: 'flex',
  gap: '0.4rem',
  marginBottom: '0.15rem',
  flexWrap: 'wrap',
});

export const HeaderKey = styled('span')({
  color: '#5c6370',
  fontSize: '0.75rem',
});

export const HeaderValue = styled('span')({
  color: '#7d8590',
  fontSize: '0.75rem',
  wordBreak: 'break-all',
});

export const StatusBadge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'status',
})<{ status?: number }>(({ status }) => ({
  display: 'inline-block',
  padding: '2px 10px',
  borderRadius: '12px',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.04em',
  marginBottom: '0.75rem',
  backgroundColor:
    (status ?? 200) < 300
      ? 'rgba(152,195,121,0.15)'
      : (status ?? 200) < 400
        ? 'rgba(225,192,123,0.15)'
        : 'rgba(224,108,117,0.15)',
  color: (status ?? 200) < 300 ? '#98c379' : (status ?? 200) < 400 ? '#e5c07b' : '#e06c75',
  border: `1px solid ${(status ?? 200) < 300 ? 'rgba(152,195,121,0.3)' : (status ?? 200) < 400 ? 'rgba(225,192,123,0.3)' : 'rgba(224,108,117,0.3)'}`,
}));

export const SectionLabel = styled(Typography)({
  fontSize: '0.65rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: '#4b5263',
  marginBottom: '0.5rem',
  fontFamily: 'inherit',
});

export const JsonPre = styled('pre')({
  margin: 0,
  padding: 0,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  overflowX: 'hidden',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

export const JsonLine = styled(Box)({
  display: 'flex',
  gap: '1rem',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
});

export const JsonLineNumber = styled('span')({
  color: '#4b5263',
  userSelect: 'none',
  minWidth: '1.5ch',
  textAlign: 'right',
  flexShrink: 0,
});

export const ViewModeTabs = styled(Box)({
  display: 'none',
  '@media screen and (max-width: 1024px)': {
    display: 'flex',
    gap: '0',
    marginBottom: '1rem',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '10px',
    padding: '3px',
    border: '1px solid rgba(255,255,255,0.08)',
  },
});

export const ViewModeTab = styled('button', {
  shouldForwardProp: (p) => p !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontSize: '0.8rem',
  fontWeight: 700,
  padding: '8px 14px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: active ? '#ed6958' : 'transparent',
  color: active ? '#fff' : 'rgba(255,255,255,0.45)',
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'all 0.2s ease',
  letterSpacing: '0.02em',
  boxShadow: active ? '0 2px 8px rgba(237,105,88,0.4)' : 'none',
  '&:hover': {
    color: active ? '#fff' : 'rgba(255,255,255,0.75)',
    backgroundColor: active ? '#ed6958' : 'rgba(255,255,255,0.06)',
  },
}));

export const FormatBar = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
});

export const FormatTabs = styled(Box)({
  display: 'flex',
  gap: '2px',
  backgroundColor: 'rgba(255,255,255,0.04)',
  borderRadius: '6px',
  padding: '2px',
});

export const FormatTab = styled('button', {
  shouldForwardProp: (p) => p !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.06em',
  padding: '3px 8px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'all 0.15s ease',
  backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent',
  color: active ? '#e0e0e0' : '#4b5263',
  '&:hover': { color: '#abb2bf' },
}));

export const CopyBtn = styled('button', {
  shouldForwardProp: (p) => p !== 'copied',
})<{ copied?: boolean }>(({ copied }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.06em',
  padding: '3px 10px',
  borderRadius: '6px',
  border: `1px solid ${copied ? 'rgba(152,195,121,0.4)' : 'rgba(255,255,255,0.1)'}`,
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'all 0.2s ease',
  backgroundColor: copied ? 'rgba(152,195,121,0.1)' : 'transparent',
  color: copied ? '#98c379' : '#4b5263',
  '&:hover': {
    borderColor: 'rgba(255,255,255,0.2)',
    color: '#abb2bf',
  },
}));
