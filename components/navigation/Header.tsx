'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/kenogami_logo.png" alt="Kenogami" width={120} height={40} className="h-10 w-auto" priority />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:flex">
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Product
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/product/publisher" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Knowledge Publisher
                    </Link>
                    <Link href="/product/intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Intelligence Core
                    </Link>
                    <Link href="/product/platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Platform Overview
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Solutions
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/solutions/saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      For SaaS Companies
                    </Link>
                    <Link href="/solutions/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      For Support Teams
                    </Link>
                    <Link href="/solutions/writers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      For Technical Writers
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link href="/features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          
          <div className="ml-10 hidden lg:flex items-center space-x-4">
            <a href="https://app.kenogami.com/auth/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sign In
            </a>
            <a href="https://app.kenogami.com/auth/signup" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg">
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</p>
                <Link href="/product/publisher" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  Knowledge Publisher
                </Link>
                <Link href="/product/intelligence" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  Intelligence Core
                </Link>
                <Link href="/product/platform" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  Platform Overview
                </Link>
              </div>
              
              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</p>
                <Link href="/solutions/saas" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  For SaaS Companies
                </Link>
                <Link href="/solutions/support" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  For Support Teams
                </Link>
                <Link href="/solutions/writers" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  For Technical Writers
                </Link>
              </div>
              
              <Link href="/features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-2 px-2">
                  <a href="https://app.kenogami.com/auth/login" className="block w-full text-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                    Sign In
                  </a>
                  <a href="https://app.kenogami.com/auth/signup" className="block w-full text-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all shadow-md">
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}