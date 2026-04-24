import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Product {
  name: string;
  image: string;
}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <section className="py-24 md:py-32 bg-tc-base border-t border-tc-moss overflow-hidden">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="flex flex-col gap-4">
          {subtitle && <p className="text-tc-accent tracking-[0.2em] font-body text-xs font-bold uppercase">{subtitle}</p>}
          <h2 className="text-4xl md:text-6xl font-display uppercase font-bold text-tc-text max-w-2xl leading-[0.9] tracking-tight">
            {title}
          </h2>
        </div>
      </div>

      <div className="w-full relative">
        <div className="overflow-x-auto no-scrollbar pl-4 sm:pl-6 lg:pl-8 flex gap-6 md:gap-8 pb-12 snap-x snap-mandatory">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-[85vw] sm:w-[50vw] md:w-[400px] shrink-0 group cursor-pointer snap-center md:snap-start flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-tc-surface mb-6 relative">
                <div className="absolute inset-0 bg-tc-moss animate-pulse -z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-tc-accent mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              </div>
              
              <div className="flex items-start justify-between gap-4 border-t border-tc-moss pt-4 mt-auto">
                <h3 className="text-lg md:text-2xl font-display uppercase tracking-wide text-tc-text group-hover:text-tc-accent transition-colors leading-tight">
                  {product.name}
                </h3>
                <div className="w-8 h-8 rounded-full border border-tc-moss text-tc-text flex items-center justify-center shrink-0 group-hover:bg-tc-accent group-hover:border-tc-accent group-hover:text-tc-base transition-all duration-300">
                  <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
          {/* Spacer block for the right padding on scroll */}
          <div className="shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
