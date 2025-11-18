import { useEffect } from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import { TRAVELS, TOTAL_COUNTRIES_ESTIMATE } from "../data/travels";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Travel() {
  const visitedCount = TRAVELS.length;
  const visitedPct = Math.round((visitedCount / TOTAL_COUNTRIES_ESTIMATE) * 100 * 100) / 100;

  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([20.5937, 78.9629], 3);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Custom sunflower icon
    const sunflowerIcon = L.divIcon({
      html: '<div style="font-size: 24px;">🌻</div>',
      className: "sunflower-marker",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    // Coordinates for visited countries from TRAVELS
    const visitedCountries = TRAVELS.map((t) => ({
      name: t.name,
      coords: [t.coordsPct.x, t.coordsPct.y], // Convert percentage to approximate lat/lng
    }));

    // Add sunflower markers for each visited country
    visitedCountries.forEach((country) => {
      L.marker(country.coords as [number, number], { icon: sunflowerIcon })
        .addTo(map)
        .bindPopup(`${country.name} - I've been here! 🌻`);
    });

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h2 className="section-title">Travel — Where I've been</h2>
        <div className="text-sm text-gray-600">
          Visited {visitedCount} places • ~{visitedPct}% of the world
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Map visual with Leaflet */}
        <div className="md:col-span-2">
          <div
            id="map"
            className="relative border rounded-md overflow-hidden h-64"
            aria-label="World map with visited places"
          ></div>
          <div className="mt-3">
            <ProgressBar percent={visitedPct} />
          </div>
        </div>

        {/* Travel list */}
        <div>
          <h3 className="text-sm font-semibold">Trips</h3>
          <ul className="mt-2 text-sm space-y-2">
            {TRAVELS.map((t) => (
              <li key={t.id} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.year}</div>
                </div>
                <div className="text-xs text-gray-500">✈️</div>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-xs text-gray-500">Next dream: Japan 🇯🇵 (for anime + food)</div>
        </div>
      </div>
    </Card>
  );
}