import { motion } from "framer-motion";

const experiences = [
  {
  year: "July - December 2025",
  role: "ERP Software Developer",
  company: "Xtricate Cambodia",
  details: [
    "Implemented and supported Microsoft ERP solutions for clients in Cambodia.",
    "Worked with modern Microsoft technology stacks and development tools.",
    "Utilized Microsoft SQL Server, including SQL Reporting Services.",
    "Developed integrations using XML, REST APIs, and web services.",
    "Created and customized RDLC report layouts and reporting solutions, including Power BI.",
    "Customized Microsoft Dynamics 365 Business Central to meet client requirements.",
  ],
},
  {
  year: "2024",
  role: "Software Developer",
  company: "Imake Development Limited",
  details: [
    "Assisted with technical troubleshooting and system maintenance for internal systems.",
    "Developed a web application with optimized UI/UX and a well-structured backend.",
    "Designed and implemented RESTful APIs and Webhooks for LINE, Firebase, and DeepSeek AI integrations.",
    "Worked with MySQL, MongoDB, and Firebase Firestore for database management.",
    "Implemented frontend and backend encryption to enhance system security.",
  ],
}
,
  {
  year: "2022 - 2025",
  role: "Team Project Developer",
  company: "University Projects",
  details: [
    "Successfully completed Cisco's online programming and web development course.",
    "Developed fullstack web applications for academic coursework, including portals and management systems.",
    "Designed and implemented database-driven applications using modern development practices.",
  ],
}
,
];

export default function Experience() {
  return (
    <div className="py-24">
      <h2 className="text-3xl font-semibold mb-12 text-center ">
        Work Experience
      </h2>

      <div className="relative border-l border-slate-700 pl-6 ml-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[10px] top-1 w-5 h-5 bg-primary rounded-full shadow-lg"></div>

            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-primary font-medium">{exp.company}</p>
            <p className="text-xs text-slate-400 mt-1">{exp.year}</p>

            {Array.isArray(exp.details) ? (
              <ul className="mt-3 space-y-2 text-slate-300 text-sm list-disc pl-5">
                {exp.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-slate-300 text-sm">{exp.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
