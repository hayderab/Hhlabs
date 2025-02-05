'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'AI Development',
    description: 'Custom AI solutions built to solve your specific business challenges.',
    href: '/services/ai-development',
    color: 'indigo',
    icon: ''
  },
  {
    title: 'Data Pipelines & Processing',
    description: 'Streamline your data workflows for efficient AI operations.',
    href: '/services/data-pipelines',
    color: 'cyan',
    icon: ''
  },
  {
    title: 'Custom AI Models',
    description: 'Bespoke AI models tailored to your unique requirements.',
    href: '/services/custom-models',
    color: 'green',
    icon: ''
  },
  {
    title: 'AI Automation',
    description: 'Automate repetitive tasks with intelligent AI solutions.',
    href: '/services/ai-automation',
    color: 'amber',
    icon: ''
  },
  {
    title: 'AI Hosting & Infrastructure',
    description: 'Secure and scalable infrastructure for your AI systems.',
    href: '/services/ai-hosting',
    color: 'emerald',
    icon: ''
  },
  {
    title: 'AI Consulting & Strategy',
    description: 'Expert guidance for your AI transformation journey.',
    href: '/services/ai-consulting',
    color: 'rose',
    icon: ''
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of AI services to help businesses leverage the power of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`text-${service.color}-600 mb-4`}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-grey-900">{service.title}</h3>
              <p className="text-grey-600 mb-4">{service.description}</p>
              <Link
                href={service.href}
                className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700`}
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
