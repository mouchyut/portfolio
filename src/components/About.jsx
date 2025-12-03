export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 ">About Me</h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          I&apos;m a Fullstack developer with a strong interest in web
          technologies, backend systems, and AI. I enjoy turning ideas into
          real, working applications – from clean UIs to stable APIs.
        </p>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
          I love learning new tools, experimenting with side projects, and
          improving code quality. Teamwork, communication, and problem-solving
          are my core strengths. 
        </p>
      </div>

      <div className="space-y-4">
        <div className="border border-slate-800 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-slate-200 mb-1">
            Current Focus
          </h3>
          <p className="text-xs text-slate-400">
            Building modern web apps using React / Next.js, Node.js, and cloud
            services. Practicing clean architecture and scalable API design.
          </p>
        </div>

        <div className="border border-slate-800 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-slate-200 mb-1">
            What I&apos;m Looking For
          </h3>
          <p className="text-xs text-slate-400">
            A role where I can grow as a fullstack / backend developer / Frontend, work
            with a solid team, and build products that solve real problems.
          </p>
        </div>
      </div>
    </div>
  );
}
