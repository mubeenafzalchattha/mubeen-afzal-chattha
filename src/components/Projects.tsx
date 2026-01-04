import Card from "./Card";

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
};

// You can replace this with your actual projects data
const PROJECTS: Project[] = [
  {
    id: "sniff",
    title: "Sniff 🌿",
    description: "Search Social Media",
    link: "https://sniff.so",
    tags: ["search and create targted content", "linkedin Content", "rank on GPT"],
  },
  {
    id: "replyguy",
    title: "Reply Guy",
    description: "Be a reply guy to grow on X and linkedin. Be productive, Set a goal, track your time and progress",
    link: "https://contentcalendar.live",
    tags: ["Chrome extenion","Count Replies", "Track your time"],
  },
  {
    id: "viralitycounter",
    title: "Viral Bucket",
    description: "A fun project to see how many trends you fall for. Check if you missed any.",
    link: "https://myviralbucket.com",
    tags: ["Dancing trends", "Eating trends", "Buying trends"],
  },
];

export default function Projects() {
  return (
    <section className="mt-8">
      {/* <h2 className="section-title mb-6">Projects</h2> */}
      <div className="grid grid-cols-1 md:!grid-cols-3 gap-6">

        {PROJECTS.map((project) => (
          <Card key={project.id} className="hover:shadow-2xl transition-shadow">
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-red-900 hover:underline"
              >
                View project →
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

