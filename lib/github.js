const tempData = {
  login: "j471n",
  id: 55713505,
  node_id: "MDQ6VXNlcjU1NzEzNTA1",
  avatar_url: "https://avatars.githubusercontent.com/u/55713505?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/j471n",
  html_url: "https://github.com/j471n",
  followers_url: "https://api.github.com/users/j471n/followers",
  following_url: "https://api.github.com/users/j471n/following{/other_user}",
  gists_url: "https://api.github.com/users/j471n/gists{/gist_id}",
  starred_url: "https://api.github.com/users/j471n/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/j471n/subscriptions",
  organizations_url: "https://api.github.com/users/j471n/orgs",
  repos_url: "https://api.github.com/users/j471n/repos",
  events_url: "https://api.github.com/users/j471n/events{/privacy}",
  received_events_url: "https://api.github.com/users/j471n/received_events",
  type: "User",
  site_admin: false,
  name: "Jovan Bienvenu",
  company: null,
  blog: "j471n.in",
  location: "India",
  email: null,
  hireable: true,
  bio: "React Developer",
  twitter_username: "j471n_",
  public_repos: 31,
  public_gists: 10,
  followers: 8,
  following: 1,
  created_at: "2019-09-23T18:37:14Z",
  updated_at: "2022-07-02T03:07:58Z",
};

// its for /api/stats/github
export async function fetchGithub() {
  const fake = false;
  if (fake) return tempData;
  return fetch("https://api.github.com/users/JovaanB").then((res) =>
    res.json()
  );
}

// its for getting temporary old data
export function getOldStats() {
  return tempData;
}
