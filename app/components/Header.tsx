'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Ana Sayfa', href: '#' },
    { name: 'Ürünler', href: '#products' },
    { name: 'Hizmet Bölgeleri', href: '#regions' },
    { name: 'Bayilik', href: '#dealership' },
    { name: 'SSS', href: '#faq' },
    { name: 'İletişim', href: 'tel:+905403363873' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-[#83bd81]">
            Avusturya Sineklik
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#404e5e] hover:text-[#83bd81] transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#404e5e]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-[#404e5e] hover:text-[#83bd81] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
