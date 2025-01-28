'use client';

import { motion } from "framer-motion";
import { blogs } from "./data/blogs";
import HeroBackground from "./components/HeroBackground";
import Hero3D from "./components/Hero3D";
import ContactForm from "./components/ContactForm";

const services = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI into your existing solutions",
    icon: "",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Model Fine-tuning",
    description: "Custom LLM fine-tuning for your specific needs",
    icon: "",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Automation Solutions",
    description: "End-to-end automation for business processes",
    icon: "",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "AI Model Hosting",
    description: "Secure and scalable hosting for your AI models",
    icon: "",
    gradient: "from-green-500 to-emerald-500"
  }
];

const projects = [
  {
    title: "AI-Powered Analytics",
    description: "Real-time data analysis platform",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    title: "Smart Automation",
    description: "Enterprise workflow automation",
    gradient: "from-red-600 to-orange-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <HeroBackground />
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Welcome to the future</h2>
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="text-gradient">H&H Labs</span>
                    <span className="block text-3xl md:text-4xl text-gray-600 mt-4">
                      Pioneering AI Solutions
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-xl text-balance">
                    We transform businesses through cutting-edge AI integration, automation, and custom solutions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 flex items-center justify-center group">
                    <span>Explore Services</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all hover:scale-105">
                    View Projects
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column - 3D Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative hidden md:block"
              >
                <Hero3D />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card hover-card p-6"
              >
                <div className={`text-4xl mb-4 w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 clip-path-slant">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Latest Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <div className="aspect-video relative overflow-hidden rounded-2xl hover-card">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} animate-gradient-x`} />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-200 text-lg">{project.description}</p>
                    <button className="mt-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all w-fit">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient"
          >
            Latest Insights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card hover-card overflow-hidden"
              >
                <div className="aspect-[16/9] relative bg-gradient-to-br from-gray-900 to-gray-600">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl font-bold">
                    H&H
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span>{blog.category}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-gray-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <button className="text-black font-medium hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all hover:scale-105">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to explore possibilities,
              we&apos;re here to help turn your ideas into reality.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
