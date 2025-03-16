            import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ServiceSearch from './ServiceSearch';
import { CONFIG } from '../config/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Search Section */}
          <div className="flex items-center gap-6 flex-1">
            <Link to="/" className="text-xl font-bold text-primary shrink-0">
              KittuByte
            </Link>
            <div className="hidden md:block flex-1 max-w-md">
              <ServiceSearch />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </Link>
            <a
              href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors font-medium"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-100"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-4">
              <div className="px-2">
                <ServiceSearch />
              </div>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-primary transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-primary transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <a
                href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors font-medium mx-2"
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
