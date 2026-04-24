import { motion } from "motion/react";

export function BlogStrip() {
  const articles = [
    { title: "The Anatomy of a Perfect Joint", tag: "Craft" },
    { title: "Why We Refuse Fast Lumber", tag: "Philosophy" },
    { title: "Hardware That Outlasts the House", tag: "Engineering" },
  ];

  return (
    <section className="py-32 bg-tc-base border-t border-tc-moss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-display uppercase font-bold text-tc-text max-w-2xl leading-none">
            From The<br/>Workbench
          </h2>
          <button className="text-tc-text border-b border-tc-accent pb-1 uppercase tracking-[0.2em] text-xs font-bold hover:text-tc-accent transition-colors">
            Read Journal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {articles.map((article, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2, duration: 0.6 }}
               className="group cursor-pointer"
             >
               <div className="h-px w-full bg-tc-moss mb-6 group-hover:bg-tc-accent transition-colors duration-500" />
               <div className="flex items-center justify-between mb-8">
                 <span className="font-body text-tc-text/50 tracking-[0.2em] text-xs uppercase">{article.tag}</span>
                 <span className="font-display text-tc-moss text-xl">0{i+1}</span>
               </div>
               <h3 className="font-display text-3xl uppercase leading-tight group-hover:text-tc-accent transition-colors duration-300 pr-8">
                 {article.title}
               </h3>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
