import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { CONFIG } from '../config/constants';

const Footer = () => {
  const addressLines = CONFIG.BUSINESS_LOCATION.split('\n');
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              Contact Us
              <div className="h-1 w-8 bg-secondary rounded-full"></div>
            </h3>
            <div className="flex items-start gap-3 group">
              <FaMapMarkerAlt className="text-secondary mt-1 group-hover:scale-110 transition-transform" />
              <address className="not-italic text-white/90 group-hover:text-white transition-colors">
                {addressLines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < addressLines.length - 1 && <br />}
                  </span>
                ))}
              </address>
            </div>
            <div className="flex items-center gap-3 group">
              <FaWhatsapp className="text-secondary group-hover:scale-110 transition-transform" />
              <a 
                href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 group-hover:text-white transition-colors flex items-center gap-2"
              >
                WhatsApp Support
                <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
            <div className="flex items-center gap-3 group">
              <FaEnvelope className="text-secondary group-hover:scale-110 transition-transform" />
              <a 
                href="mailto:contact@kittubyte.com"
                className="text-white/90 group-hover:text-white transition-colors flex items-center gap-2"
              >
                contact@kittubyte.com
                <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:border-x border-white/10 md:px-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              Quick Links
              <div className="h-1 w-8 bg-secondary rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group">
                  Home
                  <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group">
                  Services
                  <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group">
                  Pricing
                  <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Starter Packs */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              Starter Packs
              <div className="h-1 w-8 bg-secondary rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing#web-dev" className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group">
                  Web Development Pack
                  <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/pricing#graphic-design" className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group">
                  Graphic Design Pack
                  <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/pricing#digital-marketing" className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group">
                  Digital Marketing Pack
                  <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/90">
          <p>&copy; {new Date().getFullYear()} {CONFIG.COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
