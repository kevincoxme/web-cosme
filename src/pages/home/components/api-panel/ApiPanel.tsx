import React, { useState } from 'react';
import { Box, keyframes, styled } from '@mui/material';
import { FiCheck, FiCode, FiCopy, FiEye } from 'react-icons/fi';
import { MockApiEntry, navItems, SectionKey } from '../../data/mockApi';
import {
  ApiViewerRoot,
  CopyBtn,
  EndpointRow,
  FormatBar,
  FormatTab,
  FormatTabs,
  HeaderKey,
  HeaderRow,
  HeadersSection,
  HeaderValue,
  JsonLine,
  JsonLineNumber,
  JsonPre,
  MethodBadge,
  NavButton,
  NavButtonDesc,
  NavButtonLabel,
  NavButtonsRow,
  PathText,
  SectionLabel,
  StatusBadge,
  ViewModeTab,
  ViewModeTabs,
} from './elements';

// ─── colours ──────────────────────────────────────────────────────────────
const KEY_COLOR = '#abb2bf';
const STRING_COLOR = '#98c379';
const NUMBER_COLOR = '#d19a66';
const KEYWORD_COLOR = '#e06c75';
const PUNCT_COLOR = '#5c6370';
const TAG_COLOR = '#e06c75';
const ATTR_COLOR = '#d19a66';
const XML_VAL_COLOR = '#98c379';

// ─── animations ───────────────────────────────────────────────────────────
const bounce = keyframes`
  0%,80%,100% { opacity:.2; transform:translateY(0) scale(.8); }
  40%          { opacity:1;  transform:translateY(-4px) scale(1); }
`;
const fadeIn = keyframes`
  from { opacity:0; transform:translateY(4px); }
  to   { opacity:1; transform:translateY(0); }
`;

const LoadingRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  marginBottom: '0.75rem',
});
const Dot = styled('span')<{ delay: string }>(({ delay }) => ({
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  backgroundColor: '#98c379',
  display: 'inline-block',
  animation: `${bounce} 1.2s infinite ease-in-out`,
  animationDelay: delay,
}));
const LoadingLabel = styled('span')({
  fontSize: '0.68rem',
  color: 'rgba(255,255,255,.25)',
  letterSpacing: '0.08em',
  fontFamily: 'inherit',
});
const FadeInBox = styled(Box)({ animation: `${fadeIn} 0.35s ease forwards` });

// ─── JSON renderer ────────────────────────────────────────────────────────
function colorizeJsonLine(line: string): React.ReactNode {
  const parts: Array<{ text: string; color: string }> = [];
  const regex = /("(?:[^"\\]|\\.)*")|(\b-?\d+(?:\.\d+)?\b)|\b(true|false|null)\b|([[\]{},:])/g;
  let last = 0;
  for (const match of line.matchAll(regex)) {
    const idx = match.index ?? 0;
    if (idx > last) parts.push({ text: line.slice(last, idx), color: PUNCT_COLOR });
    if (match[1]) {
      const isKey = line
        .slice(idx + match[1].length)
        .trimStart()
        .startsWith(':');
      parts.push({ text: match[1], color: isKey ? KEY_COLOR : STRING_COLOR });
    } else if (match[2]) parts.push({ text: match[2], color: NUMBER_COLOR });
    else if (match[3]) parts.push({ text: match[3], color: KEYWORD_COLOR });
    else if (match[4]) parts.push({ text: match[4], color: PUNCT_COLOR });
    last = idx + match[0].length;
  }
  if (last < line.length) parts.push({ text: line.slice(last), color: PUNCT_COLOR });
  return parts.map((p, i) => (
    <span key={i} style={{ color: p.color }}>
      {p.text}
    </span>
  ));
}

function JsonViewer({ data }: { data: Record<string, unknown> }) {
  const lines = JSON.stringify(data, null, 2).split('\n');
  return (
    <JsonPre>
      {lines.map((line, i) => (
        <JsonLine key={i}>
          <JsonLineNumber>{i + 1}</JsonLineNumber>
          <span>{colorizeJsonLine(line)}</span>
        </JsonLine>
      ))}
    </JsonPre>
  );
}

// ─── XML renderer ─────────────────────────────────────────────────────────
function toXmlString(data: unknown, tag: string, depth = 0): string {
  const pad = '  '.repeat(depth);
  const safeTag = String(tag).replace(/[^a-zA-Z0-9_-]/g, '_');
  if (data === null || data === undefined) return `${pad}<${safeTag}/>`;
  if (Array.isArray(data))
    return `${pad}<${safeTag}>\n${data.map((v) => toXmlString(v, 'item', depth + 1)).join('\n')}\n${pad}</${safeTag}>`;
  if (typeof data === 'object')
    return `${pad}<${safeTag}>\n${Object.entries(data as Record<string, unknown>)
      .map(([k, v]) => toXmlString(v, k, depth + 1))
      .join('\n')}\n${pad}</${safeTag}>`;
  return `${pad}<${safeTag}>${data}</${safeTag}>`;
}

function colorizeXmlLine(line: string): React.ReactNode {
  const parts: Array<{ text: string; color: string }> = [];
  const regex = /(<\/?[\w-]+>?)|("[^"]*")|([^<>"]+)/g;
  for (const match of line.matchAll(regex)) {
    if (match[1]) parts.push({ text: match[1], color: TAG_COLOR });
    else if (match[2]) parts.push({ text: match[2], color: XML_VAL_COLOR });
    else parts.push({ text: match[3], color: ATTR_COLOR });
  }
  return parts.map((p, i) => (
    <span key={i} style={{ color: p.color }}>
      {p.text}
    </span>
  ));
}

function XmlViewer({ data }: { data: Record<string, unknown> }) {
  const lines = toXmlString(data, 'response').split('\n');
  return (
    <JsonPre>
      {lines.map((line, i) => (
        <JsonLine key={i}>
          <JsonLineNumber>{i + 1}</JsonLineNumber>
          <span>{colorizeXmlLine(line)}</span>
        </JsonLine>
      ))}
    </JsonPre>
  );
}

// ─── Raw renderer ─────────────────────────────────────────────────────────
function RawViewer({ data }: { data: Record<string, unknown> }) {
  const text = JSON.stringify(data);
  return (
    <JsonPre>
      <JsonLine>
        <span style={{ color: STRING_COLOR }}>{text}</span>
      </JsonLine>
    </JsonPre>
  );
}

// ─── helpers ──────────────────────────────────────────────────────────────
type FormatType = 'JSON' | 'XML' | 'Raw';
type ViewMode = 'response' | 'preview';

function getContent(data: Record<string, unknown>, fmt: FormatType): string {
  if (fmt === 'XML') return toXmlString(data, 'response');
  if (fmt === 'Raw') return JSON.stringify(data);
  return JSON.stringify(data, null, 2);
}

// ─── component ────────────────────────────────────────────────────────────
type Props = {
  active: SectionKey;
  endpoint: MockApiEntry;
  loading: boolean;
  preview: React.ReactNode;
  onSelect: (key: SectionKey) => void;
};

export function ApiPanel({ active, endpoint, loading, preview, onSelect }: Props) {
  const { method, path, headers, responseStatus, responseStatusText, responseBody } = endpoint;
  const [format, setFormat] = useState<FormatType>('JSON');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('response');

  const truncateAuth = (v: string) => {
    const p = v.split(' ');
    return p.length < 2 ? v : `Bearer ${p[1].slice(0, 14)}...`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getContent(responseBody, format)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <NavButtonsRow>
        {navItems.map((item) => (
          <NavButton
            key={item.key}
            active={active === item.key}
            disabled={loading}
            onClick={() => !loading && onSelect(item.key)}
          >
            <NavButtonLabel>{item.label}</NavButtonLabel>
            <NavButtonDesc>{item.description}</NavButtonDesc>
          </NavButton>
        ))}
      </NavButtonsRow>

      <ApiViewerRoot>
        <EndpointRow>
          <MethodBadge method={method}>{method}</MethodBadge>
          <PathText>{path}</PathText>
        </EndpointRow>

        <HeadersSection>
          {Object.entries(headers).map(([key, value]) => (
            <HeaderRow key={key}>
              <HeaderKey>{key}:</HeaderKey>
              <HeaderValue>{key === 'Authorization' ? truncateAuth(value) : value}</HeaderValue>
            </HeaderRow>
          ))}
        </HeadersSection>

        {loading ? (
          <LoadingRow>
            <LoadingLabel>fetching</LoadingLabel>
            <Dot delay="-0.32s" />
            <Dot delay="-0.16s" />
            <Dot delay="0s" />
          </LoadingRow>
        ) : (
          <FadeInBox>
            <ViewModeTabs>
              <ViewModeTab active={viewMode === 'response'} onClick={() => setViewMode('response')}>
                <FiCode size={11} /> Response
              </ViewModeTab>
              <ViewModeTab active={viewMode === 'preview'} onClick={() => setViewMode('preview')}>
                <FiEye size={11} /> Preview
              </ViewModeTab>
            </ViewModeTabs>

            {viewMode === 'preview' ? (
              <Box
                sx={{
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-panel, #fff)',
                }}
              >
                {preview}
              </Box>
            ) : (
              <>
                <StatusBadge status={responseStatus}>
                  {responseStatus} {responseStatusText}
                </StatusBadge>
                <FormatBar>
                  <SectionLabel sx={{ mb: 0 }}>RESPONSE BODY</SectionLabel>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FormatTabs>
                      {(['JSON', 'XML', 'Raw'] as FormatType[]).map((f) => (
                        <FormatTab key={f} active={format === f} onClick={() => setFormat(f)}>
                          {f}
                        </FormatTab>
                      ))}
                    </FormatTabs>
                    <CopyBtn copied={copied} onClick={handleCopy}>
                      {copied ? <FiCheck size={10} /> : <FiCopy size={10} />}
                      {copied ? 'Copied' : 'Copy'}
                    </CopyBtn>
                  </Box>
                </FormatBar>
                {format === 'JSON' && <JsonViewer data={responseBody} />}
                {format === 'XML' && <XmlViewer data={responseBody} />}
                {format === 'Raw' && <RawViewer data={responseBody} />}
              </>
            )}
          </FadeInBox>
        )}
      </ApiViewerRoot>
    </>
  );
}
