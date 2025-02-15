'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Process Automation',
    description: 'Transform manual workflows into intelligent, automated processes that save time and reduce errors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    )
  },
  {
    title: 'Smart Decision Making',
    description: 'Implement AI-driven decision systems that learn and improve from your business data.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    )
  },
  {
    title: 'Adaptive Systems',
    description: 'Create self-improving automation systems that adapt to changing business conditions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09" />
      </svg>
    )
  },
  {
    title: 'Performance Analytics',
    description: 'Monitor and measure the impact of automation with detailed analytics and insights.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  }
];

const workProcess = [
  {
    title: 'Process Analysis',
    description: 'We identify opportunities for automation and map out intelligent workflows.',
    gradient: 'from-amber-500 to-amber-600'
  },
  {
    title: 'Solution Design',
    description: 'We design AI-powered automation systems tailored to your processes.',
    gradient: 'from-amber-600 to-amber-700'
  },
  {
    title: 'Implementation',
    description: 'We build and integrate automated workflows with your existing systems.',
    gradient: 'from-amber-700 to-amber-800'
  },
  {
    title: 'Enhancement',
    description: 'We continuously optimise automation performance based on real-world results.',
    gradient: 'from-amber-800 to-amber-900'
  }
];

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-centre mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Repetitive, manual tasks can waste both time and resources. Our AI-driven automation solutions streamline these processes—reducing human error and freeing your team to focus on strategic, higher-value work.
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
              <div className="text-amber-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-grey-900">{feature.title}</h3>
              <p className="text-grey-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-grey-900 mb-8 text-centre">How We Work</h2>
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
          className="text-centre bg-grey-900 text-white rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
          <p className="text-lg text-grey-300 max-w-3xl mx-auto">
            By automating routine tasks, you reduce manual errors and operational costs, and empower your team to focus on more innovative work.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colours"
          >
            Start Automating Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}