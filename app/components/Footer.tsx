import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-glass">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="h-px bg-border mb-12" />

        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Let&apos;s connect.
            </h2>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Open to internship + co-op opportunities, interesting projects,
              and good conversations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:bessin.raphael@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors duration-150"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="https://github.com/rbessin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-muted bg-surface border border-border hover:text-foreground hover:border-accent transition-colors duration-150"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/raphael-bessin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-muted bg-surface border border-border hover:text-foreground hover:border-accent transition-colors duration-150"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-muted pt-4">© 2026 Raphaël Bessin</p>
        </div>
      </div>
    </footer>
  );
}
