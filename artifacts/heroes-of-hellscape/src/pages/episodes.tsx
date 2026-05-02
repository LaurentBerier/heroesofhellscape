import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EpisodeCard from "@/components/EpisodeCard";
import { motion } from "framer-motion";

// Assets
import fremdlingCover from "@assets/TheFremdling_CoverPages_ProductShot_1777762707458.png";

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 container mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-bold"
        >
          The Archive
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-cinzel mb-6"
        >
          Episodes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          Fragments of a corrupted history. Select an issue to access its dossier.
        </motion.p>
      </section>

      {/* Grid */}
      <section className="pb-32 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <EpisodeCard 
                title="The Fremdling"
                period="WWII Europe"
                hook="A squad of Allied soldiers infiltrates a gothic castle and finds an ancient hunger waiting."
                imageSrc={fremdlingCover}
                href="/episodes/the-fremdling"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <EpisodeCard 
                title="Unknown"
                period="Unknown Era"
                hook=""
                imageSrc=""
                href="#"
                placeholder={true}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <EpisodeCard 
                title="Unknown"
                period="Unknown Era"
                hook=""
                imageSrc=""
                href="#"
                placeholder={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
