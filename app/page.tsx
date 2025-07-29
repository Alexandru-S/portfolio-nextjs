"use client";

import { useEffect, useState } from "react";
import { IntroCard } from "./components/IntroCard";
import { RepoGrid } from "./components/RepoGrid";

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
        const response = await fetch(
          "https://api.github.com/users/Alexandru-S/repos",
        );
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid response format");
        }
        const sortedData = data
          .sort(
            (a: Repo, b: Repo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          )
          .slice(0, 6);
        setRepos(sortedData);
      } catch (error) {
        console.error("Error fetching repos:", error);
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
