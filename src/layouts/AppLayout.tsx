import * as React from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MacToolbar from '../components/global/MacToolbar';
import MacTerminal from '../components/global/MacTerminal';
import MobileDock from '../components/global/MobileDock';
import DesktopDock from '../components/global/DesktopDock';
import NotesApp from '../components/global/NotesApp';
import GitHubViewer from '../components/global/GitHubViewer';
import ResumeViewer from '../components/global/ResumeViewer';
import DynamicBackground from '../components/global/DynamicBackground';
import BootSequence from '../components/global/BootSequence';
import CustomCursor from '../components/global/CustomCursor';
import SpotifyPlayer from '../components/global/SpotifyPlayer';
import { userConfig } from '../config/userConfig';

interface AppLayoutProps {
  initialBg: string;
  backgroundMap: Record<string, string>;
}

type TutorialStep = {
  title: string;
  content: string;
  action?: () => void;
  buttonText?: string;
};

export default function Desktop({ initialBg, backgroundMap }: AppLayoutProps) {
  const [currentBg, setCurrentBg] = useState<string>(initialBg);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [isBooted, setIsBooted] = useState(false);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);

  const roles = [
    "Software Engineer",
    "Computer Science Student",
    "AI/ML Enthusiast",
    "Web Developer"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const [activeApps, setActiveApps] = useState({
    terminal: false,
    notes: false,
    github: false,
    resume: false,
  });

  useEffect(() => {
    const lastBg = localStorage.getItem('lastBackground');
    const hasCompletedTutorial = localStorage.getItem('hasCompletedTutorial') === 'true';

    if (lastBg === initialBg) {
      const bgKeys = Object.keys(backgroundMap);
      const availableBgs = bgKeys.filter((bg) => bg !== lastBg);
      const newBg =
        availableBgs[Math.floor(Math.random() * availableBgs.length)];
      setCurrentBg(newBg);
    }

    // Only show tutorial if user hasn't completed it before
    if (!hasCompletedTutorial && isBooted) {
      setShowTutorial(true);
    }

    localStorage.setItem('lastBackground', currentBg);
  }, [initialBg, backgroundMap, isBooted]);

  const resetTutorial = () => {
    setCurrentTutorialStep(0);
    setShowTutorial(true);
    localStorage.setItem('hasCompletedTutorial', 'false');
  };

  const tutorialSteps: TutorialStep[] = [
    {
      title: "Welcome to My Portfolio! 👋",
      content: "This is a macOS-inspired portfolio where you can explore my work and experience. Let me guide you through some of the features!",
      action: () => handleAppOpen('notes'),
      buttonText: "Let's Begin"
    },
    {
      title: "Notes App",
      content: "This is my Notes app where you can find detailed information about my education, experience, and skills. Feel free to explore!",
      action: () => {
        handleAppOpen('github');
      },
      buttonText: "Next: Projects"
    },
    {
      title: "GitHub Projects",
      content: "Here you can browse through my projects, see their structure, and check out the code. Each project has screenshots and links to the repository.",
      action: () => {
        handleAppOpen('terminal');
      },
      buttonText: "Next: Terminal"
    },
    {
      title: "Terminal",
      content: "The terminal is an interactive way to learn more about me. Try asking questions like 'What are your skills?' or 'Tell me about your experience'",
      action: () => {
        handleAppClose('terminal');
      },
      buttonText: "Next: Explore"
    },
    {
      title: "Explore",
      content: "Now that you've seen the basics, feel free to explore the rest of the portfolio from the dock below. I've got some cool projects and information waiting for you!",
      action: () => {
        setShowTutorial(false);
      },
      buttonText: "Thanks! I Got it from here!"
    }
  ];

  const handleTutorialAction = () => {
    if (tutorialSteps[currentTutorialStep].action) {
      tutorialSteps[currentTutorialStep].action!();
    }

    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(prev => prev + 1);
    } else {
      setShowTutorial(false);
      localStorage.setItem('hasCompletedTutorial', 'true');
    }
  };

  const handleAppOpen = (app: keyof typeof activeApps) => {
    setActiveApps({
      terminal: false,
      notes: false,
      github: false,
      resume: false,
      spotify: false,
      [app]: true
    });
    
    // Sync with individual control states for animation stability
    setShowTerminal(app === 'terminal');
    setShowNotes(app === 'notes');
    setShowGitHub(app === 'github');
    setShowResume(app === 'resume');
    setShowSpotify(app === 'spotify');
  };

  const handleAppClose = (app: keyof typeof activeApps) => {
    setActiveApps(prev => ({ ...prev, [app]: false }));
    if (app === 'terminal') setShowTerminal(false);
    if (app === 'notes') setShowNotes(false);
    if (app === 'github') setShowGitHub(false);
    if (app === 'resume') setShowResume(false);
    if (app === 'spotify') setShowSpotify(false);
  };

  return (
    <>
      <BootSequence onComplete={() => setIsBooted(true)} />
      <CustomCursor />
      
      <AnimatePresence>
        {isBooted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full max-w-full h-screen overflow-hidden flex flex-col relative'
          >
            <DynamicBackground />
            
            {/* Optional backdrop image if you want to mix it with the dynamic background */}
            <div
              className='absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay pointer-events-none'
              style={{ backgroundImage: `url(${backgroundMap[currentBg]})` }}
            />

            <div className='relative z-40 flex-none'>
              <MacToolbar 
                onTerminalClick={() => handleAppOpen('terminal')} 
                onShowTutorial={resetTutorial}
              />
            </div>

            <div className='relative z-0 flex-1 flex flex-col items-center justify-center px-4 text-center overflow-hidden'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="select-none"
              >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white/40 font-medium text-2xl md:text-5xl block mb-4"
                  >
                    Hey,
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-gradient-to-r from-blue-400 via-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent pb-2"
                  >
                    This is {userConfig.name}
                  </motion.div>
                </h1>
                <div className="mt-4 flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-lg md:text-2xl text-white/70 font-semibold tracking-wider uppercase h-8 flex items-center justify-center overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentRoleIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {roles[currentRoleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <style>{`
              @keyframes text-gradient {
                0% { background-position: 0% center; }
                50% { background-position: 100% center; }
                100% { background-position: 0% center; }
              }
              .animate-text-gradient {
                animation: text-gradient 8s linear infinite;
              }
            `}</style>

            <div className="z-[100] relative">
              <MobileDock
                onGitHubClick={() => handleAppOpen('github')}
                onNotesClick={() => handleAppOpen('notes')}
                onResumeClick={() => handleAppOpen('resume')}
                onTerminalClick={() => handleAppOpen('terminal')}
              />
              <DesktopDock
                onTerminalClick={() => handleAppOpen('terminal')}
                onNotesClick={() => handleAppOpen('notes')}
                onGitHubClick={() => handleAppOpen('github')}
                onResumeClick={() => handleAppOpen('resume')}
                onSpotifyClick={() => handleAppOpen('spotify')}
                activeApps={activeApps}
              />
            </div>

            <div className="z-30 relative">
              <AnimatePresence>
                {showNotes && (
                  <NotesApp key="notes" isOpen={showNotes} onClose={() => { setShowNotes(false); handleAppClose('notes'); }} />
                )}
                {showGitHub && (
                  <GitHubViewer key="github" isOpen={showGitHub} onClose={() => { setShowGitHub(false); handleAppClose('github'); }} />
                )}
                {showResume && (
                  <ResumeViewer key="resume" isOpen={showResume} onClose={() => { setShowResume(false); handleAppClose('resume'); }} />
                )}
                {showTerminal && (
                  <MacTerminal key="terminal" isOpen={showTerminal} onClose={() => { setShowTerminal(false); handleAppClose('terminal'); }} />
                )}
              </AnimatePresence>
            </div>

            {showTutorial && (
              <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
                <div className="glass-dark text-white p-4 rounded-xl shadow-2xl max-w-xs animate-fade-in border border-white/10">
                  <h3 className="text-lg font-semibold mb-2">{tutorialSteps[currentTutorialStep].title}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {tutorialSteps[currentTutorialStep].content}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">
                      {currentTutorialStep + 1} of {tutorialSteps.length}
                    </span>
                    <button
                      onClick={handleTutorialAction}
                      className="text-sm text-blue-400 hover:text-blue-300 font-medium"
                    >
                      {tutorialSteps[currentTutorialStep].buttonText}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
