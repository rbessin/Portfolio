import Image from "next/image";
import Links from "./Links";

export default function About() {
  return (
    <section id="about" className="section-glass scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left: content */}
        <div className="flex-1">
          {/* Hero identity */}
          <div className="mb-5">
            <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight leading-tight">
              Raphaël Bessin
            </h1>
            <p className="text-xl text-accent font-medium leading-snug">
              Building software that&apos;s well-crafted
              <br className="hidden sm:block" /> and genuinely useful.
            </p>
          </div>

          {/* Meta */}
          <p className="text-sm text-muted font-mono mb-1">
            CS @ Northeastern Honors · Class of 2029
          </p>
          <p className="text-sm text-muted font-mono mb-8">
            Boston, MA · US / French Citizen · Tokyo · London · New York
          </p>

          <Links />

          {/* Divider */}
          <div className="my-8 h-px bg-border" />

          {/* Bio */}
          <div className="space-y-4 text-muted leading-relaxed text-sm">
            <p>
              I care about building software that&apos;s both well-crafted and
              genuinely useful — from interactive tools and editors to web
              applications used by real teams.
            </p>
            <p>
              I&apos;m a{" "}
              <strong className="text-foreground">
                dual US-French citizen
              </strong>
              , raised between Tokyo, London, New York and the French education
              system, which gave me a deep appreciation for both rigorous
              thinking and creative problem-solving. Outside of code, I spend my
              time traveling, hiking, training for a marathon, playing chess,
              and exploring through a camera lens.
            </p>
            <p>
              I recently finished building{" "}
              <strong className="text-foreground">Signal Relay</strong>, an
              interactive{" "}
              <strong className="text-foreground">
                digital logic circuit simulator
              </strong>{" "}
              in Godot, and took on two new roles as a Software Lead for{" "}
              <strong className="text-foreground">
                Northeastern Electric Racing
              </strong>{" "}
              and an E-Board Member for{" "}
              <strong className="text-foreground">
                the Honors Alumni Mentoring Network
              </strong>{" "}
              at Northeastern.
            </p>
          </div>
        </div>

        {/* Right: photo */}
        <div className="shrink-0 self-center md:self-start md:mt-6">
          <Image
            src="/profile.jpg"
            alt="Photo of Raphaël Bessin"
            width={300}
            height={300}
            className="rounded-xl object-cover border border-border w-48 md:w-75 shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
