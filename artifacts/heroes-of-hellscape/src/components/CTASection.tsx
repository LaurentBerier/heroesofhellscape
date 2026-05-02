import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Initiation Commenced",
      description: "Your soul has been tethered to the archive. Expect communications shortly.",
      className: "bg-card border-primary/50 text-foreground",
    });
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 border-y border-border/30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center bg-card/50 backdrop-blur-md border border-border/50 p-8 md:p-12 rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-cinzel text-foreground mb-4 drop-shadow-md">
            Join the Order
          </h2>
          <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
            The history books lied. Uncover the truth before it finds you. Sign up for early access to issues, exclusive variant covers, and classified lore drops.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-background/50 border-border/50 focus-visible:ring-primary text-foreground h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground tracking-widest uppercase font-bold"
              data-testid="btn-newsletter-submit"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground/50 mt-4 tracking-widest uppercase">
            We operate in shadows. Your data remains secure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
