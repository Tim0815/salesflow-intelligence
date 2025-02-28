
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Wie es funktioniert
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Steigern Sie Ihre Vertriebsleistung in drei einfachen Schritten
            </h2>
            <p className="text-muted-foreground mb-8">
              Unsere intuitive Plattform wurde entwickelt, um Ihren Vertriebsprozess zu optimieren und die Effizienz zu steigern, ohne komplexe Implementierungen.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Verbinden Sie Ihre Datenquellen</h3>
                  <p className="text-sm text-muted-foreground">
                    Integrieren Sie nahtlos Ihr CRM, E-Mail, Kalender und andere Vertriebstools, um einen umfassenden Überblick zu erhalten.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Aktivieren Sie die KI-Analyse</h3>
                  <p className="text-sm text-muted-foreground">
                    Unsere fortschrittlichen Algorithmen analysieren Ihre Daten und liefern umsetzbare Erkenntnisse und Empfehlungen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Optimieren und Skalieren</h3>
                  <p className="text-sm text-muted-foreground">
                    Nutzen Sie die gewonnenen Erkenntnisse, um Ihren Vertriebsprozess kontinuierlich zu verbessern und Ihr Geschäft zu skalieren.
                  </p>
                </div>
              </div>
            </div>

            <Button className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-white shadow-md">
              Demo vereinbaren
            </Button>
          </div>

          <div className="order-1 lg:order-2 animate-fade-up">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80" 
                alt="AI-powered dashboard" 
                className="w-full h-auto rounded-xl" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
