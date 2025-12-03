import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2021 - 2025",
    degree: "Bachelor of Information Technology",
    school: "University of Phayao, Thailand",
  },
  {
    year: "2020 - 2021",
    degree: "Bachelor of Information Technology",
    school: "Royal University of Phnom Penh, Cambodia",
  },
  {
    year: "2017 - 2019",
    degree: "Deploma",
    school: "MongKol Borei High School, Cambodia",
  },
];

export default function Education() {
  return (
    <div className="py-24">
      <h2 className="text-5xl font-bold text-primary mb-14">Education</h2>

      <div className="space-y-8">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="bg-slate-900/40 w-full  from-[#7a2c1f] to-[#4b1e17] 
                       p-8 rounded-2xl shadow-lg flex flex-col gap-3 
                       text-white border border-slate-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Top Row: Icon & Year */}
            <div className="flex items-center gap-3 text-orange-300 font-semibold text-sm uppercase tracking-wide">
              <GraduationCap size={22} />
              <span>{item.year}</span>
            </div>

            {/* Degree Title */}
            <h3 className="text-2xl font-bold">{item.degree}</h3>

            {/* School */}
            <p className="text-md text-orange-100">{item.school}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
