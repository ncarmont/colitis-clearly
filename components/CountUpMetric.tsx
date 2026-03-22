'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpMetricProps {
  value: number
  className?: string
  decimals?: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function CountUpMetric({
  value,
  className = '',
  decimals = 0,
  duration = 1100,
  prefix = '',
  suffix = '',
}: CountUpMetricProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  useEffect(() => {
    if (!started) return

    let frame = 0
    const startTime = performance.now()

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, duration, value])

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={`count-up ${className}`}>
      {prefix}{formatter.format(displayValue)}{suffix}
    </span>
  )
}
