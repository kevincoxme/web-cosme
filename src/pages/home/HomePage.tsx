import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Layout } from '@/components/Layout';
import { About, Home, Skills, Experience, Work, ApiPanel } from './components';
import { DesktopFooter, PortfolioMobileFooter } from './components/contact-footer';
import { MobileNav, MobileNavSpacer } from './components/mobile-nav';
import { SectionSkeleton } from './components/skeleton';
import { FaGithub, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
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
import { PageWrapper, LeftPanel, RightPanel, FadeSection } from '@/components/Layout';
import { LogoArea, LogoMark, ThemeBtn } from '@/components/Header';

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

          <DesktopFooter />
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
          <PortfolioMobileFooter />
          <MobileNavSpacer />
        </RightPanel>
      </PageWrapper>

      <MobileNav active={active} loading={loading} onSelect={handleSelect} />
    </Layout>
  );
}
