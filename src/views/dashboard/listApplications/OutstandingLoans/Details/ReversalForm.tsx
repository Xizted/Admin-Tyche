import ButtonConfirmationAsync from '@src/@core/components/button-confirmation-async';
import InputWithCheckbox from '@src/@core/components/input-with-checkbox';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

interface ReversalFormValues {
  amount: string;
  term: string;
  riskpooling: string;
  name: string;
  lastName: string;
  mobile: string;
  email: string;
  test: string;
  test2: string;
  observation: string;
}

const ReversalForm = () => {
  const [schema, setSchema] = useState({
    observation: Yup.string().required(),
  });

  const ReversalFormSchema = Yup.object().shape(schema);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReversalFormValues>({
    mode: 'all',
    defaultValues: {
      amount: '',
      term: '',
      riskpooling: '',
      name: '',
      lastName: '',
      mobile: '',
      email: '',
      test: '',
      test2: '',
      observation: '',
    },
    resolver: yupResolver(ReversalFormSchema),
  });

  const onSubmit = (values: ReversalFormValues) => {
    const filterValues = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value)
    );
    console.log(filterValues);
  };

  return (
    <Form>
      <Row>
        <Col sm='12'>
          <h3 className='text-center my-2'>Solicitud Faltante o Erronea</h3>
        </Col>
        <Col sm={12}>
          <Controller
            control={control}
            name='amount'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='Monto'
                invalid={errors.amount && true}
              />
            )}
          />
          <Controller
            control={control}
            name='term'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='Plazo'
                invalid={errors.term && true}
              />
            )}
          />
          <Controller
            control={control}
            name='riskpooling'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='Agrupación de Riesgo'
                invalid={errors.riskpooling && true}
              />
            )}
          />
          <Controller
            control={control}
            name='name'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='Nombre'
                invalid={errors.name && true}
              />
            )}
          />
          <Controller
            control={control}
            name='lastName'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='Apellido'
                invalid={errors.lastName && true}
              />
            )}
          />
          <Controller
            control={control}
            name={'mobile'}
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='Telefono'
                invalid={errors.mobile && true}
              />
            )}
          />
          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                type='email'
                {...field}
                placeholder='Motivo'
                label='Email'
                invalid={errors.email && true}
              />
            )}
          />
          <Controller
            control={control}
            name='test'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='test'
                invalid={errors.test && true}
              />
            )}
          />
          <Controller
            control={control}
            name='test2'
            render={({ field }) => (
              <InputWithCheckbox
                setSchema={setSchema}
                {...field}
                type='text'
                placeholder='Motivo'
                label='test2'
                invalid={errors.test2 && true}
              />
            )}
          />
          <Controller
            control={control}
            name='observation'
            render={({ field }) => (
              <div>
                <Label className='form-label' for='observations'>
                  Observaciones
                </Label>
                <Input
                  type='textarea'
                  {...field}
                  id='observations'
                  placeholder='Observaciones'
                  style={{ minHeight: '100px' }}
                  rows='3'
                  cols='10'
                  invalid={errors.observation && true}
                />
              </div>
            )}
          />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col sm={12}>
          <div className='d-flex justify-content-end'>
            <ButtonConfirmationAsync
              title='Reversar'
              color='primary'
              titleWarning='¿Estás seguro de que quieres reversar esta solicitud?'
              titleSuccess='Solicitud Reversada'
              textSuccess='La solicitud fue reversada con éxito'
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default ReversalForm;
