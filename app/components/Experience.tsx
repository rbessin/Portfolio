import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "FADEL",
    role: "Software Engineering Intern",
    period: "Summer 2026",
    bullets: [
      "Upcoming internship at an IP licensing and royalty management software company",
    ],
    url: "https://fadel.com",
  },
  {
    company: "Northeastern Electric Racing",
    role: "Web Developer",
    period: "Fall 2025 — Present",
    bullets: [
      "Developing Finishline, an internal web app with 270+ active users, supporting Formula SAE race car development and team operations",
      "Reducing memory usage and hosting costs by 50% by implementing pointer compression on Node.js",
      "Built cross-project material copying and inline material creation to streamline bill of materials workflow",
      "Built reimbursement request features using React, TypeScript, and Prisma",
    ],
    url: "https://nurecing.com",
  },
  {
    company: "Greycroft",
    role: "Technology Intern",
    period: "Summer 2024",
    bullets: [
      "Attended live deal meetings with portfolio candidates, gaining direct exposure to investment evaluation at a top NYC venture capital firm",
      "Conducted a gene editing market analysis to identify emerging investment opportunities in the biotechnology sector",
    ],
    url: "https://greycroft.com",
  },
  {
    company: "Citigroup",
    role: "Technology Intern",
    period: "Summer 2023",
    bullets: [
      "Shadowed technology infrastructure teams working on enterprise data systems at Citi's headquarters",
      "Observed data pipeline architecture and data quality processes across the organization",
    ],
    url: "https://citi.com",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-10 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-accent mb-8">Experience</h2>

      <div className="flex flex-col gap-4">
        {experiences.map((job) => (
          <div
            key={job.company}
            className="flex gap-6 p-6 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-150"
          >
            {/* Logo placeholder */}
            <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent-subtle border border-border flex items-center justify-center">
              <span className="text-accent text-sm font-bold">
                {job.company[0]}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-semibold hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  {job.company}
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>
                <span className="text-xs text-muted font-mono">
                  {job.period}
                </span>
              </div>

              <p className="text-sm text-accent mb-3">{job.role}</p>

              <ul>
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted leading-relaxed"
                  >
                    <span className="text-accent mt-1.5 text-xs">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
