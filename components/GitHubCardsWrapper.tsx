'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apolloClient';
import GitHubCards from './GitHubCards';

export default function GitHubCardsWrapper() {
  return (
    <ApolloProvider client={client}>
      <GitHubCards username="mostafa-mw" />
    </ApolloProvider>
  );
}
