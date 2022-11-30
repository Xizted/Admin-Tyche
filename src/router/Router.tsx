// ** Router imports
import { Navigate, useRoutes } from 'react-router-dom';

// ** GetRoutes
import { getRoutes } from './routes';

// ** Hooks Imports
import { useLayout } from '@hooks/useLayout';
import { lazy } from 'react';
import { getHomeRouteForLoggedInUser, getUserData } from '@src/utility/Utils';
import BlankLayout from '@src/@core/layouts/BlankLayout';
import NotAuthorized from '@src/views/NotAuthorized';

const Login = lazy(() => import('../views/auth/Login'));
const Error = lazy(() => import('../views/Error'));

const Router = () => {
  // ** Hooks
  const { layout } = useLayout();

  const allRoutes = getRoutes(layout);
  const getHomeRoute = () => {
    const user = getUserData();
    if (user) {
      return getHomeRouteForLoggedInUser(user.role);
    }
    return '/login';
  };

  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: '/login',
      element: <BlankLayout />,
      children: [{ path: '/login', element: <Login /> }],
    },
    {
      path: '/auth/not-auth',
      element: <BlankLayout />,
      children: [{ path: '/auth/not-auth', element: <NotAuthorized /> }],
    },
    {
      path: '*',
      element: <BlankLayout />,
      children: [{ path: '*', element: <Error /> }],
    },
    ...allRoutes,
  ]);

  return routes;
};

export default Router;
