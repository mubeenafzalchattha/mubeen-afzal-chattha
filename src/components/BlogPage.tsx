import React from "react";
import Card from "./Card";
import { getBlogs } from "../services/blogService";
import type { Post } from "../data/posts";

export default function BlogPage() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-sm text-gray-600">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-md transition-shadow">
          <div className="text-xs text-gray-500 mb-2">{post.category}</div>
          <h3 className="font-semibold text-lg mb-2">
            <a href={`#blog/${post.slug}`} className="hover:text-red-900">
              {post.title}
            </a>
          </h3>
          <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
          <a 
            href={`#blog/${post.slug}`} 
            className="text-xs text-red-900 hover:underline"
          >
            Read more →
          </a>
        </Card>
      ))}
    </div>
  );
}


