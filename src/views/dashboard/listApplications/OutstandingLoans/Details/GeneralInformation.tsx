import { Col, Input, Label, Row } from 'reactstrap';

const GeneralInformation = () => {
  return (
    <Row>
      <Col sm={12}>
        <h2>Información General del Solicitante</h2>
        <hr />
      </Col>
      <Col sm={12} md={6}>
        <Row>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='nameVertical'>
              First Name
            </Label>
            <Input
              disabled
              type='text'
              name='name'
              id='nameVertical'
              placeholder='First Name'
              value={'Jhon Doe'}
            />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='EmailVertical'>
              Email
            </Label>
            <Input
              disabled
              type='email'
              name='Email'
              id='EmailVertical'
              placeholder='Email'
              value={'Jhon@doe.com'}
            />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='mobileVertical'>
              Mobile
            </Label>
            <Input
              disabled
              type='text'
              name='mobile'
              id='mobileVertical'
              placeholder='Mobile'
              value={'04163956831'}
            />
          </Col>
        </Row>
      </Col>
      <Col sm={12} md={6}>
        <Row>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='nameVertical'>
              First Name
            </Label>
            <Input
              disabled
              type='text'
              name='name'
              id='nameVertical'
              placeholder='First Name'
              value={'Jhon Doe'}
            />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='EmailVertical'>
              Email
            </Label>
            <Input
              disabled
              type='email'
              name='Email'
              id='EmailVertical'
              placeholder='Email'
              value={'Jhon@doe.com'}
            />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='mobileVertical'>
              Mobile
            </Label>
            <Input
              disabled
              type='number'
              name='mobile'
              id='mobileVertical'
              placeholder='Mobile'
              value={'04163956831'}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GeneralInformation;
