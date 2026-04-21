import { Navigation } from './components/Navigation';
import { Hero, About } from './components/HeroAbout';
import { Portfolio } from './components/Portfolio';
import { Services, Testimonials } from './components/ServicesTestimonials';
import { Contact, Footer } from './components/ContactFooter';

export default function App() {
  return (
    <main className="bg-slate-50 min-h-screen relative text-slate-900 selection:bg-indigo-500 selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
