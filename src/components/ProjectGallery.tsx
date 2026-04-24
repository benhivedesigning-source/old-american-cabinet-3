import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  { id: 1, category: "Exterior", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, category: "Barn Doors", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, category: "Interior", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, category: "Custom", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
];

export function ProjectGallery() {
  return (
    <section className="py-32 bg-tc-base text-tc-text">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-end mb-12">
           <h2 className="text-5xl md:text-7xl font-display uppercase font-bold text-tc-text max-w-2xl leading-none">
             Works<br/>Gallery
           </h2>
           <button className="hidden md:block bg-tc-accent text-tc-base px-8 py-4 font-body tracking-[0.1em] uppercase font-bold text-sm hover:scale-105 transition-transform rounded-sm">
             View All
           </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[350px] gap-4 w-full">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group overflow-hidden ${project.span}`}
              >
                <img 
                  src={project.image}
                 alt={project.category}
                 className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out" 
                 referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-tc-base/20 group-hover:bg-tc-base/0 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 mix-blend-difference overflow-hidden">
                   <motion.span 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i*0.1, duration: 0.5 }}
                      className="block text-4xl font-display text-white uppercase font-bold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"
                   >
                     {project.category}
                   </motion.span>
                </div>
              </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
}
