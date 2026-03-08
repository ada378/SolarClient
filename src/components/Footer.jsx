import { Link } from 'react-router-dom'
import { FiSun, FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <FiSun className="text-2xl text-[#e94560]" />
              <span>Maa Enterprises</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering communities through sustainable solutions in Solar Energy, Traditional Ayurveda, Fashion Boutique, and Social Initiatives.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-[#e94560] transition-all">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-[#e94560] transition-all">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-[#e94560] transition-all">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-[#e94560] transition-all">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 text-sm hover:text-[#e94560] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Solar Energy', path: '/services/solar' },
                { name: 'Fashion Boutique', path: '/services/boutique' },
                { name: 'NGO Services', path: '/services/ngo' },
                { name: 'Ayurveda', path: '/services/ayurveda' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 text-sm hover:text-[#e94560] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#e94560] mt-1" />
                <span>Jaunpur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#e94560]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#e94560]" />
                <span>info@maaenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm text-center">© 2026 Maa Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
