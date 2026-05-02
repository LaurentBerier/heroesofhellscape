import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroLogo from "@assets/HeroHellscape_Trans_1777762717288.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Deep Background - parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-[#110d0d] to-background z-0"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 mix-blend-overlay"></div>
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      </motion.div>

      {/* Midground Particles - simple CSS animation could go here, but using Framer for simplicity */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-40 pointer-events-none"
        style={{ y: y2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
      </motion.div>

      {/* Foreground Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroLogo} 
          alt="Heroes of Hellscape" 
          className="w-full max-w-2xl mx-auto mb-8 drop-shadow-[0_0_30px_rgba(153,27,27,0.3)]"
          data-testid="img-hero-logo"
        />
        
        <motion.p 
          className="text-lg md:text-2xl text-foreground/80 font-light tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Monsters were never myths. <br className="hidden md:block"/>They are the connective tissue of history.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <Button 
            size="lg" 
            className="bg-primary/90 hover:bg-primary text-primary-foreground tracking-[0.2em] uppercase font-bold py-6 px-10 rounded-sm shadow-[0_0_20px_rgba(153,27,27,0.4)] transition-all hover:shadow-[0_0_30px_rgba(153,27,27,0.6)]"
            onClick={() => document.getElementById("featured-episode")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="btn-hero-explore"
          >
            Enter the Hellscape
          </Button>
        </motion.div>
      </motion.div>

      {/* Vignette border to darken edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)] z-30 pointer-events-none"></div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/80 to-transparent"></div>
      </motion.div>
    </div>
  );
}
