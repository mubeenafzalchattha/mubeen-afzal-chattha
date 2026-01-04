import React from "react";

export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white p-4 rounded-2xl border border-gray-100 shadow-xl ${className}`}>{children}</div>;
}
