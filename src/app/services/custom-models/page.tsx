'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Tailored Architecture',
    description: 'We design and train models using frameworks like TensorFlow, PyTorch, and scikit-learn, tuned for your exact business requirements.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Domain-specific Training',
    description: 'By using your own datasets and industry knowledge, our models become more accurate and relevant to your context.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: 'Performance Optimisation',
    description: 'We fine-tune model parameters and architecture to achieve high accuracy and efficient computational performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Scalable Solutions',
    description: 'Our models are built for growth, ready to handle increasing data volumes or emerging use cases.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

const workProcess = [
  {
    title: 'Discovery & Analysis',
    description: 'We examine your current data, operational processes, and business goals to shape the model&apos;s design.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'Model Development',
    description: 'Our experts use the most appropriate AI frameworks to develop a model that addresses your specific challenges.',
    gradient: 'from-green-600 to-green-700'
  },
  {
    title: 'Testing & Validation',
    description: 'We test performance against various scenarios to ensure resilience and reliability.',
    gradient: 'from-green-700 to-green-800'
  },
  {
    title: 'Deployment & Iteration',
    description: 'After deployment, we monitor results in real-world conditions and refine the model based on new data or feedback.',
    gradient: 'from-green-800 to-green-900'
  }
];

export default function CustomModels() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Custom AI Models
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generic AI solutions often fail to capture the unique nuances of your business. We specialise in building bespoke AI models that understand your specific industry, data, and performance objectives—ensuring you gain meaningful insights and tangible results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Work</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg p-6 text-white bg-gradient-to-br ${step.gradient}`}
              >
                <div className="text-3xl font-bold mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center bg-gray-900 text-white rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Let&apos;s create AI models that perfectly match your unique business requirements.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Building Your Custom Model
          </a>
        </motion.div>
      </div>
    </div>
  );
}