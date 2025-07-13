import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Mail, Phone, MapPin, Send, CheckCircle, Terminal, Code, Zap, MessageSquare, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import { socialLinks } from '../../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [showConsole, setShowConsole] = useState(false);

  const consoleCommands = [
    'Initializing contact protocol...',
    'Checking secure connection... ✓',
    'Loading contact interface... ✓',
    'Ready to receive messages! 🚀',
    'Encryption: AES-256 enabled',
    'Response time: < 24 hours',
    'Status: Online & Available'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < consoleCommands.length) {
        setTerminalOutput(prev => [...prev, consoleCommands[index]]);
        index++;
      } else {
        setTerminalOutput([]);
        index = 0;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowConsole(true);

    // Mock form submission with console output
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setShowConsole(false);
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)
          `,
          animation: 'float 8s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6 mb-6">
              <MessageSquare className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-card-foreground mb-4 font-mono">
                <span className="text-cyan-400">{'{'}</span>
                Contact Interface
                <span className="text-cyan-400">{'}'}</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              {/* Contact Card */}
              <Card className="bg-card/90 backdrop-blur-sm border border-border hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Terminal className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-card-foreground font-mono">Contact Data</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground font-mono">email</p>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-blue-500 hover:text-blue-600 transition-colors font-mono"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground font-mono">phone</p>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="text-green-500 hover:text-green-600 transition-colors font-mono"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground font-mono">location</p>
                        <p className="text-purple-500 font-mono">{personalInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connect With Me Card (Code Theme) */}
              <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-lg">
                <CardContent className="p-0">
                  {/* Code Editor Header */}
                  <div className="bg-card/80 p-4 border-b border-border flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-muted-foreground text-sm font-mono">connect-with-me.jsx</span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-card-foreground font-mono mb-6">Connect With Me</h3>
                    <div className="flex space-x-6 mb-6">
                      <a
                        href={socialLinks.find(link => link.icon === 'github')?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-card/80 rounded-lg border border-border hover:border-cyan-400 transition-colors flex items-center justify-center shadow group"
                        aria-label="GitHub"
                      >
                        <Github className="w-8 h-8 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                      </a>
                      <a
                        href={socialLinks.find(link => link.icon === 'linkedin')?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-card/80 rounded-lg border border-border hover:border-cyan-400 transition-colors flex items-center justify-center shadow group"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                      </a>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-4 bg-card/80 rounded-lg border border-border hover:border-cyan-400 transition-colors flex items-center justify-center shadow group"
                        aria-label="Email"
                      >
                        <Mail className="w-8 h-8 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-base font-mono mt-2">
                      Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities and collaborations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Status Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card/80 border border-border backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-card-foreground font-mono text-sm">Response Time</h4>
                    <p className="text-green-500 font-mono text-xs">{'< 24 hours'}</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 border border-border backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-card-foreground font-mono text-sm">Available</h4>
                    <p className="text-cyan-500 font-mono text-xs">24/7 Online</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <Card className="bg-card/80 backdrop-blur-sm border border-border">
              <CardContent className="p-0">
                {/* Terminal Header */}
                <div className="bg-card/80 p-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground text-sm ml-4 font-mono">message-form.jsx</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Code className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-card-foreground font-mono">Send Message</h3>
                  </div>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <div className="flex items-center text-green-400 font-mono">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span>Message sent successfully! Awaiting response...</span>
                      </div>
                    </div>
                  )}

                  {showConsole && isSubmitting && (
                    <div className="mb-6 bg-black/50 rounded-lg p-4 border border-cyan-500/30">
                      <div className="font-mono text-sm space-y-1">
                        <div className="text-cyan-400">Sending message...</div>
                        <div className="text-yellow-400">Encrypting data...</div>
                        <div className="text-green-400">Connecting to server...</div>
                        <div className="text-purple-400">Message queued for delivery...</div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2 font-mono">
                          name
                        </label>
                        <Input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background border-border text-card-foreground placeholder:text-muted-foreground focus:border-cyan-400 font-mono"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2 font-mono">
                          email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background border-border text-card-foreground placeholder:text-muted-foreground focus:border-cyan-400 font-mono"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2 font-mono">
                        subject
                      </label>
                      <Input
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-background border-border text-card-foreground placeholder:text-muted-foreground focus:border-cyan-400 font-mono"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2 font-mono">
                        message
                      </label>
                      <Textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="bg-background border-border text-card-foreground placeholder:text-muted-foreground focus:border-cyan-400 resize-none font-mono"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 font-mono font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          transmitting...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          execute_send()
                        </div>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
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

export default Contact;