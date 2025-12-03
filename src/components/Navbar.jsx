import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-primary">Mouch Yut</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300"  // ไม่มี hover
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="sm:hidden text-slate-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden bg-slate-900 px-4 pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-slate-300 text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
