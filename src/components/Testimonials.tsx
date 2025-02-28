
import React from "react";
import { Quotation } from "./ui/quotation";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-up">
      <Quotation className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-foreground mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SalesFlow hat die Art und Weise, wie unser Vertriebsteam arbeitet, komplett verändert. Wir sparen über 20 Stunden pro Woche an manueller Arbeit.",
      author: "Julia Schneider",
      position: "Head of Sales",
      company: "TechVision GmbH",
    },
    {
      quote:
        "Die KI-Insights haben uns geholfen, unsere Conversion-Rate um 35% zu steigern. Ein absoluter Game-Changer für unser Unternehmen.",
      author: "Markus Weber",
      position: "CEO",
      company: "InnoSales AG",
    },
    {
      quote:
        "Die Implementierung war überraschend einfach und der ROI war bereits nach zwei Monaten sichtbar. Klare Empfehlung.",
      author: "Sarah Müller",
      position: "Sales Operations Manager",
      company: "Global Solutions",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">
              Kundenstimmen
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie, wie SalesFlow Unternehmen dabei hilft, ihre Vertriebsprozesse zu transformieren und bessere Ergebnisse zu erzielen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
