import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-indigo-100 bg-white shadow-sm rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wider"
        >
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500"></span>
          </span>
          Available for freelance work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8"
        >
          Ado Graffix <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
            Graphic Designer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl text-lg md:text-xl text-slate-500 leading-relaxed mb-10"
        >
          Transforming ideas into powerful visuals that capture attention and communicate effectively through design, printing, and branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#work"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-medium rounded-full shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 font-medium rounded-full shadow-sm border border-slate-200 hover:border-slate-300 hover:-translate-y-1 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  const skills = ['Graphic Design', 'Print Design', 'Photography', 'Photo Editing', 'Branding', 'Visual Storytelling', 'Adobe CC'];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-200/50">
              <img
                src="/thumbnails/Cover/ado profile first.jpg"
                alt="Ado - Graphic Designer"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl border-2 border-indigo-100 -z-10" />
            <div className="absolute top-6 -left-6 w-32 h-32 rounded-full bg-orange-100/50 blur-2xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Bringing visions into <br /> <span className="text-indigo-600">vibrant reality.</span>
            </h2>
            <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Ado Graffix</strong> is known for creativity, precision, and excellence in visual storytelling. 
                With a sharp eye for detail, every project is crafted with care to ensure clean, polished, and impactful results.
              </p>
              <p>
                My expertise extends to <strong className="text-slate-900 font-medium">photography and editing</strong>, where I refine content for a flawless finish and create stunning images that preserve moments and enhance brand identity. 
                I stand for professionalism, always committed to delivering designs that meet modern standards and client expectations.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Core Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
