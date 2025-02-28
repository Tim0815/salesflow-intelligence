
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking links
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold text-foreground">
            Sales<span className="text-primary">Flow</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-foreground/80 hover:text-foreground font-medium text-sm hover-transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-foreground/80 hover:text-foreground font-medium text-sm hover-transition"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-foreground/80 hover:text-foreground font-medium text-sm hover-transition"
          >
            Pricing
          </a>
          <Button
            variant="default"
            size="sm"
            className="ml-4 rounded-full bg-primary hover:bg-primary/90 text-white"
          >
            Start Free Trial
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-foreground/80 hover:text-foreground font-medium py-2 hover-transition"
              onClick={handleLinkClick}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-foreground font-medium py-2 hover-transition"
              onClick={handleLinkClick}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-foreground font-medium py-2 hover-transition"
              onClick={handleLinkClick}
            >
              Pricing
            </a>
            <Button
              variant="default"
              size="default"
              className="w-full mt-2 rounded-full bg-primary hover:bg-primary/90 text-white"
              onClick={handleLinkClick}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
