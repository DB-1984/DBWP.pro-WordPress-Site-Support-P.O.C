"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import MobileMenu from "@/components/MobileMenu";
import ProjectGallery from "@/components/ProjectGallery";
import projects from "@/data/projects.json";
import Background from "@/components/Background";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  ChevronUp,
  MapPinned,
  Blocks,
  Notebook,
  Link,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell me the problem",
    description:
      "What are you trying to achieve, and what is getting in the way?",
  },
  {
    number: "02",
    title: "Find the right approach",
    description: "We agree on a useful scope before anything is built.",
  },
  {
    number: "03",
    title: "Build it properly",
    description:
      "I make the change, check the details, and explain what comes next.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-zinc-950 antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 shadow-xs backdrop-blur">
        <div className="mx-auto flex h-14 w-full w-full items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-bold tracking-tighter text-zinc-950"
          >
            <Image
              src="/logo.png"
              alt="DBWP Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span>dbWP</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a
              className="transition-colors hover:text-zinc-950"
              href="#services"
            >
              Services
            </a>
            <a className="transition-colors hover:text-zinc-950" href="#work">
              Work
            </a>
            <a
              className="transition-colors hover:text-zinc-950"
              href="#approach"
            >
              Approach
            </a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#contact"
              className="inline-flex h-8 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-2 text-sm font-semibold text-white shadow transition hover:bg-zinc-800"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </a>
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* Main Page Content */}
      <main id="top" className="w-full">
        {/* Hero Section */}
        <section className="relative isolate flex items-center min-h-[100dvh] justify-center overflow-hidden bg-[url('/fire.png')] bg-cover bg-center shadow-sm">
          <div className="hero-text relative z-10 shadow-lg mx-auto w-full bg-white/90  p-7 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/wp-logo.png"
                  alt="WordPress logo"
                  width={64}
                  height={64}
                  className="mb-2 h-16 w-auto"
                  priority
                />
                <h1 className="mx-auto max-w-4xl text-5xl font-extrabold text-zinc-800 tracking-tight sm:text-6xl md:text-7xl">
                  Wordpress Sites <br />
                  <span className="bg-gradient-to-r from-[lab(47_68.42_9.57)] to-[lab(55_61.23_58.93)] bg-clip-text text-transparent">
                    built with flair.
                  </span>
                </h1>
              </div>

              <p className="mx-auto mt-6 max-w-xl text-sm font-base text-zinc-800 sm:text-lg">
                Thoughtful WordPress and WooCommerce sites, custom features, and
                straightforward help when something isn&apos;t working.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 text-sm font-semibold text-white shadow transition hover:bg-zinc-800 sm:w-auto"
                  href="#contact"
                >
                  Tell me what you need <ArrowUpRight className="size-4" />
                </a>
                <a
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 sm:w-auto"
                  href="#work"
                >
                  Explore my work <ArrowDown className="size-4" />
                </a>
              </div>
            </motion.div>
            <p className="mt-12 text-xs font-medium text-zinc-600">
              Independent thinking · Useful code · No agency theatre
            </p>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section className="w-full border-y border-zinc-200 bg-zinc-50/80 py-6">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-zinc-700 sm:gap-10">
                <span>WordPress</span>
                <span>WooCommerce</span>
                <span>Custom Blocks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full scroll-mt-20 bg-zinc-950 py-20 text-white sm:py-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="mb-14 max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  What I do
                </p>

                <h2 className="text-white text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                  Whatever the brief, make it useful.
                </h2>

                <p className="mt-4 text-base leading-7 text-zinc-300">
                  From a whole new site to one stubborn issue, the goal is
                  clear: make the experience better for visitors and easier for
                  you to run.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section className="relative isolate overflow-hidden bg-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Background />

            <div className="relative z-10">
              <section
                id="work"
                className="w-full scroll-mt-20 border-t border-zinc-200 bg-zinc-50/60 py-20 sm:py-28"
              >
                <div className="mx-auto max-w-5xl px-5 sm:px-8">
                  <div className="mb-14 max-w-2xl">
                    <p className="mb-2 text-xs font-bold tracking-wider text-zinc-700 uppercase">
                      Selected Work
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                      Built to solve real problems.
                    </h2>
                  </div>

                  <ProjectGallery projects={projects} />
                </div>
              </section>
            </div>
          </motion.div>
        </section>

        {/* Approach Section */}
        <section
          id="approach"
          className="w-full scroll-mt-20 py-20 sm:py-28 bg-[#70a8c1] bg-gradient-to-r from-red-500 to-orange-500"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-white uppercase">
                    How I Work
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                    Clear thinking. <br />
                    Then good code.
                  </h2>
                </div>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 border-b border-zinc-200 pb-6 last:border-b-0"
                    >
                      <span className="text-sm font-bold text-white">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-zinc-950">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-white">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full scroll-mt-20 bg-slate-200 bg-[url('/rocket.png')] bg-cover bg-center bg-no-repeat px-5 py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-4xl rounded-2xl bg-white/90 p-7 shadow-lg sm:p-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-700">
                Start a conversation
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                What can I help you make?
              </h2>

              <p className="mb-8 mt-4 text-base leading-7 text-zinc-600">
                Tell me what you&apos;re trying to achieve, what isn&apos;t
                working, or where you&apos;re stuck. You don&apos;t need a
                technical brief.
              </p>

              <ContactForm Icon={ArrowUpRight} />
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-zinc-500 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-bold tracking-tighter text-zinc-950"
          >
            <Image
              src="/logo.png"
              alt="DBWP Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span>dbWP</span>
          </a>
          <p className="text-xs">Websites with a reason to exist.</p>
          <a
            href="#top"
            className="flex items-center gap-1 font-medium transition-colors hover:text-zinc-950"
          >
            Back to top <ChevronUp className="size-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
