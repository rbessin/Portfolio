import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

const collegeExperiences = [
  {
    company: "FADEL",
    role: "Software Engineering Intern",
    period: "May 2026 — Jul 2026",
    bullets: [
      <>
        Built a <strong className="text-foreground">Spring Boot</strong> proxy
        and API documentation platform covering{" "}
        <strong className="text-foreground">9+ domains</strong> (auth, deals,
        royalties, financials, SFTP) with dual{" "}
        <strong className="text-foreground">JSON/XML</strong> format switching
        and bearer token auth flows integrated directly in{" "}
        <strong className="text-foreground">Swagger UI</strong>
      </>,
      <>
        Built <strong className="text-foreground">Claude Code skills</strong>{" "}
        for endpoint calling, bulk testing, and natural language DB querying —
        surfaced SQL injection, silent errors, and type truncations across
        upstream services, authoring{" "}
        <strong className="text-foreground">10+ remediation proposals</strong>
      </>,
      <>
        Implemented <strong className="text-foreground">10 new APIs</strong>{" "}
        with authentication, pagination, sorting, and custom error handling
      </>,
    ],
    url: "https://fadel.com",
  },
  {
    company: "Northeastern Electric Racing",
    role: "Software Lead",
    period: "Sep 2025 — Present",
    bullets: [
      <>
        Architected a{" "}
        <strong className="text-foreground">
          canonical unit conversion system
        </strong>{" "}
        with global metric/imperial defaults and per-field overrides across{" "}
        <strong className="text-foreground">20+ conversions</strong>; reduced
        steering oscillation <strong className="text-foreground">80%</strong>{" "}
        via a low-pass filter on Stanley controller output in NERSim
      </>,
      <>
        Implemented global car filter on{" "}
        <strong className="text-foreground">FinishLine</strong> (270+ users,
        100,000+ LOC), replacing duplicated logic with a single reusable filter
        component via middleware-backed filtering across{" "}
        <strong className="text-foreground">20+ endpoints</strong>, after the
        feature had stalled
      </>,
      <>
        Proposed and built FinishLine&apos;s first developer documentation
        system — a statically generated{" "}
        <strong className="text-foreground">Docusaurus</strong> site
        auto-generating Claude AI skills from docs to avoid maintaining two
        separate sources of truth for{" "}
        <strong className="text-foreground">30+ developers</strong>
      </>,
    ],
    url: "https://nurecing.com",
  },
  {
    company: "NUSci Magazine",
    role: "Web Developer",
    period: "Fall 2025",
    bullets: [
      <>
        Contributed full-stack features to a{" "}
        <strong className="text-foreground">
          Next.js / TypeScript / Express / MongoDB
        </strong>{" "}
        magazine platform replacement for a team of{" "}
        <strong className="text-foreground">10 developers</strong>
      </>,
      <>
        Refactored{" "}
        <strong className="text-foreground">JWT authentication</strong> system
        and resolved authorization middleware errors across the platform
      </>,
      <>
        Built <strong className="text-foreground">Jest</strong> tests to ensure
        platform reliability ahead of production launch
      </>,
    ],
    url: "https://nusci.org",
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
    <div className="flex flex-col p-5 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-150">
      <div className="flex items-start justify-between mb-1 gap-4">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-semibold hover:text-accent transition-colors flex items-center gap-1.5"
        >
          {job.company}
          <ExternalLink className="w-3 h-3 text-muted shrink-0" />
        </a>
        <span className="text-xs text-muted font-mono whitespace-nowrap">
          {job.period}
        </span>
      </div>
      <p className="text-sm text-accent mb-3">{job.role}</p>
      <ul className="space-y-1">
        {job.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-muted leading-relaxed"
          >
            <span className="text-accent mt-1.5 text-xs shrink-0">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineSection({
  label,
  experiences,
}: {
  label: string;
  experiences: Experience[];
}) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-3 mb-5 pl-14">
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          {label}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((job) => (
          <div key={job.company} className="relative flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-surface-raised border border-border flex items-center justify-center z-10">
              <span className="text-accent text-sm font-bold">
                {job.company[0]}
              </span>
            </div>
            <div className="flex-1">
              <ExperienceCard job={job} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-glass scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-accent mb-8">Experience</h2>

        <div className="relative">
          <div className="absolute left-4.75 top-0 bottom-0 w-px bg-border" />

          <TimelineSection
            label="University"
            experiences={collegeExperiences}
          />

          <div className="mt-8">
            <TimelineSection
              label="High School"
              experiences={highSchoolExperiences}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
