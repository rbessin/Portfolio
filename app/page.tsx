import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-16">
        <About />
        <Skills />
        <Projects />
        <Experiences />
      </div>
    </main>
  );
}
