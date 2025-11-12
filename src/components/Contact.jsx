import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-center"
    >
      <h2 className="text-4xl font-extrabold text-blue-400 mb-6 tracking-wide">
        Get In Touch 💬
      </h2>
      <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
        I’m always open to discussing new opportunities, collaborations, or just
        chatting about tech! Let’s connect and create something amazing together.
      </p>

      <div className="flex flex-col items-center space-y-6 text-gray-300">
        <a
          href="mailto:harshrawal94110@gmail.com"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <Mail size={22} /> harshrawal94110@gmail.com
        </a>

        <a
          href="tel:+916398275451"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <Phone size={22} /> +91 6398275451
        </a>

        <a
          href="https://www.linkedin.com/in/harshrawal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <Linkedin size={22} /> linkedin.com/in/harshrawal
        </a>
      </div>

      <div className="mt-12">
        <a
          href="mailto:harshrawal94110@gmail.com"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-transform transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
        >
          Let's Talk 🚀
        </a>
      </div>
    </section>
  );
}
