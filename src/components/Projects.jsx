import { motion } from "framer-motion";

const projects = [
  {
    title: "Ecommerce System",
    description:
      "Built a fullstack ecommerce platform featuring role-based access, JWT authentication, product management, and an admin dashboard.",
    tech: ["React", "Node.js", "Express", "MySQL", "Prisma", "JWT", "Postman"],
    link: "#",
  },
  {
    title: "Dashboard System",
    description:
      "Built a dashboard system with CRUD APIs, role-based access, user validation, and real-time data management.",
    tech: ["Next.js", "TypeScript", "MySQL", "Postman"],
    link: "#",
  },
  {
    title: "AI Chat Integration",
    description:
      "Prototype app integrating AI API with chat UI for answering technical questions.",
    tech: ["NextJS", "TypeScript", "API Integration", "Line Bot"],
    link: "#",
  },
  {
    title: "Portfolio",
    description:
      "Built a personal portfolio website focusing on modern UI, responsive frontend, and clean component structure.",
    tech: ["ReactJS", "TailwindCSS", "Lucide Icon", "Motion"],
    link: "#",
  },
  {
  title: "Login - Register",
  description:
    "Created a login/register system with form validation, secure input handling, and middleware to protect route.",
  tech: ["NodeJs", "ExpressJS", "JWT", "MySQL","Postman"],
  link: "#",
},
  {
  title: "Line Chat Bot",
  description:
    "Developed a LINE Chatbot and LINE Mini App with custom commands, API integration, and automated replies.",
  tech: ["NextJS", "TailwindCSS", "TypeScript", "Line Messenger."],
  link: "#",
},
  {
  title: "Telegram Bot",
  description:
    "Implemented a Telegram bot for sending automated notifications and handling simple commands.",
  tech: ["AL Language", "Telegram Father"],
  link: "#",
}
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="border border-slate-800 rounded-xl p-4 flex flex-col bg-slate-900/40 h-full transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -4,
              boxShadow: "0 0 18px rgba(255,120,0,0.25)",
              borderColor: "rgba(255,120,0,0.6)",
            }}
          >
            <h3 className="text-lg font-semibold text-slate-100 mb-2">
              {project.title}
            </h3>

            <p className="text-xs text-slate-300 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full bg-slate-800 text-[0.7rem] text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-xs text-primary hover:underline"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
