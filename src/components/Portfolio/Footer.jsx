import React from 'react';
import { Badge } from '../ui/badge';
import { Github, Linkedin, ExternalLink, Figma, Heart, Terminal, Code, Coffee } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/mock';

const Footer = () => {
  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    figma: Figma,
    'external-link': ExternalLink
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h3>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                  <span className="text-green-400">// </span>
                  Frontend Developer passionate about creating beautiful, 
                  functional web experiences that make a difference in the digital world.
                </p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-card/80 border border-border hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground font-mono flex items-center">
                <Code className="w-5 h-5 mr-2 text-cyan-400" />
                Navigation
              </h4>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                <ul className="space-y-2">
                  {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-muted-foreground hover:text-cyan-500 transition-colors font-mono text-sm"
                      >
                        {item.toLowerCase()}()
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Status & Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground font-mono flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-green-400" />
                Status
              </h4>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="space-y-3">
                  <Badge className="bg-green-500/20 border-green-500/40 text-green-400 font-mono">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Available
                  </Badge>
                  <Badge className="bg-blue-500/20 border-blue-500/40 text-blue-400 font-mono">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                    Open Source
                  </Badge>
                  <div className="text-sm text-muted-foreground font-mono space-y-1">
                    <p>Location: {personalInfo.location}</p>
                    <p>Graduating: June 2025</p>
                    <p>Focus: Frontend Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground text-sm ml-4 font-mono">footer.terminal</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">$</span>
                  <span className="text-muted-foreground">echo "© {currentYear} {personalInfo.name}"</span>
                </div>
                <div className="text-muted-foreground">© {currentYear} {personalInfo.name}. All rights reserved.</div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">$</span>
                  <span className="text-muted-foreground">cat tech_stack.txt</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span>Built with</span>
                  <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
                  <span>using React & Tailwind CSS</span>
                  <Coffee className="w-4 h-4 text-yellow-500 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(1deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;