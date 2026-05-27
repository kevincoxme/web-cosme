import React from 'react';
import { LayoutContainer } from './elements';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
