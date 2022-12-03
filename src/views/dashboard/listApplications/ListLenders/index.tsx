import { Col, Row } from 'reactstrap';
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal';
import DataTable from '@components/data-table';
import { Edit, User, UserCheck, UserPlus, UserX } from 'react-feather';

import '@styles/react/apps/listApplications.scss';
import '@styles/react/libs/tables/react-dataTable-component.scss';
import { Link } from 'react-router-dom';

export const data = [
  {
    id: 1,
    full_name: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    start_date: '09/23/2016',
    salary: '$23896.35',
    age: '61',
    experience: '1 Year',
  },
  {
    id: 2,
    full_name: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    start_date: '05/20/2018',
    salary: '$13633.69',
    age: '63',
    experience: '3 Years',
    status: 2,
  },
  {
    id: 3,
    full_name: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    start_date: '03/24/2018',
    salary: '$13076.28',
    age: '66',
    experience: '6 Years',
    status: 5,
  },
  {
    id: 4,
    full_name: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    start_date: '12/03/2017',
    salary: '$12336.17',
    age: '22',
    experience: '2 Years',
    status: 2,
  },
  {
    id: 5,
    full_name: 'Harmonia Nisius',
    post: 'Senior Cost Accountant',
    email: 'hnisius4@gnu.org',
    city: 'Lucan',
    start_date: '08/25/2017',
    salary: '$10909.52',
    age: '33',
    experience: '3 Years',
    status: 2,
  },
  {
    id: 6,
    full_name: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    start_date: '06/01/2017',
    salary: '$17803.80',
    age: '61',
    experience: '1 Year',
    status: 1,
  },
  {
    id: 7,
    full_name: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    start_date: '10/15/2017',
    salary: '$18991.67',
    age: '59',
    experience: '9 Years',
    status: 3,
  },
  {
    id: 8,
    full_name: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    start_date: '11/05/2016',
    salary: '$19230.13',
    age: '55',
    experience: '5 Years',
    status: 3,
  },
  {
    id: 9,
    full_name: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    start_date: '12/29/2018',
    salary: '$11677.32',
    age: '39',
    experience: '9 Years',
    status: 5,
  },
];

const columns = [
  {
    name: 'Name',
    minWidth: '250px',
    sortable: (row) => row.full_name,
    cell: (row) => (
      <div className='d-flex align-items-center'>
        <div className='user-info text-truncate ms-1'>
          <span className='d-block fw-bold text-truncate'>{row.full_name}</span>
          <small>{row.post}</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: (row) => row.email,
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: (row) => row.start_date,
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: (row) => row.salary,
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: (row) => row.age,
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className='d-flex'>
          <Link to={`${row.id}`}>
            <Edit size={15} />
          </Link>
        </div>
      );
    },
  },
];

const ListLenders = () => {
  return (
    <div className='applications-list'>
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='Total Solicitudes'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{data.length}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Solicitudes Denegadas'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>2</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Solicitudes Aprobadas'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>3</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='Solicitudes Pendientes'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4</h3>}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <DataTable data={data} columns={columns} title={'Listado'} />
        </Col>
      </Row>
    </div>
  );
};

export default ListLenders;
