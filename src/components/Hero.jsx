export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[1200px] rounded-full bg-gradient-to-br from-indigo-200 via-violet-200 to-sky-200 opacity-60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Hello, World!
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A minimal, beautiful landing page starter built with Vite, React, and Tailwind CSS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
