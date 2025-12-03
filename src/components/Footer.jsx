export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Mouch Yut. All rights reserved.</span>
        <span>Built with React & TailwindCSS.</span>
      </div>
    </footer>
  );
}
