import { IconType } from 'react-icons';
import { Grid, Section, SectionTitle } from '../home/elements';
import {
  SkillIconLabel,
  SkillItem,
  SkillsCategory,
  SkillsSection,
  SkillsSubtitle,
  SkillsText,
} from './elements';

import {
  SiBitbucket,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiHtml5,
  SiInertia,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLaravel,
  SiLivewire,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';
import { FaAws, FaBootstrap, FaDocker, FaGitAlt, FaLinux } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { SkillGroup } from '../../types';

const skillIconMap: Record<string, IconType> = {
  React: SiReact,
  'Vue.js': SiVuedotjs,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Sass: SiSass,
  Bootstrap: FaBootstrap,
  'Tailwind CSS': SiTailwindcss,
  Redux: SiRedux,
  jQuery: SiJquery,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  PHP: SiPhp,
  Laravel: SiLaravel,
  GraphQL: SiGraphql,
  Livewire: SiLivewire,
  'Inertia.js': SiInertia,
  PHPUnit: SiPhp,
  Jest: SiJest,
  OOP: VscCode,
  SOLID: VscCode,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Firebase: SiFirebase,
  Git: SiGit || FaGitAlt,
  GitHub: SiGithub,
  Docker: FaDocker,
  AWS: FaAws,
  Linux: FaLinux,
  NPM: SiNpm,
  Webpack: SiWebpack,
  Postman: SiPostman,
  GitLab: SiGitlab,
  Bitbucket: SiBitbucket,
  'CI/CD': VscCode,
  'Laravel Sail': FaDocker,
};

const Skills = ({ skillGroups }: { skillGroups: Array<SkillGroup> }) => {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <Grid sx={{ width: '100%' }}>
        <SkillsSubtitle as="h2">Professional Skills</SkillsSubtitle>
        <SkillsText>A comprehensive overview of technologies and tools I work with.</SkillsText>
      </Grid>
      {skillGroups.map((group, index) => (
        <Grid key={`${group.title}-${index}`} sx={{ width: '100%' }}>
          <SkillsCategory>{group.title}</SkillsCategory>
          <SkillsSection>
            {group.items.map((skill, skillIndex) => {
              const SkillIcon = skillIconMap[skill.icon] ?? VscCode;
              return (
                <SkillItem key={skillIndex}>
                  <SkillIcon style={{ fontSize: '3rem', color: 'var(--first-color)' }} />
                  <SkillIconLabel>{skill.name}</SkillIconLabel>
                </SkillItem>
              );
            })}
          </SkillsSection>
        </Grid>
      ))}
    </Section>
  );
};

export default Skills;
