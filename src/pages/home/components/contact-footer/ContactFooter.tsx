import { FiClock, FiMail, FiMapPin } from 'react-icons/fi';
import { ContactFooter, FooterCredit, FooterItem, FooterLink, MobileFooter } from './elements';

function FooterContent() {
  return (
    <>
      <FooterItem>
        <FiMail />
        <FooterLink href="mailto:kevin.g.monteza@gmail.com">kevin.g.monteza@gmail.com</FooterLink>
      </FooterItem>
      <FooterItem>
        <FiMapPin />
        Philippines — WFH
      </FooterItem>
      <FooterItem>
        <FiClock />
        Open to Opportunities
      </FooterItem>
      <FooterCredit href="https://polar.sh" target="_blank" rel="noreferrer">
        Inspired by polar.sh
      </FooterCredit>
    </>
  );
}

export function DesktopFooter() {
  return (
    <ContactFooter>
      <FooterContent />
    </ContactFooter>
  );
}

export function PortfolioMobileFooter() {
  return (
    <MobileFooter>
      <FooterContent />
    </MobileFooter>
  );
}
