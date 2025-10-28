import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
      </main>
      <footer id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-neutral-500">© {new Date().getFullYear()} LuxeLocks Salon. All rights reserved.</p>
            <p className="text-sm text-neutral-500">123 Blossom Ave, Suite 12, New York, NY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
