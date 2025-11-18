import Card from "./Card";
import { BOOKS } from "../data/books";

export default function Books() {
  return (
    <Card>
      <h2 className="section-title">Books</h2>
      <div className="mt-3">
        {BOOKS.map((b) => (
          <div key={b.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <div>
              <div className="font-medium">{b.title}</div>
              <div className="text-xs text-gray-500">{b.author}</div>
            </div>
            <div className="text-sm text-gray-600">{b.status === "read" ? "✅ Read" : "📖 Reading"}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
