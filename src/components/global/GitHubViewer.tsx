import * as React from 'react';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaFile, FaChevronLeft, FaLink } from 'react-icons/fa';
import { userConfig } from '../../config/userConfig';
import DraggableWindow from './DraggableWindow';

type FileNode = {
  name: string;
  type: 'file' | 'directory';
  children?: readonly FileNode[];
};

type ProjectStructure = {
  root: string;
  children: readonly FileNode[];
};

interface ProjectImage {
  url: string;
  alt: string;
  description?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string; // Optional
  techStack: string[];
  structure: ProjectStructure;
  images: ProjectImage[];
  _comment?: string;
}

interface GitHubViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const GitHubViewer: React.FC<GitHubViewerProps> = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [showStructure, setShowStructure] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const toggleNode = (path: string) => {
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(path)) {
      newExpandedNodes.delete(path);
    } else {
      newExpandedNodes.add(path);
    }
    setExpandedNodes(newExpandedNodes);
  };

  const renderFileTree = (node: FileNode, path: string = '') => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedNodes.has(currentPath);

    return (
      <div key={currentPath} className="ml-4">
        <div
          className="flex items-center cursor-pointer hover:bg-gray-700/50 p-1 rounded"
          onClick={() => node.type === 'directory' && toggleNode(currentPath)}
        >
          {node.type === 'directory' ? (
            <FaFolder className="text-yellow-500 mr-2" />
          ) : (
            <FaFile className="text-blue-400 mr-2" />
          )}
          <span style={{ color: 'var(--text-primary)' }}>{node.name}</span>
        </div>
        {node.type === 'directory' && isExpanded && node.children && (
          <div className="ml-4">
            {node.children.map((child) => renderFileTree(child, currentPath))}
          </div>
        )}
      </div>
    );
  };

  const renderProjectStructure = (projectStructure: ProjectStructure) => {
    // Create the root node first
    return (
      <div>
        <div className="flex items-center p-1 rounded">
          <FaFolder className="text-yellow-500 mr-2" />
          <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{projectStructure.root}</span>
        </div>
        <div className="ml-4">
          {projectStructure.children.map((child) => renderFileTree(child, projectStructure.root))}
        </div>
      </div>
    );
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowStructure(true);
    setActiveImageIndex(0);
  };

  const handleBackClick = () => {
    setShowStructure(false);
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setActiveImageIndex((prevIndex) => 
        prevIndex + 1 >= selectedProject.images.length ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setActiveImageIndex((prevIndex) => 
        prevIndex - 1 < 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  if (!isOpen) return null;

  return (
    <DraggableWindow
      title={showStructure ? selectedProject?.title || 'GitHub Projects' : 'GitHub Projects'}
      onClose={onClose}
      initialPosition={{ 
        x: Math.floor(window.innerWidth * 0.2), 
        y: Math.floor(window.innerHeight * 0.2) 
      }}
      className="w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col"
      initialSize={{ width: 800, height: 600 }}
    >
      <div className="flex flex-col flex-grow min-h-0 h-full">
        <div className="overflow-y-auto flex-grow min-h-0 p-4 md:p-6">
          {!showStructure ? (
            <>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(userConfig.projects as unknown as Project[]).map((project) => (
                  <div
                    key={project.id}
                    style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                    className={`p-4 rounded-lg cursor-pointer transition-all hover:opacity-80 border relative overflow-hidden group ${
                      project.id === 'more-projects' ? 'animate-pulse' : ''
                    }`}
                    onClick={() => handleProjectClick(project)}
                  >
                    {project.id === 'more-projects' && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 animate-pulse" />
                    )}
                    {project.id === 'more-projects' && (
                      <div className="absolute top-2 right-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                      </div>
                    )}
                    {project.images && project.images.length > 0 && (
                      <div className="w-full h-48 mb-3 overflow-hidden rounded-lg">
                        <img 
                          src={project.images[0].url} 
                          alt={project.images[0].alt} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                    <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--text-secondary)' }}
                          className="px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={userConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-blue-500"
                        style={{ color: 'var(--text-muted)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                        <span>Profile</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-blue-500"
                          style={{ color: 'var(--text-muted)' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo </span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>
              <button
                onClick={handleBackClick}
                style={{ color: 'var(--text-secondary)' }}
                className="flex items-center gap-2 hover:opacity-70 mb-4 transition-opacity"
              >
                <FaChevronLeft />
                <span>Back to Projects</span>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className="rounded-lg p-4 border" 
                  style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                >
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Project Structure</h3>
                  <div className="font-mono text-sm">
                    {selectedProject && renderProjectStructure(selectedProject.structure)}
                  </div>
                </div>
                
                {selectedProject && selectedProject.images && selectedProject.images.length > 0 && (
                  <div 
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                  >
                    <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Screenshots</h3>
                    <div className="relative">
                      <div className="rounded-lg overflow-hidden mb-2">
                        <img 
                          src={selectedProject.images[activeImageIndex].url} 
                          alt={selectedProject.images[activeImageIndex].alt}
                          className="w-full object-cover" 
                        />
                      </div>
                      
                      <div className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {selectedProject.images[activeImageIndex].description}
                      </div>
                      
                      {selectedProject.images.length > 1 && (
                        <div className="flex justify-between mt-2">
                          <button 
                            onClick={handlePrevImage}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                          >
                            ←
                          </button>
                          <span style={{ color: 'var(--text-muted)' }}>
                            {activeImageIndex + 1} / {selectedProject.images.length}
                          </span>
                          <button 
                            onClick={handleNextImage}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                          >
                            →
                          </button>
                        </div>
                      )}
                    </div>
                    {userConfig.social.github && (
                      <div className="mt-4">
                        <a
                          href={userConfig.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}
                          className="flex items-center gap-2 text-sm hover:opacity-80 p-2 rounded-lg border transition-opacity"
                        >
                          <FaGithub />
                          <span>Visit GitHub Profile</span>
                        </a>
                      </div>
                    )}
                    {selectedProject.liveUrl && (
                      <div className="mt-4">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}
                          className="flex items-center gap-2 text-sm hover:opacity-80 p-2 rounded-lg border transition-opacity"
                        >
                          <FaLink />
                          <span>Visit Live Site</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </DraggableWindow>
  );
};

export default GitHubViewer; 