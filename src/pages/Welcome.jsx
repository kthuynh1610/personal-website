import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModernPreloader from '../components/ModernPreloader.jsx'
import RetroPreloader from '../components/RetroPreloader.jsx'

export default function Welcome() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const navigateTimeoutRef = useRef(null)

  useEffect(() => {
    const savedPreference = localStorage.getItem('sitePreference')

    if (savedPreference) {
      document.body.classList.remove('theme-modern', 'theme-retro')
      document.body.classList.add(`theme-${savedPreference}`)
    }

    return () => {
      if (navigateTimeoutRef.current) {
        clearTimeout(navigateTimeoutRef.current)
      }
    }
  }, [])

  function handleSelect(preference) {
    if (selected) {
      return
    }

    setSelected(preference)
    localStorage.setItem('sitePreference', preference)
    document.body.classList.remove('theme-modern', 'theme-retro')
    document.body.classList.add(`theme-${preference}`)

    if (preference === 'retro') {
      navigateTimeoutRef.current = setTimeout(() => navigate('/about'), 1700)
      return
    }

    navigateTimeoutRef.current = setTimeout(() => navigate('/modern'), 1200)
  }

  if (selected === 'modern') {
    return (
      <main className="welcome-page">
        <ModernPreloader name="Tu Huynh" />
      </main>
    )
  }

  if (selected === 'retro') {
    return (
      <main className="welcome-page">
        <RetroPreloader name="Tu Huynh" />
      </main>
    )
  }

  return (
    <main className="welcome-page">
      <p className="welcome-eyebrow welcome-anim welcome-anim-1">Hey, I'm Tu.</p>
      <h1 className="welcome-anim welcome-anim-2">Welcome to my corner of the internet.</h1>
      <p className="welcome-sub welcome-anim welcome-anim-3">Pick your vibe to continue.</p>
      <div className="welcome-actions welcome-anim welcome-anim-4">
        <button type="button" className="preference-btn" onClick={() => handleSelect('modern')}>
          Modern
        </button>
        <button type="button" className="preference-btn" onClick={() => handleSelect('retro')}>
          Retro
        </button>
      </div>
    </main>
  )
}
