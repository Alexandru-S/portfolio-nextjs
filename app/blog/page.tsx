import { BlogPosts } from "app/components/Posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="container mx-auto p-4">
      <BlogPosts />
    </section>
  );
}
