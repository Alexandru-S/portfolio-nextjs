interface Repo {
  id: number;
  name: string;
  language: string;
  clone_url: string;
  updated_at: string;
  description: string;
}

interface RepoCardProps {
  repo: Repo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="card bg-base-100 shadow-lg bg-diagonal-lines">
      <div className="card-body">
        <h3 className="card-title text-xl font-semibold text-cyan-900">{repo.name}</h3>
         <p>{repo.description}</p>ö
        <div className="card-actions">
          <div className="badge badge-neutral p-3">
            {repo.language ? `${repo.language}` : "No language specified"}
          </div>
        </div>
        <div className="card-actions justify-end">
          <a
            href={repo.clone_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-cyan-800 hover:bg-slate-900 text-white font-bold tracking-wider shadow-sm"
          >
            Visit Repository
          </a>
        </div>
       
      </div>
      
    </div>
  );
}
