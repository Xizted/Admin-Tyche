import { lazy } from 'react';
const ListLenders = lazy(
  () => import('../../views/dashboard/listApplications/ListLenders')
);

const LenderDetail = lazy(
  () => import('../../views/dashboard/listApplications/ListLenders/Details')
);

const ListBorrowers = lazy(
  () => import('../../views/dashboard/listApplications/ListBorrowers')
);
const PendingInvestments = lazy(
  () => import('../../views/dashboard/listApplications/PendingInvestments')
);
const OutstandingLoans = lazy(
  () => import('../../views/dashboard/listApplications/OutstandingLoans')
);

const ListsApplicationsRoutes = [
  {
    path: '/list-registration-applications/lender',
    element: <ListLenders />,
  },
  {
    element: <LenderDetail />,
    path: '/list-registration-applications/lender/:id',
  },
  {
    path: '/list-registration-applications/borrower',
    element: <ListBorrowers />,
  },
  {
    path: '/list-registration-applications/pending-investments',
    element: <PendingInvestments />,
  },
  {
    path: '/list-registration-applications/outstanding-loans',
    element: <OutstandingLoans />,
  },
];

export default ListsApplicationsRoutes;
