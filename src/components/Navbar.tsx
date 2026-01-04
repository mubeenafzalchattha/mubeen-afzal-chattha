import React from "react";
import { FiHome, FiBook, FiGlobe, FiMail, FiBookOpen, FiUser, FiX } from "react-icons/fi";
import mubeenCoding from "../assets/mubeen-afzal-chattha-sniff-coding.gif";

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

export default function Navbar({ currentRoute, showBio }: { currentRoute: string; showBio: boolean }) {
  const [bioSlideoverOpen, setBioSlideoverOpen] = React.useState(false);

  return (
    <>
      <aside className="w-20 p-4 fixed left-0 top-4 h-[calc(100vh-2rem)] flex flex-col items-center z-50">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-3 h-full flex flex-col items-center gap-4">
          <NavIcon icon={<FiHome size={18} />} label="Home" href="#home" active={currentRoute === "#home" || currentRoute === ""} />
          <NavIcon icon={<FiBookOpen size={18} />} label="Blog" href="#blog" active={currentRoute.startsWith("#blog")} />
          <NavIcon icon={<FiBook size={18} />} label="Books" href="#books" active={currentRoute === "#books"} />
          {/* <NavIcon icon={<FiFilm size={18} />} label="Movies" href="#movies" active={currentRoute === "#movies"} /> */}
          <NavIcon icon={<FiGlobe size={18} />} label="Travel" href="#travel" active={currentRoute === "#travel"} />
          <div className="flex-1" />
          {showBio && (
            <button
              onClick={() => setBioSlideoverOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-red-900"
              title="Bio"
              aria-label="Open bio"
            >
              <FiUser size={18} />
            </button>
          )}

          <NavIcon icon={<FiMail size={16} />} label="Contact" href="#contact" active={currentRoute === "#contact"} />
            
          
        </div>
      </aside>

      {/* Mobile Bio Slideover */}
      {showBio && bioSlideoverOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-50"
            onClick={() => setBioSlideoverOpen(false)}
          />
          
          {/* Slideover */}
          <div className="lg:hidden fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="p-6 h-full overflow-y-auto hide-scrollbar">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-red-900">Bio</h3>
                <button
                  onClick={() => setBioSlideoverOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 text-red-900"
                  aria-label="Close"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xl">
                <h4 className="font-semibold">Mubeen Afzal Chattha</h4>
                <p className="text-sm text-gray-600 mt-2"></p>
                <p className="text-sm text-gray-600 mt-2"></p>
                <p className="text-sm text-gray-600 mt-2">Co-founder <a href="https://sniff.so" className="text-red-900">Sniff 🌿</a></p>
                <div className="mt-3 text-xs text-gray-500">📍 Dubai</div>
                <img
                  src={mubeenCoding}
                  alt="mubeen-afzal-cofounder-sniff-indie-hacker"
                  className="w-full mt-3 rounded-md"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
