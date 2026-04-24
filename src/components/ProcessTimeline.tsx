import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const steps = [
    { num: "01", title: "Design", desc: "Architectural consultation & precise CAD drafting." },
    { num: "02", title: "Select", desc: "Hand-picking premium domestic or exotic lumber." },
    { num: "03", title: "Craft", desc: "Milling, traditional joinery, and meticulous shaping." },
    { num: "04", title: "Finish", desc: "Hand-sanding, staining, and proprietary sealing." },
    { num: "05", title: "Deliver", desc: "White-glove transit and installation support." },
  ];

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-tc-base text-tc-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="sticky top-32 h-max">
             <h2 className="text-5xl md:text-8xl font-display uppercase font-bold text-tc-text leading-none mb-6">
               The<br/>Process
             </h2>
             <p className="font-body text-tc-text/60 max-w-sm">From the first sketch to the final install, every step is a testament to uncompromising craftsmanship.</p>
          </div>

          <div className="relative pl-12 md:pl-24">
            {/* The vertical timeline bar */}
            <div className="absolute left-[30px] md:left-[80px] top-6 bottom-6 w-px bg-tc-moss overflow-hidden">
               <motion.div 
                 style={{ scaleY, originY: 0 }}
                 className="absolute top-0 w-full h-full bg-tc-accent"
               />
            </div>

            <div className="flex flex-col gap-24">
              {steps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[37px] md:-left-[59px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-tc-base border-2 border-tc-moss rounded-full group-hover:border-tc-accent group-hover:bg-tc-accent transition-all duration-300 z-10" />
                  <span className="text-tc-moss font-display text-2xl font-bold block mb-2">{step.num}</span>
                  <h3 className="text-4xl md:text-5xl font-display uppercase font-bold mb-4">{step.title}</h3>
                  <p className="font-body text-tc-text/60 max-w-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
