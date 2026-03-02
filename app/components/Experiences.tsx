import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

const collegeExperiences = [
  {
    company: "FADEL",
    role: "Software Engineering Intern",
    period: "Summer 2026",
    bullets: [
      <>
        Upcoming internship at an{" "}
        <strong className="text-foreground">
          IP licensing and royalty management
        </strong>{" "}
        software company
      </>,
    ],
    url: "https://fadel.com",
  },
  {
    company: "Northeastern Electric Racing",
    role: "Web Developer",
    period: "Fall 2025 — Present",
    bullets: [
      <>
        Developing Finishline, an internal web app with{" "}
        <strong className="text-foreground">270+ active users</strong>,
        supporting Formula SAE race car development and team operations
      </>,
      <>
        Reducing memory usage by{" "}
        <strong className="text-foreground">50%</strong> and hosting costs by{" "}
        <strong className="text-foreground">30%</strong> by implementing{" "}
        <strong className="text-foreground">pointer compression</strong> on
        Node.js
      </>,
      <>
        Built cross-project material copying and inline material creation across{" "}
        <strong className="text-foreground">100+ materials and parts</strong>{" "}
        using React, TypeScript, and Prisma
      </>,
      <>
        Built an automated{" "}
        <strong className="text-foreground">Docusaurus</strong> documentation
        site processing SKILL.md files, serving{" "}
        <strong className="text-foreground">30+ developers</strong> and reducing
        onboarding friction
      </>,
    ],
    url: "https://nurecing.com",
  },
];

const highSchoolExperiences = [
  {
    company: "FIRST Tech Challenge — Sharkbots #14903",
    role: "Web Co-Lead & Outreach Coordinator",
    period: "2022 — 2024",
    bullets: [
      <>
        Qualified for and competed at{" "}
        <strong className="text-foreground">World Championships twice</strong>,
        placing <strong className="text-foreground">top 16</strong> out of{" "}
        <strong className="text-foreground">8,000+ teams</strong> globally
      </>,
      <>
        Built <strong className="text-foreground">The Ocean Scout</strong>, a
        scouting platform integrating The Orange Alliance API with user
        comments, admin system, and group organization
      </>,
      <>
        Organized and refereed an FLL competition impacting{" "}
        <strong className="text-foreground">50+ young students</strong>
      </>,
      <>
        Led outreach programs with teams across{" "}
        <strong className="text-foreground">5 countries</strong> including
        Tunisia, Burkina Faso, Brazil, Kazakhstan, and India
      </>,
      <>
        Helped raise over <strong className="text-foreground">$7,000</strong>{" "}
        through fundraising initiatives
      </>,
    ],
    url: "https://www.sharkbots.org",
  },
  {
    company: "Greycroft",
    role: "Technology Intern",
    period: "Summer 2024",
    bullets: [
      <>
        Attended live deal meetings with portfolio candidates, gaining direct
        exposure to investment evaluation at a{" "}
        <strong className="text-foreground">
          top NYC venture capital firm
        </strong>
      </>,
      <>
        Conducted a{" "}
        <strong className="text-foreground">
          gene editing market analysis
        </strong>{" "}
        to identify emerging investment opportunities in the biotechnology
        sector
      </>,
    ],
    url: "https://greycroft.com",
  },
  {
    company: "Citigroup",
    role: "Technology Intern",
    period: "Summer 2023",
    bullets: [
      <>
        Shadowed technology infrastructure teams working on{" "}
        <strong className="text-foreground">enterprise data systems</strong> at
        Citi&apos;s headquarters
      </>,
      <>
        Observed{" "}
        <strong className="text-foreground">data pipeline architecture</strong>{" "}
        and data quality processes across the organization
      </>,
    ],
    url: "https://citi.com",
  },
];

type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: ReactNode[];
  url: string;
};

function ExperienceCard({ job }: { job: Experience }) {
  return (
    <div className="flex gap-6 p-6 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-150">
      <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent-subtle border border-border flex items-center justify-center">
        <span className="text-accent text-sm font-bold">{job.company[0]}</span>
      </div>
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
          <span className="text-xs text-muted font-mono">{job.period}</span>
        </div>
        <p className="text-sm text-accent mb-3">{job.role}</p>
        <ul>
          {job.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted leading-relaxed"
            >
              <span className="text-accent mt-1.5 text-xs">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-10 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-accent mb-8">Experience</h2>

      {/* University */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          University
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-4 mb-8">
        {collegeExperiences.map((job) => (
          <ExperienceCard key={job.company} job={job} />
        ))}
      </div>

      {/* High School */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          High School
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-4">
        {highSchoolExperiences.map((job) => (
          <ExperienceCard key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
}
