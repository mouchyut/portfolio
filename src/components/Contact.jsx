import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import Swal from "sweetalert2";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for your message ❤️",
      confirmButtonColor: "#ff4500",
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary ">
          Contact
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mb-4">
          If you&apos;d like to talk about a role, a project, or just connect,
          feel free to reach out. I&apos;m open to junior / graduate roles in
          software development.
        </p>
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="w-5 h-5" />
              mouchyut@gmail.com
            </a>
          </p>
          <p>
            <a className="text-primary hover:underline flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +855 85363683
            </a>
          </p>
          <p>
            <a
              href="https://github.com/mouchyut"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline flex items-center gap-2"
            >
              <Github className="" />
              github.com/mouchyut
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/mouchyut/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline flex items-center gap-2"
            >
              <Linkedin />
              linkedin.com/in/yutmouch
            </a>
          </p>
          <p>
            <a className="text-primary hover:underline flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Sangkat Preaek Lieb, Khan Chrouy Changvar, Phnom Penh
            </a>
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-slate-800 rounded-xl p-4 bg-slate-900/40 space-y-3"
      >
        <div>
          <label className="block text-xs mb-1 text-slate-300">Name</label>
          <input
            type="text"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-xs mb-1 text-slate-300">Email</label>
          <input
            type="email"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block text-xs mb-1 text-slate-300">Message</label>
          <textarea
            rows="4"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary resize-none"
            placeholder="Tell me about the role, project, or question..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-primary text-sm font-medium hover:bg-orange-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
