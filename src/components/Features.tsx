import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    { title: "Sustainably Harvested", desc: "Sourced strictly from responsibly managed eco-forests.", img: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1200&auto=format&fit=crop" },
    { title: "Bench-Made Precision", desc: "Joinery cut by master craftsmen, not assembly lines.", img: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=800&auto=format&fit=crop" },
    { title: "Architectural Grade", desc: "Engineered to withstand generations of daily use.", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" },
    { title: "Bespoke Finishing", desc: "Hand-rubbed oils and proprietary sealing techniques.", img: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="py-32 bg-tc-surface text-tc-text mix-blend-normal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <p className="text-tc-accent tracking-[0.2em] uppercase text-sm font-bold mb-4">The Standard</p>
          <h2 className="text-5xl md:text-7xl font-display uppercase font-bold text-tc-text max-w-3xl leading-tight">
            Uncompromising Quality.
          </h2>
        </div>

        <div className="border-t border-tc-moss relative">
          {features.map((f, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border-b border-tc-moss py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer group relative transition-colors duration-300 ${hoveredIndex === i ? 'z-50' : 'z-10'}`}
            >
              <div className="flex-1 relative z-20 w-full md:w-auto">
                <div className="flex items-center gap-6 md:gap-8">
                   <span className="font-body text-tc-moss text-lg md:text-xl tracking-widest shrink-0">0{i+1}</span>
                   <h3 className="text-3xl md:text-5xl font-display uppercase group-hover:text-tc-accent transition-colors duration-500 leading-tight">{f.title}</h3>
                </div>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0 relative z-20 flex md:justify-end pr-4">
                <p className="font-body text-tc-text/60 max-w-xs text-sm md:text-base group-hover:text-tc-text transition-colors duration-500">{f.desc}</p>
              </div>

              {/* Hover Image Reveal */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                     animate={{ opacity: 1, scale: 1, rotate: 0 }}
                     exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                     transition={{ duration: 0.4, ease: "backOut" }}
                     className="absolute left-[30%] md:left-[45%] top-1/2 w-[250px] md:w-[350px] aspect-video z-10 pointer-events-none hidden md:block shadow-2xl overflow-hidden rounded-sm"
                     style={{ y: "-50%" }}
                  >
                    <img src={f.img} alt={f.title} className="w-full h-full object-cover filter brightness-75 transition-transform duration-700 ease-out scale-100 group-hover:scale-110" referrerPolicy="no-referrer" />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
