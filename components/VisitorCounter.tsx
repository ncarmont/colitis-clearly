'use client'

import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [total, setTotal] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/totalUsers')
      .then(res => res.json())
      .then(data => {
        const num = Number(data.totalUsers)
        setTotal(isNaN(num) ? data.totalUsers : num.toLocaleString())
      })
      .catch(() => setTotal('—'))
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-xl">👥</span>
        <div className="flex flex-col">
          <span className="text-xs text-gray-300 font-medium">Total Visitors</span>
          <span className="text-sm text-white font-bold">
            {total ?? 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  )
}
