'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apolloClient';
import GitHubCards from './GitHubCards';

export default function GitHubCardsWrapper({ repos }) {
  return (
    <ApolloProvider client={client}>
      <GitHubCards repos={repos} username="mostafa-mw" />
    </ApolloProvider>
  );
}
