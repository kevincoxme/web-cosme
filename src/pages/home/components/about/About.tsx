import {
  AboutInfo,
  AboutInfoIcon,
  AboutInfoItem,
  AboutSubtitle,
  BodyText,
  ButtonSecondarySpacing,
  TagRow,
  Tag,
} from './elements';
import { Box } from '@mui/material';
import { FaBriefcase, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Section, SectionTitle } from '../home/elements';
import { AboutResponseBody } from '../../data/mockApi';

type Props = {
  data: AboutResponseBody;
};

const About = ({ data }: Props) => {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <AboutSubtitle>
        {data.first_name} {data.last_name}
      </AboutSubtitle>
      <BodyText>{data.bio}</BodyText>

      <AboutInfo>
        <AboutInfoItem>
          <AboutInfoIcon>
            <FaMapMarkerAlt />
          </AboutInfoIcon>
          <Box component="span">{data.location}</Box>
        </AboutInfoItem>
        <AboutInfoItem>
          <AboutInfoIcon>
            <FaBriefcase />
          </AboutInfoIcon>
          <Box component="span">{data.current_company}</Box>
        </AboutInfoItem>
        <AboutInfoItem>
          <AboutInfoIcon>
            <FaCalendarAlt />
          </AboutInfoIcon>
          <Box component="span">{data.experience_years}+ years experience</Box>
        </AboutInfoItem>
        <AboutInfoItem>
          <AboutInfoIcon>
            <FaEnvelope />
          </AboutInfoIcon>
          <Box component="span">{data.email}</Box>
        </AboutInfoItem>
      </AboutInfo>

      <Box sx={{ mt: 2.5 }}>
        <BodyText
          sx={{
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            mb: 0.75,
            opacity: 0.5,
          }}
        >
          specializations
        </BodyText>
        <TagRow>
          {data.specializations.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </TagRow>
      </Box>

      <Box sx={{ mt: 1.5 }}>
        <BodyText
          sx={{
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            mb: 0.75,
            opacity: 0.5,
          }}
        >
          languages
        </BodyText>
        <TagRow>
          {data.languages.map((l) => (
            <Tag key={l} accent>
              {l}
            </Tag>
          ))}
        </TagRow>
      </Box>

      <Box sx={{ mt: 3 }}>
        <ButtonSecondarySpacing
          href={`${import.meta.env.BASE_URL}${data.cv_url}`}
          target="_blank"
          rel="noreferrer"
          underline="none"
          text="View CV"
          download
        />
      </Box>
    </Section>
  );
};

export default About;
