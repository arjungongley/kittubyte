import { CONFIG } from '../config/constants';
import { FaWhatsapp, FaArrowRight, FaCheck } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';
import { lazy, Suspense } from 'react';

// Lazy load the service cards
const ServiceCard = lazy(() => import('../components/ServiceCard'));

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
          <Suspense fallback={
            <div className="col-span-2 text-center py-8">
              <div className="animate-pulse">
                <div className="h-32 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
            </div>
          }>
            {CONFIG.SERVICES.map((service, index) => {
              const IconComponent = Icons[service.icon];
              return (
                <ServiceCard
                  key={index}
                  service={service}
                  IconComponent={IconComponent}
                  onWhatsAppClick={handleWhatsAppClick}
                />
              );
            })}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Services;
