'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-red-100 rounded-full">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}