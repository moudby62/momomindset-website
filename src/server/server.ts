import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Import routes
import authRoutes from './routes/auth'
import forumRoutes from './routes/forum'
import newsletterRoutes from './routes/newsletter'
import { authMiddleware } from './middleware/auth'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'MomoMindset API is running' })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/forum', forumRoutes)
app.use('/api/newsletter', newsletterRoutes)

// Protected route example
app.get('/api/profile', authMiddleware, (req: any, res) => {
  res.json({ success: true, user: req.user })
})

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(500).json({ success: false, error: 'Internal server error' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MomoMindset API running on port ${PORT}`)
  console.log(`📝 API Documentation:`)
  console.log(`   - Auth: POST /api/auth/register, /api/auth/login`)
  console.log(`   - Forum: GET/POST /api/forum/discussions`)
  console.log(`   - Newsletter: POST /api/newsletter/subscribe`)
})
