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
  ArrowLeft
} from 'lucide-react';

type Section = 'agenda' | 'ai-agents' | 'features' | 'competitive-view' | 'roadmap';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('agenda');
  const [selectedFeature, setSelectedFeature] = useState('session-notes');
  const [isFutureState, setIsFutureState] = useState(true);

  const sections: { id: Section; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'agenda', title: 'Agenda', icon: Calendar },
    { id: 'ai-agents', title: 'AI Agents', icon: Bot },
    { id: 'features', title: 'Feature Overview', icon: Sparkles },
    { id: 'competitive-view', title: 'Competitive View', icon: Shield },
    { id: 'roadmap', title: 'Roadmap', icon: Target }
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
          <div className="flex-1 bg-black text-white px-8 flex items-center justify-center">
            <div className="max-w-7xl w-full space-y-16">
              {/* Title Section */}
              <div className="text-center space-y-4">
                <h1 className="text-7xl font-light tracking-tight">Dresden AI Gallery Walk</h1>
                <p className="text-xl font-light text-gray-400 tracking-wide">February 2026</p>
              </div>

              {/* Agenda Section */}
              <div className="grid grid-cols-2 gap-12">
                {/* Day 1 */}
                <div className="space-y-6">
                  <div className="border-b border-gray-800 pb-3">
                    <h2 className="text-3xl font-light tracking-tight">Day 1</h2>
                    <p className="text-sm text-gray-500 mt-1">February 12, 2026</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">09:00</div>
                      <div>
                        <div className="font-light">Welcome & Opening Remarks</div>
                        <div className="text-sm text-gray-500 mt-1">Introduction to AI Innovation</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">10:00</div>
                      <div>
                        <div className="font-light">Session Notes Deep Dive</div>
                        <div className="text-sm text-gray-500 mt-1">AI-powered documentation</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">11:30</div>
                      <div>
                        <div className="font-light">Dynamic Insights Showcase</div>
                        <div className="text-sm text-gray-500 mt-1">Real-time pattern detection</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">13:00</div>
                      <div>
                        <div className="font-light">Lunch & Networking</div>
                        <div className="text-sm text-gray-500 mt-1">Casual discussions</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">14:30</div>
                      <div>
                        <div className="font-light">Virtual Technician Demo</div>
                        <div className="text-sm text-gray-500 mt-1">AI-guided diagnostics</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">16:00</div>
                      <div>
                        <div className="font-light">Customer Success Stories</div>
                        <div className="text-sm text-gray-500 mt-1">Real-world impact</div>
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
                      <div className="text-gray-500 font-light min-w-[80px]">09:00</div>
                      <div>
                        <div className="font-light">Product Roadmap Presentation</div>
                        <div className="text-sm text-gray-500 mt-1">Future innovations</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">10:30</div>
                      <div>
                        <div className="font-light">Hands-on Workshop</div>
                        <div className="text-sm text-gray-500 mt-1">Interactive AI features</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">12:00</div>
                      <div>
                        <div className="font-light">Lunch & Q&A Session</div>
                        <div className="text-sm text-gray-500 mt-1">Open discussion</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">13:30</div>
                      <div>
                        <div className="font-light">Partner Integration Panel</div>
                        <div className="text-sm text-gray-500 mt-1">Ecosystem collaboration</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">15:00</div>
                      <div>
                        <div className="font-light">Executive Roundtable</div>
                        <div className="text-sm text-gray-500 mt-1">Strategic insights</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                      <div className="text-gray-500 font-light min-w-[80px]">16:30</div>
                      <div>
                        <div className="font-light">Closing Remarks</div>
                        <div className="text-sm text-gray-500 mt-1">Next steps & farewell</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'ai-agents' && (
          <div className="flex-1 bg-slate-900 p-8 overflow-auto flex items-center justify-center">
            <div className="max-w-7xl w-full">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-bold text-white mb-4">AI Agents Architecture</h2>
                <p className="text-xl text-slate-300 mb-6">Intelligent automation ecosystem</p>
                
                {/* Toggle */}
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

              {isFutureState ? (
                // Future State - Full Architecture
                <div className="relative">
                  {/* Entrypoints - Purple - Top */}
                  <div className="relative border-2 border-dashed border-purple-500/50 rounded-xl p-6 bg-purple-900/10 mb-8">
                    <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                      <span className="text-xs font-semibold text-purple-400">ENTRYPOINTS</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 hover:shadow-lg hover:shadow-purple-900/50 transition-all">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <h4 className="text-sm font-bold text-white">Ticket Agent</h4>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 hover:shadow-lg hover:shadow-purple-900/50 transition-all">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <h4 className="text-sm font-bold text-white">Device Agent</h4>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 hover:shadow-lg hover:shadow-purple-900/50 transition-all">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <h4 className="text-sm font-bold text-white">Alert Agent</h4>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700 hover:shadow-lg hover:shadow-purple-900/50 transition-all">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <h4 className="text-sm font-bold text-white">AI Agent</h4>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center mb-8">
                    <ArrowDown className="w-8 h-8 text-slate-500" />
                  </div>

                  {/* Middle Row: Diagnostics, Resolution Agent, and Actions */}
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Diagnostics - Green - Left */}
                    <div className="relative border-2 border-dashed border-green-500/50 rounded-xl p-6 bg-green-900/10">
                      <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                        <span className="text-xs font-semibold text-green-400">DIAGNOSTICS</span>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700 hover:shadow-lg hover:shadow-green-900/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Device Data</h4>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700 hover:shadow-lg hover:shadow-green-900/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Knowledge Base</h4>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700 hover:shadow-lg hover:shadow-green-900/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Session Insights</h4>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Resolution Agent - Red - Center */}
                    <div className="relative">
                      {/* Arrow from left (Diagnostics) */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8">
                        <ArrowLeft className="w-6 h-6 text-slate-500 rotate-180" />
                      </div>
                      
                      <div className="relative border-2 border-dashed border-red-500/50 rounded-xl p-6 bg-red-900/10">
                        <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                          <span className="text-xs font-semibold text-red-400">ORCHESTRATION</span>
                        </div>
                        <Card className="bg-gradient-to-br from-red-900/60 to-red-800/40 border-red-700 hover:shadow-xl hover:shadow-red-900/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <h4 className="text-sm font-bold text-white">Resolution Agent</h4>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Arrow Down to Actions */}
                      <div className="flex justify-center mt-8">
                        <ArrowDown className="w-6 h-6 text-slate-500" />
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div></div>
                  </div>

                  {/* Actions - Blue - Bottom Center */}
                  <div className="mt-8 max-w-md mx-auto">
                    <div className="relative border-2 border-dashed border-blue-500/50 rounded-xl p-6 bg-blue-900/10">
                      <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                        <span className="text-xs font-semibold text-blue-400">ACTIONS</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Remote Execution</h4>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Virtual Technician</h4>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">AV Scan</h4>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all">
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
              ) : (
                // Current State - Simplified
                <div className="relative max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <p className="text-slate-400 text-sm">Today's workflow with limited AI</p>
                  </div>
                  
                  <div className="relative">
                    {/* Entrypoint - Just Ticket */}
                    <div className="relative border-2 border-dashed border-purple-500/50 rounded-xl p-6 bg-purple-900/10 mb-8">
                      <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                        <span className="text-xs font-semibold text-purple-400">ENTRYPOINT</span>
                      </div>
                      <div className="max-w-xs mx-auto">
                        <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Ticket</h4>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Manual ticket creation and assignment</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center mb-8">
                      <ArrowDown className="w-6 h-6 text-slate-600" />
                    </div>

                    {/* Diagnostics - Limited */}
                    <div className="relative border-2 border-dashed border-green-500/50 rounded-xl p-6 bg-green-900/10 mb-8">
                      <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                        <span className="text-xs font-semibold text-green-400">DIAGNOSTICS</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
                        <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Device Data</h4>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Basic device information</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-700">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Knowledge Base</h4>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Manual search required</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center mb-8">
                      <ArrowDown className="w-6 h-6 text-slate-600" />
                    </div>

                    {/* Actions - Limited */}
                    <div className="relative border-2 border-dashed border-blue-500/50 rounded-xl p-6 bg-blue-900/10">
                      <div className="absolute -top-3 left-4 bg-slate-900 px-2">
                        <span className="text-xs font-semibold text-blue-400">ACTIONS</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Remote Execution</h4>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Manual command execution</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h4 className="text-sm font-bold text-white">Virtual Technician</h4>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Basic guided diagnostics</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Pain Points */}
                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mt-8">
                      <h4 className="text-sm font-bold text-red-300 mb-3">Current Limitations</h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>No intelligent orchestration between components</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>Limited automation capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>Manual intervention required at each step</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>No proactive issue detection or prevention</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {currentSection === 'features' && (
          <FeatureOverview 
            features={featuresData}
            selectedFeature={selectedFeature}
            onFeatureChange={setSelectedFeature}
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
                      <CardTitle className="text-white">Q1 2025: Enhanced Session Insights</CardTitle>
                      <Badge className="bg-blue-600">In Development</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p className="mb-3">Advanced pattern recognition and trend analysis across all support sessions</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Real-time anomaly detection</li>
                      <li>Automated root cause analysis</li>
                      <li>Predictive issue forecasting</li>
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