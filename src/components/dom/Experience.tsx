import { CUSTOMIZE_ME } from "../../data";
import { motion } from "motion/react";

export default function Experience() {
  const { experience, skills } = CUSTOMIZE_ME;

  return (
    <section id="experience" className="relative z-10 w-full overflow-hidden pointer-events-none">
      
      {/* Marquee Banner Divider */}
      <div className="w-full bg-acid py-4 border-y border-black overflow-hidden flex whitespace-nowrap opacity-90 mix-blend-difference pointer-events-auto">
        <div className="animate-marquee flex items-center font-display font-bold text-2xl text-black uppercase tracking-widest">
          {Array(10).fill("SYSTEM LOGS // NEURAL TOPOLOGY // ").map((t, i) => (
             <span key={i} className="mx-4">{t}</span>
          ))}
        </div>
        <div className="animate-marquee flex items-center font-display font-bold text-2xl text-black uppercase tracking-widest absolute top-0 left-0 pt-4">
           {Array(10).fill("SYSTEM LOGS // NEURAL TOPOLOGY // ").map((t, i) => (
             <span key={i} className="mx-4">{t}</span>
          ))}
        </div>
      </div>

      <div className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-[1400px] mx-auto pointer-events-auto">
        
        {/* Timeline Col */}
        <div className="flex flex-col gap-12 glass-panel p-8 md:p-12 rounded-3xl">
           <h2 className="font-display text-4xl font-bold text-white uppercase tracking-tighter mb-8">System Architecture Logs</h2>
           
           <div className="flex flex-col relative">
             <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white/10" />
             
             {experience.map((exp, i) => (
               <motion.div 
                 key={exp.id}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ duration: 0.6, delay: i * 0.1 }}
                 className="relative pl-8 pb-16 last:pb-0 group"
               >
                 {/* Timeline Node */}
                 <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-stone-500 group-hover:bg-acid transition-colors duration-300 shadow-[0_0_10px_rgba(0,191,255,0)] group-hover:shadow-[0_0_15px_rgba(0,191,255,0.8)] z-10" />
                 
                 <div className="flex flex-col gap-2 mb-4">
                   <div className="text-acid font-mono text-xs tracking-widest font-semibold">{exp.period}</div>
                   <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase">{exp.role}</h3>
                   <div className="text-stone-300 font-sans tracking-wide text-sm font-medium">{exp.company}</div>
                 </div>

                 <ul className="flex flex-col gap-3 mb-6">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="font-sans text-stone-400 text-base font-light leading-relaxed flex items-start gap-3">
                         <span className="text-acid mt-1.5 opacity-50 text-[10px]">▶</span>
                         {desc}
                      </li>
                    ))}
                 </ul>
                 
                 <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="font-mono text-[10px] uppercase bg-white/5 border border-white/10 text-stone-300 px-2 py-1 rounded">
                         {skill}
                      </span>
                    ))}
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Skills Col */}
        <div className="flex flex-col gap-12 glass-panel p-8 md:p-12 rounded-3xl">
            <h2 className="font-display text-4xl font-bold text-white uppercase tracking-tighter mb-8">Core Competencies</h2>
            
            <div className="flex flex-col gap-16">
              {skills.map((category, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <h3 className="font-mono text-sm tracking-[0.2em] font-medium uppercase text-acid mb-8 border-b border-acid/20 pb-4">
                    [ {category.title} ]
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col group interactive">
                        <div className="flex justify-between items-center mb-2 font-display uppercase tracking-widest text-sm text-stone-300 group-hover:text-white transition-colors">
                           <span>{skill.name}</span>
                           <span className="font-mono text-acid font-bold opacity-0 group-hover:opacity-100 transition-opacity">LVL {skill.level}</span>
                        </div>
                        {/* Futuristic Node Bar */}
                        <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${skill.level}%` }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                             className="absolute top-0 left-0 bottom-0 bg-acid"
                           />
                           {/* Glow point */}
                           <motion.div
                             initial={{ left: 0, opacity: 0 }}
                             whileInView={{ left: `${skill.level}%`, opacity: 1 }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                             className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#00bfff]"
                           />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
}
