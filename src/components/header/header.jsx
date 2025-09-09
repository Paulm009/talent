import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import icon from '../../assets/icon.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-black text-white font-semibold">TS</div>
            <span className="sr-only sm:not-sr-only sm:text-sm sm:font-medium sm:tracking-wide">Talent Scout Assistant</span>
          </a>

          {/* Menú Hamburguesa para móviles */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navegación para desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <ScrollLink 
              to="features" 
              smooth={true} 
              duration={600} 
              offset={-70} 
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              Features
            </ScrollLink>

            <ScrollLink 
              to="testimonials" 
              smooth={true} 
              duration={600} 
              offset={-70} 
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              Testimonials
            </ScrollLink>

            <ScrollLink 
              to="pricing" 
              smooth={true} 
              duration={600} 
              offset={-10} 
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              Pricing
            </ScrollLink>
          </nav>

          {/* Botones */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="text-sm hover:opacity-70 transition-opacity">Log in</a>
            <a href="#cta" className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30">
              Get Started
            </a>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <ScrollLink 
                to="features" 
                smooth={true} 
                duration={600} 
                offset={-70} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </ScrollLink>

              <ScrollLink 
                to="testimonials" 
                smooth={true} 
                duration={600} 
                offset={-70} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </ScrollLink>

              <ScrollLink 
                to="pricing" 
                smooth={true} 
                duration={600} 
                offset={-10} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </ScrollLink>

              <div className="pt-4 pb-2 border-t border-gray-200">
                <a href="#login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Log in</a>
                <a href="#cta" className="block mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-black hover:bg-neutral-800 text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;