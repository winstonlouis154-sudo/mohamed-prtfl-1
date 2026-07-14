import { ReactNode } from "react";
import { CustomCursor, NoiseOverlay, ProgressBar } from "./UIEngines";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-void w-full text-stone-200 selection:bg-acid selection:text-black">
      <CustomCursor />
      <ProgressBar />
      <NoiseOverlay />

      {/* Main Navigation Base */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 mix-blend-difference">
         <nav className="flex justify-between items-center max-w-[1600px] mx-auto">
            <a href="#" className="font-display font-bold text-2xl tracking-tighter uppercase interactive text-white">
              Nexus<span className="text-acid">X</span>
            </a>

            <div className="hidden md:flex gap-8">
               {["about", "projects", "experience", "contact"].map((item) => (
                 <a 
                   key={item} 
                   href={`#${item}`}
                   className="font-mono text-xs uppercase tracking-widest font-medium text-white hover:text-acid transition-colors interactive"
                 >
                   [{item}]
                 </a>
               ))}
            </div>

            {/* Mobile nav indicator */}
            <div className="md:hidden font-mono text-xs tracking-widest border border-white p-2 text-white">
               MENU
            </div>
         </nav>
      </header>

      <main className="flex flex-col w-full max-w-[1600px] mx-auto relative overflow-hidden">
        {children}
      </main>
    </div>
  );
}
