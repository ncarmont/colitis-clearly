'use client'

import { useEffect, useRef } from 'react'

/**
 * HeroBackground — subtle particle starfield effect.
 * Small white particles float gently. No green blobs.
 * Pure canvas, GPU-composited, minimal performance impact.
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf: number
    let time = 0

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; pulse: number }[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.scale(dpr, dpr)

      // Init particles
      particles.length = 0
      const count = Math.min(50, Math.floor(rect.width / 20))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.1 - 0.05,
          size: Math.random() * 1.2 + 0.4,
          alpha: Math.random() * 0.3 + 0.05,
          pulse: Math.random() * Math.PI * 2,
        })
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.003
      const w = canvas.width / Math.min(window.devicePixelRatio || 1, 2)
      const h = canvas.height / Math.min(window.devicePixelRatio || 1, 2)
      ctx.clearRect(0, 0, w, h)

      // Particles only — subtle white dots
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.012

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const alpha = p.alpha * (0.5 + 0.5 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const timer = setTimeout(() => { raf = requestAnimationFrame(draw) }, 300)

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
