import { ApolloProvider } from '@apollo/client';
import React from 'react';
import App from './components/App/App';
import { withApollo } from './utils/withApollo';

const Main = () => {
  return (
    <ApolloProvider client={withApollo()}>
      <App />
    </ApolloProvider>
  );
};
export default Main;
