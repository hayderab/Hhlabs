'use client';

import { motion } from "framer-motion";
import { blogs } from "./data/blogs";
import HeroBackground from "./components/HeroBackground";
import Hero3D from "./components/Hero3D";
import ContactForm from "./components/ContactForm";
import Link from 'next/link';

const services = [
  {
    title: "AI Development",
    description: "Transform your ideas into intelligent solutions with our custom AI development. We turn complex problems into smart, efficient systems.",
    path: "ai-development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Data Pipelines & Processing",
    description: "Build robust data flows that feed your AI systems. We structure and optimize your data to unlock its full potential.",
    path: "data-pipelines",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Custom AI Models",
    description: "Get AI models designed specifically for your unique challenges. We train and fine-tune models that understand your business context.",
    path: "custom-models",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "AI Automation",
    description: "Transform repetitive tasks into automated workflows. Our AI solutions help your team focus on what matters most.",
    path: "ai-automation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600"
  },
  {
    title: "AI Hosting & Infrastructure",
    description: "Get a secure, scalable foundation for your AI systems. We handle the technical complexity so you can focus on innovation.",
    path: "ai-hosting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "AI Consulting & Strategy",
    description: "Navigate the AI landscape with confidence. We help you identify opportunities and create a roadmap for AI adoption.",
    path: "ai-consulting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    gradient: "from-rose-500 to-rose-600"
  }
];

const projects = [
  {
    title: "Jobassistant",
    description: "AI-Powered Interviews, Jobs Automation & Company Search",
    gradient: "from-gray-900 to-black",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.5 3.75a1.5 1.5 0 0 0-1.5 1.5v.75h-1.5a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V6.75a.75.75 0 0 0-.75-.75h-1.5v-.75a1.5 1.5 0 0 0-1.5-1.5h-4.5ZM9 5.25v-.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v.75H9Zm4.5 4.5a.75.75 0 0 0-1.5 0V12h-2.25a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0V13.5h2.25a.75.75 0 0 0 0-1.5h-2.25V9.75Z" />
      </svg>
    )
  },
  {
    title: "Competitor Analysis",
    description: "AI-powered tool for analyzing market competitors and industry trends",
    gradient: "from-black to-gray-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
      </svg>
    )
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
                    We transform businesses through cutting-edge AI integration, automation, and customised solutions.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3m9 9a9 9 0 019-9" />
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
      <section id="services" className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-xl bg-white relative overflow-hidden"
              >
                <Link href={`/services/${service.path}`} className="block">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`} />
                  
                  {/* Icon */}
                  <div className={`relative mb-6 text-${service.gradient.split('-')[1]}-600`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-semibold mb-3 text-gray-900 group-hover:text-${service.gradient.split('-')[1]}-600 transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Learn More */}
                  <div className={`flex items-center text-${service.gradient.split('-')[1]}-600`}>
                    <span className="mr-2">Learn More</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m0 0l-6-6m6 6l-6 6m7-7H3m9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group cursor-pointer"
              >
                <div className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br ${project.gradient} p-8 hover:shadow-gray-400/20`}>
                  <div className="absolute top-4 right-4 text-white/80">
                    {project.icon}
                  </div>
                  <div className="relative z-10 flex flex-col h-full min-h-[200px]">
                    <h3 className="text-2xl font-bold mb-3 text-white mt-4">{project.title}</h3>
                    <p className="text-gray-200 text-lg mb-6 max-w-[80%]">{project.description}</p>
                    <button className="mt-auto px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 w-fit flex items-center gap-2 group">
                      Learn More 
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] opacity-[0.15]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
                className="glass-card hover-card overflow-hidden transform transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/blog/${blog.id}`} className="block">
                  <div className={`aspect-[16/9] relative ${blog.id === 'a-quick-recap-of-ai-systems' 
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600' 
                    : blog.id === 'what-comes-after-todays-ai' 
                      ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' 
                      : 'bg-gradient-to-br from-gray-700 to-gray-900'}`}
                  >
                    {/* Abstract pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
                          </pattern>
                          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#smallGrid)"/>
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                    
                    {/* Icon or symbol */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {blog.id === 'a-quick-recap-of-ai-systems' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                      ) : blog.id === 'what-comes-after-todays-ai' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Read time badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                      {blog.readTime}
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${blog.id === 'a-quick-recap-of-ai-systems' 
                      ? 'bg-amber-100 text-amber-800' 
                      : blog.id === 'what-comes-after-todays-ai' 
                        ? 'bg-indigo-100 text-indigo-800' 
                        : 'bg-gray-100 text-gray-800'}`}
                    >
                      {blog.category}
                    </span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <Link href={`/blog/${blog.id}`} className="group block">
                    <h3 className={`text-xl font-bold mb-3 group-hover:${blog.id === 'a-quick-recap-of-ai-systems' 
                      ? 'text-amber-600' 
                      : blog.id === 'what-comes-after-todays-ai' 
                        ? 'text-indigo-600' 
                        : 'text-gray-600'} transition-colors`}
                    >
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <Link 
                      href={`/blog/${blog.id}`} 
                      className={`font-medium flex items-center gap-1 ${blog.id === 'a-quick-recap-of-ai-systems' 
                        ? 'text-amber-600 hover:text-amber-700' 
                        : blog.id === 'what-comes-after-todays-ai' 
                          ? 'text-indigo-600 hover:text-indigo-700' 
                          : 'text-gray-800 hover:text-black'}`}
                    >
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-block px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all hover:scale-105">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] opacity-[0.15]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to explore possibilities,
              we&apos;re here to help turn your ideas into reality.
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}
