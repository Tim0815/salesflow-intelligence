
import React, { useRef, useEffect } from "react";
import { 
  Users, 
  LightbulbIcon, 
  MessageSquare, 
  Heart, 
  FileText, 
  MessageCircle, 
  DollarSign,
  ArrowRightIcon
} from "lucide-react";
import { Button } from "./ui/button";

interface AICaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  aiSolution: string;
  bgColor: string;
  borderColor: string;
}

const AICase: React.FC<AICaseProps> = ({
  icon,
  title,
  description,
  aiSolution,
  bgColor,
  borderColor
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);
  
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  return (
    <div 
      ref={cardRef}
      className={`opacity-0 relative ${bgColor} p-6 rounded-xl border-2 ${borderColor} shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-[320px] overflow-hidden`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`transition-all duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'} absolute inset-0 p-6`}>
        <div className="flex justify-between items-start mb-6">
          <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4">
            {icon}
          </div>
          <span className="text-3xl font-bold text-gray-400">{title.split(' ')[0]}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="absolute bottom-6 right-6 text-primary">
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </div>
      
      <div className={`transition-all duration-500 ${isFlipped ? 'opacity-100' : 'opacity-0'} absolute inset-0 p-6 bg-white/95 rounded-xl flex flex-col`}>
        <h3 className="text-xl font-bold mb-3">AI Solution</h3>
        <p className="text-muted-foreground flex-grow">{aiSolution}</p>
        <Button 
          variant="outline" 
          className="self-end mt-4"
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(false);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

const AIUseCase = () => {
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

  const aiCases = [
    {
      icon: <Users className="h-10 w-10 text-[#F2C6DE]" />,
      title: "Prospecting",
      description: "Finding potential customers who might be interested in your product or service.",
      aiSolution: "AI analyzes market data to identify high-potential prospects, predict customer needs, and find optimal timing for outreach based on behavior patterns.",
      bgColor: "bg-[#FDE1D3]/20",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <LightbulbIcon className="h-10 w-10 text-[#F2DCB3]" />,
      title: "Prepare to Contact",
      description: "Researching prospects and preparing personalized approaches.",
      aiSolution: "AI aggregates data from multiple sources to create comprehensive prospect profiles, generating personalized talking points and identifying key decision makers.",
      bgColor: "bg-[#F2DCB3]/20",
      borderColor: "border-[#F2DCB3]"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#F2C6DE]" />,
      title: "Make Contact and Qualify",
      description: "Reaching out to prospects and determining if they're a good fit.",
      aiSolution: "AI suggests optimal contact methods and times, provides real-time conversation guidance, and analyzes responses to qualify leads automatically.",
      bgColor: "bg-[#F2C6DE]/20",
      borderColor: "border-[#F2C6DE]"
    },
    {
      icon: <Heart className="h-10 w-10 text-[#FDE1D3]" />,
      title: "Nurture Relationships",
      description: "Building trust and providing value to prospects over time.",
      aiSolution: "AI schedules personalized follow-ups, recommends relevant content based on prospect interests, and detects engagement signals to optimize nurturing campaigns.",
      bgColor: "bg-[#D6F0DD]/20",
      borderColor: "border-[#D6F0DD]"
    },
    {
      icon: <FileText className="h-10 w-10 text-[#D6F0DD]" />,
      title: "Present Offer",
      description: "Presenting your solution and demonstrating how it addresses the prospect's needs.",
      aiSolution: "AI generates tailored proposals and presentations, dynamically adjusts pricing models, and predicts objections to prepare compelling counterpoints.",
      bgColor: "bg-[#F2C6DE]/20",
      borderColor: "border-[#F2C6DE]"
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-[#F2DCB3]" />,
      title: "Handle Objections",
      description: "Addressing concerns and overcoming resistance.",
      aiSolution: "AI identifies objection patterns, provides real-time objection handling scripts, and analyzes successful responses to continuously improve strategies.",
      bgColor: "bg-[#F2DCB3]/20",
      borderColor: "border-[#F2DCB3]"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#D6F0DD]" />,
      title: "Close the Deal",
      description: "Finalizing the agreement and completing the sale.",
      aiSolution: "AI predicts optimal closing timing, generates personalized contract drafts, and automates follow-up tasks to streamline the closing process.",
      bgColor: "bg-[#D6F0DD]/20", 
      borderColor: "border-[#D6F0DD]"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 opacity-0">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-[#F2DCB3]/30 rounded-full">
            <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
              AI Applications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            AI Solutions for Every Sales Stage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI technologies optimize each step of your sales cycle for maximum efficiency and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCases.map((aiCase, index) => (
            <AICase
              key={index}
              {...aiCase}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIUseCase;
