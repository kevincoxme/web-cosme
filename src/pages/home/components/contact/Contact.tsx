import { Box } from '@mui/material';
import { HomeSocial, HomeSocialLink, Section, SectionTitle } from '../home/elements';
import {
  BodyText,
  ContactContainer,
  ContactDetailItem,
  ContactDetails,
  ContactDetailText,
  ContactDetailTitle,
  ContactIcon,
  ContactInfo,
  ContactSubtitle,
} from './elements';
import { FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Socials } from '../../types';

const Contact = ({ socials }: { socials: Socials }) => {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <ContactSubtitle>Get In Touch</ContactSubtitle>
          <BodyText>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your team.
          </BodyText>
          <ContactDetails>
            <ContactDetailItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <Box>
                <ContactDetailTitle>Email</ContactDetailTitle>
                <ContactDetailText>kevin.g.monteza@gmail.com</ContactDetailText>
              </Box>
            </ContactDetailItem>
            <ContactDetailItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <Box>
                <ContactDetailTitle>Location</ContactDetailTitle>
                <ContactDetailText>Available for Remote Work</ContactDetailText>
              </Box>
            </ContactDetailItem>
            <ContactDetailItem>
              <ContactIcon>
                <FaClock />
              </ContactIcon>
              <Box>
                <ContactDetailTitle>Availability</ContactDetailTitle>
                <ContactDetailText>Open to Opportunities</ContactDetailText>
              </Box>
            </ContactDetailItem>
          </ContactDetails>

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
        </ContactInfo>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
