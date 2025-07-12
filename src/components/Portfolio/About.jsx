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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2 md:mb-4 font-mono">
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
                  <div className="p-2 md:p-3">
                    <div className="bg-black/50 rounded-lg p-2 md:p-2 min-h-[150px] md:min-h-[250px] max-h-[200px] md:max-h-80 overflow-y-auto">
                      <pre className="font-mono text-xs md:text-sm">
                        <code className="text-gray-300">
                          {typedBio.split('\n').map((line, index, arr) => (
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

            {/* Right Side - Skills/Features Grid */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                  <CardContent className="p-5 flex flex-col items-start">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mb-4">
                      <Code2 className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Frontend Development</h3>
                    <p className="text-gray-300 text-sm">Building responsive websites with HTML, CSS, and JavaScript</p>
                  </CardContent>
                </Card>
                {/* Card 2 */}
                <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mb-4">
                      <Terminal className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">React Applications</h3>
                    <p className="text-gray-300 text-sm">Developing interactive UIs using React framework</p>
                  </CardContent>
                </Card>
                {/* Card 3 */}
                <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mb-4">
                      <Book className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Mobile-First Design</h3>
                    <p className="text-gray-300 text-sm">Creating responsive interfaces for all devices</p>
                  </CardContent>
                </Card>
                {/* Card 4 */}
                <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mb-4">
                      <Database className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Database Integration</h3>
                    <p className="text-gray-300 text-sm">Working with MySQL for data management</p>
                  </CardContent>
                </Card>
                {/* Card 5 */}
                <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mb-4">
                      <Zap className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Version Control</h3>
                    <p className="text-gray-300 text-sm">Utilizing Git for collaborative development</p>
                  </CardContent>
                </Card>
                {/* Card 6 */}
                <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mb-4">
                      <Award className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">UI/UX Design</h3>
                    <p className="text-gray-300 text-sm">Designing interfaces with Figma and Illustrator</p>
                  </CardContent>
                </Card>
              </div>
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