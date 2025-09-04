import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-black text-white font-semibold">TS</div>
              <span className="sr-only sm:not-sr-only sm:text-sm sm:tracking-wide">Talent Scout Assistant</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a className="hover:opacity-70 transition-opacity" href="#features">Features</a>
              <a className="hover:opacity-70 transition-opacity" href="#testimonials">Customers</a>
              <a className="hover:opacity-70 transition-opacity" href="#pricing">Pricing</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#login" className="hidden sm:inline text-sm hover:opacity-70 transition-opacity">Log in</a>
              <a href="#cta" className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30">Get Started</a>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
