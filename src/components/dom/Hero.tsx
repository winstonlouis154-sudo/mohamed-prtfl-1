import { CUSTOMIZE_ME } from "../../data";
import { motion } from "motion/react";

export default function Hero() {
  const { hero } = CUSTOMIZE_ME;

  return (
    <div className="relative w-full flex flex-col justify-center px-6 md:px-0 lg:px-12 pointer-events-none">
      
      <div className="relative z-10 w-full mb-12 max-w-[1200px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-acid" />
          <p className="font-mono text-acid text-sm tracking-[0.2em] font-medium uppercase">
            System Initialization Complete
          </p>
        </motion.div>

        <div className="mb-4 pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-display text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] font-bold tracking-tighter mix-blend-difference"
          >
            {hero.firstName}
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="font-display text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] font-bold tracking-tighter text-stroke mt-2 md:mt-4 pl-0 md:pl-24"
          >
            {hero.lastName}
          </motion.h1>
        </div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1200px] mx-auto mt-12 pt-8 pointer-events-auto"
      >
        <div className="col-span-1">
          <div className="flex flex-col gap-2">
            {hero.titles.map((title, i) => (
              <p key={i} className="font-mono text-xs md:text-sm text-stone-400 tracking-wider">
                [{i + 1}] — {title}
              </p>
            ))}
          </div>
        </div>
        
        <div className="col-span-1">
           <p className="text-stone-300 font-sans text-lg lg:text-xl leading-relaxed font-light mix-blend-difference">
            {hero.bio}
           </p>
        </div>
      </motion.div>

    </div>
  );
}
