import { ExternalLink } from "lucide-react";

const education = [
  {
    school: "Northeastern University",
    degree: "Bachelor of Science in Computer Science",
    sub: "John Martinson Honors College · Khoury College of Computer Sciences",
    period: "Sep 2025 — May 2029",
    location: "Boston, MA",
    url: "https://northeastern.edu",
    highlights: [
      "GPA: 4.00 / 4.00 · Dean's List: Fall 2025, Spring 2026",
      "Relevant Coursework: Object-Oriented Design, Algorithms & Data Structures, Discrete Structures",
    ],
    initial: "N",
  },
  {
    school: "French American School of New York",
    degree: "High School Diploma & International French Baccalaureate",
    sub: null,
    period: "Sep 2021 — Jun 2025",
    location: "New York, NY",
    url: "https://fasny.org",
    highlights: [
      "Ranked 1st in grade · Mention Très Bien (Highest Honors)",
      "High Honors in Mathematics & Physics",
    ],
    initial: "F",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-glass scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-accent mb-8">Education</h2>

        <div className="flex flex-col gap-4">
          {education.map((entry) => (
            <div key={entry.school} className="flex items-start gap-4">
              {/* Initial badge */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-surface-raised border border-border flex items-center justify-center">
                <span className="text-accent text-sm font-bold">
                  {entry.initial}
                </span>
              </div>

              {/* Card */}
              <div className="flex-1 p-5 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-150">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-semibold hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    {entry.school}
                    <ExternalLink className="w-3 h-3 text-muted shrink-0" />
                  </a>
                  <span className="text-xs text-muted font-mono whitespace-nowrap">
                    {entry.period}
                  </span>
                </div>

                <p className="text-sm text-accent mb-1">{entry.degree}</p>
                {entry.sub && (
                  <p className="text-xs text-muted font-mono mb-3">
                    {entry.sub}
                  </p>
                )}

                <ul className="space-y-1 mt-2">
                  {entry.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted leading-relaxed"
                    >
                      <span className="text-accent mt-1.5 text-xs shrink-0">
                        ▸
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
