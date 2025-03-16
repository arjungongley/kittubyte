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
        
        <div className="grid md:grid-cols-2 gap-8">
          {CONFIG.SERVICES.map((service, index) => {
            const IconComponent = Icons[service.icon];
            return (
              <div 
                key={index} 
                className="service-card bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="icon-wrapper bg-primary/5 p-4 rounded-full flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    {IconComponent && (
                      <IconComponent 
                        className="text-3xl text-primary group-hover:scale-110 transition-transform" 
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 group">
                          <FaCheck className="text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-gray-700 transition-colors">{highlight}</span>
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
                    <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                    <span>Get More Information</span>
                    <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
