import Nav from "./components/Nav";
import "./App.css";
import "./index.css";

import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      <div className="mx-auto px-8">
        <Nav />
        <Hero />
        <Technology />
        <Skills />
        <Experience />
        <Testimonials />
        
        <Projects />
        
        <Contact />
      </div>
    </div>
  );
}

export default App;
