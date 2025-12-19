import { useRef, useEffect } from 'react'

export default function useTilt(options = {}){
  const ref = useRef(null)

  useEffect(()=>{
    const el = ref.current
    if(!el) return

    const opts = { maxRotate: 8, tz: 10, ...options }

    function onMove(e){
      const r = el.getBoundingClientRect()
      const x = (e.clientX ?? (e.touches && e.touches[0].clientX)) - r.left
      const y = (e.clientY ?? (e.touches && e.touches[0].clientY)) - r.top
      const px = (x / r.width - 0.5) * 2
      const py = (y / r.height - 0.5) * 2
      const rx = -py * opts.maxRotate
      const ry = px * opts.maxRotate
      el.style.setProperty('--rx', rx + 'deg')
      el.style.setProperty('--ry', ry + 'deg')
      el.style.setProperty('--tz', opts.tz + 'px')
    }

    function reset(){
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
      el.style.setProperty('--tz', '0px')
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', reset)
    el.addEventListener('touchmove', onMove, {passive:true})
    el.addEventListener('touchend', reset)

    return ()=>{
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', reset)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', reset)
    }
  }, [ref, options])

  return ref
}
