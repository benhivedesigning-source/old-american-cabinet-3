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
    <section className="py-24 md:py-32 bg-tc-base">
      <div className="px-8 md:px-24 mb-12">
        {subtitle && <p className="text-tc-accent tracking-[0.2em] uppercase text-sm font-bold mb-4">{subtitle}</p>}
        <h2 className="text-5xl md:text-7xl font-display uppercase font-bold text-tc-text max-w-2xl leading-none">
          {title}
        </h2>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar pl-8 md:pl-24 pr-8 md:pr-24 pb-12 snap-x snap-mandatory flex gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="w-[85vw] md:w-[450px] shrink-0 group cursor-pointer snap-center md:snap-start"
          >
            <div className="aspect-[3/4] overflow-hidden bg-tc-surface mb-6 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-tc-accent mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-display uppercase tracking-wide text-tc-text group-hover:text-tc-accent transition-colors">{product.name}</h3>
              <div className="w-10 h-10 rounded-full border border-tc-moss flex items-center justify-center group-hover:bg-tc-accent group-hover:border-tc-accent group-hover:text-tc-base transition-all">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
