import { RepoCard } from "./RepoCard";
import { RepoGridProps } from "app/types/repo";

export function RepoGrid({ repos }: RepoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
