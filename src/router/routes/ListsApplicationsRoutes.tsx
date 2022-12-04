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

const BorrowerDetail = lazy(
  () => import('../../views/dashboard/listApplications/ListBorrowers/Details')
);

const PendingInvestments = lazy(
  () => import('../../views/dashboard/listApplications/PendingInvestments')
);

const InvestmentsDetail = lazy(
  () =>
    import('../../views/dashboard/listApplications/PendingInvestments/Details')
);

const OutstandingLoans = lazy(
  () => import('../../views/dashboard/listApplications/OutstandingLoans')
);

const OutstandingLoanDetail = lazy(
  () =>
    import('../../views/dashboard/listApplications/OutstandingLoans/Details')
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
    element: <BorrowerDetail />,
    path: '/list-registration-applications/borrower/:id',
  },
  {
    path: '/list-registration-applications/pending-investments',
    element: <PendingInvestments />,
  },
  {
    element: <InvestmentsDetail />,
    path: '/list-registration-applications/pending-investments/:id',
  },
  {
    path: '/list-registration-applications/outstanding-loans',
    element: <OutstandingLoans />,
  },
  {
    element: <OutstandingLoanDetail />,
    path: '/list-registration-applications/outstanding-loans/:id',
  },
];

export default ListsApplicationsRoutes;
