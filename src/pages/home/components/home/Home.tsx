import { Box } from '@mui/material';
import {
  HomeCtaText,
  HomeData,
  HomeDescription,
  HomeImageWrap,
  HomeSection,
  HomeSocial,
  HomeSocialLink,
  HomeSubtitle,
  HomeTitle,
  HomeTitleColor,
} from './elements';
import { ButtonLink } from '@/components';
import { Socials } from '../../types';
import laptopGuy from './../../../../assets/img/3236267.jpg';

export type Props = {
  experience: number;
  socials: Socials;
};

export function Home({ experience, socials }: Props) {
  return (
    <>
      <HomeSection id="home">
        <HomeData>
          <HomeTitle>
            Hi, I&apos;m <HomeTitleColor>Kevin!</HomeTitleColor>
            <br />
            Mid Software Engineer
          </HomeTitle>
          <HomeSubtitle>Software Engineer & Team Leader</HomeSubtitle>
          <HomeDescription>
            With over {experience} years of experience building scalable web applications, I
            specialize in transforming ideas into robust digital solutions. Passionate about clean
            code, modern technologies, and leading teams to deliver exceptional results.
          </HomeDescription>
          <HomeCtaText>
            Explore my work, skills, and experience below to see how I can help bring your next
            project to life.
          </HomeCtaText>
          <ButtonLink text="Learn More" href="#about" underline="none" />
        </HomeData>
        <HomeSocial>
          {socials.map((social, index) => {
            return (
              <HomeSocialLink
                key={index}
                target="_blank"
                rel="noreferrer"
                href={social.url}
                underline="none"
              >
                {social.icon}
              </HomeSocialLink>
            );
          })}
        </HomeSocial>
        <HomeImageWrap>
          <Box component="img" src={laptopGuy} alt="" />
        </HomeImageWrap>
      </HomeSection>
    </>
  );
}
