// import React from "react";
import Card from "./Card";
import mubeenGif from "../assets/mubeen_afzal_chattha_cofounder_sniff.gif";

export default function Stack() {
  return (
    <Card>
      <h2 className="section-title">About</h2>
      <ul className="mt-3 text-sm space-y-2">
        <li>You will find me coding</li>
        <li>Writing Blogs or social media posts</li>
        <li>Procrastinating</li>
        <li>Reading</li>
        <li>🟢 Visiting Uzbeskistan 🇺🇿 </li>
        <li>Home in Dubai 🇦🇪</li>
      </ul>
      <div className="mt-4">
        <small className="text-gray-500">Dreaming to Start Video Content</small>
        <img
          src={mubeenGif}
          alt="celebrate"
          className="w-full rounded-md mt-2"
        />
      </div>
    </Card>
  );
}
