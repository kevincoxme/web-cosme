import type { RouteObject } from 'react-router-dom';
import { createElement } from 'react';

import { HomePage } from './HomePage';

export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: createElement(HomePage),
  },
];
