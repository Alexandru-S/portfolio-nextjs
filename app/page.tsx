'use client';

import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  language: string;
  clone_url: string;
}

export default function Page() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/Alexandru-S/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Portfolio Website</h1>
    <p className="mb-4">
    {`I am a passionate full stack software developer with a wealth of experience in backend database design, frontend integration, and cloud infrastructure. In my current role, I build digital solutions using TypeScript, containerized in Docker, and deployed with Kubernetes. I thrive in environments where I can streamline development processes with CI/CD pipelines, whether through GitHub Actions or cloud-native tools. My expertise spans modern frameworks like Remix.js, Next.js, and NestJS, and I regularly work with databases such as PostgreSQL.`}
    </p>
    <p className="mb-4">
    {`Having set up serverless architectures in Kubernetes and AWS, I’m adept at using infrastructure-as-code tools like Helm Charts, CloudFormation, and managing various cloud services (Lambda, S3, DynamoDB). I’ve led technical projects, mentored teams, and collaborated on innovation initiatives that utilize cutting-edge technology to deliver impactful solutions.`}
    </p>
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo, index) => (
          <div key={repo.id} className="portfolio-card p-4 border rounded-lg shadow-lg">
            <div className="card-content">
              {/* Repo name as the main title */}
              <h3 className="card-title text-lg font-bold">{repo.name}</h3>
              {/* Language of the repo */}
              <p className="language text-gray-600">{repo.language ? `Language: ${repo.language}` : 'No language specified'}</p>
            </div>
            <div className="card-action mt-4">
              {/* Link to the repo */}
              <a className="text-blue-600 hover:underline" target="_blank" href={repo.clone_url} rel="noopener noreferrer">
                Visit Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
