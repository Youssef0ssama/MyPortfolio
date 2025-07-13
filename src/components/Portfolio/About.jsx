import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { GraduationCap, Code2, Target, Calendar, Terminal, Book, Award, Database, Zap } from 'lucide-react';
import { education, certificates } from '../../data/mock';

const About = () => {
  const [typedBio, setTypedBio] = useState('');
  const [currentCert, setCurrentCert] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const bioText = `
class Developer {
  constructor() {
    this.name = "Youssef Kandil";
    this.location = "Alexandria, Egypt";
    this.university = "Alexandria University";
    this.college = "Faculty of Science";
    this.education = "Computer Science (SIM) ";
  }
}
const youssef = new Developer();`;

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < bioText.length) {
        setTypedBio(bioText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 5);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const certInterval = setInterval(() => {
      setCurrentCert(prev => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(certInterval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-20 bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block bg-card/80 backdrop-blur-sm rounded-lg border border-border p-4 md:p-6 mb-4 md:mb-6">
              <Code2 className="w-7 h-7 md:w-8 md:h-8 text-cyan-400 mx-auto mb-3 md:mb-4" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4 font-mono">
                <span className="text-cyan-400">{'<'}</span>
                About Developer
                <span className="text-cyan-400">{' />'}</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Code Bio */}
            <div className="space-y-6">
              <Card className="bg-card/90 backdrop-blur-sm border border-border w-full">
                <CardContent className="p-0">
                  {/* Terminal Header */}
                  <div className="bg-card/80 p-3 md:p-4 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground text-xs md:text-sm ml-2 md:ml-4 font-mono">developer-profile.js</span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-2 md:p-3">
                    <div className="bg-background/50 rounded-lg p-2 md:p-2 min-h-[150px] md:min-h-[250px] max-h-[200px] md:max-h-80 overflow-y-auto">
                      <pre className="font-mono text-xs md:text-sm">
                        <code className="text-muted-foreground">
                          {typedBio.split('\n').map((line, index, arr) => (
                            <div key={index} className={`${line.includes('class') || line.includes('constructor') || line.includes('getObjective') ? 'text-purple-400' :
                              line.includes('//') ? 'text-gray-500' :
                                line.includes('this.') ? 'text-cyan-400' :
                                  line.includes('return') ? 'text-pink-400' :
                                    line.includes('const') || line.includes('new') ? 'text-blue-400' :
                                      line.includes('console.log') ? 'text-yellow-400' :
                                        line.includes('"') ? 'text-green-400' :
                                          'text-muted-foreground'
                              }`}>
                              {line || '\u00A0'}
                              {showCursor && index === arr.length - 1 && <span className="text-cyan-400 animate-pulse">|</span>}
                            </div>
                          ))}
                        </code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Status Card */}
              <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm w-full">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Terminal className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mr-2 md:mr-3" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground font-mono">Current Status</h3>
                  </div>
                  <div className="bg-background/30 rounded-lg p-3 md:p-4 border border-purple-500/20">
                    <div className="space-y-1 md:space-y-2 font-mono text-xs md:text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-green-400">Available for Work</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Graduation:</span>
                        <span className="text-cyan-400">June 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus:</span>
                        <span className="text-purple-400">Frontend Development</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Education & Certificates */}
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600 rounded-lg mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono">Education</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Academic Background</p>
                    </div>
                  </div>

                  <div className="bg-gray-100/70 dark:bg-black/30 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-mono">
                      {education.degree}
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-mono mb-1">{education.institution}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2 font-mono">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Database className="w-4 h-4 mr-2 text-yellow-500 dark:text-yellow-300" />
                      <span className="font-mono text-sm font-semibold text-yellow-800 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">
                        CGPA : {education.CGPA}
                      </span>
                    </div>
                  </div>

                  {/* Removed Key Courses section */}
                </CardContent>
              </Card>

              {/* Certificates Card */}
              <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-green-400/50 dark:hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono">Certificates</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Professional Development</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border transition-all duration-300 ${index === currentCert
                          ? 'bg-green-100/60 dark:bg-green-500/10 border-green-400/40 dark:border-green-500/40'
                          : 'bg-gray-50/60 dark:bg-gray-800/30 border-gray-200 dark:border-gray-700'
                          }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white font-mono text-sm md:text-base">
                                {cert.title}
                              </h4>
                              <span className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-mono">({cert.issuer})</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              className={`font-mono ${cert.current
                                ? 'bg-green-200/60 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-400/40 dark:border-green-500/40 animate-pulse'
                                : 'bg-gray-200/60 dark:bg-gray-600/20 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-600/40'
                                }`}
                            >
                              {cert.year}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
      `}</style>
    </section>
  );
};

export default About;