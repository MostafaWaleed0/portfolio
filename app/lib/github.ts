export const getRepos = async () => {
  try {
    const res = await fetch(
      'https://api.github.com/users/MostafaWaleed0/repos?type=owner&sort=pushed',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`
        }
      }
    );

    return res.json();
  } catch {
    throw new Error('Error fetching repositories');
  }
};
