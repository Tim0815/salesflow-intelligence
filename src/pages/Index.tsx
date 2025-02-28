
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import PricingPlans from '@/components/PricingPlans';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    
    // Handle anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Accounting for fixed header
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <PricingPlans />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
