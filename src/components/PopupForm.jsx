import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi'

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Popup form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="text-white/80 text-sm mt-1">We'd love to hear from you!</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                    <FiUser /> Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                    <FiMail /> Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                    <FiPhone /> Phone
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                    <FiMessageSquare /> Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e94560]/25 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopupForm
