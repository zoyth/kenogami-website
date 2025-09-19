# Kenogami Marketing Website

Marketing website for Kenogami - The Intelligent Knowledge Platform

## Project Overview

This is the marketing website for Kenogami, showcasing our Knowledge Publisher and upcoming platform features. The site is designed to convert visitors into trial users and demonstrate the power of intelligent knowledge management.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm run start
```

## Project Structure

```
kenogami-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── product/          # Product pages
│   ├── solutions/        # Solution pages
│   ├── features/         # Feature pages
│   ├── pricing/          # Pricing page
│   ├── resources/        # Resources section
│   └── company/          # Company pages
├── components/            # React components
│   ├── ui/               # UI components
│   ├── sections/         # Page sections
│   ├── navigation/       # Nav components
│   └── forms/            # Form components
├── lib/                   # Utilities
├── public/               # Static assets
│   ├── images/          # Images
│   └── videos/          # Videos
└── styles/               # Global styles
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Analytics**: Google Analytics 4
- **CMS**: Markdown/MDX for blog
- **Deployment**: Vercel

## Key Pages

### Homepage (/)
- Hero section with value proposition
- Problem/solution narrative
- Product showcase
- ROI metrics
- Social proof

### Product Pages
- `/product/publisher` - Knowledge Publisher (Available now)
- `/product/intelligence` - Intelligence Core (Coming soon)
- `/product/platform` - Platform overview

### Solutions
- `/solutions/saas` - For SaaS companies
- `/solutions/support` - For support teams
- `/solutions/writers` - For technical writers
- `/solutions/developers` - For developers

### Resources
- `/docs` - Documentation (Powered by Kenogami)
- `/blog` - Blog and updates
- `/api` - API reference
- `/case-studies` - Customer success stories

## Design System

### Colors
```css
--primary: #0F172A;     /* Deep Blue */
--secondary: #14B8A6;   /* Teal */
--accent: #3B82F6;      /* Bright Blue */
--background: #FFFFFF;  /* White */
--text: #475569;        /* Gray */
```

### Typography
- Headings: Inter or SF Pro Display
- Body: Inter or SF Pro Text
- Code: JetBrains Mono

### Components
- Buttons: Primary, Secondary, Ghost
- Cards: Feature, Pricing, Testimonial
- Forms: Input, Select, Textarea
- Navigation: Header, Footer, Mobile menu

## Conversion Optimization

### Primary CTAs
1. Start Free Trial
2. Book Demo
3. View Documentation

### Lead Capture
- Newsletter signup (footer)
- Resource downloads
- ROI calculator
- Free assessment tool

### Analytics Events
- Page views
- CTA clicks
- Form submissions
- Scroll depth
- Time on page

## SEO

### Meta Tags
- Dynamic title and description
- Open Graph tags
- Twitter cards
- Canonical URLs

### Schema Markup
- Organization
- Product
- FAQ
- Breadcrumbs

### Performance
- Target: 95+ Lighthouse score
- Image optimization
- Code splitting
- Edge caching

## Content Management

### Blog Posts
Located in `/app/blog/posts/` as MDX files

### Case Studies
Located in `/app/case-studies/` as MDX files

### Documentation
External link to Kenogami-powered docs

## Environment Variables

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://api.kenogami.com
NEXT_PUBLIC_APP_URL=https://app.kenogami.com
```

## Development Workflow

1. Create feature branch
2. Develop locally
3. Test responsive design
4. Check Lighthouse score
5. Submit PR
6. Deploy preview on Vercel
7. Merge to main
8. Auto-deploy to production

## Launch Checklist

- [ ] Homepage complete
- [ ] Product pages ready
- [ ] Pricing page functional
- [ ] Blog setup
- [ ] Analytics configured
- [ ] SEO optimized
- [ ] Forms tested
- [ ] Mobile responsive
- [ ] Performance optimized
- [ ] Legal pages added

## Support

For questions about the website, contact the marketing team.

---

**Kenogami** - Knowledge That Adapts, Delivers, and Evolves