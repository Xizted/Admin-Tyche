// ** React Imports
import { Link, useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SpinnerComponent from '@src/@core/components/spinner/Fallback-spinner';
import { useState } from 'react';
import { signIn } from '@src/services/auth';
// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle';

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
} from 'reactstrap';

// ** Styles
import '@styles/react/pages/page-authentication.scss';
import { getHomeRouteForLoggedInUser, getUserData } from '@src/utility/Utils';
import jwtDecode from 'jwt-decode';

const User = {
  id: 1,
  fullName: 'Osmar Ortiz',
  username: 'xizted',
  email: 'admin@tyche.com',
  role: 'admin',
  ability: [{ action: 'manage', subject: 'all' }],
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY5MTE1MTUxLCJleHAiOjE2NjkxMTU3NTF9.eHCIQOA-0tYuXOfJih8jQrrRkmwHdh-Qykz_rk8bPmw',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY5MTE1MTUxLCJleHAiOjE2NjkxMTU3NTF9.ynGEMcNu83SK4TyhoZHy1LaLK89_JpXj7Ev__SQgr5g',
};

const Login = () => {
  const navigate = useNavigate();

  const [login] = useMutation(LOGIN_USER, {
    fetchPolicy: 'no-cache',
  });

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginSchema),
    defaultValues: { username: '', password: '' },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    if (!values) {
      console.log('Values have not been provided');
    }
    setIsLoading(true);
    const result = await login({
      variables: {
        username: `${values.username}`,
        password: `${values.password}`,
      },
    });
    if (result.errors) {
      console.log(result.errors);
    }
    const token = result.data.login.accessToken;
    if (!token) {
      console.log('login unsuccessful.');
    }
    signIn(token);
    setIsLoading(false);
    localStorage.setItem(
      'userData',
      JSON.stringify({ ...jwtDecode(token), role: 'admin' })
    );
    const user = getUserData();
    if (user) {
      navigate(getHomeRouteForLoggedInUser(user.role));
    }
  };

  if (isLoading) return <SpinnerComponent />;

  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link
              className='brand-logo'
              to='/'
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='104.348'
                height='43.838'
                viewBox='0 0 104.348 43.838'
              >
                <g transform='translate(15031.348 -2976.162)'>
                  <path
                    d='M-980.567-122.951h-6.262l7.268-15.527-8.247-16.779h6.381l4.971,10.4,4.763-10.4h6.288l-15.161,32.305Zm26.057-10.008h0a11.147,11.147,0,0,1-8.181-3.066,11.031,11.031,0,0,1-3.08-8.155,11.692,11.692,0,0,1,2.975-8.272,10.278,10.278,0,0,1,7.854-3.2h.115a12.979,12.979,0,0,1,2.887.326,18.381,18.381,0,0,1,3.222,1.161l.483.209v6.277l-1.239-.783a10.05,10.05,0,0,0-5.282-1.822,4.956,4.956,0,0,0-3.813,1.652,5.992,5.992,0,0,0-1.54,4.332,5.74,5.74,0,0,0,1.644,4.371,6.211,6.211,0,0,0,4.541,1.6,12.6,12.6,0,0,0,5-1.278l1.135-.509v5.78l-.522.2A17.716,17.716,0,0,1-954.509-132.959Zm42.143-.052a10.4,10.4,0,0,1-5.884-1.526,11,11,0,0,1-3.588-4.032,12.272,12.272,0,0,1-1.344-5.819,11.627,11.627,0,0,1,2.831-8.089,9.727,9.727,0,0,1,7.424-3.171,8.968,8.968,0,0,1,7.071,3.105,12.126,12.126,0,0,1,2.6,8.1v1.305h-14.208a5.035,5.035,0,0,0,1.617,3.262,5.657,5.657,0,0,0,4.1,1.5,11.314,11.314,0,0,0,1.759-.137,4.972,4.972,0,0,0-.376,1.907,5,5,0,0,0,1.21,3.262A22.8,22.8,0,0,1-912.366-133.011Zm-.548-17.549a4.142,4.142,0,0,0-3,1.083v.014a4.985,4.985,0,0,0-1.344,2.309h8.324a3.878,3.878,0,0,0-1.109-2.349A3.8,3.8,0,0,0-912.914-150.56Zm-26.369,17.249h-5.623V-165.8h5.623v12.069a8.37,8.37,0,0,1,5.325-1.919h.227a7.51,7.51,0,0,1,3.972,1.136,6.945,6.945,0,0,1,2.714,3.157,14.558,14.558,0,0,1,.848,5.65v12.394h-5.637v-13.374a4.91,4.91,0,0,0-.914-3.091A2.749,2.749,0,0,0-935-150.835h-.01a4.051,4.051,0,0,0-2.077.574,9.824,9.824,0,0,0-2.192,1.892v15.057Zm-52.41-.294h-5.368v-28.234h-9.658v-4.6h24.684v4.6h-9.658v28.233Z'
                    transform='translate(-14024.629 3142.604)'
                    fill='#03a8a2'
                  />
                  <path
                    d='M1.742,2h71.37V4.023H0Z'
                    transform='translate(-15001 3015.977)'
                    fill='#03a8a2'
                  />
                  <circle
                    cx='3'
                    cy='3'
                    r='3'
                    transform='translate(-14933 3003)'
                    fill='#03a8a2'
                  />
                </g>
              </svg>
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Bienvenido a Tyche Admin 👋
            </CardTitle>
            <Form
              className='auth-login-form mt-2'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='mb-1'>
                <Label className='form-label' for='login-username'>
                  Nombre de Usuario
                </Label>
                <Controller
                  control={control}
                  name={'username'}
                  render={({ field: { name, onBlur, onChange, value } }) => (
                    <Input
                      type='text'
                      id='login-username'
                      placeholder='Admin'
                      autoFocus
                      name={name}
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      invalid={errors.username && true}
                    />
                  )}
                />
              </div>
              <div className='mb-2'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                </div>
                <Controller
                  control={control}
                  name={'password'}
                  render={({ field: { name, onBlur, onChange, value } }) => (
                    <InputPasswordToggle
                      className='input-group-merge'
                      id='login-password'
                      name={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.password && true}
                    />
                  )}
                />
              </div>

              <Button color='primary' block>
                Ingresar
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ... on Error {
        message
        success
      }
      ... on LoginResponse {
        success
        accessToken
        refreshToken
      }
    }
  }
`;

export default Login;
