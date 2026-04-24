import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  { name: "Sarah L.", role: "Architect", quote: "The precision is unmatched. Old American Cabinet doesn't just build doors, they engineer focal points." },
  { name: "Michael T.", role: "Homeowner", quote: "Function meets absolute brutalist art. Our entryway defines the entire home now." },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-tc-surface overflow-hidden relative px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[40vh] relative z-10 text-center">
        <div className="absolute top-0 opacity-10 text-[20rem] font-display text-tc-accent leading-none -translate-y-1/2 select-none pointer-events-none font-bold">
          "
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-4xl md:text-6xl font-display uppercase font-bold text-tc-text leading-tight mb-8">
              {testimonials[current].quote}
            </h3>
            <div className="font-body text-tc-accent tracking-[0.2em] uppercase text-sm font-bold flex items-center justify-center gap-4">
               <span>{testimonials[current].name}</span>
               <span className="w-1 h-1 rounded-full bg-tc-moss" />
               <span className="text-tc-text/50">{testimonials[current].role}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 mt-16">
          {testimonials.map((_, i) => (
            <button
               key={i}
               onClick={() => setCurrent(i)}
               className={`h-1 transition-all duration-300 ${current === i ? "w-12 bg-tc-accent" : "w-4 bg-tc-moss hover:bg-tc-text"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
