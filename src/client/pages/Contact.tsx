import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Send to backend
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-gold/10 to-dark">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Nous contacter</h1>
          <p className="text-xl text-gray-300">Des questions? Nous sommes là pour toi</p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-max grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Envoie-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nom</label>
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
                <label className="block text-sm font-semibold mb-2">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
                  placeholder="Sujet du message"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold resize-none"
                  placeholder="Ton message"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>
            <div className="space-y-8">
              <div className="bg-dark/50 border border-gold/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gold mb-3">WhatsApp</h3>
                <p className="text-gray-300">+224 666 78 99 16</p>
                <a href="https://wa.me/224666789916" className="text-gold font-semibold hover:underline mt-2 inline-block">
                  Envoyer un message →
                </a>
              </div>

              <div className="bg-dark/50 border border-gold/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gold mb-3">Email</h3>
                <p className="text-gray-300">Businessinstagram620@gmail.com</p>
                <a href="mailto:Businessinstagram620@gmail.com" className="text-gold font-semibold hover:underline mt-2 inline-block">
                  Envoyer un email →
                </a>
              </div>

              <div className="bg-gradient-to-r from-gold/10 to-dark border border-gold/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gold mb-3">Heures de disponibilité</h3>
                <p className="text-gray-300">Lun - Ven: 9h - 18h (GMT)</p>
                <p className="text-gray-300 mt-2">Nous répondons généralement sous 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
