import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiArrowRight } from 'react-icons/fi'

const features = [
  { title: 'Custom Tailoring', desc: 'Bespoke tailoring services to create perfect-fitting outfits for any occasion.' },
  { title: 'Traditional Wear', desc: 'Authentic traditional attire including sarees, lehengas, and kurta sets.' },
  { title: 'Modern Fusion', desc: 'Contemporary designs that blend modern trends with traditional elements.' },
  { title: 'Wedding Collection', desc: 'Stunning wedding and bridal wear for your special day.' }
]

const Boutique = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-900/70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <motion.div 
          className="absolute top-32 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
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
            <span className="text-pink-400 text-sm font-semibold">
              Fashion & Style
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8 mb-6 leading-tight drop-shadow-lg"
          >
            Fashion <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Boutique</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Exquisite designs that celebrate local craftsmanship and tradition with a modern twist
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Boutique Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Discover the finest in traditional and contemporary fashion. Our expert designers 
              create stunning pieces that reflect your unique style.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                  <FiShoppingBag size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Boutique</h3>
            <p className="text-gray-600 mb-6">Experience our collection in person. Book an appointment today.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Book Appointment <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Boutique
