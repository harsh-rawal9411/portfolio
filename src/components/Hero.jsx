import React from "react";
import profile from "../assets/image.jpg"; 

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left  bg-linear-to-b from-gray-900 to-gray-950 px-22">
      {/* Left: Text */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-400 animate-fadeIn">
          Hi, I'm Harsh 👋
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
        a Frontend Developer who loves turning ideas into interactive web experiences. I build fast, modern, and scalable applications using React, TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Right: Photo */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={profile}
          alt="Harsh Rawal"
          className="w-46 h-46 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-500 shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
