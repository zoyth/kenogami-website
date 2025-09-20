'use client'

import { useState } from 'react'

export default function TechnicalFeatures() {
  const [selectedTech, setSelectedTech] = useState(0)

  const techStack = [
    {
      category: 'Frontend',
      icon: '⚛️',
      technologies: [
        { name: 'Next.js 15', description: 'React framework with App Router' },
        { name: 'TypeScript', description: 'Type-safe development' },
        { name: 'Tailwind CSS', description: 'Utility-first styling' },
        { name: 'Material UI', description: 'Admin interface components' }
      ]
    },
    {
      category: 'Backend',
      icon: '🔧',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime' },
        { name: 'PostgreSQL', description: 'Relational database' },
        { name: 'Prisma ORM', description: 'Type-safe database access' },
        { name: 'JWT Auth', description: 'Secure authentication' }
      ]
    },
    {
      category: 'Infrastructure',
      icon: '☁️',
      technologies: [
        { name: 'Vercel', description: 'Edge deployment platform' },
        { name: 'Docker', description: 'Containerization' },
        { name: 'Redis', description: 'Caching & sessions' },
        { name: 'CDN', description: 'Global content delivery' }
      ]
    },
    {
      category: 'Developer Tools',
      icon: '🛠️',
      technologies: [
        { name: 'Turborepo', description: 'Monorepo management' },
        { name: 'pnpm', description: 'Fast package management' },
        { name: 'ESLint', description: 'Code quality' },
        { name: 'GitHub Actions', description: 'CI/CD automation' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade tech stack ensuring performance, security, and scalability 
            for your growing knowledge management needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tech Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techStack.map((tech, index) => (
              <button
                key={index}
                onClick={() => setSelectedTech(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedTech === index
                    ? 'bg-primary-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="text-xl">{tech.icon}</span>
                {tech.category}
              </button>
            ))}
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {techStack[selectedTech].technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h4>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h4>
              <p className="text-gray-600">Edge deployment with CDN ensures sub-second load times globally</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure by Design</h4>
              <p className="text-gray-600">JWT authentication, encrypted data, and regular security audits</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Infinitely Scalable</h4>
              <p className="text-gray-600">Auto-scaling infrastructure handles from 10 to 10 million users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}