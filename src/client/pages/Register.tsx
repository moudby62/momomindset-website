import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas')
      return
    }
    console.log('Register:', formData)
    // TODO: Send to backend
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-2">MomoMindset</h1>
          <p className="text-gray-400">Réveille ta force intérieure</p>
        </div>

        <div className="bg-dark/50 border border-gold/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Créer un compte</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Nom complet</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
                placeholder="Ton nom"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
                placeholder="Ton email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
                placeholder="Ton mot de passe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Confirmer le mot de passe</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
                placeholder="Confirme ton mot de passe"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Créer un compte
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Déjà inscrit?{' '}
              <Link to="/login" className="text-gold font-semibold hover:underline">
                Se connecter
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            <p>En créant un compte, tu acceptes nos conditions d'utilisation</p>
          </div>
        </div>
      </div>
    </div>
  )
}
