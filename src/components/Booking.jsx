import { useState } from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Precision Haircut', date: '', time: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-white via-rose-50 to-amber-50" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book your appointment</h2>
            <p className="mt-3 max-w-prose text-neutral-600">Tell us what you need and your preferred time. We’ll confirm via phone or text shortly.</p>

            <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Full name</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Alex Johnson" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none ring-rose-400 focus:ring" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(123) 456-7890" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none ring-rose-400 focus:ring" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Service</label>
                  <select name="service" value={form.service} onChange={handleChange} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-rose-400 focus:ring">
                    <option>Precision Haircut</option>
                    <option>Color & Highlights</option>
                    <option>Blowout & Style</option>
                    <option>Treatments</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none ring-rose-400 focus:ring" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Time</label>
                  <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none ring-rose-400 focus:ring" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" placeholder="Any specifics we should know?" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none ring-rose-400 focus:ring" />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800">
                  <Calendar className="h-4 w-4" />
                  Request booking
                </button>
                {submitted && <span className="text-sm text-rose-600">Thanks! We’ll reach out to confirm shortly.</span>}
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Visit LuxeLocks Salon</h3>
            <p className="mt-2 max-w-prose text-neutral-600">Immerse yourself in a calm, modern space designed for relaxation and great hair.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-neutral-50 p-4">
                <div className="flex items-center gap-2 text-neutral-700">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Address</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">123 Blossom Ave, Suite 12<br />New York, NY 10001</p>
              </div>
              <div className="rounded-xl bg-neutral-50 p-4">
                <div className="flex items-center gap-2 text-neutral-700">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Call/Text</span>
                </div>
                <a href="tel:+1234567890" className="mt-2 block text-sm font-medium text-neutral-900">(123) 456-7890</a>
                <p className="text-xs text-neutral-500">Mon–Sat, 9am–7pm</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1500&auto=format&fit=crop"
                alt="Modern salon interior with styling chairs"
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="mt-6 text-sm text-neutral-600">
              Street parking available. Please arrive 5 minutes early for your appointment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
