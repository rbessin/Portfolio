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

export default function Links() {
  return (
    <div className="flex items-center gap-3 mt-8 w-full">
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

      {/* Resume — accent styled */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors duration-150"
      >
        <FileText className="w-4 h-4" />
        Resume
      </a>
    </div>
  );
}
