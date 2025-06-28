import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/producten', label: 'Producten' },
    { href: '/over-ons', label: 'Over ons' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              Airco Bedrijf Limburg
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-orange-500'
                    : isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-white hover:text-orange-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:0462021430"
                className={`flex items-center space-x-2 font-medium ${
                  isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>046 202 1430</span>
              </a>
              <Link to="/contact" className="btn-primary">
                Gratis Offerte
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl">
            <div className="p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-medium ${
                    location.pathname === link.href
                      ? 'text-orange-500'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:0462021430"
                  className="flex items-center space-x-2 text-gray-700 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>046 202 1430</span>
                </a>
                <a
                  href="mailto:info@aircobedrijflimburg.nl"
                  className="flex items-center space-x-2 text-gray-700 mb-4"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@aircobedrijflimburg.nl</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary block text-center"
                >
                  Gratis Offerte
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;