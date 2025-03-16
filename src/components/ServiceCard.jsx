import { memo } from 'react';
import { FaWhatsapp, FaArrowRight, FaCheck } from 'react-icons/fa';

const ServiceCard = memo(({ service, IconComponent, onWhatsAppClick }) => {
  return (
    <div className="service-card bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
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
          onClick={() => onWhatsAppClick(service.message)}
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium group w-full justify-center md:justify-start"
        >
          <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
          <span>Get More Information</span>
          <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
