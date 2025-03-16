import { CONFIG } from '../config/constants';
import { FaWhatsapp, FaArrowRight, FaCheck } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';

const Services = () => {
  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="services py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary">Our Services</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Transform your business with our comprehensive IT solutions. We deliver excellence through innovation and expertise.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {CONFIG.SERVICES.map((service, index) => {
            const IconComponent = Icons[service.icon];
            return (
              <div key={index} className="service-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-wrapper bg-primary/5 p-4 rounded-full flex-shrink-0">
                    {IconComponent && <IconComponent className="text-2xl text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <button
                    onClick={() => handleWhatsAppClick(service.message)}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium group w-full justify-center md:justify-start"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Get More Information</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
