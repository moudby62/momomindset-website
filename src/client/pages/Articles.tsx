export default function Articles() {
  const articles = [
    {
      title: 'Comment construire une mentalité inébranlable',
      excerpt: 'Découvre les 5 principes fondamentaux pour développer une force mentale durable.',
      date: '2024-12-01',
      category: 'Mindset',
    },
    {
      title: 'Guérir les blessures émotionnelles du rejet',
      excerpt: 'Le rejet est douloureux, mais c\'est aussi une opportunité de croissance.',
      date: '2024-11-28',
      category: 'Guérison',
    },
    {
      title: 'L\'isolement : une force cachée',
      excerpt: 'Pourquoi la solitude peut être ton meilleur allié dans ta transformation.',
      date: '2024-11-25',
      category: 'Réflexion',
    },
    {
      title: 'Authentique vs Accepté : Quel choix fais-tu?',
      excerpt: 'La véritable liberté commence quand tu arrêtes de chercher l\'approbation.',
      date: '2024-11-20',
      category: 'Liberté',
    },
  ]

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-gold/10 to-dark">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Articles & Conseils</h1>
          <p className="text-xl text-gray-300">Contenus détaillés sur le mindset et la croissance personnelle</p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <article key={i} className="bg-dark/50 border border-gold/20 p-8 rounded-lg hover:border-gold/50 transition cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs px-3 py-1 bg-gold/20 text-gold rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                <a href="#" className="text-gold font-semibold hover:underline">Lire l'article →</a>
              </article>
            ))}\n          </div>\n        </div>\n      </section>\n    </div>\n  )\n}\n
