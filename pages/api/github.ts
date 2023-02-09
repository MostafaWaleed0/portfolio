import { type NextRequest } from 'next/server';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const config = {
  runtime: 'experimental-edge'
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  global.__DEV__ = true;
} else {
  global.__DEV__ = false;
}

export default async function handler(req: NextRequest, res) {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "mostafa-mw") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  id
                  url
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return new Response(
    JSON.stringify({
      repos: pinnedItems
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    }
  );
}
