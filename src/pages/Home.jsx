import { CONFIG } from '../config/constants';
import { FaWhatsapp, FaArrowRight, FaCheck } from 'react-icons/fa';

const Home = () => {
  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="home">
      <section className="hero min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Digital Vision Into Reality
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Innovative IT solutions tailored for your business success. From web development to digital marketing, we deliver excellence.
            </p>
            <button
              onClick={() => handleWhatsAppClick("Hi KittuByte! I'm interested in your IT services.")}
              className="inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-primary hover:text-white transition-all px-8 py-4 rounded-full text-lg font-semibold mx-auto group"
            >
              <FaWhatsapp className="text-xl" />
              <span>Let's Discuss Your Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="features py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why Choose KittuByte?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We combine technical expertise with innovative solutions to deliver exceptional results for your business
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div className="text-center mb-6">
                <img src="/images/expert-team.svg" alt="Expert Team" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-600 mb-4">
                  Our team of skilled professionals brings years of industry experience to deliver top-notch solutions.
                </p>
                <ul className="text-left mb-6">
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Certified developers</span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Project management experts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Quality assurance specialists</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Hi KittuByte! I'd like to know more about your expert team.")}
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="feature-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div className="text-center mb-6">
                <img src="/images/custom-solutions.svg" alt="Custom Solutions" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We develop tailored solutions that perfectly align with your business requirements and goals.
                </p>
                <ul className="text-left mb-6">
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Personalized development</span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Scalable architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Future-proof solutions</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Hi KittuByte! I'd like to discuss custom solutions for my business.")}
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="feature-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div className="text-center mb-6">
                <img src="/images/support.svg" alt="24/7 Support" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                <p className="text-gray-600 mb-4">
                  Round-the-clock technical support to ensure your business operations run smoothly without interruption.
                </p>
                <ul className="text-left mb-6">
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">24/7 availability</span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Quick response time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700">Dedicated support team</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Hi KittuByte! I'd like to know more about your support services.")}
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
