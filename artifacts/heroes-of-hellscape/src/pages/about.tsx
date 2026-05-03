import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

// Assets
import panel1 from "@assets/image_1777762884788.png";
import panel2 from "@assets/image_1777762897802.png";
import spread from "@assets/TheFremdling_Pages_ProductShot_1777762707458.png";
import felix from "@assets/Felix_1777771245073.jpeg";
import laurent from "@assets/Laurent2_1777771521199.jpg";
import bts1 from "@assets/BTS_1777771245073.jpg";
import bts2 from "@assets/BTS2_1777771245074.jpg";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={panel1} alt="Atmospheric castle" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent tracking-[0.4em] uppercase text-sm mb-6"
          >
            The Lore
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-cinzel mb-8 drop-shadow-lg"
          >
            The Architects <br className="hidden md:block"/>of Ruin
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-primary mx-auto mb-10"
          ></motion.div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="prose prose-invert prose-lg md:prose-xl max-w-none text-muted-foreground font-serif leading-relaxed"
          >
            <p className="text-2xl md:text-3xl text-foreground font-cinzel leading-snug mb-12 text-center">
              We look back at history and see the actions of men. We see kings, generals, and dictators. We see human flaws and human triumphs. <span className="text-primary">We are looking at the puppets and ignoring the strings.</span>
            </p>
            
            <p>
              The central premise of the Heroes of Hellscape universe is simple, terrifying, and absolute: ancient, powerful entities have existed alongside humanity since the very beginning. They do not rule openly. They do not demand worship in the modern age, though they once did. Instead, they guide. They nudge. They orchestrate.
            </p>
            
            <p>
              Different cultures gave them different names. Demons, djinn, yokai, wendigo, old gods. As humanity grew more sophisticated and discarded its myths, these entities merely changed their clothes. They became advisors, financiers, shadowy figures moving through the corridors of power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50"
          >
            <img src={spread} alt="Comic Spread" className="w-full h-auto" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Narrative */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-cinzel mb-6">Across All Eras</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Our stories do not happen in chronological order. They are fragments extracted from a vast, corrupted timeline. 
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                One episode might take place in the muddy trenches of World War II. The next might occur in the neon-soaked streets of a cyberpunk future, or the blood-stained sands of feudal Japan. The setting changes, the human protagonists change, but the unseen hands remain the same.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">⬩</span>
                  <span className="text-foreground/80">Historical accuracy corrupted by mythological intervention.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">⬩</span>
                  <span className="text-foreground/80">Standalone narratives that build a massive interconnected universe.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">⬩</span>
                  <span className="text-foreground/80">Visceral, grounded combat mixed with cosmic horror.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-full overflow-hidden border border-border/30 p-2"
            >
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_60s_linear_infinite]"></div>
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img src={panel2} alt="Atmosphere" className="w-full h-full object-cover sepia-[0.3]" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Creators */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-[0.4em] uppercase text-sm mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-cinzel">The Minds Behind the Myth</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Felix */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center group"
              data-testid="bio-card-felix"
            >
              <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/60 transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <img
                  src={felix}
                  alt="Felix"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h3 className="text-2xl font-cinzel mb-1 text-foreground">Felix</h3>
              <p className="text-accent tracking-widest uppercase text-xs mb-4">Writer & Creator</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The architect of the Hellscape universe. Felix built the mythology, lore, and the interconnected entity system that ties every era of history together.
              </p>
            </motion.div>

            {/* Laurent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col items-center text-center group"
              data-testid="bio-card-laurent"
            >
              <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/60 transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <img
                  src={laurent}
                  alt="Laurent"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h3 className="text-2xl font-cinzel mb-1 text-foreground">Laurent</h3>
              <p className="text-accent tracking-widest uppercase text-xs mb-4">Artist & Co-Creator</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Laurent brings the darkness to life — every panel, every shadow, every moment of visceral tension rendered with precision and intention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-16 pb-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent tracking-[0.4em] uppercase text-sm mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-cinzel">Behind the Pages</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-lg overflow-hidden aspect-video border border-border/40 shadow-2xl group"
              data-testid="bts-image-1"
            >
              <img src={bts1} alt="Artist at work on tablet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-sm text-foreground/80 tracking-widest uppercase font-cinzel">Inking the Void</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-lg overflow-hidden aspect-video border border-border/40 shadow-2xl group"
              data-testid="bts-image-2"
            >
              <img src={bts2} alt="Artist coloring panels in Photoshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-sm text-foreground/80 tracking-widest uppercase font-cinzel">Painting the Darkness</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
