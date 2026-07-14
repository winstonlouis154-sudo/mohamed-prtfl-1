import { CUSTOMIZE_ME } from "../../data";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { contact } = CUSTOMIZE_ME;

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden pointer-events-none">

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-[1400px] mx-auto pointer-events-auto">
         
         <div className="lg:col-span-5 flex flex-col">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <p className="font-mono text-acid text-sm tracking-[0.2em] font-medium uppercase mb-4">
                  [ Terminate Session ]
               </p>
               <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-8 mix-blend-difference">
                  INITIALIZE <br/> CONTACT.
               </h2>
               <p className="font-sans text-stone-300 text-lg font-light leading-relaxed mb-12">
                 Seeking a neural architect to scale your inference or optimize distributed environments? 
                 Open connection directly below.
               </p>

               <div className="flex flex-col gap-6">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-stone-300 hover:text-acid transition-colors interactive font-mono group border border-white/10 p-4 rounded-xl glass-panel-heavy hover:border-acid/50 duration-300">
                     <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                     <span className="tracking-widest">{contact.email}</span>
                  </a>
                  <div className="flex items-center gap-4 text-stone-400 font-mono border border-white/5 p-4 rounded-xl glass-panel">
                     <MapPin className="w-5 h-5" />
                     <span className="tracking-widest">DISTRIBUTED CLUSTER // GLOBAL</span>
                  </div>
               </div>

               {/* Social Footprint */}
               <div className="mt-16 pt-8 border-t border-white/10">
                  <h4 className="font-mono text-xs tracking-widest text-stone-400 uppercase flex items-center gap-2 mb-6">
                     <span className="w-2 h-2 bg-acid animate-pulse rounded-full" /> Signal Transmitters
                  </h4>
                  <div className="flex flex-wrap gap-4">
                     {contact.socials.map((social, i) => (
                        <a 
                           href={social.url} 
                           key={i}
                           className="font-display uppercase px-5 py-2 glass-panel border border-white/10 hover:border-acid hover:text-acid transition-all duration-300 tracking-widest text-sm font-semibold text-stone-300 interactive"
                        >
                           {social.name}
                        </a>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>

         {/* Form Section */}
         <div className="lg:col-span-7">
            <motion.form 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               onSubmit={(e) => e.preventDefault()}
               className="flex flex-col gap-8 glass-panel-heavy p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/5"
            >
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="flex flex-col gap-2">
                     <label className="font-mono text-xs uppercase tracking-widest text-stone-400">Parameter: Name</label>
                     <input type="text" placeholder="Identity String" className="bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-acid transition-colors placeholder:text-stone-600 interactive" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="font-mono text-xs uppercase tracking-widest text-stone-400">Parameter: Route</label>
                     <input type="email" placeholder="user@domain.net" className="bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-acid transition-colors placeholder:text-stone-600 interactive" />
                  </div>
               </div>

               <div className="flex flex-col gap-2 relative z-10">
                  <label className="font-mono text-xs uppercase tracking-widest text-stone-400">Parameter: Topic</label>
                  <input type="text" placeholder="Compute Optimization / AI Research" className="bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-acid transition-colors placeholder:text-stone-600 interactive" />
               </div>

               <div className="flex flex-col gap-2 relative z-10 pb-4">
                  <label className="font-mono text-xs uppercase tracking-widest text-stone-400">Payload: Data</label>
                  <textarea rows={5} placeholder="Inject instructions here..." className="bg-white/5 border border-white/10 rounded-xl p-4 mt-2 text-white font-sans focus:outline-none focus:border-acid transition-colors placeholder:text-stone-600 resize-none interactive" />
               </div>

               <button type="submit" className="relative group overflow-hidden bg-acid text-black font-display font-bold uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 interactive z-10 mt-4">
                  <span className="relative z-10 flex items-center gap-3">TRANSMIT PACKET <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
                  <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
               </button>
            </motion.form>
         </div>

      </div>

      <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1400px] mx-auto pointer-events-auto">
         <p className="font-mono text-stone-500 text-xs tracking-widest">
            © {new Date().getFullYear()} PULSAR NEURAL SYSTEMS. ALL RIGHTS RESERVED.
         </p>
         <p className="font-mono text-stone-600 text-xs tracking-widest text-right">
            GENERATED WITH THREE.JS, REACT THREE FIBER & POSTPROCESSING
         </p>
      </div>
    </section>
  );
}
