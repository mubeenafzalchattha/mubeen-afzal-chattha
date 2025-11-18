import React from "react";
import { FiHome, FiBook, FiGlobe, FiMail, FiBookOpen } from "react-icons/fi";
// import { FiHome, FiBook, FiFilm, FiGlobe, FiMail, FiBookOpen } from "react-icons/fi";

function NavIcon({ icon, label, active, href }: { icon: React.ReactNode; label: string; active?: boolean; href: string }) {
  return (
    <a
      href={href}
      className={`group p-2 rounded-md ${active ? "bg-indigo-50" : "hover:bg-gray-100"}`}
      title={label}
    >
      <div className="text-red-900">{icon}</div>
      <div className="sr-only">{label}</div>
    </a>
  );
}

export default function Navbar({ currentRoute }: { currentRoute: string }) {
  return (
    <aside className="w-20 bg-white/80 border-r border-gray-200 p-3 sticky top-0 h-screen flex flex-col items-center gap-4">
      <NavIcon icon={<FiHome size={18} />} label="Home" href="#home" active={currentRoute === "#home" || currentRoute === ""} />
      <NavIcon icon={<FiBookOpen size={18} />} label="Blog" href="#blog" active={currentRoute.startsWith("#blog")} />
      <NavIcon icon={<FiBook size={18} />} label="Books" href="#books" active={currentRoute === "#books"} />
      {/* <NavIcon icon={<FiFilm size={18} />} label="Movies" href="#movies" active={currentRoute === "#movies"} /> */}
      <NavIcon icon={<FiGlobe size={18} />} label="Travel" href="#travel" active={currentRoute === "#travel"} />
      <div className="flex-1" />
      <a href="#contact" className="text-xs text-gray-600 p-2">
        <FiMail size={16} />
        Contact
      </a>
    </aside>
  );
}
