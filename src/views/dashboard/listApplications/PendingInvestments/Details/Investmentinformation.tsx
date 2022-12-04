import { formatAsMoney } from '@src/utility/Utils';
import { Col, Input, Label, Row } from 'reactstrap';

const Investmentinformation = () => {
  return (
    <Row>
      <Col sm={12}>
        <h2>Información de la Inversión</h2>
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
        </Row>
      </Col>
    </Row>
  );
};

export default Investmentinformation;
