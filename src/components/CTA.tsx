
import React, { useRef, useEffect } from "react";
import { Button } from "./ui/button";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ctaRef} className="bg-[#F2DCB3]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden opacity-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=30')] opacity-5 bg-cover bg-center"></div>
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to revolutionize your sales cycle?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Start your free 14-day trial today and discover how SalesFlow AI can save your team millions of working hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full px-8 py-6 text-base bg-[#F2C6DE] hover:bg-[#F2C6DE]/90 text-gray-700 shadow-md">
                  Try for Free
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-base border-[#F2C6DE]/20 hover:border-[#F2C6DE]/50 hover:bg-[#F2C6DE]/5">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
