import { useEffect, useMemo, useState } from 'react'
import './preloaders.css'

export default function ModernPreloader({ name = 'Tu Huynh' }) {
  const chars = useMemo(() => [...name], [name])
  const [playId, setPlayId] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(id)
  }, [playId])

  return (
    <div className="preloader-stage modern-preloader">
      <div className="modern-name" aria-label={name}>
        {chars.map((char, index) => (
          <span
            key={`${char}-${index}-${playId}`}
            className={isVisible ? 'modern-char is-visible' : 'modern-char'}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  )
}
