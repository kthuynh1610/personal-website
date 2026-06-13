import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
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
          <a
            href="https://github.com/tuhuynh27"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
          <a href="mailto:ktuhuy1610@gmail.com" className="nav-link">Email</a>
        </nav>
      </header>
      <main className="site-main">{children}</main>
    </div>
  )
}
