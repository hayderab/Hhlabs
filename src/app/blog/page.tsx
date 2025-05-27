'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    id: 'a-quick-recap-of-ai-systems',
    title: 'A Quick Recap of AI Systems',
    description: 'The past year saw a "real acceleration" in AI progress, experts predict.',
    date: 'March 22, 2025',
    readTime: '7 min read',
    color: 'amber',
    gradient: 'from-amber-500 to-amber-600',
    tags: ['ai', 'systems']
  },
  {
    id: 'what-comes-after-todays-ai',
    title: 'What Comes After Today\'s AI',
    description: 'LLMs are evolving into teams of specialised agents that plan, delegate and act.',
    date: 'March 05, 2025',
    readTime: '5 min read',
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600',
    tags: ['model-context-protocol', 'ai']
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Simple AI Pattern */}
      <div className="w-full bg-white h-48 md:h-64 relative overflow-hidden">
        {/* Simple circuit board pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gray-300"></div>
            <div className="absolute top-2/4 left-0 w-full h-0.5 bg-gray-300"></div>
            <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gray-300"></div>
            
            <div className="absolute top-0 left-1/4 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute top-0 left-2/4 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute top-0 left-3/4 h-full w-0.5 bg-gray-300"></div>
            
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-500 opacity-60"></div>
            <div className="absolute top-1/4 left-2/4 w-3 h-3 rounded-full bg-purple-500 opacity-60"></div>
            <div className="absolute top-2/4 left-3/4 w-3 h-3 rounded-full bg-blue-500 opacity-60"></div>
            <div className="absolute top-3/4 left-1/4 w-3 h-3 rounded-full bg-purple-500 opacity-60"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              Blog & Articles
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Insights and perspectives on AI, technology, and innovation from our team.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href={`/blog/${article.id}`} className="block">
                <div className={`h-48 bg-gradient-to-br ${article.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
                    AI
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    {article.readTime}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-xs bg-${article.color}-100 text-${article.color}-800 px-3 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${article.id}`} className="block group">
                  <h3 className={`text-xl font-semibold mb-3 group-hover:text-${article.color}-600 transition-colors`}>
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Link 
                    href={`/blog/${article.id}`} 
                    className={`text-${article.color}-600 hover:text-${article.color}-700 font-medium flex items-center gap-1`}
                  >
                    <span>Read Article</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}
