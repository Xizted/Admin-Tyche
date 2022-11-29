import { InMemoryCache } from '@apollo/client';

import { userFields } from './user';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ...userFields,
      },
    },
  },
});

export default cache;
