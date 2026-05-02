import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EpisodeCard from "@/components/EpisodeCard";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import assets
import coverImage from "@assets/Cover_1777762956961.jpg";
import panel1 from "@assets/image_1777762897802.png";
import panel2 from "@assets/image_1777762884788.png";
import panel3 from "@assets/image_1777762828645.png";
import panel4 from "@assets/image_1777762862249.png";
import panel5 from "@assets/image_1777762997159.png";
import panel6 from "@assets/image_1777762773210.png";

export default function HomePage() {
  const galleryImages = [panel1, panel2, panel3, panel4, panel5, panel6];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* About The Universe Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-cinzel mb-8 text-foreground/90">A History Written in Blood</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Every empire that fell. Every war that burned. Every dark age that plunged humanity into shadow. They were there. Ancient entities wearing human faces, pulling the strings of history. The Heroes of Hellscape universe rips the veil off the world you thought you knew.
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-[0.2em]">
                Uncover the Lore
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Episode */}
      <section id="featured-episode" className="py-24 bg-card/30 border-y border-border/30 relative">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-[50px] rounded-full z-0"></div>
                <img src={coverImage} alt="The Fremdling Cover" className="relative z-10 w-full rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-border/50 transform -rotate-2 hover:rotate-0 transition-transform duration-500" />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary tracking-[0.3em] uppercase text-sm font-bold">Featured Episode</p>
              <h2 className="text-4xl md:text-6xl font-cinzel leading-none">The Fremdling</h2>
              <div className="flex items-center gap-4 text-sm text-accent/80 tracking-widest uppercase">
                <span>WWII Europe</span>
                <span className="w-1 h-1 rounded-full bg-accent"></span>
                <span>Issue #01</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Winter, 1944. A squad of Allied soldiers infiltrates a remote gothic castle, expecting a German command post. What they find buried in the snow and stone is an ancient, hungry intelligence that has been waiting for the scent of fresh blood.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/episodes/the-fremdling">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest px-8">
                    View Issue
                  </Button>
                </Link>
                <Button variant="outline" className="border-border/50 text-foreground uppercase tracking-widest hidden sm:flex" disabled>
                  Kickstarter
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Teaser / Gallery */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-cinzel mb-4">Glimpses into the Void</h2>
            <p className="text-muted-foreground">Original artwork from The Fremdling</p>
          </motion.div>
          
          <GalleryGrid images={galleryImages} />
          
          <div className="mt-16 text-center">
            <Link href="/episodes">
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 tracking-[0.2em] uppercase">
                Explore Archives
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
