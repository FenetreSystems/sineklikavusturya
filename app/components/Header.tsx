'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'products', label: 'Ürünler' },
    { id: 'why-manufacturer', label: 'Neden Biz?' },
    { id: 'regions', label: 'Bölgeler' },
    { id: 'dealership', label: 'Bayilik' },
    { id: 'faq', label: 'SSS' },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#404e5e] hover:opacity-80 transition-opacity">
              <span className="text-[#83bd81]">Avusturya</span> Sineklik
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleSmoothScroll(link.id)}
                className="text-gray-700 hover:text-[#83bd81] font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+905403363873" className="hidden sm:flex items-center text-[#404e5e] font-semibold hover:text-[#83bd81] transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 540 336 3873
            </a>
            <a href="https://wa.me/905403363873" className="hidden sm:inline-flex items-center px-4 py-2 bg-[#83bd81] text-[#404e5e] font-bold rounded-lg hover:bg-[#72a870] transition-colors">
              WhatsApp
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-[#404e5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleSmoothScroll(link.id)}
                  className="text-left text-gray-700 hover:text-[#83bd81] font-medium transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <a href="tel:+905403363873" className="flex items-center text-[#404e5e] font-semibold hover:text-[#83bd81] transition-colors py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +90 540 336 3873
              </a>
              <a href="https://wa.me/905403363873" className="inline-flex items-center justify-center px-4 py-2 bg-[#83bd81] text-[#404e5e] font-bold rounded-lg hover:bg-[#72a870] transition-colors">
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
