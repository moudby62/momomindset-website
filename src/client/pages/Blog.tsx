import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAnalytics } from '../hooks/useAnalytics'

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  author: string
  views: number
  createdAt: string
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    fetchArticles()
    trackEvent('page_view', { page_title: 'Blog' })
  }, [])

  const fetchArticles = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/blog/articles`)
      const data = await response.json()
      if (data.success) {
        setArticles(data.articles)
      }
    } catch (error) {
      console.error('Error fetching articles:', error)
      // Afficher des articles de démonstration
      setArticles([
        {
          id: 1,
          title: 'Comment construire une mentalité inébranlable',
          slug: 'mentalite-inebranl able',
          excerpt: 'Découvre les 5 principes fondamentaux pour développer une force mentale durable.',
          category: 'Mindset',
          author: 'Mohamoud',
          views: 234,
          createdAt: '2024-12-01',
        },
        {
          id: 2,
          title: 'Guérir les blessures émotionnelles du rejet',
          slug: 'guerir-rejet',
          excerpt: 'Le rejet est douloureux, mais c\'est aussi une opportunité de croissance.',
          category: 'Guérison',
          author: 'Mohamoud',
          views: 156,
          createdAt: '2024-11-28',
        },
        {
          id: 3,
          title: 'L\'isolement : une force cachée',
          slug: 'isolement-force',
          excerpt: 'Pourquoi la solitude peut être ton meilleur allié dans ta transformation.',
          category: 'Réflexion',
          author: 'Mohamoud',
          views: 89,
          createdAt: '2024-11-25',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-gold/10 to-dark">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Blog MomoMindset</h1>
          <p className="text-xl text-gray-300">Articles, conseils et réflexions sur le mindset et la transformation personnelle</p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-max">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Chargement des articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Aucun article disponible pour le moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-dark/50 border border-gold/20 p-8 rounded-lg hover:border-gold/50 transition cursor-pointer group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs px-3 py-1 bg-gold/20 text-gold rounded-full">{article.category}</span>
                    <span className="text-xs text-gray-500">{new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.views} vues</span>
                    <a href="#" className="text-gold font-semibold hover:underline" onClick={() => trackEvent('article_click', { article_title: article.title })}>
                      Lire l'article →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
