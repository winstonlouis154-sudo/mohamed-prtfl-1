import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import Scene from './components/canvas/Scene';
import Overlay from './components/dom/Overlay';
import { CustomCursor } from './components/UIEngines';

export default function App() {
  return (
    <div className="w-full h-full">
      <CustomCursor />
      
      {/* Main Navigation Base */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 mix-blend-difference pointer-events-none">
         <nav className="flex justify-between items-center max-w-[1600px] mx-auto pointer-events-auto">
            <div className="font-display font-bold text-2xl tracking-tighter uppercase text-white">
              Pulsar<span className="text-acid">X</span>
            </div>

            <div className="hidden md:flex gap-8">
               {["about", "projects", "experience"].map((item) => (
                 <span 
                   key={item} 
                   className="font-mono text-xs uppercase tracking-widest font-medium text-white hover:text-acid transition-colors cursor-pointer"
                 >
                   [{item}]
                 </span>
               ))}
            </div>
         </nav>
      </header>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ScrollControls pages={5} damping={0.1} distance={1}>
          <Scene />
          <Overlay />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
