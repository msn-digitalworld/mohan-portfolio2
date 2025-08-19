type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Ad-Tech Interactive Showcase",
    description: "Rich-media ad units and interactive experiences with performance tracking.",
    tech: ["React", "Tailwind", "Animations"],
    demo: "#",
  },
  {
    title: "E-commerce Mini App",
    description: "Product listing, cart, and checkout flow with global state.",
    tech: ["React", "Context API", "Next.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Template",
    description: "This site template with App Router, Tailwind, SEO metadata.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.description}</p>
            <p className="mt-3 text-sm text-blue-700">Tech: {p.tech.join(", ")}</p>
            <div className="mt-4 flex gap-4">
              {p.demo && (
                <a className="text-blue-600 hover:underline" href={p.demo} target="_blank">
                  Live Demo →
                </a>
              )}
              {p.github && (
                <a className="text-gray-700 hover:underline" href={p.github} target="_blank">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
