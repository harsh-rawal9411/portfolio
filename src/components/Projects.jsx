import React from "react";
import { ExternalLink, Code2, Globe, Rocket } from "lucide-react";

const projects = [
  {
    name: "Wayzo 🌍",
    description:
      "A collaborative travel platform where users can create, explore, and join tours — built with React and Java Spring Boot.",
    tech: ["React", "Tailwind CSS", "Spring Boot", "MySQL"],
    link: "https://691d716b9224470ed257eacb--funny-sunflower-106d4d.netlify.app/",
    icon: <Globe className="text-blue-400" size={32} />,
  },
  {
    name: "DevConnect 💬",
    description:
      "A social networking app for developers with profile pages, post feeds, and theme switching — built entirely in React.",
    tech: ["React", "Context API", "Vite", "CSS Animations"],
    link: "#",
    icon: <Code2 className="text-blue-400" size={32} />,
  },
  {
    name: "Expense Tracker 💸",
    description:
      "A smart way to manage expenses and visualize spending, powered by MockAPI.io for backend simulation.",
    tech: ["React", "MockAPI.io", "jsPDF", "Chart.js"],
    link: "#",
    icon: <Rocket className="text-blue-400" size={32} />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-12 tracking-wide">
        Featured Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={index}
            className="group bg-gray-900/60 hover:bg-gray-800 transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-2 border border-gray-800 hover:border-blue-500/50"
          >
            <div className="flex items-center justify-center mb-4">
              {p.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition">
              {p.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-500/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm font-medium"
            >
              <ExternalLink size={16} /> View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
