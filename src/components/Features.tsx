
import React, { useRef, useEffect } from "react";
import { Brain, Clock, DollarSign, Globe, BarChart3, Users, Zap } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
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
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);
  
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      ref={itemRef}
      className={`p-6 bg-card rounded-xl hover:shadow-md transition-all duration-300 opacity-0 cursor-pointer ${isHovered ? 'scale-105' : ''}`}
      onClick={() => alert(`Feature: ${title}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-12 w-12 bg-[#F2DCB3]/30 rounded-lg flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-gray-700" />
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Use advanced AI to gain valuable insights from your leads and identify sales opportunities."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automate time-consuming tasks and reclaim hours for strategic sales activities."
    },
    {
      icon: BarChart3,
      title: "Revenue Forecasting",
      description: "Get precise sales projections based on historical data and AI algorithms."
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "Automatically identify high-quality leads and prioritize your sales efforts effectively."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Scale your sales activities internationally with multilingual support and localized insights."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect effortlessly with your existing CRM systems and sales tools for optimal efficiency."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 opacity-0">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-[#F2DCB3]/30 rounded-full">
            <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
              Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Powerful Tools for Modern Sales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI platform offers everything sales teams need to efficiently manage leads and accelerate business closures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
