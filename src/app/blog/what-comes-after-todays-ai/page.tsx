'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhatComesAfterTodaysAI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Gradient Background */}
      <div className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 h-64 md:h-80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px)] bg-[size:40px] opacity-[0.3]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px] opacity-[0.3]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">Model-Context-Protocol</span>
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">AI</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">What Comes After Today's AI</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-10 relative z-20">
        <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-4 mb-8">
          <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Articles
          </Link>
          <div className="flex items-center text-gray-500 text-sm">
            <span>March 05, 2025</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Author info at the top */}
          <div className="border-b border-gray-100 p-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white">
              <span className="text-xl font-bold">HG</span>
            </div>
            <div className="ml-4">
              <h4 className="text-md font-medium text-gray-900">Huseyn Gorbani</h4>
              <p className="text-sm text-gray-500">An AI Enthusiast :)</p>
            </div>
          </div>

          {/* Article content with improved typography and spacing */}
          <div className="p-6 md:p-8 prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4">Autonomous‑Agent "Constellations"</h2>
              <p className="mb-6">
                LLMs are evolving into teams of specialised agents that plan, delegate and act. 68% of IT leaders say they will fund autonomous‑AI tools within six months (MIT Sloan). Frameworks such as LangChain, Autogen and crewAI plus platform SDKs (OpenAI Operator, Google DeepMind Agentspace) are already turning "AI teammates" into production reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">Human‑AI Symbiosis</h2>
              <p className="mb-6">
                The new productivity model is copilot mode: AI clears the drudge work so us humans focus on creativity, judgement and empathy. McKinsey estimates a $2.6‑4.4 trillion annual upside-about the UK's GDP-once generative AI is embedded in everyday workflows (Grand View Research summary). Critical‑thinking and oversight-not routine execution-become premium human skills.
              </p>

              {/* Callout box for important concept */}
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded my-8">
                <p className="text-indigo-800 font-medium">Economic Impact</p>
                <p className="text-indigo-700">McKinsey estimates a $2.6‑4.4 trillion annual economic impact from generative AI embedded in everyday workflows.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">Embodied AI Steps Off the Page</h2>
              <p className="mb-6">
                Vision‑language transformers such as RT‑2 give robots pragmatic "common‑sense" skills, letting bipedal machines like Digit operate safely in human spaces. Agility Robotics opened the first humanoid‑robot factory, targeting 10,000 units per year, while Amazon pilots these bots in its fulfilment centres (Axios). Analysts put the 2030 embodied‑AI market near $500 billion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">Next‑Gen Architectures & Alignment</h2>
              <p className="mb-6">
                Multimodal models are now capable of processing text, images, audio, signalling a shift from single‑modality giants to mixtures‑of‑experts and neuro‑symbolic hybrids (Microsoft, 6 AI Trends for 2025). Parallel work on Constitutional AI (Anthropic) and OpenAI's Superalignment initiative aims to keep progressively more capable systems safe. Policymakers are moving too: 28 countries signed the Bletchley Declaration on frontier‑AI safety in late 2023 (Reuters).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">Compute, Data & the AGI Debate</h2>
              <p className="mb-6">
                Training GPT‑4 reportedly cost $80‑100 million, and McKinsey projects as much as $5.2 trillion will flow into AI‑centric datacentres by 2030 (McKinsey). Optimists like Sam Altman and Shane Legg assign a ~50% chance of AGI in this decade (TIME), whereas a 2022 research‑community survey centres on 2059. Whatever the timeline, scaling laws plus the new architectures above guarantee systems far beyond 2025 baselines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">Expectation</h2>
              <p className="mb-4">
                By 2030 you can expect:
              </p>
              <ul className="space-y-2 mb-6 list-disc pl-5">
                <li className="text-gray-600">Cognitive swarms of AI agents silently coordinating business workflows.</li>
                <li className="text-gray-600">Humanoid co‑workers sharing warehouse aisles and factory floors.</li>
                <li className="text-gray-600">Multimodal reasoning engines that fluidly combine language, vision and code.</li>
                <li className="text-gray-600">Alignment guard‑rails–technical and regulatory–built into every serious deployment.</li>
              </ul>
              <p className="mb-6 font-medium text-indigo-700">
                Our actionable takeaway: Skill up for a world where intelligence is everywhere. 😁
              </p>
            </motion.div>
          </div>

          {/* Share and next article section */}
          <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <Link 
                href="/blog/a-quick-recap-of-ai-systems" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <span>Read related article</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.article>

        {/* Related articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/a-quick-recap-of-ai-systems" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-amber-500 to-amber-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
                    AI
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">A Quick Recap of AI Systems</h4>
                  <p className="text-sm text-gray-600 mt-2">The past year saw a "real acceleration" in AI progress, experts predict.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
