import { Github, Linkedin, Mail, FileText } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/rbessin",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/raphael-bessin",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:bessin.raphael@gmail.com",
    icon: Mail,
  },
];

const showcaseLinks = [
  {
    label: "Devpost",
    href: "https://devpost.com/bessin-raphael",
    logo: (
      <svg viewBox="0 0 100 100" className="w-4 h-4 fill-current">
        <path d="M13.3 0h73.4C93.4 0 100 6.6 100 14.7v70.6c0 8.1-6.6 14.7-14.7 14.7H13.3C5.9 100 0 93.4 0 85.3V14.7C0 6.6 5.9 0 13.3 0zm23.3 66.7h13.1c11.2 0 17.3-6.1 17.3-17s-6.1-16.4-17.3-16.4H36.6v33.4zm8.2-26.5h4.6c5.9 0 9.1 3.2 9.1 9.7 0 6.7-3.2 10-9.1 10h-4.6V40.2z" />
      </svg>
    ),
  },
  {
    label: "itch.io",
    href: "https://sky3e.itch.io/",
    logo: (
      <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
        <path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.95-63.73C84.58 300.53 97.47 223 149.8 223z" />
      </svg>
    ),
  },
];

export default function Links() {
  return (
    <div className="flex items-center gap-3 mt-8 w-full">
      {/* Main links */}
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted bg-surface border border-border hover:text-foreground hover:border-accent transition-colors duration-150"
        >
          <Icon className="w-4 h-4" />
          {label}
        </a>
      ))}

      {/* Resume */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors duration-150"
      >
        <FileText className="w-4 h-4" />
        Resume
      </a>

      {/* Divider */}
      <div className="w-px h-6 bg-border flex-shrink-0" />

      {/* Showcase icon-only links */}
      {showcaseLinks.map(({ label, href, logo }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="w-9 h-9 flex items-center justify-center rounded-md text-muted bg-surface border border-border hover:text-foreground hover:border-accent transition-colors duration-150 flex-shrink-0"
        >
          {logo}
        </a>
      ))}
    </div>
  );
}
