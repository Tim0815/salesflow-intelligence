
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-20 pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-display font-bold text-foreground">
                Sales<span className="text-[#8B5CF6]">Flow</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              AI-powered lead intelligence to revolutionize your sales cycle and save valuable time.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground text-sm hover-transition">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground text-sm hover-transition">How it works</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground text-sm hover-transition">Pricing</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm hover-transition">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm hover-transition">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm hover-transition">FAQ</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-muted-foreground hover:text-foreground text-sm hover-transition">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground hover:text-foreground text-sm hover-transition">Datenschutzerklärung</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm hover-transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs text-center">
            &copy; {currentYear} SalesFlow AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
