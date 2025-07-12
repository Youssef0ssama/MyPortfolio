import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { GraduationCap, Code2, Target, Calendar, Terminal, Book, Award } from 'lucide-react';
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
    this.education = "Computer Science Graduate ";
    this.passion = "Frontend Development";
    this.status = "Graduated jun 2025";
  }
  
  getObjective() {
    return "Building user-friendly, scalable web applications with modern technologies";
  }
}

const youssef = new Developer();
console.log(youssef.getObjective());
  `;

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < bioText.length) {
        setTypedBio(bioText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

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
    <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
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
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 mb-4 md:mb-6">
              <Code2 className="w-7 h-7 md:w-8 md:h-8 text-cyan-400 mx-auto mb-3 md:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 font-mono">
                <span className="text-cyan-400">{'<'}</span>
                About Developer
                <span className="text-cyan-400">{' />'}</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-base md:text-lg text-gray-300 max-w-xl md:max-w-2xl mx-auto font-mono">
              <span className="text-green-400">// </span>
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Code Bio */}
            <div className="space-y-6">
              <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 w-full">
                <CardContent className="p-0">
                  {/* Terminal Header */}
                  <div className="bg-gray-800/80 p-3 md:p-4 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-xs md:text-sm ml-2 md:ml-4 font-mono">developer-profile.js</span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-3 md:p-6">
                    <div className="bg-black/50 rounded-lg p-3 md:p-4 min-h-[200px] md:min-h-[384px] max-h-[300px] md:max-h-96 overflow-y-auto">
                      <pre className="font-mono text-xs md:text-sm">
                        <code className="text-gray-300">
                          {typedBio.split('\n').map((line, index) => (
                            <div key={index} className={`${line.includes('class') || line.includes('constructor') || line.includes('getObjective') ? 'text-purple-400' :
                              line.includes('//') ? 'text-gray-500' :
                                line.includes('this.') ? 'text-cyan-400' :
                                  line.includes('return') ? 'text-pink-400' :
                                    line.includes('const') || line.includes('new') ? 'text-blue-400' :
                                      line.includes('console.log') ? 'text-yellow-400' :
                                        line.includes('"') ? 'text-green-400' :
                                          'text-gray-300'
                              }`}>
                              {line || '\u00A0'}
                            </div>
                          ))}
                          {showCursor && <span className="text-cyan-400 animate-pulse">|</span>}
                        </code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-sm w-full">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mr-2 md:mr-3" />
                    <h3 className="text-lg md:text-xl font-bold text-white font-mono">Mission Statement</h3>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 md:p-4 border border-cyan-500/20">
                    <p className="text-gray-300 leading-relaxed font-mono text-sm md:text-base">
                      <span className="text-green-400">// </span>
                      To create innovative web solutions that bridge the gap between
                      creativity and functionality, delivering exceptional user experiences
                      through clean, efficient code.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Education & Certificates */}
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 w-full">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3 md:mr-4">
                      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white font-mono">Education</h3>
                      <p className="text-gray-400 font-mono text-xs md:text-sm">Academic Background</p>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-3 md:p-4 border border-gray-700">
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2 font-mono">
                      {education.degree}
                    </h4>
                    <p className="text-cyan-400 font-mono mb-1">{education.institution}</p>
                    <div className="flex items-center text-gray-400 mb-2 md:mb-4 font-mono">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{education.duration}</span>
                    </div>
                  </div>

                  <div className="mt-3 md:mt-4">
                    <h5 className="font-semibold text-white mb-2 md:mb-3 font-mono flex items-center">
                      <Book className="w-4 h-4 mr-2 text-green-400" />
                      Key Courses:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {education.courses.map((course, index) => (
                        <Badge
                          key={index}
                          className="bg-blue-500/20 text-blue-400 border-blue-500/40 font-mono text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certificates Card */}
              <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300 w-full">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mr-3 md:mr-4">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white font-mono">Certificates</h3>
                      <p className="text-gray-400 font-mono text-xs md:text-sm">Professional Development</p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className={`p-3 md:p-4 rounded-lg border transition-all duration-300 ${index === currentCert
                          ? 'bg-green-500/10 border-green-500/40'
                          : 'bg-gray-800/30 border-gray-700'
                          }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-white mb-1 font-mono text-sm md:text-base">
                              {cert.title}
                            </h4>
                            <p className="text-gray-400 text-xs md:text-sm font-mono">{cert.issuer}</p>
                          </div>
                          <div className="text-right">
                            <Badge
                              className={`font-mono text-xs md:text-sm ${cert.current
                                ? 'bg-green-500/20 text-green-400 border-green-500/40 animate-pulse'
                                : 'bg-gray-600/20 text-gray-400 border-gray-600/40'
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

              {/* Status Card */}
              <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm w-full">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Terminal className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mr-2 md:mr-3" />
                    <h3 className="text-lg md:text-xl font-bold text-white font-mono">Current Status</h3>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 md:p-4 border border-purple-500/20">
                    <div className="space-y-1 md:space-y-2 font-mono text-xs md:text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-green-400">Available for Work</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Graduation:</span>
                        <span className="text-cyan-400">June 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Focus:</span>
                        <span className="text-purple-400">Frontend Development</span>
                      </div>
                    </div>
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