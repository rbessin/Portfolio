import Navigation from "./components/Navigation";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import DotGrid from "./components/DotGrid";

export default function Home() {
  return (
    <>
      {/* Fixed dot grid behind all content */}
      <DotGrid />

      {/* Main content sits above the dot grid via z-index */}
      <main className="relative z-1 min-h-screen">
        <Navigation />
        <div className="pt-16">
          {/* About is above the fold — no animation wrapper to avoid flash */}
          <About />
          <AnimateOnScroll>
            <Education />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Skills />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Projects />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Experiences />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Footer />
          </AnimateOnScroll>
        </div>
      </main>
    </>
  );
}
