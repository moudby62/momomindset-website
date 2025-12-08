import { Link } from 'react-router-dom'

export default function Community() {
  const discussions = [
    {
      id: 1,
      title: 'Comment gérer le rejet au travail?',
      author: 'Sarah',
      replies: 12,
      lastActive: 'Il y a 2 heures',
      category: 'Conseils',
    },
    {
      id: 2,
      title: 'Mon parcours de guérison après une trahison',
      author: 'Ahmed',
      replies: 28,
      lastActive: 'Il y a 1 jour',
      category: 'Témoignage',
    },
    {
      id: 3,
      title: 'Techniques de méditation pour calmer l\'esprit',
      author: 'Marie',
      replies: 15,
      lastActive: 'Il y a 3 jours',
      category: 'Ressources',
    },
  ]

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-gold/10 to-dark">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Communauté MomoMindset</h1>
          <p className="text-xl text-gray-300">Un espace sécurisé pour discuter, partager et s'entraider</p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-max">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-3xl font-bold">Discussions récentes</h2>
            <Link to="/login" className="btn-primary text-sm">
              Rejoindre la discussion
            </Link>
          </div>

          <div className="space-y-6">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-dark/50 border border-gold/20 p-6 rounded-lg hover:border-gold/50 transition cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs px-3 py-1 bg-gold/20 text-gold rounded-full mr-3">{discussion.category}</span>
                  </div>
                  <span className="text-xs text-gray-500">{discussion.lastActive}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-gold transition">{discussion.title}</h3>
                <p className="text-gray-400 text-sm">Par <span className="text-gold font-semibold">{discussion.author}</span> • {discussion.replies} réponses</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-gold/10 to-dark p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Pas encore membre?</h3>
            <p className="text-gray-300 mb-6">Crée un compte gratuit pour accéder à la communauté complète</p>
            <Link to="/register" className="btn-primary">
              S'inscrire maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
