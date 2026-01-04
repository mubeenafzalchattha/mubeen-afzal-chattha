import React from "react";
import Card from "./Card";
import { getBlogs } from "../services/blogService";
import type { Post } from "../data/posts";

function CategorySidebar({ active, posts }: { active?: Post["category"]; posts: Post[] }) {
  const categories: Post["category"][] = ["travel", "marketing", "dev"];
  return (
    <aside className="w-full md:w-64">
      <div className="sticky top-6">
        <Card>
          <h3 className="font-semibold text-sm">Categories</h3>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c}>
                <a
                  href={`#blog?category=${c}`}
                  className={`text-sm ${active === c ? "font-semibold text-red-900" : "text-gray-700"}`}
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="mt-4">
          <h3 className="font-semibold text-sm">All posts</h3>
          <ul className="mt-3 space-y-2">
            {posts.map((p) => (
              <li key={p.id}>
                <a href={`#blog/${p.slug}`} className="text-sm text-gray-700 hover:text-red-900">
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </aside>
  );
}

export default function BlogDetail({ slug }: { slug: string | null }) {
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

  const post = slug ? posts.find((p) => p.slug === slug) : undefined;

  if (loading) {
    return (
      <div className="md:col-span-2">
        <Card>
          <div className="text-sm text-gray-600">Loading...</div>
        </Card>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="md:col-span-2">
        <Card>
          <h2 className="section-title">Post not found</h2>
          <p className="text-sm text-gray-600 mt-2">Please choose a post from the sidebar.</p>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-2">
        <Card>
          <div className="text-xs text-gray-500 mb-2">{post.category}</div>
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <p className="text-sm text-gray-700 mt-4 leading-6">{post.content}</p>
        </Card>
      </div>
      <CategorySidebar active={post.category} posts={posts} />
    </>
  );
}


