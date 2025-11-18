import Card from "./Card";
import { MEDIA } from "../data/media";

export default function MoviesAnime() {
  return (
    <Card>
      <h2 className="section-title">Movies & Anime I've seen</h2>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {MEDIA.map((m) => (
          <div key={m.id} className="flex gap-3 items-center bg-white p-2 rounded-md border">
            <img src={m.cover} alt={m.title} className="w-16 h-20 object-cover rounded-sm" />
            <div>
              <div className="font-semibold">{m.title}</div>
              <div className="text-xs text-gray-500">
                {m.year} • {m.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
