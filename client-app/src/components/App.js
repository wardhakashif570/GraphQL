import './App.css';
import React from 'react';
import  client  from '../config/gql_config';
import { ApolloProvider } from '@apollo/client';
import Students from './Students';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
       <Students />
      </div>
    </ApolloProvider>
  );
}

export default App;
