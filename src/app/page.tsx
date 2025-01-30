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
    description: "We build and set up AI models for your business. From testing to deployment, we make sure everything runs smoothly.",
    path: "ai-development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    gradient: "from-black to-gray-800"
  },
  {
    title: "Data Pipelines & Processing",
    description: "We clean, organise, and prepare your data so AI can use it properly. No messy data, no slow systems.",
    path: "data-pipelines",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    gradient: "from-gray-900 to-black"
  },
  {
    title: "Custom AI Models",
    description: "We customise AI models to fit your business so they perform better and give more accurate results.",
    path: "custom-models",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <circle cx="12" cy="9" r="3" />
      </svg>
    ),
    gradient: "from-black to-gray-800"
  },
  {
    title: "AI Automation",
    description: "Cut down on manual work with AI-powered automation. Get things done faster and more efficiently.",
    path: "ai-automation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-gray-900 to-black"
  },
  {
    title: "AI Hosting & Infrastructure",
    description: "We host and manage your AI models, whether on the cloud or your own servers, so they stay fast and reliable.",
    path: "ai-hosting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 12v8c0 1.66 4 3 9 3s9-1.34 9-3v-8" />
        <path d="M3 5v8c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    gradient: "from-black to-gray-800"
  },
  {
    title: "AI Consulting & Strategy",
    description: "Not sure where to start? We guide you on using AI the right way, from setup to long-term success.",
    path: "ai-consulting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 8v12" />
      </svg>
    ),
    gradient: "from-gray-900 to-black"
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
                className="group p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl bg-white relative overflow-hidden"
              >
                <Link href={`/services/${service.path}`} className="block">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${service.gradient}" />
                  <div className="relative z-10">
                    <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors">{service.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{service.description}</p>
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
