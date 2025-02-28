
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 animate-fade-down">Impressum</h1>
          
          <div className="prose prose-lg max-w-none animate-fade-up">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              SalesFlow AI GmbH<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>
            
            <h2>Kontakt</h2>
            <p>
              Telefon: +49 30 123456789<br />
              E-Mail: info@salesflow-ai.de
            </p>
            
            <h2>Vertreten durch</h2>
            <p>
              Max Mustermann, Geschäftsführer
            </p>
            
            <h2>Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Berlin<br />
              Registernummer: HRB 123456
            </p>
            
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
            
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Max Mustermann<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>
            
            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            
            <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
