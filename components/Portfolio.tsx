import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { FEATURED_PROJECTS, PORTFOLIO_IMAGES, SOCIAL_LINKS } from '../constants';

const Portfolio: React.FC = () => {
  const [viewState, setViewState] = useState<'preview' | 'list'>('preview');

  return (
    <section id="projects" className="min-h-screen w-full py-24 px-8 md:px-32 flex flex-col justify-center relative">
      
      {/* Container with min-height to prevent jarring layout shifts */}
      <div className="w-full max-w-7xl mx-auto transition-all duration-700 ease-in-out">
        
        {viewState === 'preview' ? (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* 3 Images Layout */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-16 w-full">
              {PORTFOLIO_IMAGES.map((src, index) => (
                <div 
                  key={index}
                  className={`relative w-full md:w-1/3 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ease-out group ${
                    index === 1 ? 'md:-translate-y-12 z-10' : 'z-0'
                  }`}
                >
                  <img 
                    src={src} 
                    alt={`Portfolio Preview ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Shadow Transition */}
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent opacity-80" />
                </div>
              ))}
            </div>

            <h2 className="font-display font-bold text-4xl md:text-6xl text-center mb-12 tracking-tighter">
              SELECTED WORKS
            </h2>

            <button
              onClick={() => setViewState('list')}
              className="bg-neutral-800 text-neutral-400 px-8 py-4 text-sm tracking-[0.2em] font-medium transition-colors hover:bg-white hover:text-black uppercase"
            >
              View Project
            </button>
          </div>
        ) : (
          <div className="w-full animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
              <div>
                <h2 className="font-display font-bold text-5xl md:text-7xl mb-4">PROJECTS</h2>
                <p className="text-gray-400 font-light max-w-md">
                  A curated selection of my work in software engineering, ranging from web applications to algorithmic trading systems.
                </p>
              </div>
              <button 
                onClick={() => setViewState('preview')}
                className="hidden md:flex text-sm tracking-widest text-gray-500 hover:text-white transition-colors"
              >
                BACK TO PREVIEW
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {FEATURED_PROJECTS.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-card p-8 hover:bg-neutral-800 transition-colors duration-300 flex flex-col justify-between h-full min-h-[300px] border border-white/5"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" size={20} />
                    </div>
                    <p className="text-gray-400 font-light text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs text-gray-500 border border-white/10 px-2 py-1 uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-black px-8 py-4 text-sm tracking-[0.2em] font-bold hover:bg-gray-200 transition-colors uppercase"
              >
                <Github size={18} />
                Visit GitHub
              </a>
              <button 
                onClick={() => setViewState('preview')}
                className="md:hidden text-sm tracking-widest text-gray-500 hover:text-white transition-colors uppercase mt-4"
              >
                Back to Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;