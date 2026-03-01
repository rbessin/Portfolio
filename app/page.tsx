import Navigation from "./components/Navigation";
import About from "./components/About";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
    </main>
  );
}
