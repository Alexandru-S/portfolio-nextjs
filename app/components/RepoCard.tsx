interface Repo {
    id: number;
    name: string;
    language: string;
    clone_url: string;
    updated_at: string;
  }
  
  interface RepoCardProps {
    repo: Repo;
  }
  
  export function RepoCard({ repo }: RepoCardProps) {
    return (
      <div className="card bg-base-100 shadow-lg bg-diagonal-lines">
        <div className="card-body">
          <h3 className="card-title text-xl font-semibold">{repo.name}</h3>
          <div className="card-actions">
            <div className="badge badge-outline">{repo.language ? `Language: ${repo.language}` : 'No language specified'}</div>
          </div>
          <div className="card-actions">
            <a
              href={repo.clone_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-white underline"
            >
              Visit Repository
            </a>
          </div>
        </div>
      </div>
    );
  }
  