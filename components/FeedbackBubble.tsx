'use client'

import { useState } from 'react'

export default function FeedbackBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, comment }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setUrl('')
        setComment('')
        setTimeout(() => {
          setIsOpen(false)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Feedback Bubble Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 font-semibold text-sm max-w-xs flex items-center gap-3 group"
      >
        <span className="text-2xl">💡</span>
        <span className="leading-tight">
          HAVE WE MISSED AN OLIVE OIL OR GOT SOMETHING INCORRECT? LET US KNOW
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-slate-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Submit Feedback
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-green-400 text-lg font-semibold">Thanks for your feedback!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-slate-300 mb-2">
                    Product URL (optional)
                  </label>
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Comment <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows={4}
                    placeholder="Tell us about a missed olive oil or an error you found..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
                  />
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm">Failed to submit. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !comment.trim()}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Feedback'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
