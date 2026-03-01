import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Signal Relay",
    description:
      "An interactive digital logic circuit simulator built in Godot. Users can design and visualize circuits with custom components, making it an educational tool for understanding digital logic.",
    tags: ["Godot", "GDScript", "Digital Logic"],
    github: "https://github.com/rbessin/signal-relay",
    live: null,
    status: "In Progress",
    image: "/projects/signal-relay.png",
  },
  {
    name: "Stride Editor",
    description:
      "A feature-rich text editor built with Next.js and Quill.js featuring real-time AI-powered predictive text using n-gram language models trained on Project Gutenberg data. Includes rich text editing, KaTeX math support, and local file management.",
    tags: ["Next.js", "TypeScript", "Quill.js", "N-gram", "KaTeX"],
    github: "https://github.com/rbessin/stride-editor",
    live: "https://stride-text-editor.vercel.app/",
    status: "Completed",
    image: "/projects/stride-editor.png",
  },
  {
    name: "CurbYourCarbon",
    description:
      "A browser extension that tracks the carbon footprint of your web browsing using real data from the Performance API. Calculates emissions from network transfer and device energy consumption using research-backed formulas and regional grid carbon intensity.",
    tags: ["Chrome Extension", "JavaScript", "Performance API", "ElectricityMaps API"],
    github: "https://github.com/rbessin/CurbYourCarbon",
    live: null,
    status: "In Progress",
    image: "/projects/curb-your-carbon.png",
  },
  {
    name: "The Ocean Scout",
    description:
      "A scouting platform for FIRST Tech Challenge robotics teams integrating The Blue Alliance API with collaborative features including user comments, an admin system, and group organization.",
    tags: ["Next.js", "Firebase", "Tailwind", "The Blue Alliance API"],
    github: "https://github.com/SKY3E/The-Ocean-Scout",
    live: "https://the-ocean-scout.vercel.app/",
    status: "Completed",
    image: "/projects/ocean-scout.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 pt-12 pb-24">
      <span className="text-xs font-mono uppercase tracking-widest text-accent mb-4 block">
        Projects
      </span>
      <h2 className="text-3xl font-bold text-foreground mb-12">
        Software I've Built
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-row rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-150 overflow-hidden"
          >
            {/* Left: Image + Tags */}
            <div className="flex-shrink-0 w-56 flex flex-col p-3 pb-0">
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                width={224}
                height={126}
                className="w-full h-auto rounded-lg"
              />
              {/* Tags below image */}
              <div className="flex flex-wrap gap-1.5 py-3 border-t border-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-accent-subtle text-accent font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col flex-1 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-foreground font-semibold text-lg">
                    {project.name}
                  </h3>
                  {project.status === "In Progress" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent-subtle text-accent font-mono">
                      In Progress
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
