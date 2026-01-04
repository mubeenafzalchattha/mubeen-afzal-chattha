import React from "react";
import Card from "./Card";
import { getBlogs } from "../services/blogService";
import type { Post } from "../data/posts";

export default function Blog() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getBlogs();
      setPosts(fetchedPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Card className="md:col-span-2">
        <div className="flex justify-between items-center">
          <h2 className="section-title">My Journal</h2>
          <a href="#blog" className="text-xs text-red-900 hover:underline">
            View all posts →
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-600">Loading...</div>
      </Card>
    );
  }

  return (
    <Card className="md:col-span-2">
      <div className="flex justify-between items-center">
        <h2 className="section-title">My Journal</h2>
        <a href="#blog" className="text-xs text-red-900 hover:underline">
          View all posts →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {posts.slice(0, 2).map((p) => (
          <a
            key={p.id}
            href={`#blog/${p.slug}`}
            className="block bg-yellow-50 p-3 rounded-lg border border-yellow-100 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-xs text-gray-600 mt-2">{p.excerpt}</p>
            <div className="mt-3 text-xs text-gray-500">{p.category}</div>
          </a>
        ))}
      </div>
    </Card>
  );
}
