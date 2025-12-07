import express, { Router, Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '../db/index'
import { users } from '../db/schema'
import { eq } from 'drizzle-orm'

const router = Router()

interface AuthRequest extends Request {
  user?: { id: number; email: string }
}

// Register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: 'Missing required fields' })
    }

    // Check if user exists
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1)
    if (existingUser.length > 0) {
      return res.status(400).json({ success: false, error: 'User already exists' })
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10)

    // Create user
    const newUser = await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    })

    // Generate token
    const token = jwt.sign(
      { id: newUser.insertId, email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    )

    res.json({
      success: true,
      message: 'User registered successfully',
      token,
      user: { id: newUser.insertId, name, email },
    })
  } catch (error) {
    console.error('Register error:', error)
    res.status(500).json({ success: false, error: 'Registration failed' })
  }
})

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Missing email or password' })
    }

    // Find user
    const userList = await db.select().from(users).where(eq(users.email, email)).limit(1)
    if (userList.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' })
    }

    const user = userList[0]

    // Check password
    const isPasswordValid = await bcryptjs.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' })
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    )

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email },
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ success: false, error: 'Login failed' })
  }
})

// Verify token
router.get('/verify', (req: AuthRequest, res: Response) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ success: false, error: 'No token provided' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    res.json({ success: true, user: decoded })
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid token' })
  }
})

export default router
