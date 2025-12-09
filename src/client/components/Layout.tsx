import { Link } from 'react-router-dom'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur border-b border-gold/20">
        <div className="container-max px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient">
            MomoMindset
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-gold transition">Accueil</Link>
            <Link to="/about" className="hover:text-gold transition">À propos</Link>
            <Link to="/daily" className="hover:text-gold transition">Motivations</Link>
            <Link to="/articles" className="hover:text-gold transition">Articles</Link>
            <Link to="/blog" className="hover:text-gold transition">Blog</Link>
            <Link to="/community" className="hover:text-gold transition">Communauté</Link>
            <Link to="/resources" className="hover:text-gold transition">Ressources</Link>
            <Link to="/contact" className="hover:text-gold transition">Contact</Link>
            <Link to="/login" className="btn-primary text-sm">Connexion</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark border-t border-gold/20 p-4 flex flex-col gap-4">
            <Link to="/" className="hover:text-gold transition">Accueil</Link>
            <Link to="/about" className="hover:text-gold transition">À propos</Link>
            <Link to="/daily" className="hover:text-gold transition">Motivations</Link>
            <Link to="/articles" className="hover:text-gold transition">Articles</Link>
            <Link to="/blog" className="hover:text-gold transition">Blog</Link>
            <Link to="/community" className="hover:text-gold transition">Communauté</Link>
            <Link to="/resources" className="hover:text-gold transition">Ressources</Link>
            <Link to="/contact" className="hover:text-gold transition">Contact</Link>
            <Link to="/login" className="btn-primary text-sm">Connexion</Link>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-dark border-t border-gold/20 mt-20">
        <div className="container-max px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-gold font-bold mb-4">MomoMindset</h3>
              <p className="text-sm text-gray-400">Réveille ta force intérieure</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-gold">Accueil</Link></li>
                <li><Link to="/about" className="hover:text-gold">À propos</Link></li>
                <li><Link to="/community" className="hover:text-gold">Communauté</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>WhatsApp: +224 666 78 99 16</li>
                <li>Email: Businessinstagram620@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gold">Conditions d'utilisation</a></li>
                <li><a href="#" className="hover:text-gold">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gold/20 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 MomoMindset. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
