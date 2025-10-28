import { Scissors, Palette, Brush, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Precision Haircut',
    desc: 'Consultation, wash, cut, and custom finish tailored to your features and lifestyle.',
    price: '$65+',
  },
  {
    icon: Palette,
    title: 'Color & Highlights',
    desc: 'Gloss, balayage, foils, and lived-in color for radiant dimension and shine.',
    price: '$120+',
  },
  {
    icon: Brush,
    title: 'Blowout & Style',
    desc: 'Polished blowout, waves, silk press, or updo for any occasion.',
    price: '$55+',
  },
  {
    icon: Sparkles,
    title: 'Treatments',
    desc: 'Deep conditioning, bond-building, and scalp therapies for stronger, healthier hair.',
    price: '$35+',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Signature Services</h2>
          <p className="mt-3 text-neutral-600">Premium techniques, tailored to you. Transparent pricing and exceptional care.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-900">{price}</span>
                <a href="#booking" className="text-sm font-medium text-rose-600 hover:text-rose-700">Book now →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
