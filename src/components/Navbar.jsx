export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
          Harsh Rawal
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-gray-300 hidden sm:flex">
          {["about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative group font-medium hover:text-blue-400 transition duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Placeholder (optional future addition) */}
      </div>
    </nav>
  );
}
