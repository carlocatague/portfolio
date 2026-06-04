import { useEffect, useRef } from 'react'

const PHRASES = [
  'Web Developer',
  'Architectural Designer',
  'UI/UX Designer',
  'Full-Stack Developer',
  '3D Visualizer',
]

const TYPE_SPEED   = 68
const DELETE_SPEED = 38
const PAUSE_END    = 1800
const PAUSE_START  = 320

/**
 * Typing animation hook.
 * @param {React.RefObject} elRef – ref to the <span> that receives text
 * @param {number} startDelay – ms before first character is typed
 */
export default function useTyping(elRef, startDelay = 1400) {
  const state = useRef({ phraseIndex: 0, charIndex: 0, isDeleting: false })

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    let timerId

    function type() {
      const { phraseIndex, charIndex, isDeleting } = state.current
      const current = PHRASES[phraseIndex]

      if (isDeleting) {
        el.textContent = current.slice(0, charIndex - 1)
        state.current.charIndex--
      } else {
        el.textContent = current.slice(0, charIndex + 1)
        state.current.charIndex++
      }

      let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED

      if (!isDeleting && state.current.charIndex === current.length) {
        delay = PAUSE_END
        state.current.isDeleting = true
      } else if (isDeleting && state.current.charIndex === 0) {
        state.current.isDeleting = false
        state.current.phraseIndex = (phraseIndex + 1) % PHRASES.length
        delay = PAUSE_START
      }

      timerId = setTimeout(type, delay)
    }

    const startTimer = setTimeout(type, startDelay)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(timerId)
    }
  }, [elRef, startDelay])
}
