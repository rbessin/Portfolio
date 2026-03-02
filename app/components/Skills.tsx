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
      "Django",
      "Prisma",
      "Tailwind CSS",
      "Chrome Extensions API",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Figma", "Godot", "Unity", "Vercel", "Docker"],
  },
  {
    category: "Spoken Languages",
    icon: Languages,
    skills: ["French (native)", "English (native)", "German (proficient)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-10 scroll-mt-16">
      <h2 className="text-4xl font-bold text-accent mb-8">Skills</h2>

      <div className="rounded-lg bg-surface border border-border divide-y divide-border">
        {technicalSkills.map(({ category, icon: Icon, skills }) => (
          <div key={category} className="flex items-center gap-6 px-6 py-4">
            {/* Category label + icon */}
            <div className="flex items-center gap-2.5 w-52 flex-shrink-0">
              <div className="w-7 h-7 rounded-md bg-accent-subtle flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="text-xs font-mono text-muted uppercase tracking-wider">
                {category}
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-border flex-shrink-0" />

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
    </section>
  );
}
