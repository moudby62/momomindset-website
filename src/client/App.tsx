import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Daily from './pages/Daily'
import Articles from './pages/Articles'
import Community from './pages/Community'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import { useAnalytics } from './hooks/useAnalytics'
import './styles/globals.css'

function App() {
  useAnalytics()
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
