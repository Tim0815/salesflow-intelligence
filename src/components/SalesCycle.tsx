
import React, { useRef, useEffect } from "react";
import { 
  Users, 
  LightbulbIcon, 
  MessageSquare, 
  Heart, 
  FileText, 
  MessageCircle, 
  DollarSign 
} from "lucide-react";

const SalesCycle = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileViewRef = useRef<HTMLDivElement>(null);
  const desktopViewRef = useRef<HTMLDivElement>(null);
  
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
    
    if (mobileViewRef.current) {
      const mobileObserver = new IntersectionObserver(
        (entries) => {
          const children = Array.from(mobileViewRef.current?.children || []);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('animate-fade-up');
                  child.classList.remove('opacity-0');
                }, index * 100);
              });
              mobileObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      mobileObserver.observe(mobileViewRef.current);
    }
    
    if (desktopViewRef.current) {
      const desktopObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-up');
              entry.target.classList.remove('opacity-0');
              desktopObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      desktopObserver.observe(desktopViewRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (mobileViewRef.current) observer.unobserve(mobileViewRef.current);
      if (desktopViewRef.current) observer.unobserve(desktopViewRef.current);
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Prospecting",
      icon: <Users className="h-10 w-10 text-white" />,
      bgColor: "bg-[#FDE1D3]" // Soft Peach
    },
    {
      number: "02",
      title: "Prepare to contact",
      icon: <LightbulbIcon className="h-10 w-10 text-white" />,
      bgColor: "bg-[#F2DCB3]" // Soft Yellow
    },
    {
      number: "03",
      title: "Make contact and qualify",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      bgColor: "bg-[#F2C6DE]" // Soft Pink
    },
    {
      number: "04",
      title: "Nurture relationships",
      icon: <Heart className="h-10 w-10 text-white" />,
      bgColor: "bg-[#D6F0DD]" // Soft Green
    },
    {
      number: "05",
      title: "Present offer",
      icon: <FileText className="h-10 w-10 text-white" />,
      bgColor: "bg-[#FDE1D3]" // Soft Peach
    },
    {
      number: "06",
      title: "Handle objections",
      icon: <MessageCircle className="h-10 w-10 text-white" />,
      bgColor: "bg-[#F2DCB3]" // Soft Yellow
    },
    {
      number: "07",
      title: "Close the deal!",
      icon: <DollarSign className="h-10 w-10 text-white" />,
      bgColor: "bg-[#F2C6DE]" // Soft Pink
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-secondary/10 opacity-0">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-[#D6F0DD]/30 rounded-full">
            <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
              Sales Cycle
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            The 7 Stages of the Sales Cycle
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With SalesFlow AI, you optimize every step of your sales process and maximize your success rate.
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* Mobile View: Stack all elements vertically */}
          <div ref={mobileViewRef} className="md:hidden space-y-4 w-full max-w-md">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`${step.bgColor} p-6 rounded-lg flex items-center justify-between opacity-0 hover:shadow-md transition-all cursor-pointer`}
                onClick={() => alert(`Step ${index + 1}: ${step.title}`)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-gray-800">
                    <h3 className="font-bold text-lg">{step.title}</h3>
                  </div>
                </div>
                <div className="text-gray-800 text-3xl font-bold">{step.number}</div>
              </div>
            ))}
          </div>

          {/* Desktop View: Circular diagram */}
          <div ref={desktopViewRef} className="hidden md:block relative opacity-0" style={{ width: '700px', height: '700px' }}>
            {/* Center circle */}
            <div className="absolute rounded-full bg-white shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer"
              style={{ width: '250px', height: '250px', top: '225px', left: '225px', zIndex: 10 }}
              onClick={() => alert("The 7 Stages of the Sales Cycle")}
            >
              <h3 className="text-3xl font-display font-bold text-center text-gray-800">
                7 STAGES
                <br />
                OF THE 
                <br />
                SALES CYCLE
              </h3>
            </div>

            {/* Create segments in a circle */}
            {steps.map((step, index) => {
              // Calculate position in the circle
              const angle = (index * (360 / steps.length) - 90) * (Math.PI / 180);
              const radius = 210; // Distance from center to middle of segment
              const segmentWidth = 220; // Width of each segment
              const segmentHeight = 220; // Height of each segment
              
              // Calculate x,y coordinates for the segment center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              // Calculate rotational angle for each segment
              const rotationAngle = (index * (360 / steps.length)) + 270; // Offset to start from top

              // Define custom clip path based on index
              let customClipPath;
              if (index === 0) {
                customClipPath = 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)';
              } else if (index === 1) {
                customClipPath = 'polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)';
              } else if (index === 2) {
                customClipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)';
              } else if (index === 3) {
                customClipPath = 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)';
              } else if (index === 4) {
                customClipPath = 'polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)';
              } else if (index === 5) {
                customClipPath = 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)';
              } else {
                customClipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)';
              }

              return (
                <div 
                  key={index}
                  className={`absolute ${step.bgColor} rounded-lg p-6 transform flex flex-col items-center justify-center hover:brightness-105 transition-all cursor-pointer`}
                  style={{
                    width: `${segmentWidth}px`,
                    height: `${segmentHeight}px`,
                    left: `${350 + x - segmentWidth/2}px`,
                    top: `${350 + y - segmentHeight/2}px`,
                    transform: `rotate(${rotationAngle}deg)`,
                    clipPath: customClipPath,
                    zIndex: 5
                  }}
                  onClick={() => alert(`Step ${index + 1}: ${step.title}`)}
                >
                  <div className="transform" style={{ transform: `rotate(-${rotationAngle}deg)` }}>
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        {React.cloneElement(step.icon, { className: "h-10 w-10 text-gray-800" })}
                      </div>
                      <h3 className="text-gray-800 font-bold text-xl mb-1 text-center">{step.title}</h3>
                      <div className="text-gray-800 text-4xl font-bold">{step.number}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesCycle;
