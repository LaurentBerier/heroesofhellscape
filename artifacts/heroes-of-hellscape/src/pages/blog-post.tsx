import React from "react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-cinzel mb-4">Dispatch Not Found</h1>
          <p className="text-muted-foreground mb-8">This record doesn't exist — or was never meant to be found.</p>
          <Link href="/blog">
            <span className="text-primary hover:underline tracking-widest uppercase text-sm" data-testid="link-back-to-blog">
              Return to the Archive
            </span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Cinematic Header */}
      <section className="pt-36 pb-16 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/blog">
              <span
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase mb-10 cursor-pointer"
                data-testid="link-back-to-archive"
              >
                <ArrowLeft size={14} />
                The Archive
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-primary tracking-widest uppercase text-xs font-bold">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-muted-foreground text-xs">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-muted-foreground text-xs">{post.readTime}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-cinzel leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl leading-relaxed"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="w-24 h-px bg-primary mt-12 origin-left"
          />
        </div>
      </section>

      {/* Body */}
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {post.content.map((section, i) => {
              if (section.type === "paragraph") {
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5 }}
                    className="text-foreground/85 text-lg leading-[1.9] font-serif"
                  >
                    {section.text}
                  </motion.p>
                );
              }
              if (section.type === "heading") {
                return (
                  <motion.h2
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-cinzel text-foreground pt-6"
                  >
                    {section.text}
                  </motion.h2>
                );
              }
              if (section.type === "quote") {
                return (
                  <motion.blockquote
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative border-l-2 border-primary pl-8 py-4 my-10"
                  >
                    <div className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                    <p className="text-foreground/90 text-xl leading-relaxed italic font-serif">{section.text}</p>
                  </motion.blockquote>
                );
              }
              if (section.type === "divider") {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-6 py-6 origin-left"
                  >
                    <div className="flex-1 h-px bg-border/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <div className="flex-1 h-px bg-border/40" />
                  </motion.div>
                );
              }
              return null;
            })}
          </div>

          {/* Footer nav */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-border/30 flex items-center justify-between"
          >
            <Link href="/blog">
              <span
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase cursor-pointer"
                data-testid="link-footer-back-to-archive"
              >
                <ArrowLeft size={14} />
                All Dispatches
              </span>
            </Link>
            <Link href="/episodes/the-fremdling">
              <span
                className="text-sm tracking-widest uppercase text-primary hover:underline cursor-pointer"
                data-testid="link-footer-read-episode"
              >
                Read Issue #01
              </span>
            </Link>
          </motion.div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </main>
  );
}
