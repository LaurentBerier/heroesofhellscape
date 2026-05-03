import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

// Assets
import fremdlingLogo from "@assets/The_Fremdling_1777762643696.png";
import headerBg from "@assets/image_1777762884788.png"; // Stormy castle
import panel1 from "@assets/image_1777762773210.png";
import panel2 from "@assets/image_1777762801477.png";
import panel3 from "@assets/image_1777762828645.png";
import panel4 from "@assets/image_1777762862249.png";
import panel5 from "@assets/image_1777762897802.png";
import coverShot from "@assets/Cover_1777762956961.jpg";

export default function FremdlingPage() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const galleryImages = [panel1, panel2, panel3, panel4, panel5];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Cinematic Header */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: bgY }}
        >
          <img src={headerBg} alt="Gothic Castle" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        </motion.div>
        
        <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl w-full">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={fremdlingLogo} 
            alt="The Fremdling" 
            className="w-full max-w-2xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4 text-accent tracking-[0.2em] uppercase text-sm"
          >
            <span>Issue #01</span>
            <span className="w-1 h-1 rounded-full bg-primary"></span>
            <span>Status: Classified</span>
          </motion.div>
        </div>
      </section>

      {/* Story Summary & Cover */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-16 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
              <motion.div 
                className="w-full md:w-2/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img src={coverShot} alt="Hardcover Book" className="w-full rounded shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
              </motion.div>
              
              <motion.div 
                className="w-full md:w-3/5 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-4 text-lg text-muted-foreground font-serif leading-relaxed">
                  <p>
                    <strong className="text-foreground font-cinzel text-2xl font-normal block mb-4">December 1944. The Ardennes Forest.</strong>
                  </p>
                  <p>
                    A squad of battle-hardened Allied soldiers is sent deep behind enemy lines to secure a remote gothic castle. Intelligence suggests a high-ranking German command post.
                  </p>
                  <p>
                    Intelligence was wrong.
                  </p>
                  <p>
                    What they find within the vaulted stone walls and blood-stained snow is an ancient, unspeakable horror that history deliberately forgot. The war raging outside means nothing to the entity inside—except that it has brought fresh meat to its door.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-border/40">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground tracking-widest uppercase py-6 px-10 text-sm font-bold shadow-[0_0_20px_rgba(153,27,27,0.3)]">
                    Back on Kickstarter
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="mb-16 border-b border-border/30 pb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-cinzel text-foreground">Declassified Panels</h2>
            <p className="text-muted-foreground tracking-widest uppercase text-xs mt-2">Visual Evidence / Operation: Fremdling</p>
          </motion.div>
          
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
