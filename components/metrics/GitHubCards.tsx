import { useQuery } from '@apollo/client';
import { Star } from 'components/icons';
import { GET_PINNED_REPOS } from 'lib/apolloClient';
import { GithubReposType, PinnedReposType } from 'lib/types';

const langColors = {
  typescript: '#3178c6',
  html: '#e34c26',
  javascript: '#f1e05a',
  nunjucks: '#3d8137',
  css: '#563d7c',
  scss: '#c6538c'
};

type Props = {
  repos: GithubReposType;
  username: string;
};

export default function GitHubCards({ repos, username }: Props) {
  const { loading, error, data } = useQuery<PinnedReposType>(GET_PINNED_REPOS, {
    variables: { username }
  });

  if (loading)
    return (
      <div className="flex-row" style={{ height: '300px' }}>
        <h3 className="margin-auto">Loading...</h3>
      </div>
    );

  if (error)
    return (
      <div className="flex-row" style={{ height: '300px' }}>
        <h3 className="text-warring margin-auto">{error.message}</h3>
      </div>
    );

  return (
    <ol className="auto-grid" role="list">
      {data.user.pinnedItems.nodes.map((pinnedRepos) => {
        return repos.map(
          ({
            node_id,
            name,
            html_url,
            homepage,
            description,
            stargazers_count,
            language,
            topics
          }) => {
            return pinnedRepos.name === name ? (
              <li className="[ card ] [ flow ] [ bg-default ]" key={node_id}>
                <header className="card-head">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={homepage ? homepage : html_url}
                  >
                    {name}
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${html_url}/stargazers`}
                    className="card-head__star"
                  >
                    <Star />
                    {stargazers_count}
                  </a>
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
                        backgroundColor: langColors[language.toLowerCase()]
                      }}
                    ></span>
                    {language}
                  </div>
                  <ul className="card-foot__topics" role="list">
                    {topics.map((topic, index) => {
                      return index < 4 ? (
                        <li
                          key={topic}
                          className="[ pill ] [ fs-200 weight-medium text-inherit ]"
                        >
                          {topic}
                        </li>
                      ) : null;
                    })}
                  </ul>
                </footer>
              </li>
            ) : null;
          }
        );
      })}
    </ol>
  );
}
