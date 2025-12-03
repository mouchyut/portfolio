import { motion } from "framer-motion";

const blogs = [
  {
    title: "Joined Sicence Law Class",
    image: "./pic1.jpg",
    date: "Feb 2024",
    content:
      "University Of Phayao",
  },
  {
    title: "Job Fair ",
    image: "/pic2.jpg",
    date: "Jul 2024",
    content:
      "University Of Phayao"  },
  {
    title: "Sport and Health",
    image: "/pic3.jpg",
    date: "Mar 2022",
    content:
      "University Of Phayao",
  },
  {
    title: "Presentation in Classroom",
    image: "/pic4.jpg",
    date: "Mar 2025",
    content:
      "University Of Phayao",
  },
  {
    title: "Open academic session",
    image: "/pic6.jpg",
    date: "Apr 2022",
    content:
      "University Of Phayao",
  },
  {
    title: "Graduated 2025",
    image: "/pic7.jpg",
    date: "Mar 2025",
    content:
       "University Of Phayao",
  },

];

export default function Blog() {
  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Blog
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((post, i) => (
          <motion.div
            key={i}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-orange-500 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold text-slate-100 mb-2">
              {post.title}
            </h3>

            <p className="text-xs text-slate-400 mb-2">{post.date}</p>

            <p className="text-sm text-slate-300 line-clamp-3">
              {post.content}
            </p>

            <a
              href="#"
              className="text-primary mt-3 inline-block text-sm hover:underline"
            >
              Read more →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
