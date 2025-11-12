import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Harsh Rawal. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
