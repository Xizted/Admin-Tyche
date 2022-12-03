import { Col, Row } from 'reactstrap';
import TabsVerticalLeft from '@components/tabsverticalleft';

import { Tab } from '@src/interfaces/Tab';
import Alert from '@src/@core/components/alert';
import ViewPDF from '@src/@core/components/view-pdf';

const tabs: Tab[] = [
  {
    id: '1',
    title: 'Cedula',
    Element: <ViewPDF link='http://localhost:3000/file.pdf' name='cedula' />,
  },
];

const AttachedDocuments = () => {
  return (
    <Row>
      <Col sm={12}>
        <h2>Documentos adjuntos del Prestamista</h2>
        <hr />
      </Col>
      <Col sm={12}>
        {tabs.length ? (
          <TabsVerticalLeft tabs={tabs} />
        ) : (
          <Alert color='danger' title='No hay Documentos' />
        )}
      </Col>
    </Row>
  );
};

export default AttachedDocuments;
