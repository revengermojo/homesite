import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Code2, Users, Zap, Brain, Github, ExternalLink, Linkedin, Instagram, Youtube, MessageSquare } from 'lucide-react';

function TerminalText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="terminal-prompt">
      <span className="terminal-line">{displayedText}</span>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 matrix-bg">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-green-500/20">
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 glitch-text">
              RevengerMojo
            </h1>
            <div className="terminal-window mb-8">
              <TerminalText text="Building elite minds in cybersecurity. Not script kiddies — real hackers." />
            </div>
            <div className="flex gap-4">
              <button className="cyber-button" onClick={() => window.open("https://chat.whatsapp.com/FWqlgRxvSWm5KWm8Px6fNc", "_blank")}>
                <span>Join the Revolution</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why RevengerMojo?</h2>
            <div className="terminal-window">
              <TerminalText text="We're changing the face of cybersecurity by building a community that understands security at the code level — no more surface-level scanning." />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Code-Level Understanding",
                description: "Deep dive into vulnerabilities and understand the root cause."
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Elite Mindset",
                description: "Build critical thinking skills beyond copy-paste hacking."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Real Security",
                description: "Focus on practical, real-world security challenges."
              }
            ].map((item, index) => (
              <div key={index} className="cyber-card">
                <div className="mb-4 text-green-400">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center glitch-text">What We're Building</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Terminal className="w-6 h-6" />,
                title: "Bug Bounty Programs",
                description: "Access to real-world programs and opportunities."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Advanced Techniques",
                description: "Learn sophisticated hacking methodologies."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Career Opportunities",
                description: "Connect with job and internship opportunities."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Research & Write-ups",
                description: "In-depth analysis and educational content."
              }
            ].map((item, index) => (
              <div key={index} className="cyber-card flex items-start gap-4">
                <div className="text-green-400">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 glitch-text">Join the Revolution</h2>
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <TerminalText text="This is not just another hacking community. This is a movement to transform cybersecurity education and practice." />
          </div>
          <button className="cyber-button" onClick={() => window.open("https://chat.whatsapp.com/FWqlgRxvSWm5KWm8Px6fNc", "_blank")}>
            <span>Become a Member</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 py-8 border-t border-green-500/20">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <div className="flex justify-center items-center gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/company/revengermojo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/revengermojo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/RevengerMojo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              title="X (Twitter)"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCMihyYWT3opIWKpktmBIjnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a 
              href="https://revengermojo.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              title="Medium"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
            <a 
              href="https://discord.gg/z77wkbpD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              title="Discord"
            >
              <MessageSquare className="w-6 h-6" />
            </a>
          </div>
          <p>© 2025 RevengerMojo. By hackers, for hackers.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;