import React, { useEffect, useState } from 'react';
import { Instagram, Link, ArrowDown, Menu, X, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import AIChat from './AIChat';

interface LayoutOverlayProps {
  scrollToSection: (sectionId: string) => void;
}

const LayoutOverlay: React.FC<LayoutOverlayProps> = ({ scrollToSection }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Check if user has scrolled near the bottom
      const scrolledToBottom =
        window.innerHeight + currentScrollY >= document.body.scrollHeight - 50;
      setIsAtBottom(scrolledToBottom);
      setHasScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isChatOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Full Screen AI Chat */}
      {isChatOpen && <AIChat onClose={() => setIsChatOpen(false)} />}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full px-8 py-6 md:px-12 flex justify-between items-center transition-all duration-300 text-white z-40 
          ${isMobileMenuOpen ? 'bg-[#1A1A1A]' : (hasScrolled ? 'bg-[#1A1A1A]/90 backdrop-blur-sm shadow-sm' : 'bg-transparent')} 
          ${isChatOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsMobileMenuOpen(false);
        }}>
          <span className="text-3xl font-bold font-display tracking-tighter">R</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-light tracking-widest hover:text-gray-400 transition-colors uppercase"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-light tracking-widest hover:text-gray-400 transition-colors uppercase"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1A1A1A] z-50 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-8 right-8 text-white"
            onClick={toggleMobileMenu}
          >
            <X />
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            className="text-2xl font-light tracking-widest uppercase"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-2xl font-light tracking-widest uppercase"
          >
            Contact
          </button>
        </div>
      )}

      {/* Bottom Left Socials & Chat */}
      <div className={`fixed bottom-8 left-8 md:left-12 z-40 flex flex-col gap-6 text-white mix-blend-difference transition-opacity duration-300 ${isChatOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Chat Trigger */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="hover:text-gray-400 transition-transform hover:scale-110"
          aria-label="Open AI Chat"
        >
          <MessageCircle size={20} strokeWidth={1.5} />
        </button>

        {/* Linktree */}
        <a href={SOCIAL_LINKS.linktree} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform hover:scale-110">
          <Link size={20} strokeWidth={1.5} />
        </a>

        {/* Instagram */}
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform hover:scale-110">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
      </div>

      {/* Bottom Right Scroll Indicator */}
      <div
        className={`fixed bottom-12 right-8 md:right-12 z-40 flex flex-col items-center gap-8 transition-opacity duration-500 ${isAtBottom || isChatOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <span
          className="text-xs font-light tracking-[0.2em] uppercase rotate-90 whitespace-nowrap origin-center"
        >
          Scroll
        </span>
        <ArrowDown className="animate-bounce" size={16} strokeWidth={1} />
      </div>
    </>
  );
};

export default LayoutOverlay;