import { CUSTOMIZE_ME } from "../../data";
import { motion } from "motion/react";

export default function Projects() {
  const { projects } = CUSTOMIZE_ME;
  
  return (
    <section id="projects" className="py-32 relative z-10 w-full overflow-hidden pointer-events-none">
      
      <div className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32 max-w-[1400px] mx-auto pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-acid text-sm tracking-[0.2em] font-medium uppercase mb-4">
             [ Selected Archives ]
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mix-blend-difference">
            PRODUCTION <br className="hidden md:block"/> MODELS<span className="text-acid">.</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 md:gap-32 pb-24 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}

function ProjectRow({ project, index }: { project: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`px-6 md:px-12 lg:px-24 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group pointer-events-auto`}
    >
      
      {/* Project Image Placeholder / Container */}
      <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden glass-panel-heavy relative flex items-center justify-center interactive group-hover:border-acid/50 transition-colors duration-500">
         <div className="absolute inset-0 bg-gradient-to-tr from-acid/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         
         {/* Abstract geometric placeholder for project image */}
         <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-700 group-hover:scale-105">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-white tracking-widest uppercase text-center relative z-20 mix-blend-overlay break-words px-8">
               {project.title}
            </h3>
            {/* Minimal line shapes */}
            <div className="absolute inset-x-0 h-[1px] bg-white/10 opacity-50 top-1/2 transform -translate-y-1/2" />
            <div className="absolute inset-y-0 w-[1px] bg-white/10 opacity-50 left-1/2 transform -translate-x-1/2" />
         </div>

         {/* View button overlay */}
         <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={project.link} className="flex items-center gap-2 bg-acid text-black font-mono px-4 py-2 text-sm font-semibold hover:bg-white transition-colors">
              INSPECT <span className="text-xl leading-none">↗</span>
            </a>
         </div>
      </div>

      {/* Project Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center glass-panel p-8 rounded-2xl">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-stone-400 mb-6">
           <span className="px-3 py-1 border border-stone-700 rounded-full">{project.year}</span>
           <span className="px-3 py-1 bg-white/10 rounded-full text-stone-200">{project.category}</span>
           <span className="text-acid ml-auto font-bold tracking-widest">0{index + 1} //</span>
        </div>

        <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-acid transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="font-sans text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="font-mono text-xs bg-acid/10 border border-acid/20 text-acid px-3 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
