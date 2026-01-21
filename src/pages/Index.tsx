import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FeatureOverview from '@/components/FeatureOverview';
import { featuresData } from '@/data/featuresData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  Target,
  Sparkles,
  Shield,
  Check,
  X,
  Minus,
  Bot,
  ArrowDown,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Laptop,
  ExternalLink,
  UserCheck,
  FileText,
  Search,
  Wrench
} from 'lucide-react';

type Section = 'agenda' | 'story' | 'ai-agents' | 'features' | 'competitive-view' | 'roadmap';

const getAssetPath = (filename: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${filename}`.replace(/\/+/g, '/');
};

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('agenda');
  const [selectedFeature, setSelectedFeature] = useState('session-notes');
  const [isFutureState, setIsFutureState] = useState(true);
  const [currentStory, setCurrentStory] = useState(0);

  const sections: { id: Section; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'agenda', title: 'Agenda', icon: Calendar },
    { id: 'story', title: 'Story', icon: BookOpen },
    { id: 'ai-agents', title: 'AI Agents', icon: Bot },
    { id: 'features', title: 'Feature Overview', icon: Sparkles },
    { id: 'competitive-view', title: 'Competitive View', icon: Shield },
    { id: 'roadmap', title: 'Roadmap', icon: Target }
  ];

  const stories = [
    {
      title: "The CEO's Dilemma",
      subtitle: "Making Data-Driven Decisions Without Being a Data Analyst",
      icon: TrendingUp,
      color: "bg-blue-600",
      relatedFeature: "dynamic-insights",
      relatedFeatureName: "Dynamic Insights",
      scenario: "You are the CEO of a support company, and you love metrics, but you're not a data analyst - Dynamic insights solves this problem - you use dynamic insights to look into the people who work for you (tickets/session reports), and you want to know if you need to plan capital expense of upgrading computers, so you use dynamic insights to investigate the fleet of devices under your care.",
      keyPoints: [
        { icon: Users, text: "Monitor team performance through tickets and session reports" },
        { icon: Laptop, text: "Assess device fleet health for capital planning" },
        { icon: TrendingUp, text: "Get actionable insights without data analysis expertise" }
      ],
      illustrationImage: getAssetPath('ceodilemma.png')
    },
    {
      title: "Undercover Boss",
      subtitle: "Learning the Day-to-Day Reality of Technical Support",
      icon: UserCheck,
      color: "bg-purple-600",
      relatedFeature: "session-notes",
      relatedFeatureName: "Session Notes",
      scenario: "You decide you want to learn how technicians actually do their job day to day, so you become a technician, and get a ticket. You check the related knowledge base articles and not find a solution. You create the session with the person and fix the problem (turn on bluetooth). Next you look at the session notes that AI created for you, and to make your life easier create KB article for next time.",
      keyPoints: [
        { icon: Search, text: "Search knowledge base for existing solutions before starting" },
        { icon: Wrench, text: "Resolve issues hands-on during remote support sessions" },
        { icon: FileText, text: "Automatically generate KB articles from AI session notes" }
      ],
      illustrationImage: getAssetPath('undercover.png')
    }
  ];

  const currentIndex = sections.findIndex(s => s.id === currentSection);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  const handleStoryPrevious = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    }
  };

  const handleStoryNext = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
    }
  };

  const navigateToFeature = (featureId: string) => {
    setSelectedFeature(featureId);
    setCurrentSection('features');
  };

  const navigateToStory = (storyIndex: number) => {
    setCurrentStory(storyIndex);
    setCurrentSection('story');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-slate-950 border-b border-slate-700 px-6 py-3">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Empty space for alignment */}
          </div>
          
          {/* Section Navigation */}
          <div className="flex items-center gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={currentSection === section.id ? 'default' : 'ghost'}
                  onClick={() => setCurrentSection(section.id)}
                  className={`h-9 text-xs ${
                    currentSection === section.id 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  size="sm"
                >
                  <Icon className="w-3 h-3 mr-1.5" />
                  {section.title}
                </Button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">
              {currentIndex + 1} / {sections.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {currentSection === 'agenda' && (
          <div className="flex-1 bg-black text-white flex items-center justify-center overflow-auto">
            <div className="max-w-7xl w-full px-8 py-16">
              <div className="space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4">
                  <h1 className="text-7xl font-light tracking-tight">Dresden AI Gallery Walk</h1>
                  <p className="text-xl font-light text-gray-400 tracking-wide">February 2026</p>
                </div>

                {/* Agenda Section */}
                <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto">
                  {/* Day 1 */}
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-3">
                      <h2 className="text-3xl font-light tracking-tight">Day 1</h2>
                      <p className="text-sm text-gray-500 mt-1">February 12, 2026</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">09:00 - 09:15</div>
                        <div>
                          <div className="font-light">Welcome, AI Hub Introduction</div>
                          <div className="text-sm text-gray-500 mt-1">Opening remarks & overview</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">09:15 - 11:15</div>
                        <div>
                          <div className="font-light">Condensed Gallery Walk</div>
                          <div className="text-sm text-gray-500 mt-1">Interactive AI showcase with Rich</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-orange-400/70 font-light min-w-[100px]">11:15 - 12:00</div>
                        <div>
                          <div className="font-light text-orange-300/80">Brunch</div>
                          <div className="text-sm text-orange-300/80 mt-1">Enjoy the break</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">12:00 - 13:00</div>
                        <div>
                          <div className="font-light">Town Hall</div>
                          <div className="text-sm text-gray-500 mt-1">Updates, Q&A with Rich, Olga, Joseph</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">13:30 - 14:30</div>
                        <div>
                          <div className="font-light">Team Ocean</div>
                          <div className="text-sm text-gray-500 mt-1">Pattern Detection & Analytics</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">14:45 - 15:45</div>
                        <div>
                          <div className="font-light">Team Horizon 1</div>
                          <div className="text-sm text-gray-500 mt-1">AI-Powered Documentation</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">16:00 - 17:00</div>
                        <div>
                          <div className="font-light">Team Neuron</div>
                          <div className="text-sm text-gray-500 mt-1">Virtual Technician & Resolution Agent</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-3">
                      <h2 className="text-3xl font-light tracking-tight">Day 2</h2>
                      <p className="text-sm text-gray-500 mt-1">February 13, 2026</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">09:00 - 10:00</div>
                        <div>
                          <div className="font-light">Team Alligators</div>
                          <div className="text-sm text-gray-500 mt-1">Software usage, device data</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">10:15 - 11:30</div>
                        <div>
                          <div className="font-light">Tiger Team</div>
                          <div className="text-sm text-gray-500 mt-1">Overview of AI in Rescue</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-orange-400/70 font-light min-w-[100px]">11:30 - 13:00</div>
                        <div>
                          <div className="font-light text-orange-300/80">Lunch</div>
                          <div className="text-sm text-orange-300/80 mt-1">Enjoy the break</div>
                        </div>
                      </div>
                      <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                        <div className="text-gray-500 font-light min-w-[100px]">13:00 - 14:00</div>
                        <div>
                          <div className="font-light">Recap & Brainstorming</div>
                          <div className="text-sm text-gray-500 mt-1">Wrap-up, takeaways & next steps</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'story' && (
          <div className="flex-1 bg-slate-900 overflow-auto p-8">
            <div className="max-w-6xl mx-auto">
              {/* Story Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${stories[currentStory].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {(() => {
                      const StoryIcon = stories[currentStory].icon;
                      return <StoryIcon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">{stories[currentStory].title}</h1>
                    <p className="text-sm text-slate-400">{stories[currentStory].subtitle}</p>
                  </div>
                </div>
                
                {/* Story Selector */}
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300" onClick={handleStoryPrevious} disabled={currentStory === 0}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {stories.map((story, index) => {
                    const Icon = story.icon;
                    return (
                      <Button
                        key={index}
                        variant={currentStory === index ? 'default' : 'outline'}
                        onClick={() => setCurrentStory(index)}
                        className={`h-8 text-xs ${
                          currentStory === index 
                            ? `${story.color} text-white hover:opacity-90` 
                            : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300'
                        }`}
                        size="sm"
                      >
                        <Icon className="w-3 h-3 mr-1" />
                        Story {index + 1}
                      </Button>
                    );
                  })}
                  <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300" onClick={handleStoryNext} disabled={currentStory === stories.length - 1}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Illustration */}
                  <Card className="bg-slate-800 border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-white">Visual Story</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white rounded-lg p-6 border border-slate-700">
                        <img 
                          src={stories[currentStory].illustrationImage} 
                          alt={stories[currentStory].title}
                          className="w-full h-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Scenario */}
                  <Card className="bg-slate-800 border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-white">The Scenario</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {stories[currentStory].scenario}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Key Capabilities */}
                  <Card className="bg-slate-800 border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-white">Key Capabilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {stories[currentStory].keyPoints.map((point, index) => {
                          const PointIcon = point.icon;
                          return (
                            <div
                              key={index}
                              className="flex items-start gap-3 bg-slate-900 rounded-lg p-3 border border-slate-700"
                            >
                              <div className={`w-8 h-8 ${stories[currentStory].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <PointIcon className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                                {point.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* AI Features Used */}
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <div className="bg-slate-900 rounded p-4 border border-slate-700">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                            AI Features Used
                          </h3>
                        </div>
                        <button
                          onClick={() => navigateToFeature(stories[currentStory].relatedFeature!)}
                          className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 rounded-lg p-3 border border-slate-600 hover:border-blue-500 transition-all group"
                        >
                          <span className="text-sm font-medium text-white">
                            {stories[currentStory].relatedFeatureName}
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Story Badge */}
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <div className={`${stories[currentStory].color} bg-opacity-20 border-l-4 ${stories[currentStory].color.replace('bg-', 'border-')} rounded p-4`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`${stories[currentStory].color} text-white`}>
                            Story {currentStory + 1} of {stories.length}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400">
                          This story demonstrates how AI-powered features solve real-world challenges in technical support operations.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'ai-agents' && (
          <div className="flex-1 bg-slate-900 overflow-auto flex flex-col">
            {/* Toggle at the very top */}
            <div className="bg-slate-900 border-b border-slate-700 py-4">
              <div className="flex items-center justify-center gap-3">
                <span className={`text-sm font-medium ${!isFutureState ? 'text-white' : 'text-slate-500'}`}>
                  Current State
                </span>
                <button
                  onClick={() => setIsFutureState(!isFutureState)}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                    isFutureState ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      isFutureState ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isFutureState ? 'text-white' : 'text-slate-500'}`}>
                  Future State
                </span>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-8 flex items-center justify-center">
              <div className="max-w-7xl w-full">
                {/* Unified Architecture with Animations */}
                <div className="relative">
                  {/* Entrypoints - Purple - Top */}
                  <div className="mb-0">
                    <div className="relative border-2 border-dashed border-purple-500/50 rounded-xl bg-purple-900/10 p-6 transition-all duration-700 ease-in-out w-fit mx-auto">
                      <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                        <span className="text-xs font-semibold text-purple-400">
                          {isFutureState ? 'ENTRYPOINTS' : 'ENTRYPOINT'}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {/* Ticket - Always visible, stays in position */}
                        <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 transition-all duration-500 hover:shadow-lg hover:shadow-purple-900/50">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Ticket</h4>
                            </div>
                          </CardContent>
                        </Card>
                        
                        {/* Device - Fades in */}
                        <div className={`transition-all duration-700 ease-in-out ${
                          isFutureState ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 hover:shadow-lg hover:shadow-purple-900/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <h4 className="text-sm font-bold text-white">Device</h4>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        {/* Alert - Fades in with delay */}
                        <div className={`transition-all duration-700 delay-100 ease-in-out ${
                          isFutureState ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 hover:shadow-lg hover:shadow-purple-900/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <h4 className="text-sm font-bold text-white">Alert</h4>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        {/* AI Agent - Fades in with more delay */}
                        <div className={`transition-all duration-700 delay-200 ease-in-out ${
                          isFutureState ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 hover:shadow-lg hover:shadow-purple-900/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <h4 className="text-sm font-bold text-white">AI Agent</h4>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down from Entrypoints to Orchestration */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <ArrowDown className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>

                  {/* Middle Row: Diagnostics, Resolution Agent */}
                  <div className="grid grid-cols-3 gap-8 items-center">
                    {/* Diagnostics - Green - Left */}
                    <div className="flex justify-end">
                      <div className="relative border-2 border-dashed border-green-500/50 rounded-xl bg-green-900/10 p-6 transition-all duration-700 ease-in-out w-fit">
                        <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                          <span className="text-xs font-semibold text-green-400">DIAGNOSTICS</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          {/* Device Data - Always visible, stays in position */}
                          <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700 transition-all duration-500 hover:shadow-lg hover:shadow-green-900/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <h4 className="text-sm font-bold text-white">Device Data</h4>
                              </div>
                            </CardContent>
                          </Card>
                          
                          {/* Knowledge Base - Always visible, stays in position */}
                          <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700 transition-all duration-500 hover:shadow-lg hover:shadow-green-900/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <h4 className="text-sm font-bold text-white">Knowledge Base</h4>
                              </div>
                            </CardContent>
                          </Card>
                          
                          {/* Session Insights - Fades in */}
                          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                            isFutureState ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'
                          }`}>
                            <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700 hover:shadow-lg hover:shadow-green-900/50">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <h4 className="text-sm font-bold text-white">Session Insights</h4>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resolution Agent - Red - Center */}
                    <div className="relative">
                      {/* Arrow from Orchestration to Diagnostics (pointing left) */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full flex items-center">
                        <ArrowRight className="w-8 h-8 text-green-400 rotate-180" />
                      </div>
                      
                      <div className="relative border-2 border-dashed border-red-500/50 rounded-xl p-6 bg-red-900/10 transition-all duration-500">
                        <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                          <span className="text-xs font-semibold text-red-400">ORCHESTRATION</span>
                        </div>
                        <Card className="bg-gradient-to-br from-red-900/60 to-red-800/40 border-red-700 transition-all duration-500 hover:shadow-xl hover:shadow-red-900/50">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className={`w-2 h-2 bg-red-500 rounded-full ${isFutureState ? 'animate-pulse' : ''}`}></div>
                              <h4 className="text-sm font-bold text-white">Resolution Agent</h4>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div></div>
                  </div>

                  {/* Arrow Down from Orchestration to Actions */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <ArrowDown className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>

                  {/* Actions - Blue - Bottom Center */}
                  <div className="flex justify-center">
                    <div className="relative border-2 border-dashed border-blue-500/50 rounded-xl p-6 bg-blue-900/10 transition-all duration-700 ease-in-out w-fit">
                      <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                        <span className="text-xs font-semibold text-blue-400">ACTIONS</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {/* Remote Execution - Always visible, stays in position */}
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/50">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Remote Execution</h4>
                            </div>
                          </CardContent>
                        </Card>
                        
                        {/* Virtual Technician - Always visible, stays in position */}
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/50">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Virtual Technician</h4>
                            </div>
                          </CardContent>
                        </Card>
                        
                        {/* AV Scan - Fades in */}
                        <div className={`transition-all duration-700 ease-in-out ${
                          isFutureState ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 hover:shadow-lg hover:shadow-blue-900/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <h4 className="text-sm font-bold text-white">AV Scan</h4>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        {/* Patching - Fades in with delay */}
                        <div className={`transition-all duration-700 delay-100 ease-in-out ${
                          isFutureState ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 hover:shadow-lg hover:shadow-blue-900/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <h4 className="text-sm font-bold text-white">Patching</h4>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'features' && (
          <FeatureOverview 
            features={featuresData}
            selectedFeature={selectedFeature}
            onFeatureChange={setSelectedFeature}
            onNavigateToStory={navigateToStory}
          />
        )}

        {currentSection === 'competitive-view' && (
          <div className="h-full overflow-auto p-8 bg-slate-900">
            <div className="max-w-[1600px] mx-auto space-y-8">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-white mb-3">Competitive Analysis</h2>
                <p className="text-lg text-slate-300">AI Feature Comparison Across Remote Support Platforms</p>
              </div>

              {/* Section 1: Comprehensive Comparison Table */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">AI Capabilities Comparison Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-600">
                          <th className="text-left py-3 px-4 text-slate-400 font-semibold">Capability</th>
                          <th className="py-3 px-4 bg-blue-900/30 text-blue-300 font-bold">LogMeIn Resolve</th>
                          <th className="py-3 px-4 text-slate-300">TeamViewer</th>
                          <th className="py-3 px-4 text-slate-300">AnyDesk</th>
                          <th className="py-3 px-4 text-slate-300">ConnectWise</th>
                          <th className="py-3 px-4 text-slate-300">Splashtop</th>
                          <th className="py-3 px-4 text-slate-300">RemotePC</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-200">
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">AI Session Notes</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Check className="w-5 h-5 text-yellow-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Minus className="w-5 h-5 text-slate-500 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">Real-time Pattern Detection</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">AI-Guided Diagnostics</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Minus className="w-5 h-5 text-slate-500 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Minus className="w-5 h-5 text-slate-500 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">Predictive Analytics</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">Automated Knowledge Base</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Minus className="w-5 h-5 text-slate-500 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Check className="w-5 h-5 text-yellow-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">Multi-language AI Support</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Check className="w-5 h-5 text-yellow-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Minus className="w-5 h-5 text-slate-500 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">Custom AI Training</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                          <td className="py-3 px-4 font-medium">API Integration</td>
                          <td className="py-3 px-4 bg-blue-900/20 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Minus className="w-5 h-5 text-slate-500 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Minus className="w-5 h-5 text-slate-500 mx-auto" />
                          </td>
                          <td className="py-3 px-4 text-center">
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex items-center gap-6 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Full Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Minus className="w-4 h-4 text-slate-500" />
                      <span>Partial/Limited</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      <span>Not Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Per-Feature Competitive Analysis */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Feature-by-Feature Breakdown</h3>

                {/* Session Notes */}
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Session Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-blue-300">LogMeIn Resolve</h4>
                          <Badge className="bg-green-600">Leader</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p><strong className="text-white">2M+</strong> notes generated</p>
                          <p><strong className="text-white">12%</strong> adoption rate</p>
                          <p><strong className="text-white">Auto-summarization</strong> with context</p>
                          <p><strong className="text-white">Multi-language</strong> support</p>
                        </div>
                      </div>
                      <div className="bg-slate-750 border border-slate-600 rounded-lg p-4 opacity-80">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-300">TeamViewer</h4>
                          <Badge variant="outline" className="text-yellow-400 border-yellow-400">Competitor</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-400">
                          <p><strong className="text-slate-300">800K</strong> notes generated</p>
                          <p><strong className="text-slate-300">8%</strong> adoption rate</p>
                          <p><strong className="text-slate-300">Basic summarization</strong></p>
                          <p><strong className="text-slate-300">Limited languages</strong></p>
                        </div>
                      </div>
                      <div className="bg-slate-750 border border-slate-600 rounded-lg p-4 opacity-60">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-400">Others</h4>
                          <Badge variant="outline" className="text-red-400 border-red-400">No Support</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-500">
                          <p>AnyDesk: Not available</p>
                          <p>ConnectWise: Planned</p>
                          <p>Splashtop: Not available</p>
                          <p>RemotePC: Not available</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Dynamic Insights */}
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Dynamic Insights & Pattern Detection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-purple-300">LogMeIn Resolve</h4>
                          <Badge className="bg-green-600">Exclusive</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p><strong className="text-white">Real-time</strong> anomaly detection</p>
                          <p><strong className="text-white">94%</strong> prediction accuracy</p>
                          <p><strong className="text-white">Automated</strong> root cause analysis</p>
                          <p><strong className="text-white">Proactive</strong> issue prevention</p>
                        </div>
                      </div>
                      <div className="bg-slate-750 border border-slate-600 rounded-lg p-4 opacity-60">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-400">All Competitors</h4>
                          <Badge variant="outline" className="text-red-400 border-red-400">Not Available</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-500">
                          <p>No real-time pattern detection</p>
                          <p>Manual analysis required</p>
                          <p>Reactive approach only</p>
                          <p>Limited analytics capabilities</p>
                        </div>
                      </div>
                      <div className="bg-slate-750 border border-slate-600 rounded-lg p-4 opacity-40">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-500">Market Gap</h4>
                          <Badge variant="outline" className="text-slate-500 border-slate-500">Opportunity</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p>Unique differentiator</p>
                          <p>High customer demand</p>
                          <p>Significant value add</p>
                          <p>Competitive moat</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Virtual Technician */}
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Virtual Technician (AI-Guided Diagnostics)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-green-300">LogMeIn Resolve</h4>
                          <Badge className="bg-green-600">Leader</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p><strong className="text-white">96%</strong> diagnostic accuracy</p>
                          <p><strong className="text-white">91%</strong> time reduction</p>
                          <p><strong className="text-white">12K+</strong> issues resolved/month</p>
                          <p><strong className="text-white">Contextual</strong> guidance</p>
                        </div>
                      </div>
                      <div className="bg-slate-750 border border-slate-600 rounded-lg p-4 opacity-70">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-300">TeamViewer & ConnectWise</h4>
                          <Badge variant="outline" className="text-yellow-400 border-yellow-400">Limited</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-400">
                          <p>Basic diagnostic tools</p>
                          <p>Manual troubleshooting steps</p>
                          <p>No AI-powered guidance</p>
                          <p>Static knowledge base</p>
                        </div>
                      </div>
                      <div className="bg-slate-750 border border-slate-600 rounded-lg p-4 opacity-60">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-400">Others</h4>
                          <Badge variant="outline" className="text-red-400 border-red-400">No Support</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-slate-500">
                          <p>AnyDesk: Not available</p>
                          <p>Splashtop: Not available</p>
                          <p>RemotePC: Not available</p>
                          <p>Manual diagnostics only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'roadmap' && (
          <div className="h-full overflow-auto p-8 bg-slate-900">
            <div className="max-w-6xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-3">Product Roadmap</h2>
                <p className="text-lg text-slate-300">Upcoming AI Innovations - 2025</p>
              </div>

              <div className="space-y-4">
                <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Q1 2025: Improving Existing Features, Agentic Levelup & AI Patching</CardTitle>
                      <Badge className="bg-blue-600">In Development</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p className="mb-3">Enhancing current capabilities and introducing intelligent automation</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Resolution Agent</li>
                      <li>Awareness & Adoption Improvements</li>
                      <li>AI Patching: Post-Deployment Failure Analysis</li>
                      <li>AI Patching: Pre-Deployment CVE Score & Sentiment Analysis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Q2 2025: AI-Powered Automation Engine</CardTitle>
                      <Badge className="bg-purple-600">Planning</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p className="mb-3">Intelligent automation of routine support tasks and workflows</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Self-healing systems</li>
                      <li>Automated ticket resolution</li>
                      <li>Smart escalation routing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Q3 2025: Natural Language Interface</CardTitle>
                      <Badge className="bg-green-600">Research</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p className="mb-3">Conversational AI for intuitive system interaction and support</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Voice-activated commands</li>
                      <li>Natural language queries</li>
                      <li>Multi-language support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-yellow-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Q4 2025: Predictive Capacity Planning</CardTitle>
                      <Badge className="bg-yellow-600">Concept</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p className="mb-3">AI-driven resource optimization and capacity forecasting</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Workload prediction</li>
                      <li>Resource allocation optimization</li>
                      <li>Cost efficiency analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-slate-950 border-t border-slate-700 px-6 py-3">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-blue-500' 
                    : index < currentIndex 
                    ? 'w-2 bg-green-500' 
                    : 'w-2 bg-slate-600'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={handleNext}
            disabled={currentIndex === sections.length - 1}
            className="text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;