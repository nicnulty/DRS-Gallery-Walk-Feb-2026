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
  Clock,
  TrendingUp,
  Shield
} from 'lucide-react';

type Section = 'agenda' | 'competitive-view' | 'features' | 'roadmap';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('agenda');
  const [selectedFeature, setSelectedFeature] = useState('session-notes');

  const sections: { id: Section; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'agenda', title: 'Agenda', icon: Calendar },
    { id: 'competitive-view', title: 'Competitive View', icon: Shield },
    { id: 'features', title: 'AI Features', icon: Sparkles },
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
      <div className="flex-1 overflow-hidden">
        {currentSection === 'agenda' && (
          <div className="h-full flex flex-col items-center justify-center bg-black text-white px-8 py-16">
            <div className="max-w-7xl w-full space-y-16">
              {/* Title Section */}
              <div className="text-center space-y-4">
                <h1 className="text-7xl font-light tracking-tight">Dresden AI Gallery Walk</h1>
                <p className="text-xl font-light text-gray-400 tracking-wide">February 2026</p>
              </div>

              {/* Agenda Section */}
              <div className="grid grid-cols-2 gap-12 mt-20">
                {/* Day 1 */}
                <div className="space-y-6">
                  <div className="border-b border-gray-800 pb-3">
                    <h2 className="text-3xl font-light tracking-tight">Day 1</h2>
                    <p className="text-sm text-gray-500 mt-1">February 10, 2026</p>
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
                    <p className="text-sm text-gray-500 mt-1">February 11, 2026</p>
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

              {/* Bottom CTA */}
              <div className="text-center pt-8">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500 font-light">
                  <Clock className="w-4 h-4" />
                  <span>Two days of innovation and collaboration</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'competitive-view' && (
          <div className="h-full overflow-auto p-8 bg-slate-900">
            <div className="max-w-6xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-3">Competitive View</h2>
                <p className="text-lg text-slate-300">How We Stack Up Against the Competition</p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      LogMeIn Resolve
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-blue-400">2M+</p>
                      <p className="text-sm text-slate-400">Session Notes Generated</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-400">12%</p>
                      <p className="text-sm text-slate-400">Adoption Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-400">3</p>
                      <p className="text-sm text-slate-400">AI Features Live</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 opacity-60">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-orange-400" />
                      TeamViewer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-orange-400">800K</p>
                      <p className="text-sm text-slate-400">Session Notes Generated</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-orange-400">8%</p>
                      <p className="text-sm text-slate-400">Adoption Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-orange-400">2</p>
                      <p className="text-sm text-slate-400">AI Features Live</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 opacity-60">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-red-400" />
                      AnyDesk
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-red-400">N/A</p>
                      <p className="text-sm text-slate-400">Session Notes Generated</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-red-400">N/A</p>
                      <p className="text-sm text-slate-400">Adoption Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-red-400">0</p>
                      <p className="text-sm text-slate-400">AI Features Live</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Competitive Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Market Leadership:</strong> 2.5x more AI-generated session notes than TeamViewer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Feature Breadth:</strong> Only provider with comprehensive AI suite (Notes, Insights, Virtual Technician)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Innovation Velocity:</strong> 3 major AI features launched in 12 months vs. competitors' 0-2</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Customer Satisfaction:</strong> 89% satisfaction rate with AI features, industry-leading</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-white disabled:opacity-30"
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
            variant="outline"
            onClick={handleNext}
            disabled={currentIndex === sections.length - 1}
            className="text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-white disabled:opacity-30"
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