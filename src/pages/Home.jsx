import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiSun, FiWind, FiShoppingBag, FiHeart, FiArrowRight, FiCheck, FiStar, FiAward, FiUsers, FiMapPin, FiPhone, FiMail, FiTarget, FiTrendingUp, FiShield, FiClock, FiPackage, FiHeadphones, FiThumbsUp } from 'react-icons/fi'

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
    link: '/services/solar',
    color: 'from-amber-500 to-orange-500'
  },
  { 
    id: 'ayurveda', 
    icon: FiWind, 
    title: 'Ayurveda', 
    description: 'Traditional healing practices for holistic wellness and health.',
    link: '/services/ayurveda',
    color: 'from-teal-500 to-cyan-500'
  },
  { 
    id: 'boutique', 
    icon: FiShoppingBag, 
    title: 'Fashion Boutique', 
    description: 'Stylish designs that celebrate local craftsmanship and tradition.',
    link: '/services/boutique',
    color: 'from-pink-500 to-rose-500'
  },
  { 
    id: 'ngo', 
    icon: FiHeart, 
    title: 'Social Initiatives', 
    description: 'Community programs empowering lives through education and support.',
    link: '/services/ngo',
    color: 'from-violet-500 to-purple-500'
  }
]

const features = [
  { icon: FiClock, title: 'Quick Response', desc: 'Fast turnaround on all inquiries' },
  { icon: FiShield, title: 'Secure Payments', desc: '100% safe transaction process' },
  { icon: FiHeadphones, title: '24/7 Support', desc: 'Round the clock assistance' },
  { icon: FiThumbsUp, title: 'Quality Guarantee', desc: 'Premium service guaranteed' }
]

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Solar Customer', text: 'Excellent service! My electricity bills have reduced significantly after installing solar panels.', rating: 5 },
  { name: 'Priya Sharma', role: 'Boutique Client', text: 'Beautiful designs and great quality. Highly recommended!', rating: 5 },
  { name: 'Amit Patel', role: 'NGO Partner', text: 'Wonderful initiative making real difference in the community.', rating: 5 }
]

const whyChooseUs = [
  { icon: FiCheck, title: 'Expert Team', desc: 'Skilled professionals with years of experience' },
  { icon: FiStar, title: 'Quality Assured', desc: 'We maintain the highest standards' },
  { icon: FiAward, title: 'Trusted Brand', desc: 'Years of experience serving the community' },
  { icon: FiUsers, title: 'Customer First', desc: 'Your satisfaction is our top priority' }
]

const process = [
  { step: '01', title: 'Contact Us', desc: 'Reach out with your requirements' },
  { step: '02', title: 'Get Quote', desc: 'Receive a customized quote' },
  { step: '03', title: 'Service Delivery', desc: 'We deliver quality service' },
  { step: '04', title: 'Follow Up', desc: 'We ensure your complete satisfaction' }
]

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://plus.unsplash.com/premium_photo-1680129602397-f43e2d81617d?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/85" />
          
          {/* Animated Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 opacity-40"
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: 'radial-gradient(ellipse at 30% 20%, rgba(245, 158, 11, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)'
            }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Glowing Orbs */}
          <motion.div 
            className="absolute top-[15%] left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-amber-500/15 rounded-full blur-[80px] md:blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-[15%] right-[5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-sky-500/10 rounded-full blur-[100px] md:blur-[150px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-xs sm:text-sm font-medium">
              Trusted by 500+ Families in Jaunpur
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight"
          >
            Empowering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400">
              Communities
            </span>
            ,{' '}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>Building Future
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Sustainable solutions in Solar Energy, Ayurveda, Boutique & Social Initiatives for a better tomorrow.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link 
              to="/services" 
              className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Our Services <FiArrowRight />
            </Link>
            <Link 
              to="/contact" 
              className="px-6 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-sm sm:text-base"
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
      <section className="py-8 bg-slate-50 -mt-2 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{feature.title}</h4>
                  <p className="text-slate-500 text-xs">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
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
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 mx-auto mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
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
            <span className="text-amber-600 font-semibold">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Services</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-medium">
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
                <Link to={service.link} className="group block p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-slate-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <FiArrowRight className="ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Simple Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl font-bold text-amber-100 absolute top-4 left-1/2 -translate-x-1/2">{item.step}</div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-amber-300">
                    <FiArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Dedicated to Serving Our Community
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We are committed to bringing sustainable and traditional solutions to the people of Jaunpur. Our initiative spans across multiple domains including renewable energy, healthcare, fashion, and social welfare.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Founded with the vision of empowering our community, we strive to combine modern technology with traditional wisdom to create lasting impact.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: '500+', label: 'Families' },
                  { number: '4', label: 'Initiatives' },
                  { number: '50+', label: 'Team' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-amber-600">{stat.number}</div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-amber-600 transition-colors"
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
              {services.map((service) => (
                <Link 
                  key={service.id}
                  to={service.link}
                  className="p-6 bg-slate-50 rounded-2xl hover:shadow-md hover:bg-amber-50 transition-all group"
                >
                  <service.icon className={`text-4xl mb-3 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                  <div className="text-slate-900 font-semibold group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Why Maa Enterprises?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-32 px-6 bg-slate-50">
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
                className="flex items-center gap-6 p-8 bg-white rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Animated Background for CTA */}
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join us in building a sustainable future for Jaunpur.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/25 transition-all"
          >
            Reach Out Today
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
