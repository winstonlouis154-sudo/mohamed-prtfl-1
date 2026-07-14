import { CUSTOMIZE_ME } from "../../data";
import { motion } from "motion/react";

export default function About() {
  const { about } = CUSTOMIZE_ME;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 relative z-10 w-full overflow-hidden pointer-events-none">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 max-w-[1200px] mx-auto pointer-events-auto"
      >
        
        {/* Left Column - Heading */}
        <div className="md:col-span-4">
          <motion.div variants={itemVariants} className="sticky top-32">
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-white uppercase mix-blend-difference">
              {about.heading}
            </h2>
            <div className="w-12 h-2 bg-acid mb-8" />
            
            <div className="hidden md:flex flex-col gap-6 mt-16 glass-panel-heavy p-8 rounded-2xl border-acid/20">
              {about.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-4xl lg:text-5xl font-bold text-acid">{stat.value}</span>
                  <span className="font-mono text-xs text-stone-300 uppercase tracking-widest mt-1">{stat.label}</span>
                  {i < about.stats.length - 1 && <div className="w-full h-[1px] bg-white/10 mt-6" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <div className="max-w-3xl flex flex-col gap-8 md:gap-12 glass-panel p-8 md:p-12 rounded-2xl border-white/5">
            {about.paragraphs.map((para, i) => (
              <motion.p 
                key={i} 
                variants={itemVariants}
                className={`font-sans leading-relaxed text-lg md:text-2xl text-stone-200 font-light ${i === 0 ? 'text-white md:text-3xl font-normal' : ''}`}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Mobile Stats */}
           <div className="md:hidden grid grid-cols-2 gap-6 mt-16 pt-8 border-t border-white/10 glass-panel p-6 rounded-2xl">
              {about.stats.map((stat, i) => (
                <motion.div variants={itemVariants} key={i} className="flex flex-col">
                  <span className="font-display text-4xl font-bold text-acid">{stat.value}</span>
                  <span className="font-mono text-[10px] text-stone-300 uppercase tracking-widest mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
        </div>

      </motion.div>
    </section>
  );
}
