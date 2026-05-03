import { ButtonLinkContainer } from './elements';
import { LinkProps } from '@mui/material';

const ButtonLink = ({ text, ...props }: { text: string } & LinkProps) => {
  return <ButtonLinkContainer {...props}>{text}</ButtonLinkContainer>;
};

export default ButtonLink;
