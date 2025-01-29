'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Strategic AI Planning',
    description: 'Develop comprehensive AI strategies aligned with your business objectives and industry landscape.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: 'Technology Assessment',
    description: 'Expert evaluation of AI technologies and solutions to identify the most suitable options for your needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Implementation Roadmap',
    description: 'Clear, actionable plans for integrating AI into your business with defined milestones and outcomes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Change Management',
    description: 'Guide your organisation through the AI transformation process with minimal disruption.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    title: 'Digital Transformation Strategy',
    description: 'Guided a major retailer through their AI transformation journey, achieving 55% improvement in operational efficiency.',
    metrics: ['55% efficiency gain', '£4.2M cost savings', '98% strategy adoption'],
    gradient: 'from-gray-900 to-black'
  },
  {
    title: 'AI Implementation Planning',
    description: 'Developed a comprehensive AI roadmap for a healthcare provider, leading to successful integration of multiple AI solutions.',
    metrics: ['30% faster delivery', '40% better outcomes', '£2.8M ROI'],
    gradient: 'from-black to-gray-900'
  }
];

export default function AIConsulting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] opacity-[0.15]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-600 to-black">
              AI Consulting & Strategy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Navigate your AI journey with confidence. Our expert consultants help you develop and implement effective AI strategies that drive business growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Consulting Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology to guide your organisation's AI transformation journey.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            {[
              {
                title: 'Discovery & Assessment',
                description: 'We analyse your current capabilities, challenges, and objectives to identify AI opportunities.'
              },
              {
                title: 'Strategy Development',
                description: 'Creating a comprehensive AI strategy and implementation roadmap tailored to your goals.'
              },
              {
                title: 'Implementation Planning',
                description: 'Detailed planning for successful AI integration, including resource allocation and timelines.'
              },
              {
                title: 'Ongoing Support & Optimisation',
                description: 'Continuous guidance and refinement to ensure long-term success of your AI initiatives.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'}`}
              >
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className="w-1/2 p-6 bg-white rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our strategic consulting impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group cursor-pointer"
              >
                <div className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br ${study.gradient} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-gray-200 mb-6">{study.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
                        <p className="text-sm">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let's discuss how our strategic consulting can help you achieve your AI transformation goals.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center justify-center group">
              <span>Book a Strategy Session</span>
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}