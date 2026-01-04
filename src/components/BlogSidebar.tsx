import React from "react";
import Card from "./Card";
import { getBlogs } from "../services/blogService";
import type { Post } from "../data/posts";

export default function BlogSidebar() {
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

  return (
    <aside className="w-80 p-6 fixed right-0 top-0 h-screen lg:block overflow-y-auto hide-scrollbar">
      <div className="pt-6">
        <Card>
          <h3 className="font-semibold text-sm">All posts</h3>
          {loading ? (
            <div className="mt-3 text-xs text-gray-600">Loading...</div>
          ) : (
            <ul className="mt-3 space-y-2">
              {posts.map((p) => (
                <li key={p.id}>
                  <a href={`#blog/${p.slug}`} className="text-sm text-gray-700 hover:text-red-900">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </aside>
  );
}


