import { API_BASE_URL } from "../utils/constants";

export type BlogPost = {
  _id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  published: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  category: "travel" | "marketing" | "dev";
  excerpt: string;
  content: string;
};

// Map API blog post to internal Post type
function mapBlogToPost(blog: BlogPost): Post {
  // Extract category from tags or default to "dev"
  const categoryMap: Record<string, "travel" | "marketing" | "dev"> = {
    travel: "travel",
    marketing: "marketing",
    dev: "dev",
    webdev: "dev",
    future: "dev",
    trends: "dev",
  };

  const category =
    blog.tags
      .map((tag) => categoryMap[tag.toLowerCase()])
      .find((cat) => cat !== undefined) || "dev";

  // Use first 100 characters of content as excerpt
  const excerpt = blog.content.substring(0, 100) + (blog.content.length > 100 ? "..." : "");

  return {
    id: blog._id,
    title: blog.title,
    slug: blog.slug,
    category: category as "travel" | "marketing" | "dev",
    excerpt,
    content: blog.content,
  };
}

export async function getBlogs(): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs`);
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }
    const blogs: BlogPost[] = await response.json();
    // Filter only published blogs and map to Post type
    return blogs.filter((blog) => blog.published).map(mapBlogToPost);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // Return empty array on error to prevent breaking the UI
    return [];
  }
}

