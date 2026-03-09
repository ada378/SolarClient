import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHome && !scrolled 
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold group">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <FiSun className="text-xl" />
          </div>
          <span className={`font-bold tracking-tight transition-colors ${
            isHome && !scrolled ? 'text-white' : 'text-gray-900'
          }`}>
            Maa Enterprises
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                location.pathname === link.path 
                  ? 'text-amber-600' 
                  : isHome && !scrolled 
                    ? 'text-white/90 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-amber-100 rounded-full"
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isHome && !scrolled ? 'text-white' : 'text-gray-900'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 text-sm font-medium border-b border-gray-50 ${
                  location.pathname === link.path 
                    ? 'text-amber-600 bg-amber-50' 
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
