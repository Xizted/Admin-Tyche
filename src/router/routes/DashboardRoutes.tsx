import { lazy } from 'react';
const Home = lazy(() => import('../../views/dashboard/Home'));

const DashboardRoutes = [
  {
    path: '/home',
    element: <Home />,
    meta: {
      appLayout: true,
    },
  },
];

export default DashboardRoutes;
