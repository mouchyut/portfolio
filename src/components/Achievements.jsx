import { motion } from "framer-motion";
import Angular from "../assets/angular.jpg";
import Springboot from "../assets/springboot.png";

const achievements = [
  {
    title: "Cisco Programming Essentials Certificate",
    file: "/cisco.pdf",
  },
  {
    title: "Graduate from University of Phayao 2025",
    file: "/certificate.pdf",
  },
  {
    title: "Web Development Fullstack Course Angular Framework",
    image: Angular,
    file: "https://docs.google.com/presentation/d/1CJ6ZVIYwYaZ4LPCYBUWaTRPJkCT3ybPLHYVRtSzm748/edit?slide=id.p#slide=id.p",
  },
  {
    title: "Web Development Fullstack Course Java Spring Boot",
    image: Springboot,
    file: "https://docs.google.com/presentation/d/17bJ1QSDYc3g26AJvP4LQvlCxt2nppxlsXBmxRnsqQ-4/edit?usp=sharing",
  },
];

export default function Achievement() {
  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-orange-500 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-4">
              {item.title}
            </h3>

            {/* ถ้ามี image → แสดงภาพแทน iframe */}
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg border border-slate-600"
              />
            ) : (
              <iframe
                src={item.file}
                className="w-full h-64 rounded-lg border border-slate-600"
              ></iframe>
            )}

            <div className="flex gap-4 mt-4">
              <a
                href={item.file}
                target="_blank"
                className="px-4 py-2 bg-primary rounded-lg text-white text-sm hover:bg-orange-700"
              >
                View
              </a>
                <a
                  href={item.file}
                  download
                  className="px-4 py-2 bg-slate-700 rounded-lg text-white text-sm hover:bg-slate-600"
                >
                  Download
                </a>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
