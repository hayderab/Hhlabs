'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Tailored Model Architecture',
    description: 'We design and build AI models specifically optimised for your unique business challenges and data characteristics.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Domain-Specific Training',
    description: 'Leverage your industry expertise and historical data to create models that truly understand your business context.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Performance Optimisation',
    description: 'Continuous refinement and fine-tuning to achieve the highest possible accuracy and efficiency for your use case.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Scalable Architecture',
    description: 'Future-proof design that allows your AI models to grow and adapt as your business needs evolve.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    title: 'Retail Demand Forecasting',
    description: 'Developed a custom forecasting model that improved inventory management efficiency by 35% for a major retail chain.',
    metrics: ['35% better accuracy', '£3.2M stock reduction', '28% less wastage'],
    gradient: 'from-gray-900 to-black'
  },
  {
    title: 'Medical Image Analysis',
    description: 'Created a specialised computer vision model achieving 97% accuracy in early disease detection.',
    metrics: ['97% accuracy rate', '4x faster diagnosis', '60% cost reduction'],
    gradient: 'from-black to-gray-900'
  }
];

export default function CustomModels() {
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
              Custom AI Models
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Unlock the full potential of AI with bespoke models tailored to your specific business needs. We craft sophisticated, highly-optimised solutions that deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
            <h2 className="text-4xl font-bold mb-6">Our Model Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to creating AI models that perfectly match your requirements.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            {[
              {
                title: 'Requirements & Data Analysis',
                description: 'We thoroughly analyse your needs, data quality, and business objectives to design the optimal model architecture.'
              },
              {
                title: 'Custom Model Development',
                description: 'Our experts develop and train models using your specific data, incorporating domain knowledge and best practices.'
              },
              {
                title: 'Rigorous Testing',
                description: 'Comprehensive testing across various scenarios ensures reliable performance and robust error handling.'
              },
              {
                title: 'Deployment & Refinement',
                description: 'Smooth deployment followed by continuous monitoring and optimization for peak performance.'
              }
            ].map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: step.title === 'Requirements & Data Analysis' ? -50 : step.title === 'Custom Model Development' ? 50 : 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative mb-12 ${step.title === 'Requirements & Data Analysis' ? 'pr-1/2' : step.title === 'Custom Model Development' ? 'pl-1/2' : ''}`}
              >
                <div className={`flex ${step.title === 'Requirements & Data Analysis' ? 'justify-end' : step.title === 'Custom Model Development' ? 'justify-start' : 'justify-center'}`}>
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
              Real-world impact of our custom AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
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
            <h2 className="text-4xl font-bold mb-6">Ready for a Tailored AI Solution?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let&apos;s discuss how our custom AI models can revolutionise your business operations.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center justify-center group">
              <span>Start Your Custom AI Journey</span>
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