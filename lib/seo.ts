import { Metadata } from 'next'

export const siteConfig = {
  name: 'Kenogami',
  url: 'https://kenogami.com',
  ogImage: 'https://kenogami.com/og-image.png',
  description: 'Transform your static documentation into an intelligent knowledge system that learns from every interaction, adapts to each user, and evolves with your product.',
  links: {
    twitter: 'https://twitter.com/kenogami',
    github: 'https://github.com/kenogami',
  },
}

export function constructMetadata({
  title = 'Kenogami - Knowledge That Adapts, Delivers, and Evolves',
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/images/kenogami_fav.png',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@kenogami',
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kenogami',
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/kenogami_fav.png`,
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.github,
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kenogami',
  description: siteConfig.description,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}