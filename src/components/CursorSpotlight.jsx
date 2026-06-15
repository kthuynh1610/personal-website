import { useEffect, useRef } from 'react'

export default function CursorSpotlight({
  children,
  radius = 320,
  color = 'rgba(0,0,0,0.09)',
  midColor = 'rgba(0,0,0,0.04)',
}) {
  const wrapperRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const glow = glowRef.current
    if (!wrapper || !glow) {
      return
    }

    function handleMouseMove(e) {
      const x = e.clientX
      const y = e.clientY
      glow.style.setProperty('--x', `${x}px`)
      glow.style.setProperty('--y', `${y}px`)
    }

    wrapper.addEventListener('mousemove', handleMouseMove)
    return () => wrapper.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
          background: `radial-gradient(circle ${radius}px at var(--x, 50%) var(--y, 50%), ${color} 0%, ${midColor} 50%, transparent 100%)`,
          transition: 'background 0.05s ease-out',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}