import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-ghost to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}