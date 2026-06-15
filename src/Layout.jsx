import { Link, useLocation } from 'react-router-dom'
import cvFile from './assets/KT-CV-05052026.pdf'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/books', label: 'Books' },
  { to: '/stack', label: 'Stack' },
  { to: '/now', label: 'Now' },
]

export default function Layout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="site-title">Tu Huynh</Link>
        <nav className="site-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={pathname === to ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </Link>
          ))}
          <a href={cvFile} download="KT-CV-05052026.pdf" className="nav-link">View my full résumé</a>
        </nav>
      </header>
      <main className="site-main">{children}</main>
    </div>
  )
}
