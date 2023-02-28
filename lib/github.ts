import { GithubReposType } from './types';

export const getRepos = async () => {
  try {
    const res = await fetch(
      'https://api.github.com/users/mostafa-mw/repos?type=owner&sort=pushed',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`
        }
      }
    );
    const data: GithubReposType = await res.json();

    return data;
  } catch {
    throw new Error('Error fetching repositories');
  }
};
