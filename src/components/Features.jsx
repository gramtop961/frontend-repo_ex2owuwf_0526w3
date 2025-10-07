import { Star, LightningBolt, Shield } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Simple & Clean',
    desc: 'A focused, minimal starter that gets out of your way.',
  },
  {
    icon: LightningBolt,
    title: 'Fast by Default',
    desc: 'Vite + React + Tailwind for instant feedback and speed.',
  },
  {
    icon: Shield,
    title: 'Type-Safe Ready',
    desc: 'Structured components with room to grow safely.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
