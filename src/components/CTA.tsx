
import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#E5DEFF]/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=30')] opacity-5 bg-cover bg-center"></div>
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Bereit, Ihren Vertriebszyklus zu revolutionieren?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Starten Sie noch heute Ihre kostenlose 14-tägige Testphase und entdecken Sie, wie SalesFlow AI Ihrem Team Millionen von Arbeitsstunden ersparen kann.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full px-8 py-6 text-base bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white shadow-md">
                  Kostenlos testen
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-base border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/5">
                  Demo vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
