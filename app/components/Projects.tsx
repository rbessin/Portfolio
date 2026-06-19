import Image from "next/image";
import { Github, ExternalLink, Trophy } from "lucide-react";
import { ReactNode } from "react";

type Project = {
  name: string;
  description: ReactNode;
  tags: string[];
  github: string | null;
  live: string | null;
  status: string;
  image: string | null;
  imagePlaceholder?: string;
  featured?: boolean;
  award?: string;
};

const projects: Project[] = [
  {
    name: "CurbYourCarbon",
    description: (
      <>
        Won{" "}
        <strong className="text-foreground">
          Social Impact &amp; Sustainability
        </strong>{" "}
        at <strong className="text-foreground">HackBeanpot</strong> — assembled
        a team from scratch, built the initial MVP, and led the full feature set
        in <strong className="text-foreground">24 hours</strong>. A CO₂
        estimation engine combining network usage (Performance API) and regional
        grid carbon intensity (ElectricityMaps API) with goal tracking.{" "}
        <strong className="text-foreground">
          Published to the Chrome Web Store.
        </strong>
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
    status: "Completed",
    image: "/projects/curb-your-carbon.png",
    featured: true,
    award: "HackBeanpot · Social Impact & Sustainability",
  },
  {
    name: "Stride Editor",
    description: (
      <>
        Browser-based rich text editor powered by{" "}
        <strong className="text-foreground">n-gram language models</strong>{" "}
        trained on{" "}
        <strong className="text-foreground">10 Project Gutenberg books</strong>.
        Includes a full data processing pipeline, VSCode-style file/folder
        navigation via the{" "}
        <strong className="text-foreground">File System Access API</strong>, and{" "}
        <strong className="text-foreground">KaTeX</strong> math rendering.
      </>
    ),
    tags: ["Next.js", "TypeScript", "Quill.js", "N-gram", "KaTeX"],
    github: "https://github.com/rbessin/stride-editor",
    live: "https://stride-text-editor.vercel.app/",
    status: "Completed",
    image: "/projects/stride-editor.png",
  },
  {
    name: "Signal Relay",
    description: (
      <>
        Digital logic circuit simulator in Godot featuring a{" "}
        <strong className="text-foreground">chip abstraction system</strong>{" "}
        with automatic pin detection. Fixed{" "}
        <strong className="text-foreground">multi-minute freezes</strong> via a
        two-state lazy instantiation architecture — visual-only by default, full
        circuit instantiated on simulate, cutting load times to{" "}
        <strong className="text-foreground">seconds</strong>.
      </>
    ),
    tags: ["Godot", "GDScript", "Digital Logic"],
    github: "https://github.com/rbessin/signal-relay",
    live: null,
    status: "Completed",
    image: "/projects/signal-relay.png",
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
  {
    name: "Reaction-Diffusion",
    description: (
      <>
        GPU-accelerated implementation of Alan Turing&apos;s{" "}
        <strong className="text-foreground">Gray-Scott model</strong> — the
        mathematics behind leopard spots and coral branching — using{" "}
        <strong className="text-foreground">WebGPU</strong> compute shaders
        (WGSL). Dual ping-pong storage textures, full compute pipeline, and an
        interactive parameter explorer.
      </>
    ),
    tags: ["WebGPU", "TypeScript", "WGSL", "Compute Shaders"],
    github: "https://github.com/rbessin/Reaction-Diffusion-Patterns",
    live: null,
    status: "In Progress",
    image: null,
    imagePlaceholder:
      "radial-gradient(ellipse at 20% 60%, #2d5a3d 0%, #1a3020 45%, #0e1a11 100%)",
  },
];

function ProjectLinks({
  github,
  live,
}: {
  github: string | null;
  live: string | null;
}) {
  return (
    <div className="flex items-center gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
          aria-label="Live site"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

function ProjectImage({
  project,
  className,
  width,
  height,
}: {
  project: Project;
  className: string;
  width: number;
  height: number;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        width={width}
        height={height}
        className={className}
      />
    );
  }
  return (
    <div
      className={className}
      style={{ background: project.imagePlaceholder }}
    />
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-glass scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-accent mb-8">Projects</h2>

        <div className="flex flex-col gap-6">
          {/* Featured project */}
          <div className="flex flex-col sm:flex-row rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-150 overflow-hidden">
            <div className="sm:w-2/5 shrink-0 overflow-hidden">
              <ProjectImage
                project={featured}
                width={500}
                height={320}
                className="w-full h-52 sm:h-full object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              {featured.award && (
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-accent text-white font-mono flex items-center gap-1.5">
                    <Trophy className="w-3 h-3" />
                    {featured.award}
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-foreground font-bold text-xl">
                  {featured.name}
                </h3>
                <ProjectLinks github={featured.github} live={featured.live} />
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-accent-subtle text-accent font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining projects — 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-150 overflow-hidden"
              >
                <ProjectImage
                  project={project}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="flex flex-col flex-1 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-foreground font-semibold">
                        {project.name}
                      </h3>
                      {project.status === "In Progress" && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent-subtle text-accent font-mono">
                          In Progress
                        </span>
                      )}
                    </div>
                    <ProjectLinks github={project.github} live={project.live} />
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-background border border-border text-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
