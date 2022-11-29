import { AUTH_TOKEN } from '@apollo-config/constants';

export const setToken = (newToken: string) => {
  return localStorage.setItem(AUTH_TOKEN, newToken);
};

export const removeToken = () => {
  return localStorage.removeItem(AUTH_TOKEN);
};

export const getToken = () => {
  let token = localStorage.getItem(AUTH_TOKEN);
  return token;
};
