import Card from "./Card";
import { POSTS } from "../data/posts";

export default function BlogSidebar() {
  return (
    <aside className="w-80 p-6 lg:block">
      <div className="sticky top-6">
        <Card>
          <h3 className="font-semibold text-sm">All posts</h3>
          <ul className="mt-3 space-y-2">
            {POSTS.map((p) => (
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


