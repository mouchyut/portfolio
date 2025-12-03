import { motion } from "framer-motion";
import { Code, Brush, Server, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: <Code size={40} />,
    description:
      "Building modern, responsive, and interactive user interfaces using React, TailwindCSS, and modern UI/UX principles.",
  },
  {
    title: "Backend Development",
    icon: <Server size={40} />,
    description:
      "Developing scalable APIs, integrating databases, and creating secure backend systems using Node.js, Express, Fastify, and SQL/NoSQL databases.",
  },
  {
    title: "UI/UX & Web Design",
    icon: <Brush size={40} />,
    description:
      "Designing clean, user-friendly interfaces and layouts using Figma, ensuring great user experience across all devices.",
  },
  {
    title: "AI Integration",
    icon: <BrainCircuit size={40} />,
    description:
      "Building AI-powered features, integrating LLMs, chatbots, DeepSeek, Gemini, and automation workflows for real-world applications.",
  },
];

export default function Service() {
  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold text-center mb-14 text-primary"> 
        Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-8">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            className="p-6 bg-[#1b1b1b] rounded-2xl border border-slate-700 shadow-lg hover:border-orange-500 transition-all flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,120,0,0.4)",
            }}
          >
            <div className="text-orange-400">{srv.icon}</div>

            <h3 className="text-xl font-semibold text-white">{srv.title}</h3>

            <p className="text-sm text-slate-300">{srv.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
