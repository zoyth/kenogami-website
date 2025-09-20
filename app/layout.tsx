import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { organizationSchema, websiteSchema } from '@/lib/seo'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import SkipToContent from '@/components/accessibility/SkipToContent'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kenogami - Knowledge That Adapts, Delivers, and Evolves',
  description: 'Transform your static documentation into an intelligent knowledge system that learns from every interaction, adapts to each user, and evolves with your product.',
  keywords: 'knowledge base, documentation, SaaS, AI, intelligent documentation, enterprise',
  authors: [{ name: 'Kenogami' }],
  icons: {
    icon: '/images/kenogami_fav.png',
    shortcut: '/images/kenogami_fav.png',
    apple: '/images/kenogami_fav.png',
  },
  openGraph: {
    title: 'Kenogami - Intelligent Knowledge Platform',
    description: 'Transform documentation into intelligent knowledge',
    url: 'https://www.kenogami.com',
    siteName: 'Kenogami',
    images: [
      {
        url: 'https://www.kenogami.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenogami - Intelligent Knowledge Platform',
    description: 'Transform documentation into intelligent knowledge',
    images: ['https://www.kenogami.com/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={notoSansJP.className}>
        <SkipToContent />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}