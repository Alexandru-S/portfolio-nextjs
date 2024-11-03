import {RepoCard} from './RepoCard';

interface Repo {
  id: number;
  name: string;
  language: string;
  clone_url: string;
  updated_at: string;
}

interface RepoGridProps {
  repos: Repo[];
}

export function RepoGrid({ repos }: RepoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
