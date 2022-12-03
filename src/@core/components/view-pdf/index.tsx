import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
//@ts-ignore
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import Alert from '../alert';

interface ViewPDFProps {
  link: string;
  name: string;
}

const ViewPDF = ({ link, name }: ViewPDFProps) => {
  const [error, setError] = useState('');

  if (error)
    return (
      <Alert title='Ha Ocurrido un error al mostrar el pdf' color='danger' />
    );

  return (
    <Row className='overflow-hidden'>
      <Col sm={12} className='text-end'>
        <a
          className='btn btn-primary'
          href={link}
          target='_blank'
          download={`${name}.pdf`}
          rel='noopener'
        >
          Descargar
        </a>
      </Col>
      <Col sm={12} className='mt-1'>
        <Document
          file={link}
          onLoadError={(e: any) => {
            setError(e);
            console.log(e);
          }}
        >
          <Page pageNumber={1} />
        </Document>
      </Col>
    </Row>
  );
};

export default ViewPDF;
