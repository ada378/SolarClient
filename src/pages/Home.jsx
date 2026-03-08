import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiSun, FiWind, FiShoppingBag, FiHeart, FiArrowRight, FiCheck, FiStar, FiAward, FiUsers, FiMapPin, FiPhone, FiMail, FiTarget, FiTrendingUp, FiShield } from 'react-icons/fi'

const stats = [
  { number: '500+', label: 'Happy Families', icon: FiUsers },
  { number: '10+', label: 'Years Experience', icon: FiAward },
  { number: '50+', label: 'Expert Team', icon: FiShield },
  { number: '100%', label: 'Satisfaction', icon: FiTarget }
]

const services = [
  { 
    id: 'solar', 
    icon: FiSun, 
    title: 'Solar Energy', 
    description: 'Clean and sustainable solar power solutions for homes and businesses.',
    link: '/services/solar'
  },
  { 
    id: 'ayurveda', 
    icon: FiWind, 
    title: 'Ayurveda', 
    description: 'Traditional healing practices for holistic wellness and health.',
    link: '/services/ayurveda'
  },
  { 
    id: 'boutique', 
    icon: FiShoppingBag, 
    title: 'Fashion Boutique', 
    description: 'Stylish designs that celebrate local craftsmanship and tradition.',
    link: '/services/boutique'
  },
  { 
    id: 'ngo', 
    icon: FiHeart, 
    title: 'Social Initiatives', 
    description: 'Community programs empowering lives through education and support.',
    link: '/services/ngo'
  }
]

const features = [
  { icon: FiCheck, title: 'Professional Experts', desc: 'Certified professionals with years of experience' },
  { icon: FiStar, title: 'Quality Service', desc: 'Premium quality solutions for all your needs' },
  { icon: FiAward, title: 'Award Winning', desc: 'Recognized excellence in customer satisfaction' },
  { icon: FiUsers, title: 'Community First', desc: 'Dedicated to serving our community' }
]

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Solar Customer', text: 'Excellent service! My electricity bills have reduced significantly after installing solar panels.' },
  { name: 'Priya Sharma', role: 'Boutique Client', text: 'Beautiful designs and great quality. Highly recommended!' },
  { name: 'Amit Patel', role: 'NGO Partner', text: 'Wonderful initiative making real difference in the community.' }
]

const whyChooseUs = [
  { icon: FiCheck, title: 'Expert Team', desc: 'Skilled professionals with years of experience in their respective fields' },
  { icon: FiStar, title: 'Quality Assured', desc: 'We maintain the highest standards in all our services and products' },
  { icon: FiAward, title: 'Trusted Brand', desc: 'Years of experience serving the community with dedication' },
  { icon: FiUsers, title: 'Customer First', desc: 'Your satisfaction is our top priority in everything we do' }
]

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/50 to-gray-900/60" />
        
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
              Welcome to Maa Enterprises
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Empowering Communities,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">
              Building Future
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Sustainable solutions in Solar Energy, Traditional Ayurveda, Fashion Boutique, and Social Initiatives for a better tomorrow.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="px-8 py-4 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#e94560]/25 transition-all flex items-center justify-center gap-2"
            >
              Our Services <FiArrowRight />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Bar */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center text-[#e94560]">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-xs">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#e94560] font-semibold">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-medium">
              Comprehensive solutions tailored to meet the diverse needs of our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.link} className="group block p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#e94560] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#e94560] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <FiArrowRight className="ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#e94560] font-medium">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Dedicated to Serving Our Community
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are committed to bringing sustainable and traditional solutions to the people of Jaunpur. Our initiative spans across multiple domains including renewable energy, healthcare, fashion, and social welfare.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded with the vision of empowering our community, we strive to combine modern technology with traditional wisdom to create lasting impact.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: '500+', label: 'Families' },
                  { number: '4', label: 'Initiatives' },
                  { number: '50+', label: 'Team' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-[#e94560]">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link 
                to="/about" 
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
              {services.map((service, i) => (
                <Link 
                  key={service.id}
                  to={service.link}
                  className="p-6 bg-white rounded-2xl hover:shadow-md hover:bg-red-50 transition-all group"
                >
                  <service.icon className="text-4xl mb-3 text-[#e94560]" />
                  <div className="text-gray-900 font-medium group-hover:text-[#e94560] transition-colors">
                    {service.title}
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#e94560] font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Why Maa Enterprises?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#e94560] font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiMapPin, title: 'Address', content: 'Jaunpur, Uttar Pradesh, India' },
              { icon: FiPhone, title: 'Phone', content: '+91 98765 43210' },
              { icon: FiMail, title: 'Email', content: 'info@maaenterprises.com' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-8 bg-gray-50 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-2xl flex items-center justify-center text-white">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%20.173L39.827%2010l-9.9%209.9L20%2019.827%209.9%209.727L200%2019.627%2020%20.173z%22%20fill%3D%22%23e94560%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join us in building a sustainable future for Jaunpur.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#e94560]/25 transition-all"
          >
            Reach Out Today
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
