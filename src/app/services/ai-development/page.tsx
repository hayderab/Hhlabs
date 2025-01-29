'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Custom Model Development',
    description: 'Bespoke AI models tailored to your specific business requirements, ensuring optimal performance and accuracy.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Model Testing & Validation',
    description: 'Rigorous testing protocols to ensure your AI models perform reliably across various scenarios and edge cases.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Deployment & Integration',
    description: 'Seamless integration of AI models into your existing infrastructure with minimal disruption to operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Performance Monitoring',
    description: 'Continuous monitoring and optimisation of your AI models to maintain peak performance and efficiency.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    title: 'Predictive Maintenance System for Manufacturing',
    description: 'Developed a custom AI model that reduced equipment downtime by 45% through early fault detection.',
    metrics: ['45% reduction in downtime', '£2.5M annual savings', '98% fault prediction accuracy'],
    gradient: 'from-gray-900 to-black'
  },
  {
    title: 'Customer Service Automation Platform',
    description: 'Implemented an AI-powered system that handles 70% of customer queries automatically.',
    metrics: ['70% automation rate', '3-minute average response time', '92% customer satisfaction'],
    gradient: 'from-black to-gray-900'
  }
];

export default function AIDevelopment() {
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
              AI Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We craft bespoke AI solutions that transform your business challenges into opportunities for innovation and growth. Our development process ensures your AI models are not just powerful, but practical and profitable.
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
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your AI solution is built for success from day one.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            {[
              {
                title: 'Requirements Analysis',
                description: 'We begin by thoroughly understanding your business needs, data availability, and desired outcomes.'
              },
              {
                title: 'Model Design & Development',
                description: 'Our team designs and develops AI models specifically tailored to your requirements.'
              },
              {
                title: 'Testing & Validation',
                description: 'Rigorous testing ensures the model performs reliably across various scenarios.'
              },
              {
                title: 'Deployment & Integration',
                description: 'Seamless integration into your existing systems with minimal disruption.'
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
              Real results from our AI development projects.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI development expertise can help you achieve your business goals.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center justify-center group">
              <span>Start Your AI Journey</span>
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