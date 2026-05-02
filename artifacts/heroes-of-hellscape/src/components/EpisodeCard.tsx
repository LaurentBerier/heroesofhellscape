import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface EpisodeCardProps {
  title: string;
  period: string;
  hook: string;
  imageSrc: string;
  href: string;
  placeholder?: boolean;
}

export default function EpisodeCard({ title, period, hook, imageSrc, href, placeholder }: EpisodeCardProps) {
  if (placeholder) {
    return (
      <div className="group relative rounded-lg overflow-hidden border border-border/30 aspect-[3/4] bg-card/30 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <div className="text-center p-6 z-10">
          <h3 className="text-xl text-muted-foreground font-cinzel mb-2">Classified File</h3>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto mb-4"></div>
          <p className="text-xs text-muted-foreground/50 tracking-widest uppercase">Decryption Pending</p>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} className="block group">
      <motion.div 
        className="relative rounded-lg overflow-hidden border border-border/50 aspect-[3/4] bg-card"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
        
        <img 
          src={imageSrc} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-accent text-xs tracking-[0.2em] font-bold mb-2 uppercase">{period}</p>
          <h3 className="text-2xl text-foreground font-cinzel mb-2">{title}</h3>
          <p className="text-sm text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
            {hook}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
