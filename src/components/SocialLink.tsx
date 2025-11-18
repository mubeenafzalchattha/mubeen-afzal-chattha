
export default function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="text-xs text-indigo-600 underline" target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}
