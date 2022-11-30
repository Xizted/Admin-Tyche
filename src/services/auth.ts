import { userToken } from '@src/apollo/cache/user';
import { removeToken, setToken } from '@src/utility/apollo/auth';

export const signIn = (token: string) => {
  if (!token) {
    console.log('Client token not provided');
  }

  setToken(token);
  userToken(token);
};

export const signOut = (client: any) => {
  if (!client) {
    console.log('Apollo client not provided');
  }

  removeToken();
  userToken('');
};
