import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiUser, FiMail, FiPhone, FiMessageSquare, FiClock, FiCheckCircle } from 'react-icons/fi'

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Popup form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 2500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
            className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-sky-500" />
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
            >
              <FiX size={22} />
            </button>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FiCheckCircle className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                <p className="text-slate-600">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <>
                <div className="p-8 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <FiClock size={22} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">Get Free Quote</h3>
                      <p className="text-slate-500 text-sm">Fill details for instant response</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="px-8 pb-8">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-700 text-xs font-semibold uppercase tracking-wide mb-2 block">
                          Name *
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-slate-700 text-xs font-semibold uppercase tracking-wide mb-2 block">
                          Phone *
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-700 text-xs font-semibold uppercase tracking-wide mb-2 block">
                        Email
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-700 text-xs font-semibold uppercase tracking-wide mb-2 block">
                        Service Interested In
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="solar">Solar Energy</option>
                        <option value="ayurveda">Ayurveda</option>
                        <option value="boutique">Fashion Boutique</option>
                        <option value="ngo">Social Initiatives</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-700 text-xs font-semibold uppercase tracking-wide mb-2 block">
                        Message *
                      </label>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-4 top-4 text-slate-400" />
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full mt-6 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    Get Free Consultation
                    <FiCheckCircle />
                  </button>
                  <p className="text-center text-slate-400 text-xs mt-3">
                    No spam, we respect your privacy
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopupForm
