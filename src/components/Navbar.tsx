import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Collections", "Process", "Journal", "Studio"];

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 md:w-[90%] md:max-w-5xl flex items-center justify-between">
        <div className={`text-xl md:text-2xl font-display font-bold tracking-widest uppercase transition-colors text-center ${isOpen ? 'text-tc-text' : 'text-white mix-blend-difference'}`}>
          OLD AMERICAN<br className="md:hidden" /> CABINET
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-tc-accent text-tc-base rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 z-[60] shadow-lg"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: "circle(0% at 90% 10%)" }}
            animate={{ clipPath: "circle(150% at 90% 10%)" }}
            exit={{ clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-tc-surface z-40 flex flex-col md:flex-row"
          >
            <div className="flex-1 flex flex-col justify-center px-8 md:px-24">
              {menuItems.map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                  className="overflow-hidden py-2"
                >
                  <a href="#" className="font-display text-5xl md:text-8xl hover:text-tc-accent transition-colors block uppercase flex items-center gap-4 group">
                    {item}
                    <ArrowRight className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={48} />
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="w-full md:w-1/3 h-1/3 md:h-full bg-tc-base relative hidden md:block">
               <img 
                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                 alt="Menu Featured"
                 className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
               />
               <div className="absolute bottom-12 left-12">
                 <p className="font-body text-tc-accent mb-2 tracking-widest text-sm uppercase">Featured</p>
                 <h3 className="font-display text-3xl">The Obsidian Door</h3>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
