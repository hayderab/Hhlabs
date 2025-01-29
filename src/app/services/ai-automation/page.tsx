'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Process Automation',
    description: 'Transform manual workflows into efficient, automated processes that save time and reduce errors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Intelligent Workflows',
    description: 'Create smart, adaptive workflows that learn and improve from your business processes and data.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Decision Automation',
    description: 'Implement AI-powered decision-making systems that handle routine choices with precision and speed.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Integration & Monitoring',
    description: 'Seamlessly connect automated systems with your existing tools and track performance in real-time.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    title: 'Customer Service Automation',
    description: 'Implemented an AI-powered system that automated 75% of customer enquiries for a leading telecom provider.',
    metrics: ['75% enquiry automation', '90% customer satisfaction', '£2.1M annual savings'],
    gradient: 'from-gray-900 to-black'
  },
  {
    title: 'Supply Chain Optimisation',
    description: 'Developed an automated inventory management system that reduced stockouts by 40% and improved efficiency.',
    metrics: ['40% fewer stockouts', '28% cost reduction', '95% accuracy rate'],
    gradient: 'from-black to-gray-900'
  }
];

export default function AIAutomation() {
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
              AI Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Transform your business operations with intelligent automation solutions. We help you streamline processes, reduce manual work, and achieve unprecedented efficiency through AI-powered automation.
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
            <h2 className="text-4xl font-bold mb-6">Our Automation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing intelligent automation in your business.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            {[
              {
                title: 'Process Analysis',
                description: 'We thoroughly analyse your current workflows to identify automation opportunities and potential improvements.'
              },
              {
                title: 'Solution Design',
                description: 'Our team designs intelligent automation solutions tailored to your specific processes and requirements.'
              },
              {
                title: 'Implementation',
                description: 'Careful implementation with thorough testing to ensure smooth integration with existing systems.'
              },
              {
                title: 'Optimisation & Scale',
                description: 'Continuous monitoring and refinement to improve performance and expand automation capabilities.'
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
              Real-world examples of our automation solutions in action.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI automation solutions can transform your operations and boost efficiency.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center justify-center group">
              <span>Start Your Automation Journey</span>
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