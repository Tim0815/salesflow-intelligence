
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Switch } from "./ui/switch";

interface PlanProps {
  title: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  billing: 'monthly' | 'yearly';
}

const PricingPlan: React.FC<PlanProps> = ({
  title,
  price,
  yearlyPrice,
  description,
  features,
  popular = false,
  buttonText,
  billing
}) => {
  const currentPrice = billing === 'monthly' ? price : yearlyPrice;
  
  return (
    <div className={`relative p-8 rounded-2xl ${popular ? 'border-2 border-primary shadow-lg' : 'border border-border'} flex flex-col h-full animate-fade-up`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold py-1 px-4 rounded-full">
          Meistgewählt
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="mb-4">
          <span className="text-3xl font-bold">{currentPrice}</span>
          <span className="text-muted-foreground ml-1">
            {billing === 'monthly' ? '/Monat' : '/Jahr'}
          </span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={popular ? "default" : "outline"}
        className={`w-full rounded-lg ${
          popular ? "bg-primary hover:bg-primary/90 text-white" : "border-primary/20 hover:border-primary/50 text-foreground hover:bg-primary/5"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const PricingPlans = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBilling = () => {
    setBilling(billing === 'monthly' ? 'yearly' : 'monthly');
  };

  const plans = [
    {
      title: "Starter",
      price: "49€",
      yearlyPrice: "490€",
      description: "Ideal für kleine Teams und Startup-Unternehmen.",
      features: [
        "Bis zu 1.000 Leads pro Monat",
        "Grundlegende KI-Analysen",
        "E-Mail-Integration",
        "1 Benutzer",
        "Standard-Support",
        "Wöchentliche Berichte"
      ],
      buttonText: "Jetzt starten",
      popular: false
    },
    {
      title: "Professional",
      price: "149€",
      yearlyPrice: "1.490€",
      description: "Perfekt für wachsende Vertriebsteams.",
      features: [
        "Bis zu 10.000 Leads pro Monat",
        "Erweiterte KI-Prognosen",
        "CRM-Integration",
        "5 Benutzer",
        "Vorrangiger Support",
        "Tägliche Berichte",
        "Benutzerdefinierte Dashboards"
      ],
      buttonText: "Jetzt beginnen",
      popular: true
    },
    {
      title: "Enterprise",
      price: "499€",
      yearlyPrice: "4.990€",
      description: "Umfassende Lösung für große Unternehmen.",
      features: [
        "Unbegrenzte Leads",
        "Vollständige KI-Suite",
        "Alle Integrationen",
        "Unbegrenzte Benutzer",
        "24/7 Premium-Support",
        "Benutzerdefinierte Berichte",
        "Dedizierter Account Manager",
        "Anpassbare KI-Modelle"
      ],
      buttonText: "Kontakt aufnehmen",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">
              Preise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Wählen Sie den passenden Plan für Ihre Bedürfnisse
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible Preisoptionen für Unternehmen jeder Größe. Alle Pläne beinhalten eine 14-tägige kostenlose Testphase.
          </p>
          
          <div className="flex items-center justify-center space-x-3 mb-12">
            <span className={`text-sm ${billing === 'monthly' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>Monatlich</span>
            <Switch checked={billing === 'yearly'} onCheckedChange={toggleBilling} />
            <span className={`text-sm ${billing === 'yearly' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Jährlich <span className="text-xs text-green-600 font-semibold">20% sparen</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              {...plan}
              billing={billing}
            />
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. 
          Benötigen Sie eine individuelle Lösung? <a href="#" className="text-primary hover:underline">Kontaktieren Sie uns</a>.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
