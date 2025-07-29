import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-base-100 shadow-lg bg-diagonal-lines">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, index) => (
          <li key={post.metadata.publishedAt}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "timeline-start mb-10 md:text-end"
                  : "timeline-end md:mb-10"
              }`}
            >
              <time className="font-mono italic">
                {formatDate(post.metadata.publishedAt, false)}
              </time>
              <Link key={post.slug} className="" href={`/blog/${post.slug}`}>
                <div className="text-lg font-black">{post.metadata.title}</div>
                {post.metadata.summary}
              </Link>
            </div>
            <hr />
          </li>
        ))}
    </ul>
  );
}
