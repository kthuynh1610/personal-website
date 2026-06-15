import { useEffect, useRef, useState } from 'react'
import './preloaders.css'

export default function RetroPreloader({ name = 'Tu Huynh' }) {
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const typingTimeoutRef = useRef(null)
  const blinkIntervalRef = useRef(null)

  function clearTimers() {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
    if (blinkIntervalRef.current) {
      clearInterval(blinkIntervalRef.current)
      blinkIntervalRef.current = null
    }
  }

  function play() {
    clearTimers()
    setDisplayText('')
    setCursorVisible(true)
    let i = 0

    const typeChar = () => {
      if (i <= name.length) {
        setDisplayText(name.slice(0, i))
        i += 1
        typingTimeoutRef.current = setTimeout(typeChar, 90)
      } else {
        blinkIntervalRef.current = setInterval(() => {
          setCursorVisible((visible) => !visible)
        }, 500)
      }
    }

    typeChar()
  }

  useEffect(() => {
    play()
    return () => clearTimers()
  }, [name])

  return (
    <div className="preloader-stage retro-preloader">
      <div className={cursorVisible ? 'retro-name' : 'retro-name cursor-hidden'}>{displayText}</div>
    </div>
  )
}
