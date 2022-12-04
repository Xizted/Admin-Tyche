import { formatAsMoney } from '@src/utility/Utils';
import { Col, Input, Label, Row } from 'reactstrap';

const LoanInformation = () => {
  return (
    <Row>
      <Col sm={12}>
        <h2>Información del Prestamo</h2>
        <hr />
      </Col>
      <Col sm={12} md={6}>
        <Row>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='amount'>
              Monto
            </Label>
            <Input
              disabled
              type='text'
              name='amount'
              id='amount'
              placeholder='Monto'
              value={formatAsMoney(1000000, 'DOP')}
            />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='term'>
              Plazo
            </Label>
            <Input
              disabled
              type='text'
              name='term'
              id='term'
              placeholder='term'
              value={'6 meses'}
            />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='riskpooling'>
              Agrupación de Riesgo
            </Label>
            <Input
              disabled
              type='text'
              name='riskpooling'
              id='riskpooling'
              placeholder='Agrupación de Riesgo'
              value={'A'}
            />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='reason'>
              Razón
            </Label>
            <Input
              disabled
              type='textarea'
              name='reason'
              id='reason'
              placeholder='Razón'
              value={'Lorem Ipsum.'}
              style={{  minHeight: '100px', resize: 'none'  }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoanInformation;
