import React from "react"

import hrLeadImg from "../../assets/Bolivisión2025.png"
import hiringManagerImg  from "../../assets/RH.png"

import { Link } from "react-router-dom";



export default function LandingBody() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
      {/* Decorative gradient blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-gradient-to-br from-indigo-200 to-fuchsia-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-48 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-100 to-emerald-100 blur-3xl opacity-70" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            
            <h1 className="text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-semibold tracking-tight">
              Powerful AI for Smart Hiring, Faster <span className="text-neutral-400"></span> 
            </h1>
            <p className="mt-5 text-base sm:text-lg text-neutral-600">
             Find the right talent with data driven screening and assessment
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Start free trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Book a demo
              </a>
            </div>

            {/* KPI chips */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <KpiChip icon={<ChartIcon />} label="Average Savings per Hire" value="$1,200+" />
              <KpiChip icon={<BoltIcon />} label="Hiring speed" value="2.5× faster" />
              <KpiChip icon={<ShieldIcon />} label="Bias-free evaluation" value="100%" />
            </div>
          </div>
        </div>
      </section>

    
      <h1 className="text-xl/tight sm:text-2xl/tight md:text-4xl/tight font-semibold tracking-tight">
  Intuitive, user-configurable AI-powered candidate evaluation tool that quickly y easily helps you find the right candidate fit. 
  <span className="text-neutral-400"></span>
</h1>
<br />
<h1 className="text-xl/tight sm:text-1xl/tight md:text-2xl/tight  tracking-tight">
  No Costly Licensing. No Configuration. Just Results! 
  <span className="text-neutral-400"></span>
</h1>

      {/* Feature strip */}
      <section id="features" className="border-y border-black/5 bg-white/70 backdrop-blur py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-3">
            <FeatureCard title="Dynamic Screening" description="Auto-match resumes with ideal candidate profiles. Adjust requirements on the fly and fine-tune evaluation criteria in just a few clicks" icon={<ListIcon />} />
            <FeatureCard title="In-Depth Assessment" description="Six-dimensional psychographic model to analyze and score candidates, providing clear insights into overall candidate fit." icon={<BrainIcon />} />
            <FeatureCard title="Centralized Dashboard" description="Instantly see your top-ranked candidates, their scores, detailed evaluation data, and supporting evidence" icon={<CheckIcon />} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <QuoteCard
            image={hrLeadImg}
            quote="We review hundreds of unstructured résumés without overlooking great talent. Diversity and equality are properly considered."
            author="HR Lead, Bolivisión"
          />
          <QuoteCard
            image={hiringManagerImg}
            quote="Consulting clients expect both experience and technical skill. Talent Scout surfaces the candidates who have both — fast."
            author="Hiring Manager, LA"
          />
        </div>
      </div>
    </section>


      {/* CTA */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Only pay per role processed.</h2>
          <p className="mt-3 text-neutral-600">Support included. Scale recruiting throughput without scaling headcount.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800">Get Started</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Talk to sales</a>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ——— Small UI primitives ——— */
function KpiChip({ icon, label, value }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur transition hover:shadow">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white">{icon}</div>
      <div className="flex flex-col text-left">
        <span className="text-[11px] uppercase tracking-wider text-neutral-500">{label}</span>
        <span className="text-lg font-semibold">{value}</span>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 text-white">{icon}</div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
    </div>
  )
}

function QuoteCard({ image, quote, author }) {
  return (
    <figure className="rounded-3xl border border-black/5 bg-white/70 p-6 backdrop-blur flex flex-col items-center text-center">
      {image && (
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
      )}
      <blockquote className="text-neutral-900 text-lg">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-neutral-600">{author}</figcaption>
    </figure>
  )
}

/* ——— Minimal inline icons ——— */
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 20h16" />
      <rect x="6" y="10" width="3" height="6" rx="1" />
      <rect x="11" y="7" width="3" height="9" rx="1" />
      <rect x="16" y="4" width="3" height="12" rx="1" />
    </svg>
  )
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3 5 6v6a9 9 0 0 0 7 8 9 9 0 0 0 7-8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 6h12M8 12h12M8 18h12" />
      <circle cx="4" cy="6" r="1.5" />
      <circle cx="4" cy="12" r="1.5" />
      <circle cx="4" cy="18" r="1.5" />
    </svg>
  )
}
function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 7a3 3 0 1 1 3-3m5 3a3 3 0 1 0-3-3M8 7a5 5 0 0 0-4 5v1a4 4 0 0 0 4 4m8-10a5 5 0 0 1 4 5v1a4 4 0 0 1-4 4M8 17a3 3 0 1 0 3 3m5-3a3 3 0 1 1-3 3" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m4 12 4 4 12-12" />
    </svg>
  )
}

