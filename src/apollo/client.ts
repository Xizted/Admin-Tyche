import {
  ApolloClient,
  ApolloLink,
  from,
  createHttpLink,
  split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';

import { userToken } from './cache/user';
import cache from './cache';

const SERVER_URL = 'https://hades.tyche-app.com';
const ENDPOINT = '/graphql';

const authLink = new ApolloLink((operation, forward) => {
  const token = userToken();

  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${userToken()}` : '',
    },
  }));

  return forward(operation);
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path, extensions }) => {
        // switch (extensions?.code) {
        //     case 'UNAUTHENTICATED':
        //         console.log(
        //             `[GraphQL error]: Message: ${err.extensions.code}`
        //         );
        //     // error code is set to UNAUTHENTICATED
        //     // when AuthenticationError thrown in resolver

        //     // // modify the operation context with a new token
        //     // const oldHeaders = operation.getContext().headers;
        //     // operation.setContext({
        //     //   headers: {
        //     //     ...oldHeaders,
        //     //     authorization: getNewToken(),
        //     //   },
        //     // });
        //     // // retry the request, returning the new observable
        //     // return forward(operation);
        // }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
    return forward(operation);
  }
);

const httpLink = createHttpLink({
  uri: `${SERVER_URL}${ENDPOINT}`,
});

const wsLink = new WebSocketLink({
  uri: 'wss://api.tyche-app.com/subscriptions',
  options: {
    reconnect: true,
    connectionParams: () => {
      return {
        token: userToken(),
      };
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache,
  link: from([errorLink, authLink, splitLink]),
});

export default client;
