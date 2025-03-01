
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    if (imageRef.current) {
      const imgObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-up');
              entry.target.classList.remove('opacity-0');
              imgObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
      );
      
      imgObserver.observe(imageRef.current);
    }
    
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="pt-28 pb-20 overflow-hidden hero-gradient">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={heroRef} className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-[#F2DCB3]/30 rounded-full animate-fade-down">
            <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
              AI-Powered Sales Intelligence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 max-w-4xl animate-fade-down delay-1">
            Revolutionize Your Sales Cycle with <span className="text-[#F2C6DE]">AI-Powered</span> Lead Intelligence
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-down delay-2">
            Our AI solution saves sales and development managers worldwide millions of working hours and transforms your sales processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-down delay-3">
            <Button className="rounded-full px-8 py-6 text-base bg-[#F2C6DE] hover:bg-[#F2C6DE]/90 text-gray-700 shadow-md">
              Start Free Demo
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-[#F2C6DE]/20 hover:border-[#F2C6DE]/50 hover:bg-[#F2C6DE]/5">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div ref={imageRef} className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl opacity-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="AI-Powered Sales Platform" 
              className="w-full object-cover rounded-2xl" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
