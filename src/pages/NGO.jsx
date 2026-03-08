import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiHeart, FiBook, FiUsers, FiActivity, FiArrowRight } from 'react-icons/fi'

const features = [
  { icon: FiBook, title: 'Education', desc: 'Supporting education for underprivileged children through scholarships and learning resources.' },
  { icon: FiUsers, title: 'Women Empowerment', desc: 'Skill development programs and entrepreneurship opportunities for women.' },
  { icon: FiActivity, title: 'Healthcare', desc: 'Medical camps and healthcare awareness programs for rural communities.' },
  { icon: FiHeart, title: 'Environment', desc: 'Tree plantation drives and environmental awareness campaigns.' }
]

const NGO = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-900/70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <motion.div 
          className="absolute top-32 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
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
            <span className="text-blue-400 text-sm font-semibold">
              Social Impact
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8 mb-6 leading-tight drop-shadow-lg"
          >
            Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Initiatives</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Empowering communities through education, healthcare, and sustainable development programs
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Social Impact</h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to making a positive difference in the lives of underserved 
              communities through various social initiatives.
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
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">
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
            className="mt-16 p-12 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
            <p className="text-gray-600 mb-6">Volunteer or donate to support our social initiatives.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Get Involved <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NGO
