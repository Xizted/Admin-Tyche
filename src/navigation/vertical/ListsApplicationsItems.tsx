// ** Icons Import
import { Users, DollarSign, FilePlus } from 'react-feather';

export default [
  {
    header: 'Listado de Solicitudes',
  },
  {
    id: 'lenders-registration',
    title: 'Registros Prestamista',
    icon: <Users size={20} />,
    navLink: '/list-registration-applications/lender',
  },
  {
    id: 'borrowers-registration',
    title: 'Registros Prestatario',
    icon: <Users size={20} />,
    navLink: '/list-registration-applications/borrower',
  },
  {
    id: 'pending-investments',
    title: 'Inversiones Pendientes',
    icon: <DollarSign size={20} />,
    navLink: '/list-registration-applications/pending-investments',
  },

  {
    id: 'outstanding-loans',
    title: 'Prestamos Pendientes',
    icon: <FilePlus size={20} />,
    navLink: '/list-registration-applications/outstanding-loans',
  },
];
