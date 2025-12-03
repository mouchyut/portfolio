import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Achievement from "./components/Achievements";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Education from "./components/Education";
import NeuralNoise from "./components/neural-glow";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950/50 text-slate-50">
      {/* ⭐ Neural Glow Background FIXED */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <NeuralNoise />
      </div>

      <Navbar />

      <main className="max-w-6xl mx-auto px-4">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="skills" className="py-24">
          <Skills />
        </section>

        <section id="education" className="py-24">
          <Education />
        </section>

        <section id="experience" className="py-24">
          <Experience />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="achievement" className="py-24">
          <Achievement />
        </section>

        <section id="services" className="py-24">
          <Service />
        </section>
        <section id="blog" className="py-24">
          <Blog />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
