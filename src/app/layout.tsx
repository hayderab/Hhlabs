import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H&H Labs - AI Solutions & Integration",
  description: "Pioneering the future of AI with custom solutions, integration, and automation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navigation />
        {children}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">H&H Labs</h3>
                <p className="text-gray-400">
                  Pioneering the future of AI solutions
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Email: contact@hhlabs.ai<br />
                  Location: Silicon Valley
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
              {new Date().getFullYear()} H&H Labs. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
