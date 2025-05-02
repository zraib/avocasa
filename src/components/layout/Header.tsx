import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

interface HeaderProps {
  openContactModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openContactModal }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Update scroll state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 dark:bg-charcoal-950/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-avocado-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="font-bold text-xl text-avocado-700 dark:text-avocado-400">AvoCasa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.home')}
          </Link>
          <Link 
            to="/about" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/about' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.about')}
          </Link>
          <Link 
            to="/products" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/products' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.products')}
          </Link>
          <Link 
            to="/sustainability" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/sustainability' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.sustainability')}
          </Link>
          <Link 
            to="/contact" 
            className={`text-charcoal-700 dark:text-cream-100 hover:text-avocado-600 dark:hover:text-avocado-400 transition-colors ${
              location.pathname === '/contact' ? 'font-semibold text-avocado-700 dark:text-avocado-500' : ''
            }`}
          >
            {t('navigation.contact')}
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-charcoal-800"
            aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-charcoal-700" />
            ) : (
              <Sun size={20} className="text-cream-100" />
            )}
          </button>
          
          <button 
            onClick={openContactModal}
            className="btn btn-primary"
          >
            {t('cta.quote')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-charcoal-700 dark:text-cream-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white dark:bg-charcoal-900 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom pt-20 pb-6">
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/"
              className="text-xl font-medium text-charcoal-800 dark:text-cream-50"
            >
              {t('navigation.home')}
            </Link>
            <Link 
              to="/about"
              className="text-xl font-medium text-charcoal-800 dark:text-cream-50"
            >
              {t('navigation.about')}
            </Link>
            <Link 
              to="/products"
              className="text-xl font-medium text-charcoal-800 dark:text-cream-50"
            >
              {t('navigation.products')}
            </Link>
            <Link 
              to="/sustainability"
              className="text-xl font-medium text-charcoal-800 dark:text-cream-50"
            >
              {t('navigation.sustainability')}
            </Link>
            <Link 
              to="/contact"
              className="text-xl font-medium text-charcoal-800 dark:text-cream-50"
            >
              {t('navigation.contact')}
            </Link>
          </nav>

          <div className="mt-8 space-y-4">
            <LanguageSwitcher isMobile />
            
            <div className="flex items-center justify-between p-4 border-t border-b border-cream-200 dark:border-charcoal-700">
              <span className="text-charcoal-800 dark:text-cream-50">
                {theme === 'light' ? t('theme.light') : t('theme.dark')}
              </span>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-charcoal-800"
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-charcoal-700" />
                ) : (
                  <Sun size={20} className="text-cream-100" />
                )}
              </button>
            </div>
            
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openContactModal();
              }}
              className="btn btn-primary w-full"
            >
              {t('cta.quote')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;