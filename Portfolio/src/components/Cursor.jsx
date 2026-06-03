import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMove = (e) => { mx = e.clientX; my = e.clientY }

    function animate() {
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(animate)
    }
    animate()
    document.addEventListener('mousemove', onMove)

    const onEnter = () => {
      ring.style.width   = '56px'
      ring.style.height  = '56px'
      ring.style.opacity = '0.8'
      dot.style.transform = 'translate(-50%,-50%) scale(0.5)'
    }
    const onLeave = () => {
      ring.style.width   = '36px'
      ring.style.height  = '36px'
      ring.style.opacity = '0.5'
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    const targets = document.querySelectorAll('a, button, .filter-btn')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMove)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
