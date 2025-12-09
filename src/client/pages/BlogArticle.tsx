import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAnalytics } from '../hooks/useAnalytics'

interface Article {
  id: number
  title: string
  slug: string
  content: string
  category: string
  author: string
  views: number
  createdAt: string
}

interface Comment {
  id: number
  name: string
  email: string
  content: string
  createdAt: string
}

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [commentForm, setCommentForm] = useState({ name: '', email: '', content: '' })
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    if (slug) {
      fetchArticle(slug)
    }
  }, [slug])

  const fetchArticle = async (articleSlug: string) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/blog/articles/${articleSlug}`)
      const data = await response.json()
      if (data.success) {
        setArticle(data.article)
        setComments(data.comments)
        trackEvent('article_view', { article_title: data.article.title })
      }
    } catch (error) {
      console.error('Error fetching article:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!slug) return

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/blog/articles/${slug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentForm),
      })
      const data = await response.json()
      if (data.success) {
        setCommentForm({ name: '', email: '', content: '' })
        trackEvent('comment_submitted', { article_title: article?.title })
        alert('Commentaire soumis pour modération')
      }
    } catch (error) {
      console.error('Error submitting comment:', error)
    }
  }

  if (loading) {
    return (
      <div className="section-padding bg-dark text-center">
        <p className="text-gray-400">Chargement de l'article...</p>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="section-padding bg-dark text-center">
        <p className="text-gray-400">Article non trouvé</p>
      </div>
    )
  }

  return (
    <div>
      <article className="section-padding bg-dark">
        <div className="container-max max-w-3xl">
          <div className="mb-8">
            <span className="text-xs px-3 py-1 bg-gold/20 text-gold rounded-full">{article.category}</span>
            <h1 className="text-4xl font-bold mt-4 mb-4 text-gradient">{article.title}</h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Par {article.author}</span>
              <span>•</span>
              <span>{new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
              <span>•</span>
              <span>{article.views} vues</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">{article.content}</div>
          </div>

          <hr className="border-gold/20 my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Commentaires ({comments.length})</h2>

            <div className="space-y-6 mb-8">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-dark/50 border border-gold/20 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gold">{comment.name}</p>
                      <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleDateString('fr-FR')}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{comment.content}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="bg-dark/50 border border-gold/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Ajouter un commentaire</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={commentForm.email}
                  onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
                  required
                />
                <textarea
                  placeholder="Votre commentaire"
                  value={commentForm.content}
                  onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold h-24"
                  required
                />
                <button type="submit" className="btn-primary w-full">
                  Soumettre le commentaire
                </button>
              </div>
            </form>
          </section>
        </div>
      </article>
    </div>
  )
}
