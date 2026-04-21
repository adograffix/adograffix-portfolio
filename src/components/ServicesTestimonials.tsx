import { motion } from 'motion/react';
import { PenTool, Camera, Palette, MonitorPlay, Quote } from 'lucide-react';

const services = [
  {
    title: 'I DESIGN',
    icon: <Palette size={32} strokeWidth={1.5} />,
    desc: 'Transforming ideas into powerful visuals that capture attention and communicate effectively.',
  },
  {
    title: 'I PRINT',
    icon: <PenTool size={32} strokeWidth={1.5} />,
    desc: 'Delivering precision and excellence in physical mediums ensuring clean, polished modern results.',
  },
  {
    title: 'I BRAND',
    icon: <MonitorPlay size={32} strokeWidth={1.5} />,
    desc: 'Enhancing brand identity and visual storytelling through quality, tailored creative strategies.',
  },
  {
    title: 'I PHOTOGRAPH',
    icon: <Camera size={32} strokeWidth={1.5} />,
    desc: 'Creating stunning images that preserve moments alongside professional editing for a flawless finish.',
  },
];

const testimonials = [
  {
    text: "Ado Graffix entirely transformed our brand's trajectory. The new visual identity is not just beautiful; it strictly aligns with our strategic goals. Highly recommended.",
    author: "Sarah Jenkins",
    role: "CEO, Aura Fintech",
  },
  {
    text: "Working with Ado Graffix was a breath of fresh air. The attention to detail, precision, and visual storytelling made our new campaign an instant hit.",
    author: "Marcus Chen",
    role: "Marketing Lead, Flow",
  },
  {
    text: "True professional. Ado Graffix captured the exact mood we were looking for with our festival photography and printing. The execution was flawless across all mediums.",
    author: "Elena Rodriguez",
    role: "Director, Neon Drift",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            My <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive design solutions crafted to elevate your brand and connect deeply with your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{srv.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

  export function Testimonials() {
    return (
      <section className="py-24 md:py-32 bg-indigo-600 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
          <Quote size={240} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-sm uppercase tracking-widest font-semibold text-indigo-200">
              Client Feedback
            </h2>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex flex-col justify-between"
              >
                <p className="text-white text-lg leading-relaxed mb-8">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-bold text-white mb-1">{t.author}</h4>
                  <p className="text-sm text-indigo-200 font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
