"use client";

import { Star } from "@/components/icons";
import { GET_PINNED_REPOS, client } from "@/lib/apollo-client";
import { ApolloProvider, useQuery } from "@apollo/client";

type PinnedReposType = {
  user: {
    pinnedItems: {
      nodes: Array<{
        id: string;
        name: string;
        description: string;
        url: string;
        primaryLanguage: {
          name: string;
          color: string;
        };
        stargazers: {
          totalCount: string;
        };
        repositoryTopics: {
          nodes: Array<{
            topic: {
              name: string;
            };
          }>;
        };
      }>;
    };
  };
};

function Cards({ username }: { username: string }) {
  const { loading, error, data } = useQuery<PinnedReposType>(GET_PINNED_REPOS, {
    variables: { username },
  });

  if (loading)
    return (
      <div className="flex-row" style={{ height: "300px" }}>
        <h3 className="margin-auto">Loading...</h3>
      </div>
    );

  if (error)
    return (
      <div className="flex-row" style={{ height: "300px" }}>
        <h3 className="text-warring margin-auto">{error.message}</h3>
      </div>
    );

  return (
    <ol className="auto-grid" role="list">
      {data?.user.pinnedItems.nodes.map(
        ({
          id,
          name,
          url,
          description,
          stargazers,
          primaryLanguage,
          repositoryTopics,
        }) => {
          return (
            <li className="[ card ] [ flow ] [ bg-default ]" key={id}>
              <header className="card-head">
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  {name}
                </a>
                {stargazers.totalCount ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${url}/stargazers`}
                    className="card-head__star"
                  >
                    <Star />
                    {stargazers.totalCount}
                  </a>
                ) : null}
              </header>
              <p className="fs-300 weight-medium">
                {description && description}
              </p>
              <footer
                className="[ card-foot ] [ cluster ] [ flow-space-200 ]"
                data-align="between"
              >
                <div className="[ card-foot__language ] [ fs-300 weight-medium ]">
                  <span
                    className="card-foot__language-color"
                    style={{
                      backgroundColor: primaryLanguage.color,
                    }}
                  ></span>
                  {primaryLanguage.name}
                </div>
                <ul className="card-foot__topics" role="list">
                  {repositoryTopics.nodes.map(({ topic }) => {
                    return (
                      <li
                        key={topic.name}
                        className="[ pill ] [ fs-200 weight-medium text-inherit ]"
                      >
                        {topic.name}
                      </li>
                    );
                  })}
                </ul>
              </footer>
            </li>
          );
        },
      )}
    </ol>
  );
}

export function GitHubCards() {
  return (
    <ApolloProvider client={client}>
      <Cards username="MostafaWaleed0" />
    </ApolloProvider>
  );
}
