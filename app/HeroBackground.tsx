'use client'

import { useEffect, useRef } from 'react'

/**
 * HeroBackground — canvas-based animated gradient mesh + particle starfield.
 * Inspired by Stripe, Linear, and Vercel's hero backgrounds.
 * Pure canvas rendering — no DOM overhead, GPU-composited.
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

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; pulse: number }[] = []
    const PARTICLE_COUNT = 80

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.scale(dpr, dpr)

      // Re-init particles
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2 - 0.1,
          size: Math.random() * 2 + 0.8,
          alpha: Math.random() * 0.5 + 0.15,
          pulse: Math.random() * Math.PI * 2,
        })
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.003
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2))
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2))
      ctx.clearRect(0, 0, w, h)

      // ── Gradient mesh blobs ──
      const blobs = [
        {
          x: w * 0.15 + Math.sin(time * 0.7) * w * 0.1,
          y: h * 0.25 + Math.cos(time * 0.5) * h * 0.2,
          r: w * 0.3,
          color: 'rgba(16, 185, 129, 0.25)', // emerald — BRIGHT
        },
        {
          x: w * 0.8 + Math.cos(time * 0.6) * w * 0.12,
          y: h * 0.15 + Math.sin(time * 0.4) * h * 0.15,
          r: w * 0.28,
          color: 'rgba(45, 212, 191, 0.18)', // teal
        },
        {
          x: w * 0.5 + Math.sin(time * 0.8 + 1) * w * 0.15,
          y: h * 0.75 + Math.cos(time * 0.3 + 2) * h * 0.12,
          r: w * 0.25,
          color: 'rgba(34, 211, 238, 0.12)', // cyan
        },
        {
          x: w * 0.9 + Math.sin(time * 0.5 + 3) * w * 0.08,
          y: h * 0.5 + Math.cos(time * 0.7 + 1) * h * 0.1,
          r: w * 0.18,
          color: 'rgba(52, 211, 153, 0.15)', // emerald lighter
        },
        {
          x: w * 0.35 + Math.cos(time * 0.9 + 2) * w * 0.1,
          y: h * 0.1 + Math.sin(time * 0.6 + 1) * h * 0.1,
          r: w * 0.2,
          color: 'rgba(110, 231, 183, 0.1)', // light emerald
        },
      ]

      for (const blob of blobs) {
        const g = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r)
        g.addColorStop(0, blob.color)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      }

      // ── Spotlight cone from top center ──
      const spotX = w * 0.5 + Math.sin(time * 0.3) * w * 0.08
      const spotG = ctx.createRadialGradient(spotX, -h * 0.2, 0, spotX, -h * 0.2, h * 0.9)
      spotG.addColorStop(0, 'rgba(16, 185, 129, 0.15)')
      spotG.addColorStop(0.3, 'rgba(16, 185, 129, 0.05)')
      spotG.addColorStop(1, 'transparent')
      ctx.fillStyle = spotG
      ctx.fillRect(0, 0, w, h)

      // ── Particles / starfield — VISIBLE ──
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.015

        // Wrap around
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const alpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse))

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 0.15})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      }

      // ── Light rays from top — MORE VISIBLE ──
      ctx.save()
      ctx.globalAlpha = 0.04 + Math.sin(time * 0.5) * 0.015
      const rayG = ctx.createLinearGradient(w * 0.5, 0, w * 0.5, h)
      rayG.addColorStop(0, 'rgba(16, 185, 129, 0.4)')
      rayG.addColorStop(0.3, 'rgba(16, 185, 129, 0.1)')
      rayG.addColorStop(0.6, 'rgba(16, 185, 129, 0.02)')
      rayG.addColorStop(1, 'transparent')
      ctx.fillStyle = rayG
      ctx.beginPath()
      ctx.moveTo(w * 0.38, 0)
      ctx.lineTo(w * 0.22, h)
      ctx.lineTo(w * 0.52, h)
      ctx.lineTo(w * 0.48, 0)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(w * 0.52, 0)
      ctx.lineTo(w * 0.48, h)
      ctx.lineTo(w * 0.78, h)
      ctx.lineTo(w * 0.62, 0)
      ctx.fill()
      ctx.restore()

      // ── Horizontal aurora band across middle ──
      const auroraY = h * 0.4 + Math.sin(time * 0.4) * h * 0.1
      const aG = ctx.createLinearGradient(0, auroraY - 30, 0, auroraY + 30)
      aG.addColorStop(0, 'transparent')
      aG.addColorStop(0.5, `rgba(16, 185, 129, ${0.03 + Math.sin(time * 0.7) * 0.015})`)
      aG.addColorStop(1, 'transparent')
      ctx.fillStyle = aG
      ctx.fillRect(0, auroraY - 40, w, 80)

      raf = requestAnimationFrame(draw)
    }

    // Start after a brief delay (let CSS entrance start first)
    const timer = setTimeout(() => {
      raf = requestAnimationFrame(draw)
    }, 200)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[2]"
      aria-hidden="true"
    />
  )
}
