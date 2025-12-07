import express, { Router, Request, Response } from 'express'
import { db } from '../db/index'
import { newsletterSubscriptions, contactMessages } from '../db/schema'
import { eq } from 'drizzle-orm'

const router = Router()

// Subscribe to newsletter
router.post('/subscribe', async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required' })
    }

    // Check if already subscribed
    const existing = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email))
      .limit(1)

    if (existing.length > 0) {
      if (existing[0].active) {
        return res.status(400).json({ success: false, error: 'Already subscribed' })
      }
      // Reactivate subscription
      await db
        .update(newsletterSubscriptions)
        .set({ active: true })
        .where(eq(newsletterSubscriptions.email, email))
    } else {
      // Create new subscription
      await db.insert(newsletterSubscriptions).values({ email })
    }

    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    })
  } catch (error) {
    console.error('Subscribe error:', error)
    res.status(500).json({ success: false, error: 'Subscription failed' })
  }
})

// Unsubscribe from newsletter
router.post('/unsubscribe', async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required' })
    }

    await db
      .update(newsletterSubscriptions)
      .set({ active: false })
      .where(eq(newsletterSubscriptions.email, email))

    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
    })
  } catch (error) {
    console.error('Unsubscribe error:', error)
    res.status(500).json({ success: false, error: 'Unsubscription failed' })
  }
})

// Send contact message
router.post('/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' })
    }

    await db.insert(contactMessages).values({
      name,
      email,
      subject,
      message,
    })

    res.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Contact error:', error)
    res.status(500).json({ success: false, error: 'Failed to send message' })
  }
})

export default router
