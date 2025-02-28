
import React from "react";
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
      bgColor: "bg-[#FFDEE2]" // Soft Pink
    },
    {
      number: "03",
      title: "Make contact and qualify",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      bgColor: "bg-[#FEC6A1]" // Soft Orange
    },
    {
      number: "04",
      title: "Nurture and build relationships",
      icon: <Heart className="h-10 w-10 text-white" />,
      bgColor: "bg-[#FEF7CD]" // Soft Yellow
    },
    {
      number: "05",
      title: "Present offer",
      icon: <FileText className="h-10 w-10 text-white" />,
      bgColor: "bg-[#F2FCE2]" // Soft Green
    },
    {
      number: "06",
      title: "Handle objections",
      icon: <MessageCircle className="h-10 w-10 text-white" />,
      bgColor: "bg-[#FEC6A1]" // Soft Orange
    },
    {
      number: "07",
      title: "Close the deal!",
      icon: <DollarSign className="h-10 w-10 text-white" />,
      bgColor: "bg-[#FFDEE2]" // Soft Pink
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-[#F2FCE2] rounded-full">
            <span className="text-xs font-semibold tracking-wide text-[#2E7D32] uppercase">
              Vertriebszyklus
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Die 7 Stufen des Verkaufszyklus
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mit SalesFlow AI optimieren Sie jeden Schritt Ihres Verkaufsprozesses und maximieren die Erfolgsquote.
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* Mobile View: Stack all elements vertically */}
          <div className="md:hidden space-y-4 w-full max-w-md">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`${step.bgColor} p-6 rounded-lg flex items-center justify-between`}
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
          <div className="hidden md:block relative" style={{ width: '700px', height: '700px' }}>
            {/* Center circle */}
            <div className="absolute rounded-full bg-white shadow-lg flex flex-col items-center justify-center"
              style={{ width: '250px', height: '250px', top: '225px', left: '225px', zIndex: 10 }}>
              <h3 className="text-3xl font-display font-bold text-center text-gray-800">
                7 STUFEN
                <br />
                DES 
                <br />
                VERKAUFSZYKLUS
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
                  className={`absolute ${step.bgColor} rounded-lg p-6 transform flex flex-col items-center justify-center`}
                  style={{
                    width: `${segmentWidth}px`,
                    height: `${segmentHeight}px`,
                    left: `${350 + x - segmentWidth/2}px`,
                    top: `${350 + y - segmentHeight/2}px`,
                    transform: `rotate(${rotationAngle}deg)`,
                    clipPath: customClipPath,
                    zIndex: 5
                  }}
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

            {/* Alternative: Use the uploaded image */}
            <img 
              src="/lovable-uploads/3c7c82d7-c0ae-4584-956a-5970dc883093.png" 
              alt="7 Stages of the Sales Cycle" 
              className="absolute top-0 left-0 w-full h-full object-contain hidden" 
              style={{ zIndex: 20 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesCycle;
