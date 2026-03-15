'use client'

import { useEffect, useRef } from 'react'

/**
 * HeroBackground — floating particle starfield.
 * Larger glowing dots that drift gently. White + subtle emerald tint on some.
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf: number
    let w = 0, h = 0

    type Particle = { x: number; y: number; vx: number; vy: number; size: number; alpha: number; pulse: number; glow: boolean }
    const particles: Particle[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles.length = 0
      const count = Math.min(60, Math.floor(w / 18))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.15 - 0.03,
          size: Math.random() * 2.5 + 1.0,  // bigger: 1-3.5px radius
          alpha: Math.random() * 0.45 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          glow: Math.random() < 0.3, // 30% get a soft glow halo
        })
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.008

        if (p.x < -5) p.x = w + 5
        if (p.x > w + 5) p.x = -5
        if (p.y < -5) p.y = h + 5
        if (p.y > h + 5) p.y = -5

        const a = p.alpha * (0.5 + 0.5 * Math.sin(p.pulse))

        // Glow halo for some particles
        if (p.glow) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
          grad.addColorStop(0, `rgba(110, 231, 183, ${a * 0.3})`)
          grad.addColorStop(1, 'rgba(110, 231, 183, 0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
        }

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${a})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const timer = setTimeout(() => { raf = requestAnimationFrame(draw) }, 200)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  )
}
