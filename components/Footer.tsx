export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Mohan Kr • Built with Next.js & Tailwind
      </div>
    </footer>
  );
}
