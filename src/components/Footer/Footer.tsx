import { Box, Typography } from '@mui/material';
import { FooterContainer, FooterLink, FooterLinksList } from './elements';

const Footer = () => {
  return (
    <FooterContainer>
      <Box>
        <Typography component="p" sx={{ fontSize: 14 }}>
          &#169; {new Date().getFullYear()} Copyright All Right Reserved
        </Typography>
      </Box>
      <Box>
        <FooterLinksList>
          <Box component="li">
            <FooterLink
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bedimcode/portfolio-responsive-complete"
            >
              Bedimcode
            </FooterLink>
          </Box>
          <Box component="li">
            <FooterLink target="_blank" rel="noreferrer" href="http://www.freepik.com">
              Freepik
            </FooterLink>
          </Box>
        </FooterLinksList>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
