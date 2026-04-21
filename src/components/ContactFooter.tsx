import { motion } from 'motion/react';
import { Mail, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import type { FormEvent } from 'react';

export function Contact() {
  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const message = formData.get('message');
    // Construct the WhatsApp URL with pre-filled text
    const text = encodeURIComponent(`Hi! My name is ${name}.\n\n${message}`);
    window.open(`https://wa.me/2349061161154?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Let's build <br />
              <span className="text-indigo-600">something great.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-sm leading-relaxed">
              Whether you have a specific project in mind or just want to say hi, 
              my inbox is always open. Let's create something functional and beautiful.
            </p>

            <div className="space-y-8">
              <div>
                <span className="block text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Direct Email</span>
                <a href="mailto:adosammy120@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-3">
                  <Mail size={20} className="text-indigo-600" /> adosammy120@gmail.com
                </a>
              </div>
              
              <div>
                <span className="block text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">On the Web</span>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/adograffix/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61583788304807" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.youtube.com/@adosam-v2m" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm" onSubmit={handleWhatsAppSubmit}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">What's your name?</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-shadow"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Your email address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-shadow"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can I help?</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-medium flex items-center justify-center gap-2 py-4 rounded-xl shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all group"
                >
                  Send Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-500">&copy; {new Date().getFullYear()} Ado Graffix. All rights reserved.</p>
        
        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-indigo-600 transition-colors">Styleguide</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Licenses</a>
          <a href="#" className="text-slate-900 hover:text-indigo-600 transition-colors font-semibold">Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  );
}
