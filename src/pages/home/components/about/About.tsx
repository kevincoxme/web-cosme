import {
  AboutImage,
  AboutImageWrap,
  AboutInfo,
  AboutInfoIcon,
  AboutInfoItem,
  AboutSubtitle,
  BodyText,
  ButtonSecondarySpacing,
  Grid,
} from './elements';
import { Box } from '@mui/material';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Section, SectionTitle } from '../home/elements';

const About = ({
  company = 'Vananaz Technologies Inc.',
  experience,
}: {
  company: string;
  experience: number;
}) => {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <Grid>
        <AboutImageWrap>
          <AboutImage src="/assets/img/uploads/Nerd-pana.png" alt="" />
        </AboutImageWrap>
        <Box>
          <AboutSubtitle>I&apos;m Kevin Monteza</AboutSubtitle>
          <BodyText>
            A Software Engineer with more than {experience} years of quality PHP, MySQL and NodeJS
            development experience. Skilled at creating applications with Laravel, ExpressJS,
            developing user interfaces using frontend libraries such as ReactJS and VueJS. Proven
            team player when working with co-developers.
          </BodyText>
          <BodyText>
            I specialize in full-stack web development, leading development teams, and delivering
            high-quality software solutions. My expertise includes building scalable applications,
            implementing CI/CD pipelines, and following best practices like SOLID principles and
            OOP.
          </BodyText>
          <BodyText>
            Currently working as a Software Engineer at {company}, where I lead a small team of
            developers and contribute to various Laravel and Nodejs/React-based projects using AWS
            Cloud. I&apos;m passionate about writing clean, maintainable code and continuously
            improving development processes.
          </BodyText>
          <AboutInfo>
            <AboutInfoItem>
              <AboutInfoIcon>
                <FaMapMarkerAlt />
              </AboutInfoIcon>
              <Box component="span">Location: Philippines - WFH</Box>
            </AboutInfoItem>
            <AboutInfoItem>
              <AboutInfoIcon>
                <FaBriefcase />
              </AboutInfoIcon>
              <Box component="span">Current: Software Engineer at {company}</Box>
            </AboutInfoItem>
            <AboutInfoItem>
              <AboutInfoIcon>
                <FaCalendarAlt />
              </AboutInfoIcon>
              <Box component="span">Experience: {experience}+ Years</Box>
            </AboutInfoItem>
          </AboutInfo>
          <Box component="br" />
          <ButtonSecondarySpacing
            href="/assets/pdf/Kevin Monteza Resume.pdf"
            target="_blank"
            rel="noreferrer"
            underline="none"
            text="View CV"
          />
        </Box>
      </Grid>
    </Section>
  );
};

export default About;
