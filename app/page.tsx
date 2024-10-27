'use client';

import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  language: string;
  clone_url: string;
  updated_at: string;
}

export default function Page() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/Alexandru-S/repos');
        const data = await response.json();
        
        const sortedData = data.sort((a: Repo, b: Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        
        setRepos(sortedData);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="container mx-auto p-4">
      {/* Main card for introduction */}
      <div className="card bg-base-100 w-full shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-2xl">My Portfolio Website</h2>
          <p>
            I am a passionate full stack software developer with a wealth of experience in backend database design, frontend integration, and cloud infrastructure. In my current role, I build digital solutions using TypeScript, containerized in Docker, and deployed with Kubernetes. I thrive in environments where I can streamline development processes with CI/CD pipelines, whether through GitHub Actions or cloud-native tools. My expertise spans modern frameworks like Remix.js, Next.js, and NestJS, and I regularly work with databases such as PostgreSQL.
          </p>
          <p>
            Having set up serverless architectures in Kubernetes and AWS, I’m adept at using infrastructure-as-code tools like Helm Charts, CloudFormation, and managing various cloud services (Lambda, S3, DynamoDB). I’ve led technical projects, mentored teams, and collaborated on innovation initiatives that utilize cutting-edge technology to deliver impactful solutions.
          </p>
        </div>
      </div>

      {/* Grid container for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              {/* Repo name as the main title */}
              <h3 className="card-title text-xl font-semibold">{repo.name}</h3>
              {/* Language of the repo */}
              <p className="text-gray-600">{repo.language ? `Language: ${repo.language}` : 'No language specified'}</p>
              <div className="mt-4">
                {/* Link to the repo */}
                <a
                  className="text-blue-500 underline"
                  target="_blank"
                  href={repo.clone_url}
                  rel="noopener noreferrer"
                >
                  Visit Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
