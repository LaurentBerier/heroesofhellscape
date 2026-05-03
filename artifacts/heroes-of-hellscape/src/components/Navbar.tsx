import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLogo from "@assets/HeroHellscape_Trans_1777762717288.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "The Lore" },
    { href: "/episodes", label: "Episodes" },
    { href: "/blog", label: "Dispatches" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? "bg-background/90 backdrop-blur-md border-border/50 py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="z-50 relative">
          <img 
            src={heroLogo} 
            alt="Heroes of Hellscape Logo" 
            className="h-10 md:h-12 object-contain"
            data-testid="img-navbar-logo"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                location === link.href ? "text-primary font-bold" : "text-foreground/80"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground tracking-widest uppercase text-xs"
            data-testid="button-nav-subscribe"
            onClick={() => {
              document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join the Order
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-2xl font-cinzel tracking-widest uppercase hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              size="lg"
              className="mt-8 bg-primary text-primary-foreground tracking-widest uppercase"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
            >
              Join the Order
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
