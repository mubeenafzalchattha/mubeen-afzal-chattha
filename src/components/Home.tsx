import SocialLink from "./SocialLink";
import dp from "../assets/mubeen-afzal-cofounder-sniff-indie-hacker.jpeg"

export default function Home() {
  return (
    <header className="flex items-center gap-6 mb-8">
      <img
        src={dp}
        alt="waving"
        className="w-20 h-20 rounded-lg shadow-sm object-cover"
      />
      <div>
        {/* <h1 className="text-3xl font-bold">Mubeeeeen</h1> */}
        <p className="text-sm text-gray-600">
          Too good at coding yet too bad to figure out my life's lagecy code.
          {/* <strong>Dubai</strong> 🇦🇪 */}
        </p>
        <div className="mt-3 flex gap-2">
          <SocialLink href="https://github.com/mubeenafzalchattha" label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/mubeenafzalchattha/" label="LinkedIn" />
          <SocialLink href="https://x.com/mubeenchatthaa" label="X" />
        </div>
      </div>
    </header>
  );
}
