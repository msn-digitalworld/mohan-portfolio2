import React from "react";

const projects = [
  {
    title: "E-commerce Store",
    description:
      "Built with React, Context API, and Tailwind. Includes login, cart, category filtering, and responsive design.",
    tech: ["React", "Tailwind", "Context API"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Yahoo Interactive Ads",
    description:
      "Developed custom rich media ads and premium ad innovations at Yahoo with HTML5, CSS3, and JS.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
    demo: "https://global.adshowcase.yahooinc.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio is built using Next.js, Tailwind CSS, and deployed on Vercel.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://mohan-portfolio2.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={proj.github}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  className="text-green-600 dark:text-green-400 font-medium hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
