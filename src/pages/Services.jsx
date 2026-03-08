import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiSun, FiWind, FiShoppingBag, FiHeart, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    id: 'solar',
    icon: FiSun,
    title: 'Solar Energy',
    description: 'Harness the power of the sun with our cutting-edge solar solutions.',
    features: ['Residential Solar Panels', 'Commercial Solar Systems', 'Solar Maintenance', 'Energy Consultation'],
    link: '/services/solar',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'ayurveda',
    icon: FiWind,
    title: 'Traditional Ayurveda',
    description: 'Ancient healing wisdom for modern wellness needs.',
    features: ['Herbal Consultations', 'Wellness Programs', 'Natural Remedies', 'Yoga & Meditation'],
    link: '/services/ayurveda',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'boutique',
    icon: FiShoppingBag,
    title: 'Fashion Boutique',
    description: 'Exquisite designs that showcase local craftsmanship.',
    features: ['Custom Tailoring', 'Traditional Wear', 'Modern Fusion', 'Wedding Collections'],
    link: '/services/boutique',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'ngo',
    icon: FiHeart,
    title: 'Social Initiatives',
    description: 'Empowering communities through education and support.',
    features: ['Skill Development', 'Women Empowerment', 'Education Programs', 'Healthcare Camps'],
    link: '/services/ngo',
    color: 'from-blue-500 to-cyan-500'
  }
]

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-900/70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <motion.div 
          className="absolute top-32 left-10 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-10 w-96 h-96 bg-[#e94560]/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
          >
            <span className="text-[#e94560] text-sm font-semibold">
              What We Do
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8 mb-6 leading-tight drop-shadow-lg"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">Services</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored to meet the diverse needs of our community
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={service.link}
                  className="group block p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <service.icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#e94560] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-gray-500 text-sm">
                            <span className="w-1.5 h-1.5 bg-[#e94560] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Learn more about {service.title}</span>
                    <FiArrowRight className="text-[#e94560] group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Information?</h2>
            <p className="text-gray-600 mb-8">
              Our team is ready to help you with any questions about our services.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#e94560]/25 transition-all"
            >
              Contact Us <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
