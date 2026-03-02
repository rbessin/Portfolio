import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { ReactNode } from "react";

const projects: {
  name: string;
  description: ReactNode;
  tags: string[];
  github: string | null;
  live: string | null;
  status: string;
  image: string;
}[] = [
  {
    name: "Signal Relay",
    description: (
      <>
        An interactive{" "}
        <strong className="text-foreground">
          digital logic circuit simulator
        </strong>{" "}
        built in Godot. Users can design and visualize circuits with{" "}
        <strong className="text-foreground">custom components</strong>, making
        it an educational tool for understanding digital logic.
      </>
    ),
    tags: ["Godot", "GDScript", "Digital Logic"],
    github: "https://github.com/rbessin/signal-relay",
    live: null,
    status: "In Progress",
    image: "/projects/signal-relay.png",
  },
  {
    name: "Stride Editor",
    description: (
      <>
        A feature-rich <strong className="text-foreground">text editor</strong>{" "}
        featuring real-time{" "}
        <strong className="text-foreground">AI-powered predictive text</strong>{" "}
        using{" "}
        <strong className="text-foreground">n-gram language models</strong>{" "}
        trained on Project Gutenberg data. Includes rich text editing,{" "}
        <strong className="text-foreground">KaTeX</strong> math support, and
        local file management.
      </>
    ),
    tags: ["Next.js", "TypeScript", "Quill.js", "N-gram", "KaTeX"],
    github: "https://github.com/rbessin/stride-editor",
    live: "https://stride-text-editor.vercel.app/",
    status: "Completed",
    image: "/projects/stride-editor.png",
  },
  {
    name: "CurbYourCarbon",
    description: (
      <>
        Won the{" "}
        <strong className="text-foreground">
          Social Impact & Sustainability
        </strong>{" "}
        category at <strong className="text-foreground">HackBeanpot</strong>,
        built in <strong className="text-foreground">24 hours</strong>. A
        browser extension that tracks the{" "}
        <strong className="text-foreground">carbon footprint</strong> of your
        web browsing using real data from the{" "}
        <strong className="text-foreground">Performance API</strong>,
        calculating emissions from network transfer and device energy using
        research-backed formulas and regional grid carbon intensity.
      </>
    ),
    tags: [
      "Chrome Extension",
      "JavaScript",
      "Performance API",
      "ElectricityMaps API",
    ],
    github: "https://github.com/rbessin/CurbYourCarbon",
    live: null,
    status: "In Progress",
    image: "/projects/curb-your-carbon.png",
  },
  {
    name: "The Ocean Scout",
    description: (
      <>
        A <strong className="text-foreground">scouting platform</strong> for
        FIRST Tech Challenge robotics teams integrating{" "}
        <strong className="text-foreground">The Orange Alliance API</strong>{" "}
        with collaborative features including user comments, an admin system,
        and group organization.
      </>
    ),
    tags: ["Next.js", "Firebase", "Tailwind", "The Orange Alliance API"],
    github: "https://github.com/SKY3E/The-Ocean-Scout",
    live: "https://the-ocean-scout.vercel.app/",
    status: "Completed",
    image: "/projects/ocean-scout.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-10 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-accent mb-8">Projects</h2>

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
