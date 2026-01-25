export interface Repo {
  id: number;
  name: string;
  language: string;
  clone_url: string;
  updated_at: string;
  description: string;
}

export interface RepoCardProps {
  repo: Repo;
}

export interface RepoGridProps {
  repos: Repo[];
}