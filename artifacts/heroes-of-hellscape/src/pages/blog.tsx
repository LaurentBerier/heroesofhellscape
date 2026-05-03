import React from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import panel from "@assets/image_1777762884788.png";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={panel} alt="" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent tracking-[0.4em] uppercase text-sm mb-6"
          >
            Dispatches
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-cinzel mb-8"
          >
            The Archive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            World-building notes, process documents, and records that probably shouldn't be public.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-primary mx-auto mt-10"
          />
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-1">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`blog-card-${post.slug}`}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group border-b border-border/30 py-10 cursor-pointer hover:border-primary/40 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-primary tracking-widest uppercase text-xs font-bold">{post.category}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-muted-foreground text-xs tracking-wide">{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-muted-foreground text-xs tracking-wide">{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-cinzel text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center shrink-0">
                        <span
                          className="text-xs tracking-[0.2em] uppercase text-primary border border-primary/30 px-4 py-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          data-testid={`link-read-${post.slug}`}
                        >
                          Read
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty state for future posts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center border border-dashed border-border/30 rounded-lg py-16 px-8"
          >
            <p className="text-muted-foreground/50 tracking-widest uppercase text-sm">More dispatches incoming</p>
            <p className="text-muted-foreground/30 text-xs mt-2">Join the order to receive them first</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
