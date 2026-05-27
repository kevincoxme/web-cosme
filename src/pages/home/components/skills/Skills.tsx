import { IconType } from 'react-icons';
import { Section, SectionTitle } from '../home/elements';
import { SkillIconLabel, SkillItem, SkillsCategory, SkillsSection } from './elements';

import {
  SiBitbucket,
  SiClaude,
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
  SiOpenai,
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
import { SkillsResponseBody } from '../../data/mockApi';
import {
  AwsAmplify,
  AwsAppRunner,
  AwsCognito,
  AwsECS,
  AwsLambda,
  AwsParameterStore,
  AwsS3,
  AwsSecretsManager,
  AwsSES,
  AwsWAF,
} from './AwsIcons';

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
  ChatGPT: SiOpenai,
  Codex: SiOpenai,
  Cursor: VscCode,
  'Claude Code': SiClaude,
  S3: AwsS3,
  'Secrets Manager': AwsSecretsManager,
  'Parameter Store': AwsParameterStore,
  Amplify: AwsAmplify,
  'App Runner': AwsAppRunner,
  WAF: AwsWAF,
  ECS: AwsECS,
  Lambda: AwsLambda,
  Cognito: AwsCognito,
  SES: AwsSES,
};

type Props = {
  data: SkillsResponseBody;
};

const Skills = ({ data }: Props) => {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      {data.categories.map((group, index) => (
        <div key={`${group.name}-${index}`} style={{ marginBottom: '1.5rem' }}>
          <SkillsCategory>{group.name}</SkillsCategory>
          <SkillsSection>
            {group.items.map((name, skillIndex) => {
              const SkillIcon = skillIconMap[name] ?? VscCode;
              return (
                <SkillItem key={skillIndex}>
                  <SkillIcon style={{ fontSize: '1.6rem', color: 'var(--first-color)' }} />
                  <SkillIconLabel>{name}</SkillIconLabel>
                </SkillItem>
              );
            })}
          </SkillsSection>
        </div>
      ))}
    </Section>
  );
};

export default Skills;
