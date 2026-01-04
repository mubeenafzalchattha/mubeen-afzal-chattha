import mubeenCoding from "../assets/mubeen-afzal-chattha-sniff-coding.gif";

export default function BioSidebar() {
  return (
<aside className="hidden lg:!block w-80 p-6 fixed right-0 top-0 h-screen overflow-y-auto hide-scrollbar">
<div className="pt-6">
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
    </aside>
  );
}