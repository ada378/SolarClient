import { Link } from 'react-router-dom'

const Breadcrumb = ({ items }) => {
  return (
    <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm">
        <Link to="/" className="text-[#e94560] hover:text-gray-900 transition-colors">
          Home
        </Link>
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <span className="text-gray-300">/</span>
            {item.link ? (
              <Link to={item.link} className="text-[#e94560] hover:text-gray-900 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb
