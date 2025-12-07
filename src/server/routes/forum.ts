import express, { Router, Request, Response } from 'express'
import { db } from '../db/index'
import { discussions, replies, users } from '../db/schema'
import { eq, desc } from 'drizzle-orm'

const router = Router()

interface AuthRequest extends Request {
  user?: { id: number; email: string }
}

// Get all discussions
router.get('/discussions', async (req: Request, res: Response) => {
  try {
    const allDiscussions = await db
      .select({
        id: discussions.id,
        title: discussions.title,
        content: discussions.content,
        category: discussions.category,
        createdAt: discussions.createdAt,
        author: users.name,
        authorId: discussions.userId,
      })
      .from(discussions)
      .leftJoin(users, eq(discussions.userId, users.id))
      .orderBy(desc(discussions.createdAt))

    res.json({ success: true, discussions: allDiscussions })
  } catch (error) {
    console.error('Get discussions error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch discussions' })
  }
})

// Get single discussion with replies
router.get('/discussions/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const discussion = await db
      .select()
      .from(discussions)
      .where(eq(discussions.id, parseInt(id)))
      .limit(1)

    if (discussion.length === 0) {
      return res.status(404).json({ success: false, error: 'Discussion not found' })
    }

    const discussionReplies = await db
      .select({
        id: replies.id,
        content: replies.content,
        createdAt: replies.createdAt,
        author: users.name,
        authorId: replies.userId,
      })
      .from(replies)
      .leftJoin(users, eq(replies.userId, users.id))
      .where(eq(replies.discussionId, parseInt(id)))
      .orderBy(replies.createdAt)

    res.json({
      success: true,
      discussion: discussion[0],
      replies: discussionReplies,
    })
  } catch (error) {
    console.error('Get discussion error:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch discussion' })
  }
})

// Create discussion
router.post('/discussions', async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Unauthorized' })
    }

    const { title, content, category } = req.body

    if (!title || !content) {
      return res.status(400).json({ success: false, error: 'Missing required fields' })
    }

    const result = await db.insert(discussions).values({
      userId: req.user.id,
      title,
      content,
      category: category || 'Général',
    })

    res.json({
      success: true,
      message: 'Discussion created',
      id: result.insertId,
    })
  } catch (error) {
    console.error('Create discussion error:', error)
    res.status(500).json({ success: false, error: 'Failed to create discussion' })
  }
})

// Create reply
router.post('/discussions/:id/replies', async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Unauthorized' })
    }

    const { id } = req.params
    const { content } = req.body

    if (!content) {
      return res.status(400).json({ success: false, error: 'Content is required' })
    }

    const result = await db.insert(replies).values({
      discussionId: parseInt(id),
      userId: req.user.id,
      content,
    })

    res.json({
      success: true,
      message: 'Reply created',
      id: result.insertId,
    })
  } catch (error) {
    console.error('Create reply error:', error)
    res.status(500).json({ success: false, error: 'Failed to create reply' })
  }
})

export default router
