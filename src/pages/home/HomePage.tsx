import React, { useState } from 'react';
import { Box, keyframes, Link, styled } from '@mui/material';
import { Layout } from '@/components/Layout';
import { About, Home, Skills, Experience, Work, ApiPanel } from './components';
import { SectionSkeleton } from './components/skeleton';
import { FaGithub, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import {
  FiMail,
  FiMapPin,
  FiClock,
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiFolder,
} from 'react-icons/fi';
import useGetPortfolio from './api/getPortfolio';
import { useGlobalHook } from '@/hooks/useGlobalHook';
import {
  mockApi,
  AboutResponseBody,
  ExperienceResponseBody,
  HomeResponseBody,
  SkillsResponseBody,
  WorkResponseBody,
  SectionKey,
} from './data/mockApi';
import { Socials } from './types';

const scrollbar = {
  scrollbarWidth: 'thin' as const,
  scrollbarColor: 'rgba(128,128,128,0.2) transparent',
  '&::-webkit-scrollbar': { width: '4px' },
  '&::-webkit-scrollbar-track': { background: 'transparent' },
  '&::-webkit-scrollbar-thumb': { background: 'rgba(128,128,128,0.2)', borderRadius: '2px' },
};

const PageWrapper = styled(Box)({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: 'var(--bg)',
  transition: 'background-color 0.25s ease',
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
    height: 'auto',
    minHeight: '100vh',
    overflow: 'visible',
  },
});

const LeftPanel = styled(Box)({
  flex: '0 0 55%',
  height: '100vh',
  overflowY: 'auto',
  borderRight: '1px solid var(--panel-divider)',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--bg-panel)',
  transition: 'background-color 0.25s ease, border-color 0.25s ease',
  ...scrollbar,
  '@media screen and (max-width: 768px)': {
    display: 'none',
  },
});

const RightPanel = styled(Box)({
  flex: '0 0 45%',
  height: '100vh',
  overflowY: 'auto',
  padding: '1.75rem',
  backgroundColor: 'var(--right-panel-bg)',
  transition: 'background-color 0.25s ease',
  ...scrollbar,
  '@media screen and (max-width: 1024px)': {
    flex: '0 0 42%',
    padding: '1.5rem',
  },
  '@media screen and (max-width: 768px)': {
    flex: 'none',
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    padding: '1rem',
    overflowY: 'visible',
    order: 1,
  },
});

const LogoArea = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.25rem 2rem 0',
  flexShrink: 0,
  '@media screen and (max-width: 768px)': {
    padding: '1rem 1.25rem 0',
  },
});

const LogoMark = styled(Box)({
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  border: '1.5px solid var(--border-strong)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.85rem',
  fontWeight: 700,
  color: '#ed6958',
  letterSpacing: '0.05em',
  fontFamily: '"SFMono-Regular", monospace',
  flexShrink: 0,
  backgroundColor: 'rgba(237,105,88,0.06)',
});

const ThemeBtn = styled('button')({
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  border: '1px solid var(--border-strong)',
  backgroundColor: 'var(--bg-card)',
  color: 'var(--text-muted)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flexShrink: 0,
  '&:hover': {
    borderColor: 'rgba(237,105,88,0.5)',
    color: 'var(--first-color)',
    backgroundColor: 'rgba(237,105,88,0.08)',
  },
});

const footerBase = {
  borderTop: '1px solid rgba(255,255,255,0.08)',
  padding: '0.9rem 1rem',
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap' as const,
  flexShrink: 0,
};

const ContactFooter = styled(Box)({
  ...footerBase,
  marginTop: 'auto',
  backgroundColor: 'var(--footer-bg)',
  borderTopColor: 'var(--panel-divider)',
  transition: 'background-color 0.25s ease, border-color 0.25s ease',
  '@media screen and (min-width: 768px)': { padding: '0.9rem 2.5rem' },
});

const MobileFooter = styled(Box)({
  ...footerBase,
  display: 'none',
  '@media screen and (max-width: 768px)': {
    display: 'flex',
  },
});

const FooterItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
  fontSize: '0.72rem',
  color: 'var(--text-muted)',
  '& svg': { color: 'var(--first-color)', fontSize: '0.78rem', flexShrink: 0 },
});

const FooterLink = styled(Link)({
  fontSize: '0.72rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': { color: 'var(--first-color)' },
});

const FooterCredit = styled(Link)({
  marginLeft: 'auto',
  fontSize: '0.68rem',
  color: 'var(--text-faint)',
  textDecoration: 'none',
  letterSpacing: '0.01em',
  whiteSpace: 'nowrap',
  transition: 'color 0.2s ease',
  '&:hover': { color: 'var(--text-muted)' },
});

const MobileTabBar = styled(Box)({
  display: 'none',
  '@media screen and (max-width: 768px)': {
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(10,10,10,0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '0.4rem 0 calc(0.4rem + env(safe-area-inset-bottom))',
  },
});

const MobileTabBtn = styled('button', {
  shouldForwardProp: (p) => p !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: '0.35rem 0',
  color: active ? '#ed6958' : 'rgba(255,255,255,0.4)',
  transition: 'color 0.2s ease',
  '& svg': { fontSize: '1.2rem' },
  '&:active': { transform: 'scale(0.92)' },
}));

const MobileTabLabel = styled('span')({
  fontSize: '0.6rem',
  fontWeight: 600,
  letterSpacing: '0.02em',
  lineHeight: 1,
});

const MobileNavSpacer = styled(Box)({
  display: 'none',
  '@media screen and (max-width: 768px)': {
    display: 'block',
    height: '64px',
    flexShrink: 0,
  },
});

const mobileNavItems: Array<{ key: SectionKey; label: string; icon: React.ReactNode }> = [
  { key: 'home', label: 'Home', icon: <FiHome /> },
  { key: 'about', label: 'About', icon: <FiUser /> },
  { key: 'skills', label: 'Skills', icon: <FiCode /> },
  { key: 'experience', label: 'Experience', icon: <FiBriefcase /> },
  { key: 'work', label: 'Work', icon: <FiFolder /> },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const FadeSection = styled(Box)({
  animation: `${fadeIn} 0.35s ease forwards`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export function HomePage() {
  const [active, setActive] = useState<SectionKey>('home');
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState('—');
  const { isDark, toggleTheme } = useGlobalHook();
  const { socials } = useGetPortfolio();

  const handleSelect = (key: SectionKey) => {
    setActive(key);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResponseTime(`${Math.floor(Math.random() * 241) + 80} ms`);
    }, 1000);
  };

  const formattedSocials: Socials = socials.map((item) => {
    const getSocialIcon = (url: string) => {
      if (url.includes('linkedin.com')) return <FaLinkedinIn />;
      if (url.includes('github.com')) return <FaGithub />;
      if (url.includes('skype.com')) return <FaSkype />;
      return null;
    };
    return { url: item.url, icon: getSocialIcon(item.url) };
  });

  const renderSection = () => {
    switch (active) {
      case 'home':
        return (
          <Home data={mockApi.home.responseBody as HomeResponseBody} socials={formattedSocials} />
        );
      case 'about':
        return <About data={mockApi.about.responseBody as AboutResponseBody} />;
      case 'skills':
        return <Skills data={mockApi.skills.responseBody as SkillsResponseBody} />;
      case 'experience':
        return <Experience data={mockApi.experience.responseBody as ExperienceResponseBody} />;
      case 'work':
        return <Work data={mockApi.work.responseBody as WorkResponseBody} />;
    }
  };

  return (
    <Layout>
      <PageWrapper>
        <LeftPanel>
          <LogoArea>
            <LogoMark>KM</LogoMark>
            <ThemeBtn onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
            </ThemeBtn>
          </LogoArea>

          {loading ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <SectionSkeleton section={active} />
            </Box>
          ) : (
            <FadeSection>{renderSection()}</FadeSection>
          )}

          <ContactFooter>
            <FooterItem>
              <FiMail />
              <FooterLink href="mailto:kevin.g.monteza@gmail.com">
                kevin.g.monteza@gmail.com
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FiMapPin />
              Philippines — WFH
            </FooterItem>
            <FooterItem>
              <FiClock />
              Open to Opportunities
            </FooterItem>
            <FooterCredit href="https://polar.sh" target="_blank" rel="noreferrer">
              Inspired by polar.sh
            </FooterCredit>
          </ContactFooter>
        </LeftPanel>

        <RightPanel>
          <ApiPanel
            active={active}
            endpoint={mockApi[active]}
            loading={loading}
            responseTime={responseTime}
            preview={
              <>
                <LogoArea>
                  <LogoMark>KM</LogoMark>
                  <ThemeBtn onClick={toggleTheme} aria-label="Toggle theme">
                    {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
                  </ThemeBtn>
                </LogoArea>
                {renderSection()}
              </>
            }
            onSelect={handleSelect}
          />
          <MobileFooter>
            <FooterItem>
              <FiMail />
              <FooterLink href="mailto:kevin.g.monteza@gmail.com">
                kevin.g.monteza@gmail.com
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FiMapPin />
              Philippines — WFH
            </FooterItem>
            <FooterItem>
              <FiClock />
              Open to Opportunities
            </FooterItem>
            <FooterCredit href="https://polar.sh" target="_blank" rel="noreferrer">
              Inspired by polar.sh
            </FooterCredit>
          </MobileFooter>
          <MobileNavSpacer />
        </RightPanel>
      </PageWrapper>

      <MobileTabBar>
        {mobileNavItems.map((item) => (
          <MobileTabBtn
            key={item.key}
            active={active === item.key}
            disabled={loading}
            onClick={() => !loading && handleSelect(item.key)}
          >
            {item.icon}
            <MobileTabLabel>{item.label}</MobileTabLabel>
          </MobileTabBtn>
        ))}
      </MobileTabBar>
    </Layout>
  );
}
