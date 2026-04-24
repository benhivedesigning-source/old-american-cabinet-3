import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CustomProjectCTA() {
  return (
    <section className="py-40 bg-tc-accent text-tc-base relative overflow-hidden">
       {/* Giant background text */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10">
         <h2 className="text-[15vw] font-display font-bold uppercase leading-none whitespace-nowrap">
           Commission
         </h2>
       </div>

       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
         <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-24 h-24 bg-tc-base text-tc-accent rounded-full flex items-center justify-center mb-12 shadow-2xl"
         >
           <ArrowRight size={40} className="-rotate-45" />
         </motion.div>

         <h2 className="text-5xl md:text-[6vw] font-display uppercase font-bold mb-8 leading-none tracking-tight">
           Build The<br/>Impossible
         </h2>
         <p className="font-body text-lg md:text-2xl opacity-80 max-w-2xl mb-12 mix-blend-multiply px-4 flex-wrap">
           If it defies standard architecture, we want to build it. Submit your blueprints or sketches directly to our masters.
         </p>
         <button className="border-2 border-tc-base px-8 md:px-10 py-4 md:py-5 font-body uppercase tracking-[0.2em] text-xs md:text-sm font-bold hover:bg-tc-base hover:text-tc-accent transition-colors shadow-xl">
           Start Custom Project
         </button>
       </div>
    </section>
  );
}
