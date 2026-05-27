import { useState } from 'react';
import {
  HomeData,
  HomeDescription,
  HomeImageCircle,
  HomeSection,
  HomeSocial,
  HomeSocialLink,
  HomeSubtitle,
  HomeTitle,
  HomeTitleColor,
} from './elements';
import { Box, Modal, styled } from '@mui/material';
import { Socials } from '../../types';
import { HomeResponseBody } from '../../data/mockApi';

const MetaRow = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: '1.25rem',
});

const MetaBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  fontSize: '0.72rem',
  color: 'var(--text-muted)',
  padding: '3px 10px',
  borderRadius: '20px',
  border: '1px solid var(--border)',
  letterSpacing: '0.02em',
});

const AvailBadge = styled(MetaBadge)({
  color: '#98c379',
  borderColor: 'rgba(152,195,121,0.3)',
  backgroundColor: 'rgba(152,195,121,0.07)',
  '&::before': {
    content: '""',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#98c379',
    display: 'inline-block',
  },
});

const ClickableCircle = styled(HomeImageCircle)({
  cursor: 'zoom-in',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'scale(1.04)',
    boxShadow: '0 0 0 3px rgba(237,105,88,0.4)',
  },
});

const LightboxBackdrop = styled(Box)({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.92)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'zoom-out',
  zIndex: 1300,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
});

const LightboxImg = styled('img')({
  maxWidth: '90vw',
  maxHeight: '90vh',
  objectFit: 'contain',
  borderRadius: '12px',
  boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
  userSelect: 'none',
});

const CloseHint = styled(Box)({
  position: 'fixed',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '0.72rem',
  color: 'rgba(255,255,255,0.35)',
  letterSpacing: '0.08em',
  pointerEvents: 'none',
});

export type Props = {
  data: HomeResponseBody;
  socials: Socials;
};

export function Home({ data, socials }: Props) {
  const [open, setOpen] = useState(false);
  const firstName = data.name.split(' ')[0];
  const lastName = data.name.split(' ').slice(1).join(' ');

  return (
    <HomeSection>
      <ClickableCircle onClick={() => setOpen(true)}>
        <img src={data.profilePhotoUrl} alt={data.name} />
      </ClickableCircle>

      <HomeData>
        <HomeSubtitle>{data.role}</HomeSubtitle>
        <HomeTitle>
          Hi, I&apos;m <HomeTitleColor>{firstName}</HomeTitleColor>
          <br />
          {lastName}.
        </HomeTitle>
        <HomeDescription>{data.description}</HomeDescription>
        <MetaRow>
          {data.availability === 'open_to_work' && <AvailBadge>open to work</AvailBadge>}
          <MetaBadge>📍 {data.location}</MetaBadge>
          <MetaBadge>⏱ {data.experience_years}+ yrs exp</MetaBadge>
        </MetaRow>
        <HomeSocial>
          {socials.map((social, index) => (
            <HomeSocialLink
              key={index}
              target="_blank"
              rel="noreferrer"
              href={social.url}
              underline="none"
            >
              {social.icon}
            </HomeSocialLink>
          ))}
        </HomeSocial>
      </HomeData>

      <Modal open={open} onClose={() => setOpen(false)} disableAutoFocus>
        <LightboxBackdrop onClick={() => setOpen(false)}>
          <LightboxImg
            src={data.profilePhotoUrl}
            alt={data.name}
            onClick={(e) => e.stopPropagation()}
          />
          <CloseHint>click anywhere to close</CloseHint>
        </LightboxBackdrop>
      </Modal>
    </HomeSection>
  );
}
