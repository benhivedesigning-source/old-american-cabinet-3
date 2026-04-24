import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function TrustStats() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section ref={containerRef} className="py-24 bg-tc-accent text-tc-base overflow-hidden relative">
      <div className="flex flex-col gap-8 whitespace-nowrap min-w-max">
        <motion.div style={{ x: x1 }} className="flex gap-12 items-center font-display uppercase font-bold text-[8vw] md:text-[6vw] leading-none min-w-max">
          <span>15+ Years Mastery</span><span className="text-tc-base/20">*</span>
          <span>500+ Commissions</span><span className="text-tc-base/20">*</span>
          <span>15+ Years Mastery</span><span className="text-tc-base/20">*</span>
          <span>500+ Commissions</span><span className="text-tc-base/20">*</span>
          <span>15+ Years Mastery</span><span className="text-tc-base/20">*</span>
          <span>500+ Commissions</span><span className="text-tc-base/20">*</span>
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-12 items-center font-display uppercase font-bold text-[8vw] md:text-[6vw] leading-none text-transparent min-w-max" style={{ WebkitTextStroke: "2px #0D0E0C" }}>
          <span>Lifetime Warranty</span><span className="text-tc-base/20" style={{ WebkitTextStroke: "0" }}>*</span>
          <span>48 States Served</span><span className="text-tc-base/20" style={{ WebkitTextStroke: "0" }}>*</span>
          <span>Lifetime Warranty</span><span className="text-tc-base/20" style={{ WebkitTextStroke: "0" }}>*</span>
          <span>48 States Served</span><span className="text-tc-base/20" style={{ WebkitTextStroke: "0" }}>*</span>
          <span>Lifetime Warranty</span><span className="text-tc-base/20" style={{ WebkitTextStroke: "0" }}>*</span>
          <span>48 States Served</span><span className="text-tc-base/20" style={{ WebkitTextStroke: "0" }}>*</span>
        </motion.div>
      </div>
    </section>
  );
}
