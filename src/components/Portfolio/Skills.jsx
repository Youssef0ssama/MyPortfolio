import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Code, Database, Wrench, Globe, Palette, Terminal, Zap, Activity } from 'lucide-react';
import { skills } from '../../data/mock';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills = {};
      skills.forEach((category) => {
        category.items.forEach((skill) => {
          newAnimatedSkills[skill.name] = skill.level;
        });
      });
      setAnimatedSkills(newAnimatedSkills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate terminal output for skills
    const allSkills = skills.flatMap(cat => cat.items.map(skill => ({ ...skill, category: cat.category })));
    
    const interval = setInterval(() => {
      if (currentSkillIndex < allSkills.length) {
        const skill = allSkills[currentSkillIndex];
        setTerminalOutput(prev => [
          ...prev,
          {
            command: `analyze_skill("${skill.name}")`,
            output: `${skill.category}: ${skill.level}% - ${skill.description}`,
            level: skill.level
          }
        ]);
        setCurrentSkillIndex(prev => prev + 1);
      } else {
        setTerminalOutput([]);
        setCurrentSkillIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSkillIndex]);

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'programming':
        return <Code className="w-6 h-6" />;
      case 'frameworks':
        return <Wrench className="w-6 h-6" />;
      case 'databases':
        return <Database className="w-6 h-6" />;
      case 'languages':
        return <Globe className="w-6 h-6" />;
      case 'tools':
        return <Palette className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'programming':
        return 'from-blue-500 to-blue-600';
      case 'frameworks':
        return 'from-green-500 to-green-600';
      case 'databases':
        return 'from-purple-500 to-purple-600';
      case 'languages':
        return 'from-orange-500 to-orange-600';
      case 'tools':
        return 'from-pink-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-purple-400 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 p-6 mb-6">
              <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">{'{'}</span>
                Skills Matrix
                <span className="text-cyan-400">{'}'}</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
              <span className="text-green-400">// </span>
              Real-time analysis of technical proficiency levels
            </p>
          </div>

          {/* Skills Dashboard */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Live Terminal */}

            {/* Skills Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6">
                {skills.map((category, categoryIndex) => (
                  <Card 
                    key={categoryIndex}
                    className={`group bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer ${
                      activeCategory === categoryIndex ? 'border-cyan-400 shadow-lg shadow-cyan-500/25' : ''
                    }`}
                    onClick={() => setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className={`p-3 bg-gradient-to-r ${getCategoryColor(category.category)} rounded-lg mr-4 text-white group-hover:scale-110 transition-transform`}>
                          {getCategoryIcon(category.category)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white font-mono">
                            {category.category}
                          </h3>
                          <p className="text-gray-400 text-sm font-mono">
                            {category.items.length} skills
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {category.items.map((skill, skillIndex) => (
                          <div key={skillIndex} className="group/skill">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-300 font-mono text-sm">
                                  {skill.name}
                                </span>
                                <Zap className="w-3 h-3 text-yellow-400 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                              </div>
                              <Badge 
                                className={`text-xs font-mono px-2 py-1 ${
                                  skill.level >= 90 ? 'bg-green-500/20 text-green-400 border-green-500/40' :
                                  skill.level >= 80 ? 'bg-blue-500/20 text-blue-400 border-blue-500/40' :
                                  skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' :
                                  'bg-purple-500/20 text-purple-400 border-purple-500/40'
                                }`}
                              >
                                <span className="font-bold mr-1">{animatedSkills[skill.name] || 0}%</span>{skill.description}
                              </Badge>
                            </div>
                            
                            <div className="relative">
                              <div className="bg-gray-800/50 rounded-full h-2 overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                                  style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                                >
                                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                </div>
                              </div>
                              {/* Removed floating percentage here */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <Card className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-400 font-mono">5+</div>
                  <div className="text-gray-400 font-mono">Languages</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-400 font-mono">10+</div>
                  <div className="text-gray-400 font-mono">Technologies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400 font-mono">3+</div>
                  <div className="text-gray-400 font-mono">Years Learning</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">continuous</span>
                <span className="text-white">.</span>
                <span className="text-purple-400">learning</span>
                <span className="text-white">()</span>
              </h3>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
                Always exploring new technologies and methodologies. Currently diving deep into 
                modern web development patterns and staying updated with the latest industry trends.
              </p>
              
              <div className="flex justify-center mt-6 space-x-4">
                <Badge className="bg-cyan-500/20 border-cyan-500/40 text-cyan-400 font-mono">
                  Full Stack Ready
                </Badge>
                <Badge className="bg-green-500/20 border-green-500/40 text-green-400 font-mono">
                  Problem Solver
                </Badge>
                <Badge className="bg-purple-500/20 border-purple-500/40 text-purple-400 font-mono">
                  Fast Learner
                </Badge>
              </div>
            </CardContent>
          </Card>
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

export default Skills;