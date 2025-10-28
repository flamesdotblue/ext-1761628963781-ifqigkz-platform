import { Star, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-amber-50 to-white" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-700">
            <Star className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wide">New Client Special: 20% Off Color</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Elevate your look with LuxeLocks Salon
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Expert cuts, dimensional color, and flawless styling in a calm, luxurious setting. Your best hair day starts here.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white shadow-lg shadow-neutral-900/10 transition hover:-translate-y-0.5 hover:bg-neutral-800">
              <Calendar className="h-5 w-5" />
              Book an appointment
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-800 transition hover:bg-neutral-50">
              View services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500" />
              <span>4.9/5 rating</span>
            </div>
            <div>Over 1,000 happy clients</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-rose-200/40 blur-2xl" />
          <div className="absolute -bottom-6 -left-8 h-48 w-48 rounded-full bg-amber-200/40 blur-2xl" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1500&auto=format&fit=crop"
              alt="Stylist perfecting a modern haircut"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
