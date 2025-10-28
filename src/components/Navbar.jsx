import { useState, useEffect } from 'react';
import { Scissors, Phone, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${elevated ? 'shadow-md bg-white/90 backdrop-blur' : 'bg-white'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-rose-500 to-amber-400 text-white">
            <Scissors className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <span className="block text-base font-semibold tracking-tight">LuxeLocks</span>
            <span className="block text-xs text-neutral-500">Salon</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
          <a href="#services" className="transition hover:text-neutral-900">Services</a>
          <a href="#booking" className="transition hover:text-neutral-900">Book</a>
          <a href="#contact" className="transition hover:text-neutral-900">Contact</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50">
            <Phone className="h-4 w-4" />
            <span>(123) 456-7890</span>
          </a>
          <a aria-label="Instagram" href="#" className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800">
            <Instagram className="h-5 w-5" />
          </a>
          <a aria-label="Facebook" href="#" className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800">
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu" className="rounded-md p-2 text-neutral-700 ring-neutral-300 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-base">
            <a href="#services" className="rounded-md px-2 py-2 hover:bg-neutral-50" onClick={() => setOpen(false)}>Services</a>
            <a href="#booking" className="rounded-md px-2 py-2 hover:bg-neutral-50" onClick={() => setOpen(false)}>Book</a>
            <a href="#contact" className="rounded-md px-2 py-2 hover:bg-neutral-50" onClick={() => setOpen(false)}>Contact</a>
            <a href="tel:+1234567890" className="mt-2 inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm">
              <Phone className="h-4 w-4" />
              (123) 456-7890
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
