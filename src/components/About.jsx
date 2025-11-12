import React from "react";
import { Code, Laptop, Rocket } from "lucide-react"; // optional icons

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-center"
    >
      <h2 className="text-4xl font-extrabold text-blue-400 mb-6 tracking-wide">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
        <p className="animate-fadeIn">
          Hey there! 👋 I’m <span className="text-blue-300 font-semibold">Harsh Rawal</span>, a
          passionate <span className="text-blue-300 font-semibold">React Developer</span> currently
          working at <span className="font-medium text-white">Ira Technology</span>.
        </p>

        <p className="animate-fadeIn delay-100">
          I love transforming complex ideas into clean, functional, and visually engaging web
          experiences. My primary focus is on creating seamless user interfaces with{" "}
          <span className="text-blue-300 font-semibold">React</span> and{" "}
          <span className="text-blue-300 font-semibold">Tailwind CSS</span>.
        </p>

        <p className="animate-fadeIn delay-200">
          Beyond frontend, I’m exploring backend development with{" "}
          <span className="text-blue-300 font-semibold">Spring Boot</span> and{" "}
          <span className="text-blue-300 font-semibold">Flask</span> to grow into a complete
          full-stack developer. I enjoy problem-solving, building efficient systems, and learning
          something new every day.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-12 gap-6">
        <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-2 w-64">
          <Code className="mx-auto text-blue-400 mb-3" size={36} />
          <h3 className="text-xl font-semibold mb-2 text-white">Frontend Magic</h3>
          <p className="text-gray-400 text-sm">
            Building smooth, interactive UI using React, Tailwind, and modern JS tools.
          </p>
        </div>

        <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-2 w-64">
          <Laptop className="mx-auto text-blue-400 mb-3" size={36} />
          <h3 className="text-xl font-semibold mb-2 text-white">Continuous Learning</h3>
          <p className="text-gray-400 text-sm">
            Exploring backend tech like Java (Spring Boot) and Flask for full-stack growth.
          </p>
        </div>

        <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-2 w-64">
          <Rocket className="mx-auto text-blue-400 mb-3" size={36} />
          <h3 className="text-xl font-semibold mb-2 text-white">Future Goals</h3>
          <p className="text-gray-400 text-sm">
            Aim to build scalable web apps that blend creativity, performance, and usability.
          </p>
        </div>
      </div>
    </section>
  );
}
