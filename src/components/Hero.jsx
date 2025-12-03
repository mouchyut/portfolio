import Image from "../assets/image.jpg"
export default function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6 pt-16">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        Full Stack Developer
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Hi, I&apos;m <span className="text-primary">Mouch Yut</span>
      </h1>

      <p className="max-w-2xl text-slate-300 text-sm sm:text-base">
        Fullstack developer who loves building clean, modern web apps.
        Passionate about React, Node.js, APIs, and making things that actually
        work in real life.
      </p>
       <img
          src={Image}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-xl"
        />

      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-orange-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-slate-600 text-sm font-medium text-slate-200 hover:bg-slate-800 transition"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
        <span className="px-3 py-1 rounded-full border border-slate-700">
          React
        </span>
        <span className="px-3 py-1 rounded-full border border-slate-700">
          Next.js
        </span>
        <span className="px-3 py-1 rounded-full border border-slate-700">
          Node.js
        </span>
        <span className="px-3 py-1 rounded-full border border-slate-700">
          REST API
        </span>
        <span className="px-3 py-1 rounded-full border border-slate-700">
          MySQL / MongoDB
        </span>
      </div>
    </div>
  );
}
