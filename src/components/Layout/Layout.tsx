import React from 'react';
import { LayoutContainer } from './elements';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};
