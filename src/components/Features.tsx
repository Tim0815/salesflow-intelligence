
import React from "react";
import { Brain, Clock, DollarSign, Globe, BarChart3, Users, Zap } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 bg-card rounded-xl hover:shadow-md transition-shadow duration-300 animate-fade-up">
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "KI-gestützte Analyse",
      description: "Nutzen Sie fortschrittliche KI, um wertvolle Einblicke aus Ihren Leads zu gewinnen und Verkaufschancen zu identifizieren."
    },
    {
      icon: Clock,
      title: "Zeitersparnis",
      description: "Automatisieren Sie zeitaufwändige Aufgaben und gewinnen Sie Stunden zurück für strategische Vertriebsaktivitäten."
    },
    {
      icon: BarChart3,
      title: "Umsatzprognosen",
      description: "Erhalten Sie präzise Vorhersagen zur Umsatzentwicklung basierend auf historischen Daten und KI-Algorithmen."
    },
    {
      icon: Users,
      title: "Lead-Qualifizierung",
      description: "Identifizieren Sie automatisch hochwertige Leads und priorisieren Sie Ihre Vertriebsbemühungen effektiv."
    },
    {
      icon: Globe,
      title: "Globale Reichweite",
      description: "Skalieren Sie Ihre Vertriebsaktivitäten international mit mehrsprachiger Unterstützung und lokalisierten Erkenntnissen."
    },
    {
      icon: Zap,
      title: "Nahtlose Integration",
      description: "Verbinden Sie sich mühelos mit Ihren bestehenden CRM-Systemen und Vertriebstools für optimale Effizienz."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">
              Funktionen
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Leistungsstarke Tools für den modernen Vertrieb
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unsere KI-Plattform bietet alles, was Vertriebsteams benötigen, um Leads effizient zu verwalten und Geschäftsabschlüsse zu beschleunigen.
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
