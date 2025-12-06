import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

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

// Auth routes (placeholder)
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body
  console.log('Register request:', { name, email })
  res.json({ success: true, message: 'User registered successfully' })
})

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body
  console.log('Login request:', { email })
  res.json({ success: true, token: 'fake_token_123' })
})

// Newsletter routes (placeholder)
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email } = req.body
  console.log('Newsletter subscription:', { email })
  res.json({ success: true, message: 'Subscribed to newsletter' })
})

// Contact routes (placeholder)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body
  console.log('Contact message:', { name, email, subject })
  res.json({ success: true, message: 'Message sent successfully' })
})

// Community/Forum routes (placeholder)
app.get('/api/forum/discussions', (req, res) => {
  res.json({
    success: true,
    discussions: [
      {
        id: 1,
        title: 'Comment gérer le rejet au travail?',
        author: 'Sarah',
        replies: 12,
      },
    ],
  })
})

app.post('/api/forum/discussions', (req, res) => {
  const { title, content } = req.body
  console.log('New discussion:', { title })
  res.json({ success: true, message: 'Discussion created' })
})

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(500).json({ success: false, error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MomoMindset API running on port ${PORT}`)
})
