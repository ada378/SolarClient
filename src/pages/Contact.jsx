import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock, FiGlobe, FiArrowRight } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    { icon: FiMapPin, title: 'Address', content: 'Jaunpur, Uttar Pradesh, India' },
    { icon: FiPhone, title: 'Phone', content: '+91 98765 43210' },
    { icon: FiMail, title: 'Email', content: 'info@maaenterprises.com' },
    { icon: FiGlobe, title: 'Website', content: 'www.maaenterprises.com' },
  ]

  const businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ]

  const services = [
    'Solar Energy Solutions',
    'Traditional Ayurveda Products',
    'Fashion Boutique',
    'NGO & Social Initiatives',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80')" }}
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
              Get in Touch
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8 mb-6 leading-tight drop-shadow-lg"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">Us</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out for any questions or inquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Information
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Have questions about our services? Want to collaborate or volunteer? 
              Reach out to us and we'll be happy to help.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-[#e94560]/10 rounded-2xl flex items-center justify-center text-[#e94560] mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center text-[#e94560]">
                  <FiClock size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{item.day}</span>
                    <span className="text-gray-900 font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center text-[#e94560]">
                  <FiArrowRight size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
              </div>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                    <div className="w-2 h-2 bg-[#e94560] rounded-full" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
