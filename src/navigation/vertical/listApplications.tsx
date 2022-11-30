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
    navLink: '/list/lender',
  },
  {
    id: 'borrowers-registration',
    title: 'Registros Prestatario',
    icon: <Users size={20} />,
    navLink: '/list/borrower',
  },
  {
    id: 'pending-investments',
    title: 'Inversiones Pendientes',
    icon: <DollarSign size={20} />,
    navLink: '/list/pending-investments',
  },

  {
    id: 'outstanding-loans',
    title: 'Prestamos Pendientes',
    icon: <FilePlus size={20} />,
    navLink: '/list/outstanding-loans',
  },
];
