import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollIndicator from './components/ScrollIndicator'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'
import PopupForm from './components/PopupForm'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Solar from './pages/Solar'
import Boutique from './pages/Boutique'
import NGO from './pages/NGO'
import Ayurveda from './pages/Ayurveda'

function App() {
  const location = useLocation()

  return (
    <>
      <Loader />
      <PopupForm />
      <ScrollIndicator />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/solar" element={<Solar />} />
            <Route path="/services/boutique" element={<Boutique />} />
            <Route path="/services/ngo" element={<NGO />} />
            <Route path="/services/ayurveda" element={<Ayurveda />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
