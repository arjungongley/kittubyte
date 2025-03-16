import { CONFIG } from '../config/constants';
import { FaWhatsapp, FaArrowRight, FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pricing py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary">Starter Pricing Packs</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect package to kickstart your digital journey. Custom solutions available for specific requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Web Development Pack */}
          <div className="pricing-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <div className="relative mb-6">
              <img 
                src="/images/web-dev-pack.webp" 
                alt="Web Development Pack" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Web Development Pack</h3>
            </div>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">Complete web development solution for your business</p>
              <div className="text-3xl font-bold text-primary">Starting at ₹25,000</div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Responsive Website Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">5 Pages Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Contact Form Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Basic SEO Setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Mobile-Friendly Design</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleWhatsAppClick("Hi KittuByte! I'm interested in the Web Development Pack. Please provide me with the best price.")}
              className="w-full bg-primary text-white py-3 rounded-full hover:bg-secondary transition-colors flex items-center justify-center gap-2 group"
            >
              <FaWhatsapp className="text-lg" />
              <span>Get Best Price</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Graphic Design Pack */}
          <div className="pricing-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <div className="relative mb-6">
              <img 
                src="/images/graphic-design-pack.webp" 
                alt="Graphic Design Pack" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Graphic Design Pack</h3>
            </div>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">Professional design solutions for your brand</p>
              <div className="text-3xl font-bold text-primary">Starting at ₹15,000</div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Logo Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Business Card & Letterhead</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Social Media Templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Banner Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Basic Brand Guidelines</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleWhatsAppClick("Hi KittuByte! I'm interested in the Graphic Design Pack. Please provide me with the best price.")}
              className="w-full bg-primary text-white py-3 rounded-full hover:bg-secondary transition-colors flex items-center justify-center gap-2 group"
            >
              <FaWhatsapp className="text-lg" />
              <span>Get Best Price</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Digital Marketing Pack */}
          <div className="pricing-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <div className="relative mb-6">
              <img 
                src="/images/digital-marketing-pack.webp" 
                alt="Digital Marketing Pack" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Digital Marketing Pack</h3>
            </div>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">Boost your online presence and reach</p>
              <div className="text-3xl font-bold text-primary">Starting at ₹20,000</div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Social Media Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Content Creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">SEO Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Monthly Analytics Report</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Basic Ad Campaign Setup</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleWhatsAppClick("Hi KittuByte! I'm interested in the Digital Marketing Pack. Please provide me with the best price.")}
              className="w-full bg-primary text-white py-3 rounded-full hover:bg-secondary transition-colors flex items-center justify-center gap-2 group"
            >
              <FaWhatsapp className="text-lg" />
              <span>Get Best Price</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
