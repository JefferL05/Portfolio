export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  location: string;
  blog: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

const GITHUB_USERNAME = 'JefferL05';
const GITHUB_API_BASE = 'https://api.github.com';

export async function getGitHubUser(): Promise<GitHubUser> {
  const res = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&type=owner`
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const repos: GitHubRepo[] = await res.json();
  return repos.filter((r) => !r.fork && !r.archived);
}

export async function getGitHubRepoLanguages(repo: string): Promise<Record<string, number>> {
  const res = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repo}/languages`);
  if (!res.ok) return {};
  return res.json();
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'agora mesmo';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `há ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `há ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `há ${days} dias`;
  const months = Math.floor(days / 30);
  if (months < 12) return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
  const years = Math.floor(months / 12);
  return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
}
