import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiSun, FiWind, FiShoppingBag, FiHeart, FiArrowRight, FiAward, FiUsers, FiStar } from 'react-icons/fi'

const stats = [
  { number: '500+', label: 'Families Served' },
  { number: '4', label: 'Core Initiatives' },
  { number: '50+', label: 'Team Members' }
]

const values = [
  { 
    title: 'Sustainability', 
    description: 'Committed to eco-friendly solutions that protect our environment.',
    icon: FiStar
  },
  { 
    title: 'Tradition', 
    description: 'Honoring our roots while embracing modern innovations.',
    icon: FiAward
  },
  { 
    title: 'Community', 
    description: 'Putting people first in everything we do.',
    icon: FiUsers
  }
]

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')" }}
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
              Who We Are
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8 mb-6 leading-tight drop-shadow-lg"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">Us</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Dedicated to serving the Jaunpur community through sustainable and transformative initiatives
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#e94560] font-medium">Our Mission</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Making a Difference Together
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are committed to bringing sustainable and traditional solutions to the people 
                of Jaunpur. Our initiative spans across multiple domains including renewable 
                energy, healthcare, fashion, and social welfare.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded with the vision of empowering our community, we strive to combine 
                modern technology with traditional wisdom to create lasting impact.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-6 bg-white rounded-2xl text-center shadow-sm">
                    <div className="text-3xl font-bold text-[#e94560]">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#e94560] transition-colors"
              >
                Learn more about us <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: FiSun, title: 'Solar', path: '/services/solar' },
                { icon: FiWind, title: 'Ayurveda', path: '/services/ayurveda' },
                { icon: FiShoppingBag, title: 'Boutique', path: '/services/boutique' },
                { icon: FiHeart, title: 'NGO', path: '/services/ngo' }
              ].map((item) => (
                <Link 
                  key={item.title}
                  to={item.path}
                  className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md hover:bg-red-50 transition-all group"
                >
                  <item.icon className="text-4xl mb-3 text-[#e94560]" />
                  <div className="text-gray-900 font-semibold group-hover:text-[#e94560] transition-colors">
                    {item.title}
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#e94560] font-medium">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl text-center hover:bg-red-50 transition-all"
              >
                <div className="w-16 h-16 bg-[#e94560]/10 rounded-2xl flex items-center justify-center text-[#e94560] mx-auto mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Want to Work With Us?</h2>
          <p className="text-gray-300 mb-8">
            We'd love to hear from you. Let's build a better future together.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#e94560]/25 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default About
