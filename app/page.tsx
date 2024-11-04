'use client';

import { useEffect, useState } from 'react';
import {IntroCard} from './components/IntroCard';
import {RepoGrid} from './components/RepoGrid';
import { Navbar } from './components/Nav'

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
      <IntroCard />
      <RepoGrid repos={repos} />
    </section>
  );
}
