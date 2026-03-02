import Image from "next/image";
import Links from "./Links";

export default function About() {
  return (
    <section
      id="about"
      className="flex space-x-12 max-w-6xl mx-auto px-6 pt-20 pb-10 scroll-mt-16"
    >
      <div>
        <h1 className="text-4xl font-bold text-accent mb-6">About</h1>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m Raphael, a Computer Science student in the Honors College
            at{" "}
            <a
              href="https://northeastern.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-border hover:decoration-accent transition-colors"
            >
              Northeastern University
            </a>
            , Class of 2029. I care about building software that&apos;s both
            well-crafted and genuinely useful from interactive tools and editors
            to web applications used by real teams.
          </p>
          <p>
            I&apos;m a dual US-French citizen, raised between Tokyo, London, New
            York and the French education system, which gave me a deep
            appreciation for both rigorous thinking and creative
            problem-solving. Outside of code, I spend my time traveling, hiking,
            running, playing chess, video games,and exploring through a camera
            lens.
          </p>
          <p>
            I&apos;m currently building{" "}
            <span className="text-foreground font-medium">Signal Relay</span>,
            an interactive digital logic circuit simulator in Godot, and working
            as a web developer for Northeastern Electric Racing.
          </p>
        </div>
        <Links />
      </div>
      <div className="flex-shrink-0 self-center">
        <Image
          src="/profile.jpg"
          alt="Photo of me"
          width={300}
          height={300}
          className="rounded-lg object-cover border-border"
        />
      </div>
    </section>
  );
}
