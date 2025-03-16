import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { CONFIG } from '../config/constants';

const ServiceSearch = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Filter services based on search query
  useEffect(() => {
    const filtered = CONFIG.SERVICES.filter(service =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceSelect = (service) => {
    setQuery('');
    setIsOpen(false);
    navigate('/services', { state: { selectedService: service.title } });
  };

  return (
    <div className="relative w-full max-w-md" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search services..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 text-gray-700 placeholder-gray-500 border border-gray-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Autocomplete dropdown */}
      {isOpen && query && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100">
          {filteredServices.length > 0 ? (
            <ul className="max-h-60 overflow-auto">
              {filteredServices.map((service, index) => (
                <li
                  key={index}
                  onClick={() => handleServiceSelect(service)}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors group"
                >
                  <div className="text-primary font-medium group-hover:text-primary/80">{service.title}</div>
                  <div className="text-sm text-gray-600 line-clamp-1 group-hover:text-gray-700">
                    {service.description}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-gray-500">No services found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceSearch;
