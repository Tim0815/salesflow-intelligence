
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 overflow-hidden hero-gradient">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-[#E5DEFF] rounded-full animate-fade-down">
            <span className="text-xs font-semibold tracking-wide text-[#8B5CF6] uppercase">
              KI-gestützte Vertriebsintelligenz
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 max-w-4xl animate-fade-down delay-1">
            Revolutionieren Sie Ihren Vertriebszyklus mit <span className="text-[#8B5CF6]">AI-Powered</span> Lead Intelligence
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-down delay-2">
            Unsere KI-Lösung spart Vertriebs- und Entwicklungsmanagern weltweit Millionen von Arbeitsstunden und transformiert Ihre Vertriebsprozesse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-down delay-3">
            <Button className="rounded-full px-8 py-6 text-base bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white shadow-md">
              Kostenlose Demo starten
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/5">
              Mehr erfahren <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-fade-up">
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
