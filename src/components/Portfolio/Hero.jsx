import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Github, Linkedin, ExternalLink, Figma, Mail, Phone, MapPin, Terminal, Code, Zap } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/mock';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [matrixChars, setMatrixChars] = useState([]);
  const [terminalLines, setTerminalLines] = useState([]);

  const codeSnippets = [
    "const developer = 'Youssef Kandil';",
    "function buildAmazingApps() {",
    "  return creativity + code + passion;",
    "}",
    "// Ready to create something epic!"
  ];

  const fullText = `Hello World! I'm ${personalInfo.name}`;

  useEffect(() => {
    // Typing animation
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Matrix effect
    const chars = '01';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(0);

    const matrixInterval = setInterval(() => {
      const newChars = [];
      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.98) {
          newChars.push({
            char: chars[Math.floor(Math.random() * chars.length)],
            x: i * 20,
            y: Math.random() * window.innerHeight,
            opacity: Math.random()
          });
        }
      }
      setMatrixChars(prev => [...prev.slice(-50), ...newChars]);
    }, 100);

    // Terminal animation
    const terminalCommands = [
      '> whoami',
      'youssef@frontend-dev',
      '> ls -la skills/',
      'react.js    javascript    python    css3',
      '> git status',
      'On branch main - Ready to deploy! 🚀',
      '> npm run build-future',
      'Building something amazing... ✨'
    ];

    let terminalIndex = 0;
    const terminalInterval = setInterval(() => {
      if (terminalIndex < terminalCommands.length) {
        setTerminalLines(prev => [...prev, terminalCommands[terminalIndex]]);
        terminalIndex++;
      } else {
        setTerminalLines([]);
        terminalIndex = 0;
      }
    }, 1500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
      clearInterval(matrixInterval);
      clearInterval(terminalInterval);
    };
  }, []);

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    figma: Figma,
    'external-link': ExternalLink
  };

  const handleDownloadCV = () => {
    console.log('CV download initiated');
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Matrix Background */}
      <div className="absolute inset-0">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-green-400 font-mono text-sm pointer-events-none"
            style={{
              left: `${char.x}px`,
              top: `${char.y}px`,
              opacity: char.opacity,
              animation: `fall ${Math.random() * 3 + 2}s linear infinite`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Neon Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse border border-blue-500/20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 border border-purple-500/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000 border border-green-500/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-4 mt-10">
            {/* Terminal Header */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-t-lg border border-gray-700 p-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">frontend-developer.js</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="bg-black/90 backdrop-blur-sm rounded-b-lg border-l border-r border-b border-gray-700 p-6 font-mono text-sm mt-0">
              <div className="space-y-2">
                <div className="text-green-400">
                  {typedText}
                  {showCursor && <span className="animate-ping">|</span>}
                </div>
                <div className="text-cyan-400">
                  console.log("Frontend Developer");
                </div>
                <div className="text-yellow-400">
                  // Located in {personalInfo.location}
                </div>
                <div className="text-purple-400">
                  status: "Available for Work" ✨
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500/20 border-green-500/50 text-green-400 px-4 py-2 animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                Ready to Code
              </Badge>
              <Badge className="bg-blue-500/20 border-blue-500/50 text-blue-400 px-4 py-2">
                <Terminal className="w-4 h-4 mr-2" />
                Full Stack Ready
              </Badge>
            </div>

            {/* Description */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2 text-cyan-400" />
                About This Developer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.objective}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleContactMe}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/40"
              >
                <Mail className="w-5 h-5 mr-2" />
                Initialize Contact
              </Button>
              <Button
                onClick={handleDownloadCV}
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-6 text-lg font-semibold rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 hover:bg-gray-800/90 group"
                  >
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Live Terminal */}
          <div className="space-y-6 mt-8">
            {/* Live Terminal */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono">Live Terminal</span>
              </div>
              <div className="bg-black/50 rounded p-4 h-64 overflow-hidden">
                <div className="font-mono text-sm space-y-1">
                  {terminalLines.map((line, index) => {
                    if (typeof line !== 'string') return null;
                    return (
                      <div key={index} className={`${line.startsWith('>') ? 'text-cyan-400' :
                          line.includes('youssef') ? 'text-yellow-400' :
                            line.includes('✨') || line.includes('🚀') ? 'text-purple-400' :
                              'text-green-400'
                        } animate-fadeIn`}>
                        {line}
                      </div>
                    );
                  })}
                  <div className="text-cyan-400 animate-pulse">
                    <span>{'>'}</span>
                    <span className="animate-ping">_</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Preview */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-mono">Code Preview</span>
              </div>
              <div className="bg-black/50 rounded p-4">
                <div className="font-mono text-sm space-y-1">
                  {codeSnippets.map((line, index) => (
                    <div key={index} className={`${line.includes('const') || line.includes('function') ? 'text-purple-400' :
                        line.includes('//') ? 'text-gray-500' :
                          line.includes("'") ? 'text-green-400' :
                            line.includes('return') ? 'text-cyan-400' :
                              'text-yellow-400'
                      } transition-all duration-300 hover:text-white cursor-pointer`}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;