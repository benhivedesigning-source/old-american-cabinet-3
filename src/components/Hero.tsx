import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-tc-base flex flex-col items-center justify-center">
      
      {/* Background Image that scales up */}
      <motion.div 
        style={{ scale: scaleImage }}
        className="absolute inset-0 z-0 origin-center filter grayscale-[30%] opacity-80"
      >
        <img 
          src="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=2170&auto=format&fit=crop" 
          alt="Architectural Wood" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tc-base/40 via-transparent to-tc-base" />
      </motion.div>

      {/* Massive Typography Overlay */}
      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 text-center px-4 mix-blend-difference"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[14vw] md:text-[10vw] leading-[0.85] text-white tracking-tighter"
        >
          OLD AMERICAN<br/>CABINET
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-body text-sm md:text-2xl mt-4 md:mt-8 text-white uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold"
        >
          Raw Element. Refined Form.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-xs font-body tracking-[0.2em] uppercase text-tc-text/50">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-tc-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

