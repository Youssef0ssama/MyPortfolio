import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github, Figma, Code, Eye, Star, Terminal, Zap, Play } from 'lucide-react';
import { projects, schedsmartDarkImg, schedsmartLightImg } from '../../data/mock';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../ui/select';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [codeLines, setCodeLines] = useState([]);

  // Theme detection for SCHEDSMART image
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
      : false
  );

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    window.addEventListener('storage', updateTheme);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('storage', updateTheme);
      observer.disconnect();
    };
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured)
      : projects.filter(p => (p.technologies?.some(tech => tech?.toLowerCase().includes(filter.toLowerCase()))));

  const mockCode = [
    'import React from "react";',
    'import { useState, useEffect } from "react";',
    '',
    'const ProjectShowcase = () => {',
    '  const [projects, setProjects] = useState([]);',
    '  const [loading, setLoading] = useState(true);',
    '',
    '  useEffect(() => {',
    '    fetchProjects().then(data => {',
    '      setProjects(data);',
    '      setLoading(false);',
    '    });',
    '  }, []);',
    '',
    '  return (',
    '    <div className="project-grid">',
    '      {projects.map(project => (',
    '        <ProjectCard key={project.id} {...project} />',
    '      ))}',
    '    </div>',
    '  );',
    '};'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < mockCode.length) {
        setCodeLines(prev => [...prev, mockCode[index]]);
        index++;
      } else {
        setCodeLines([]);
        index = 0;
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    } else if (project.figmaUrl) {
      window.open(project.figmaUrl, '_blank');
    }
  };

  const getProjectIcon = (project) => {
    if (project.technologies?.includes('React.js')) return '⚛️';
    if (project.technologies?.includes('Node.js')) return '🟢';
    if (project.technologies?.includes('Figma')) return '🎨';
    return '💻';
  };

  return (
    <section id="projects" className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6 mb-6">
              <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-card-foreground mb-4 font-mono">
                <span className="text-cyan-400">{'<'}</span>
                Featured Projects
                <span className="text-cyan-400">{' />'}</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Code Preview Section */}
          <div className="w-100 text-center mb-16">
            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6 text-center">
                <h3 className="text-xl font-bold text-card-foreground mb-4 inline-flex items-center">
                  <Code className="w-5 h-5 mr-2 text-cyan-400" />
                  Filter Projects
                </h3>
                {/* Responsive Filter: Dropdown on small screens, buttons on md+ */}
                {/* Dropdown for small screens */}
                <div className="flex justify-center md:hidden">
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger
                      className={`w-56 font-mono border border-border transition-all duration-300
                        ${filter !== 'all'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-card/80 text-card-foreground hover:text-cyan-500 hover:bg-card/90'}
                      `}
                    >
                      <SelectValue placeholder="Select filter..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">show_all()</SelectItem>
                      <SelectItem value="featured">filter_featured()</SelectItem>
                      <SelectItem value="react">filter_react()</SelectItem>
                      <SelectItem value="javascript">filter_javascript()</SelectItem>
                      <SelectItem value="figma">filter_figma()</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Button group for md+ screens */}
                <div
                  className="hidden md:flex flex-row gap-3 flex-wrap justify-center px-1 w-full max-w-full"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {['all', 'featured', 'react', 'javascript', 'figma'].map((filterType) => (
                    <Button
                      key={filterType}
                      onClick={() => setFilter(filterType)}
                      className={`min-w-[120px] px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 border border-border
                        ${filter === filterType
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                          : "bg-card/80 text-card-foreground hover:text-cyan-500 hover:bg-card/90"}
                      `}
                    >
                      {filterType === 'all' ? 'show_all()' : `filter_${filterType}()`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group relative bg-card/90 backdrop-blur-sm border border-border hover:border-cyan-400 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer w-full max-w-md"
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Terminal Header */}
                <div className="bg-card/80 p-3 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.featured && (
                        <Badge className="bg-yellow-500/20 border-yellow-500/40 text-yellow-400 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <div className="text-2xl">{getProjectIcon(project)}</div>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3] w-full">
                  <img
                    src={
                      project.title === 'SCHEDSMART'
                        ? (isDark ? schedsmartLightImg : schedsmartDarkImg)
                        : project.image
                    }
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Code Overlay */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-12 h-12 text-cyan-400 mx-auto mb-2 animate-pulse" />
                        <p className="text-cyan-400 font-mono text-sm">Execute Project</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center space-x-2 mb-3">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-cyan-400 transition-colors font-mono">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="bg-background/30 rounded p-3 mb-4 border border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed font-mono">
                      <span className="text-green-400">// </span>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-card/80 text-muted-foreground hover:bg-cyan-100 hover:text-cyan-700 transition-colors font-mono text-xs border border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 font-mono"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        run_live()
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 font-mono"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        view_code()
                      </Button>
                    )}
                    {project.figmaUrl && (
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 font-mono"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.figmaUrl, '_blank');
                        }}
                      >
                        <Figma className="w-4 h-4 mr-2" />
                        open_design()
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-mono font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <Zap className="w-5 h-5 mr-2" />
              load_more_projects()
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;