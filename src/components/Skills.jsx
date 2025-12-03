import { motion } from "framer-motion";
import React from "../assets/react.svg";
import Css from "../assets/css.svg";
import Html from "../assets/html.svg";
import JavaScript from "../assets/javascript.png";
import Nextjs from "../assets/nextjs.png";
import TypeScript from "../assets/typescript.png";
import Python from "../assets/python.png";
import Nodejs from "../assets/node.png";
import MySql from "../assets/mysql.png";
import Mongo from "../assets/mongo.png";
import Express from "../assets/express.png";
import Tailwind from "../assets/tailwind.png";
import Postman from "../assets/postman.png";
import AL from "../assets/al.png";
import Angular from "../assets/Angular.png";
import Springboot from "../assets/springboot.png";

const skills = [
  { name: "ReactJS", img: React },
  { name: "NextJS", img: Nextjs },
  { name: "AngularJS", img: Angular},
  { name: "HTML", img: Html },
  { name: "CSS", img: Css },
  { name: "JavaScript", img: JavaScript },
  { name: "TypeScript", img: TypeScript },
  { name: "Python", img: Python },
  { name: "NodeJS", img: Nodejs },
  { name: "ExpressJS", img: Express },
  { name: "Spring Boot", img: Springboot },
  { name: "MySQL", img: MySql },
  { name: "MongoDB", img: Mongo },
  { name: "TailWind CSS", img: Tailwind },
  { name: "AL Language", img: AL },
  { name: "Postman", img: Postman },
];

export default function Skills() {
  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-[#1a1a1a] w-36 h-36 rounded-2xl border border-[#262626]
  shadow-[0_0_25px_rgba(255,98,0,0.2)]
  flex flex-col items-center justify-center gap-4 
  transition-all duration-300"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 35px rgba(255,118,0,0.4)",
            }}
          >
            <motion.img
              src={skill.img}
              alt={skill.name}
              className="w-14 h-14 object-contain rounded-xl"
              animate={{
                y: [0, -6, 0], // ลอยขึ้น ลง วน
              }}
              transition={{
                duration: 2,
                repeat: Infinity, // วน loop
                ease: "easeInOut",
              }}
            />

            <span className="text-sm text-gray-300 font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
