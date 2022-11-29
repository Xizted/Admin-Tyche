import { makeVar } from '@apollo/client';
import { getToken } from '@apollo-utils/auth';

export const userToken = makeVar('');
const token = getToken();
if (token) {
  userToken(token);
}

export const userFields = {
  token: {
    read() {
      return userToken();
    },
  },
};
