import { useState, useEffect } from 'react';
import { TopUtilityBar } from './components/TopUtilityBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ProductGrid } from './components/ProductGrid';
import { Features } from './components/Features';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ProjectGallery } from './components/ProjectGallery';
import { Testimonials } from './components/Testimonials';
import { CustomProjectCTA } from './components/CustomProjectCTA';
import { BlogStrip } from './components/BlogStrip';
import { Footer } from './components/Footer';

// Mock Data for Product Grids
const barnDoors = [
  { name: 'Single Barn Doors', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
  { name: 'Double Barn Doors', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Glass Barn Doors', image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=800&auto=format&fit=crop' },
  { name: 'Bypassing Barn Doors', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop' },
  { name: 'Barn Door Hardware', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Handles & Pulls', image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800&auto=format&fit=crop' },
  { name: 'Bifolding Barn Doors', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Mirror Barn Doors', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop' },
];

const interiorExterior = [
  { name: 'Front Doors', image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=800&auto=format&fit=crop' },
  { name: 'French Doors', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dutch Doors', image: 'https://images.unsplash.com/photo-1542861618-2e0618bed062?q=80&w=800&auto=format&fit=crop' },
  { name: 'Interior Doors', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop' },
];

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      className={`custom-cursor hidden md:block ${isHovering ? 'hovering' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <div className="film-grain" />
      <TopUtilityBar />
      <Navbar />
      
      <main>
        <Hero />
        <TrustStats />
        
        <ProductGrid 
          title="Shop Barn Doors" 
          subtitle="Top Categories"
          products={barnDoors}
        />
        
        <Features />
        
        <ProductGrid 
          title="Shop Interior & Exterior" 
          subtitle="Premium Entries"
          products={interiorExterior}
        />
        
        <ProcessTimeline />
        <ProjectGallery />
        <Testimonials />
        
        <CustomProjectCTA />
        
        <BlogStrip />
      </main>
      
      <Footer />
    </div>
  );
}

