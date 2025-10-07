export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Hello World. Built with Vite + React + Tailwind.
        </p>
      </div>
    </footer>
  );
}
