import { createBrowserRouter } from 'react-router-dom';

import { homeRoutes } from '@/pages/home/routes';

export const router = createBrowserRouter([...homeRoutes], {
  basename: '/web-cosme',
});
