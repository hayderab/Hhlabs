'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Data Pipeline Architecture',
    description: 'We design and implement robust data pipelines that ensure smooth, efficient data flow throughout your organisation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    )
  },
  {
    title: 'Data Cleansing & Validation',
    description: 'Advanced algorithms to clean, standardise, and validate your data, ensuring the highest quality input for your AI systems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Real-time Processing',
    description: 'Implement streaming data processing for immediate insights and rapid decision-making capabilities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Data Integration',
    description: 'Seamlessly connect multiple data sources and formats into a unified, accessible system for comprehensive analysis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    title: 'Financial Data Processing System',
    description: 'Developed a real-time financial data processing system that reduced data processing time by 85% for a major UK bank.',
    metrics: ['85% faster processing', '99.99% accuracy rate', '£1.2M annual savings'],
    gradient: 'from-gray-900 to-black'
  },
  {
    title: 'Healthcare Data Integration Platform',
    description: 'Created a unified healthcare data platform integrating multiple systems and improving patient care coordination.',
    metrics: ['15 systems integrated', '60% faster access', '45% better compliance'],
    gradient: 'from-black to-gray-900'
  }
];

export default function DataPipelines() {
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
              Data Pipelines & Processing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Transform your raw data into actionable insights with our sophisticated data pipeline solutions. We specialise in building efficient, scalable data processing systems that power your AI and analytics capabilities.
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
            <h2 className="text-4xl font-bold mb-6">Our Data Processing Workflow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transforming your raw data into valuable insights.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            {[
              {
                title: 'Data Assessment',
                description: 'We analyse your data sources, quality, and requirements to design the optimal pipeline architecture.'
              },
              {
                title: 'Pipeline Development',
                description: 'Building robust, scalable pipelines with appropriate cleaning and transformation processes.'
              },
              {
                title: 'Quality Assurance',
                description: 'Implementing comprehensive testing and validation to ensure data accuracy and reliability.'
              },
              {
                title: 'Monitoring & Optimisation',
                description: 'Continuous monitoring and refinement of pipeline performance and efficiency.'
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
              Real-world examples of our data pipeline solutions in action.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Optimise Your Data Pipeline?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let's discuss how our data pipeline expertise can streamline your operations and unlock valuable insights.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center justify-center group">
              <span>Transform Your Data Flow</span>
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