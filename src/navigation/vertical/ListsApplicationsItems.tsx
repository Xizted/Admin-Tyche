// ** Icons Import
import { Users } from 'react-feather';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';

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
    icon: <FaUsers size={20} />,
    navLink: '/list-registration-applications/borrower',
  },
  {
    id: 'pending-investments',
    title: 'Inversiones Pendientes',
    icon: <GiReceiveMoney size={20} />,
    navLink: '/list-registration-applications/pending-investments',
  },

  {
    id: 'outstanding-loans',
    title: 'Prestamos Pendientes',
    icon: <GiPayMoney size={20} />,
    navLink: '/list-registration-applications/outstanding-loans',
  },
];
