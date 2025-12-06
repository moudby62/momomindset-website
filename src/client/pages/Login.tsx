import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', formData)
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
          <h2 className="text-2xl font-bold mb-6">Se connecter</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <button type="submit" className="btn-primary w-full">
              Se connecter
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Pas encore de compte?{' '}
              <Link to="/register" className="text-gold font-semibold hover:underline">
                S'inscrire
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <a href="#" className="text-gold text-sm hover:underline">
              Mot de passe oublié?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
