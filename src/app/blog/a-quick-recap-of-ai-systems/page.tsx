'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AISystemsRecap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Gradient Background */}
      <div className="w-full bg-gradient-to-r from-amber-500 to-amber-600 h-64 md:h-80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px)] bg-[size:40px] opacity-[0.3]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px] opacity-[0.3]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">AI</span>
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">Systems</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">A Quick Recap of AI Systems</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-10 relative z-20">
        <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-4 mb-8">
          <Link href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Articles
          </Link>
          <div className="flex items-center text-gray-500 text-sm">
            <span>March 22, 2025</span>
            <span className="mx-2">•</span>
            <span>7 min read</span>
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
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white">
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
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4">The Big Picture: Shift to Action-Based AI</h2>
              <p className="mb-6">
                You should have already felt that AI systems are shifting from just being passive tools to active &quot;agentic&quot; solutions. The past year saw a &quot;real acceleration&quot; in AI progress, and experts predict it will &quot;move beyond just generating text and images and morph into agents that can complete complex tasks&quot;. This leap is exciting, but some warn it could also &quot;diminish human control&quot; if left unchecked. In short, AI is no longer just answering questions – it&#39;s poised to take action in the real world.
              </p>
              <p className="mb-6">
                The real magic happens when these capabilities combine. Modern AI systems can now &quot;understand your intent, break down complex tasks, and execute them across different domains.&quot; They&#39;re becoming true assistants rather than just tools. shift: it &quot;enables AI systems to retrieve data, process information, and take action&quot; using tools like web browsers and databases. In other words, an AI agent can carry out multi-step jobs end-to-end. These agents are now seen as an &quot;active digital workforce&quot; augmenting human teams. A support bot might not only draft a reply but also send it and update records on its own, and not just through API but through a web interface.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">CUA and OpenAI&#39;s Responses API: Building Agentic AI</h2>
              <p className="mb-6">
                To develop action-oriented AI systems, many organizations are rolling out new frameworks. OpenAI, for instance, just introduced tools for agentic applications, including a Responses API that pairs GPT-style language skills with built-in web search, file handling, and a computer-using agent (CUA) to operate the software. In practice, an AI using these tools could fill out forms or update databases by itself. OpenAI also released an Agents SDK to orchestrate such workflows and made it open-source. Similarly, open-source projects like open-cuak and browser-use provide &quot;Operator&quot;-style automation without proprietary fees. These efforts lower the barrier to creating AI agents that can not only think but also act on a user&#39;s behalf.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">Large Action Models (LAMs): Beyond Language to Execution</h2>
              <p className="mb-6">
                What&#39;s fascinating is how these systems are evolving to work together. We&#39;re seeing the rise of &quot;multi-agent systems&quot; where AI entities collaborate, specialize, and even debate with each other to solve complex problems. Think of it as an &quot;AI team&quot; rather than a single assistant.guage model. Where a traditional assistant might tell you how to solve a problem, a LAM-powered system could actually carry out the solution for you. This represents a major shift, potentially allowing AI to automate entire processes rather than just generate content. LAMs do this by combining language understanding with decision-making and tool use.
              </p>
              <p className="mb-6">
                By turning AI from a passive responder into an active problem-solver, they unlock new possibilities – but also demand greater reliability, since mistakes by an agent that acts can have real consequences.
              </p>

              {/* Callout box for important concept */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded my-8">
                <p className="text-amber-800 font-medium">Key Insight</p>
                <p className="text-amber-700">LAMs represent a fundamental shift from AI that simply responds to AI that takes action in the real world.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">The Dead Internet Theory and AI Saturation</h2>
              <p className="mb-6">
                One side effect of these agentic advances is a flood of AI-generated content online. This has revived the Dead Internet Theory, which claims much of today&#39;s online content is produced by bots rather than people. In 2025, that idea feels eerily plausible. A significant portion of tweets, posts, and even news articles are now machine-generated, blurring the line between genuine human voices and automated output.
              </p>
              <p className="mb-6">
                AI bots even amplify each other&#39;s content, creating fake engagement cycles with little human involvement. As one tech journalist asked, &quot;with a large portion of the internet being AI-generated content, is a &#39;dead internet&#39; really that far off?&quot; This saturation of AI content makes it harder to know what&#39;s real online. We may need new tools to verify human-made material and keep the internet feeling &quot;alive&quot; with authentic interaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4 mt-10">Conclusion: Balancing Potential With Oversight</h2>
              <p className="mb-6">
                The most significant shift in AI is the emergence of agent-based systems. These aren&#39;t just passive tools but active participants that can &quot;plan, reason, and execute tasks with minimal human oversight&quot;. They&#39;re designed to &quot;understand your goals&quot; and take steps to achieve them, making them more like &quot;assistants with agency&quot; than traditional software.gy. On the other hand, giving AI the freedom to act means setting clear guardrails.
              </p>
              <p className="mb-6">
                As some experts warn, AI&#39;s impact could &quot;either save humanity or [gradually] destroy it&quot; depending on how responsibly we guide it. That may sound extreme, but it underscores the importance of oversight. Accordingly, developers and policymakers are crafting safety guidelines to keep agentic AI aligned with human values.
              </p>
              <p className="mb-6">
                Keeping a human in the loop for critical decisions remains vital. Ultimately, it&#39;s about balance: harnessing AI&#39;s potential to act on our behalf, while ensuring humans retain final control. If we get it right, autonomous agents could become invaluable partners – powerful, yet under human direction.
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
                href="/blog/what-comes-after-todays-ai" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <span>Read next article</span>
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
            <Link href="/blog/what-comes-after-todays-ai" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
                    AI
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">What Comes After Today's AI</h4>
                  <p className="text-sm text-gray-600 mt-2">LLMs are evolving into teams of specialised agents that plan, delegate and act.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
