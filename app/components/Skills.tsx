import { Code2, Database, Layers, Wrench, Languages } from "lucide-react";

const technicalSkills = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C#",
      "GDScript",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Spring",
      "Django",
      "Prisma",
      "NumPy",
      "Dash",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Oracle DB"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Claude Code",
      "Git",
      "Docker",
      "Figma",
      "Godot",
      "Unity",
      "Vercel",
      "Swagger",
    ],
  },
  {
    category: "Spoken Languages",
    icon: Languages,
    skills: ["French (native)", "English (native)", "German (proficient)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-glass scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-accent mb-8">Skills</h2>

        <div className="rounded-lg bg-surface border border-border divide-y divide-border">
          {technicalSkills.map(({ category, icon: Icon, skills }) => (
            <div
              key={category}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 py-4"
            >
              {/* Category label + icon */}
              <div className="flex items-center gap-2.5 sm:w-52 sm:shrink-0">
                <div className="w-7 h-7 rounded-md bg-accent-subtle flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider">
                  {category}
                </p>
              </div>

              {/* Divider — hidden on mobile */}
              <div className="hidden sm:block w-px h-6 bg-border shrink-0" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-foreground font-mono hover:border-accent hover:text-accent transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
