import { Scroll } from '@react-three/drei';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

export default function Overlay() {
  return (
    <Scroll html style={{ width: '100vw' }}>
      <main className="flex flex-col w-full text-stone-200">
        <div className="min-h-[100vh] flex items-center w-full">
           <Hero />
        </div>
        <div className="min-h-[100vh] flex items-center w-full">
           <About />
        </div>
        <div className="min-h-[100vh] flex items-center w-full">
           <Projects />
        </div>
        <div className="min-h-[100vh] flex items-center w-full">
           <Experience />
        </div>
        <div className="min-h-[100vh] flex items-center w-full">
           <Contact />
        </div>
      </main>
    </Scroll>
  );
}
