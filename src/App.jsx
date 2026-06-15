import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Now from './pages/Now.jsx'
import Stack from './pages/Stack.jsx'
import Books from './pages/Books.jsx'
import Welcome from './pages/Welcome.jsx'
import ModernEmpty from './pages/ModernEmpty.jsx'
import CursorSpotlight from './components/CursorSpotlight.jsx'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const preference = localStorage.getItem('sitePreference') || 'retro'
    document.body.classList.remove('theme-modern', 'theme-retro')
    document.body.classList.add(`theme-${preference}`)
  }, [pathname])

  if (pathname === '/') {
    return <Welcome />
  }

  if (pathname === '/modern') {
    return (
      <CursorSpotlight radius={360} color="rgba(0,0,0,0.10)" midColor="rgba(0,0,0,0.045)">
        <ModernEmpty />
      </CursorSpotlight>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/books" element={<Books />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/now" element={<Now />} />
      </Routes>
    </Layout>
  )
}
