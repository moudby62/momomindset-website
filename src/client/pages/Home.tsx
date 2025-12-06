import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark to-dark/50 min-h-screen flex items-center">
        <div className="container-max text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Réveille ta force intérieure
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforme tes blessures en puissance. Rejoins une communauté de jeunes et d'adultes qui se battent pour leur liberté mentale.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/community" className="btn-primary">
              Rejoindre la communauté
            </Link>
            <Link to="/about" className="btn-secondary">
              Découvrir mon histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Ce que tu trouveras ici
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Motivations quotidiennes',
                description: 'Des messages puissants chaque jour pour t\'aider à avancer et surmonter tes défis.',
                icon: '🔥',
              },
              {
                title: 'Articles & Conseils',
                description: 'Des contenus détaillés sur le mindset, la guérison mentale et la croissance personnelle.',
                icon: '📚',
              },
              {
                title: 'Communauté active',
                description: 'Un espace sécurisé où tu peux discuter, partager et t\'entraider avec d\'autres.',
                icon: '👥',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-dark/50 border border-gold/20 p-8 rounded-lg hover:border-gold/50 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gold">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-gold/10 to-dark">
        <div className="container-max max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            MomoMindset Letter
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Reçois chaque semaine un message puissant pour t'aider à avancer, guérir, évoluer et réveiller ta force mentale.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Ton email"
              className="flex-1 px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
            />
            <button type="submit" className="btn-primary">
              S'abonner
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à commencer ton voyage?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Rejoins des milliers de personnes qui transforment leurs vies. Pas de paiement, juste du contenu authentique et une communauté bienveillante.
        </p>
        <Link to="/register" className="btn-primary">
          Créer un compte gratuit
        </Link>
      </section>
    </div>
  )
}
