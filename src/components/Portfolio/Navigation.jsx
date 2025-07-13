import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X, Download, Terminal, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import cv from '../../assets/pdf/Youssef_Kandil.pdf'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv ;
    link.download = 'Youssef_Kandil.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border' : 'bg-background/60'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center space-x-2 group"
          >
            <Terminal className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <span className="text-xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[0]}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`font-mono font-medium transition-all duration-200 relative group text-foreground hover:text-cyan-500`}
              >
                <span className="relative z-10">{item.label.toLowerCase()}()</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-200"></div>
              </a>
            ))}
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-mono font-medium transform hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-4 h-4 mr-2" />
              download_cv()
            </Button>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg border border-border bg-background/70 hover:bg-background transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-200 text-foreground hover:text-cyan-500 bg-background/70`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block text-foreground hover:text-cyan-500 font-mono font-medium transition-colors py-2"
                >
                  {item.label.toLowerCase()}()
                </a>
              ))}
              <Button
                onClick={handleDownloadCV}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 rounded-lg font-mono font-medium mt-4"
              >
                <Download className="w-4 h-4 mr-2" />
                download_cv()
              </Button>
              <button
                onClick={toggleTheme}
                className="mt-4 w-full p-2 rounded-lg border border-border bg-background/70 hover:bg-background transition-colors flex items-center justify-center"
                aria-label="Toggle theme"
                type="button"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;