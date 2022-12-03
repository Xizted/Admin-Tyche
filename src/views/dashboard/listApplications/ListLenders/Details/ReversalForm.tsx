import ButtonConfirmationAsync from '@src/@core/components/button-confirmation-async';
import InputWithCheckbox from '@src/@core/components/input-with-checkbox';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ReversalFormValues {
  name: string;
  lastName: string;
  mobile: string;
  email: string;
  test: string;
  test2: string;
  observation: string;
}

const ReversalFormSchema = Yup.object().shape({
  name: Yup.string().optional(),
  lastName: Yup.string().optional(),
  mobile: Yup.string().optional(),
  email: Yup.string().optional(),
  test: Yup.string().optional(),
  test2: Yup.string().optional(),
  observation: Yup.string().required(),
});

const ReversalForm = () => {
  const { control, handleSubmit } = useForm<ReversalFormValues>({
    mode: 'all',
    defaultValues: {
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
        <Col sm={12}>
          <Controller
            control={control}
            name='name'
            render={({ field }) => (
              <InputWithCheckbox
                {...field}
                type='text'
                placeholder='Razón'
                label='Nombre'
              />
            )}
          />
          <Controller
            control={control}
            name='lastName'
            render={({ field }) => (
              <InputWithCheckbox
                {...field}
                type='text'
                placeholder='Razón'
                label='Apellido'
              />
            )}
          />
          <Controller
            control={control}
            name={'mobile'}
            render={({ field }) => (
              <InputWithCheckbox
                {...field}
                type='text'
                placeholder='Razón'
                label='Telefono'
              />
            )}
          />
          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <InputWithCheckbox
                type='email'
                {...field}
                placeholder='Razón'
                label='Email'
              />
            )}
          />
          <Controller
            control={control}
            name='test'
            render={({ field }) => (
              <InputWithCheckbox
                {...field}
                type='text'
                placeholder='Razón'
                label='test'
              />
            )}
          />
          <Controller
            control={control}
            name='test2'
            render={({ field }) => (
              <InputWithCheckbox
                {...field}
                type='text'
                placeholder='Razón'
                label='test2'
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
