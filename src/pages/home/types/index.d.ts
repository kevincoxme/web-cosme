import { ReactNode } from 'react';

export type Socials = Array<{
  url: string;
  icon: ReactNode;
}>;

export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export type Experience = {
  title: string;
  period: string;
  company: string;
  description: string;
  tech: string[];
};

export type Work = { title: string; href: string; description: string };

export type Portfolio = {
  experience: number;
  company: string;
  socials: Socials;
  skillGroups: Array<SkillGroup>;
  experiences: Array<Experience>;
  work: Array<Work>;
};
