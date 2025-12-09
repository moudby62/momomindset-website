import { Router, Request, Response } from 'express'
import { db } from '../db/index'
import { articles, comments } from '../db/blog-schema'
import { eq, desc, and } from 'drizzle-orm'

const router = Router()

// Get all published articles
router.get('/articles', async (req: Request, res: Response) => {
  try {
    const allArticles = await db
      .select()
      .from(articles)
      .where(eq(articles.published, true))
      .orderBy(desc(articles.createdAt))

    res.json({ success: true, articles: allArticles })
  } catch (error) {
    console.error('Get articles error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch articles' })
  }
})

// Get featured articles
router.get('/articles/featured', async (req: Request, res: Response) => {
  try {
    const featured = await db
      .select()
      .from(articles)
      .where(and(eq(articles.published, true), eq(articles.featured, true)))
      .orderBy(desc(articles.createdAt))
      .limit(3)

    res.json({ success: true, articles: featured })
  } catch (error) {
    console.error('Get featured articles error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch featured articles' })
  }
})

// Get single article by slug
router.get('/articles/:slug', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params

    const article = await db
      .select()
      .from(articles)
      .where(eq(articles.slug, slug))
      .limit(1)

    if (article.length === 0) {
      return res.status(404).json({ success: false, error: 'Article not found' })
    }

    // Increment views
    await db
      .update(articles)
      .set({ views: article[0].views + 1 })
      .where(eq(articles.id, article[0].id))

    // Get comments
    const articleComments = await db
      .select()
      .from(comments)
      .where(and(eq(comments.articleId, article[0].id), eq(comments.approved, true)))
      .orderBy(desc(comments.createdAt))

    res.json({
      success: true,
      article: article[0],
      comments: articleComments,
    })
  } catch (error) {
    console.error('Get article error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch article' })
  }
})

// Create comment
router.post('/articles/:slug/comments', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params
    const { name, email, content } = req.body

    if (!name || !email || !content) {
      return res.status(400).json({ success: false, error: 'Missing required fields' })
    }

    // Find article
    const article = await db
      .select()
      .from(articles)
      .where(eq(articles.slug, slug))
      .limit(1)

    if (article.length === 0) {
      return res.status(404).json({ success: false, error: 'Article not found' })
    }

    // Create comment
    const result = await db.insert(comments).values({
      articleId: article[0].id,
      name,
      email,
      content,
      approved: false,
    })

    res.json({
      success: true,
      message: 'Comment submitted for moderation',
      id: result.insertId,
    })
  } catch (error) {
    console.error('Create comment error:', error)
    res.status(500).json({ success: false, error: 'Failed to create comment' })
  }
})

// Get articles by category
router.get('/articles/category/:category', async (req: Request, res: Response) => {
  try {
    const { category } = req.params

    const categoryArticles = await db
      .select()
      .from(articles)
      .where(and(eq(articles.published, true), eq(articles.category, category)))
      .orderBy(desc(articles.createdAt))

    res.json({ success: true, articles: categoryArticles })
  } catch (error) {
    console.error('Get category articles error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch articles' })
  }
})

export default router
