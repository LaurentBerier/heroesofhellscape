import React from "react";
import { Link } from "wouter";
import heroLogo from "@assets/HeroHellscape_Trans_1777762717288.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-16 mt-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={heroLogo} alt="Heroes of Hellscape" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
            Monsters were never myths. They are the connective tissue of history.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm tracking-wider uppercase">
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">The Lore</Link>
          <Link href="/episodes" className="text-muted-foreground hover:text-primary transition-colors">Episodes</Link>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60">
        <p>&copy; {new Date().getFullYear()} Heroes of Hellscape. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
