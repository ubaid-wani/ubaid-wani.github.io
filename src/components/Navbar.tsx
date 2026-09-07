import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navLinks = [
    { num: '01', name: 'Work', href: '#experience' },
    { num: '02', name: 'Projects', href: '#projects' },
    { num: '03', name: 'Stack', href: '#skills' },
    { num: '04', name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Primary Nav Bar */}
      <div
        className={`transition-all duration-300 ${isScrolled ? 'bg-[var(--nav-bg)] backdrop-blur-xl' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-14">
          {/* Brand */}
          <a
            href="#"
            className="font-mono-code text-xs tracking-widest text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors uppercase"
          >
            UA <span className="text-[var(--border-strong)] mx-1">→</span>{' '}
            <span className="text-[var(--fg-dim)]">PORTFOLIO / 2026</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono-code text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
              >
                <span className="text-[var(--accent)] mr-0.5">{link.num}</span>{' '}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Theme + Mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div
        className={`hidden md:block border-b border-[var(--border)] transition-all duration-300 ${isScrolled ? 'bg-[var(--nav-bg)] backdrop-blur-xl' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-4 divide-x divide-[var(--border)] py-1.5">
            {[
              { label: 'INDEX', value: 'EDITION 01' },
              { label: 'STATUS', value: 'OPEN TO ROLES' },
              { label: 'LOCATION', value: 'KASHMIR, INDIA' },
              { label: 'LOCAL TIME', value: time },
            ].map((item) => (
              <div key={item.label} className="px-4 first:pl-0 last:pr-0">
                <span className="font-mono-code text-[9px] text-[var(--fg-dim)] tracking-widest block uppercase">
                  {item.label}
                </span>
                <span className="font-mono-code text-[10px] text-[var(--fg-muted)] tracking-wider">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-elev)] border-b border-[var(--border)] px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono-code text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-[var(--accent)] mr-1">{link.num}</span> {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
