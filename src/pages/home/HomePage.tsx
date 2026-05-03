import { Layout } from '@/components/Layout';
import { Contact, Home, About, Skills, Experience, Work } from './components';
import { FaGithub, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import useGetPortfolio from './api/getPortfolio';
import { Socials } from './types';

export function HomePage() {
  const { experience, company, socials, skillGroups, experiences, work } = useGetPortfolio();
  const formattedSocials: Socials = socials.map((item) => {
    const getSocialIcon = (url: string) => {
      if (url.includes('linkedin.com')) return <FaLinkedinIn />;
      if (url.includes('github.com')) return <FaGithub />;
      if (url.includes('skype.com')) return <FaSkype />;
      return null;
    };

    return {
      url: item.url,
      icon: getSocialIcon(item.url),
    };
  });

  return (
    <Layout>
      <Home experience={experience} socials={formattedSocials} />
      <About experience={experience} company={company} />
      <Skills skillGroups={skillGroups} />
      <Experience experiences={experiences} />
      <Work work={work} />
      <Contact socials={formattedSocials} />
    </Layout>
  );
}
