import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FeatureOverview from '@/components/FeatureOverview';
import { featuresData } from '@/data/featuresData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Presentation,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  BarChart3,
  Award
} from 'lucide-react';

type Section = 'cover' | 'executive-summary' | 'features' | 'roadmap' | 'conclusion';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('cover');
  const [selectedFeature, setSelectedFeature] = useState('session-notes');

  const sections: { id: Section; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'cover', title: 'Cover', icon: Presentation },
    { id: 'executive-summary', title: 'Executive Summary', icon: BarChart3 },
    { id: 'features', title: 'AI Features', icon: Sparkles },
    { id: 'roadmap', title: 'Roadmap', icon: Target },
    { id: 'conclusion', title: 'Conclusion', icon: Award }
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
            <Sparkles className="w-6 h-6 text-blue-400" />
            <h1 className="text-lg font-bold text-white">AI Innovation Showcase</h1>
            <Badge variant="outline" className="text-xs text-slate-300 border-slate-600">Q4 2024</Badge>
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
        {currentSection === 'cover' && (
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
            <div className="text-center space-y-6 px-8">
              <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Sparkles className="w-20 h-20 text-blue-300" />
              </div>
              <h1 className="text-6xl font-bold text-white">Dresden AI Gallery Walk</h1>
              <p className="text-2xl text-blue-200">February 2026</p>
            </div>
          </div>
        )}

        {currentSection === 'executive-summary' && (
          <div className="h-full overflow-auto p-8 bg-slate-900">
            <div className="max-w-6xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-3">Executive Summary</h2>
                <p className="text-lg text-slate-300">AI-Powered Transformation in IT Support</p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Impact Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-green-400">2.4M+</p>
                      <p className="text-sm text-slate-400">Total AI-Generated Outputs</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">67%</p>
                      <p className="text-sm text-slate-400">Reduction in Resolution Time</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-400">$8.2M</p>
                      <p className="text-sm text-slate-400">Customer Value Delivered</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      Adoption & Reach
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-blue-400">1,200+</p>
                      <p className="text-sm text-slate-400">Active Enterprise Customers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-400">24%</p>
                      <p className="text-sm text-slate-400">Quarter-over-Quarter Growth</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-400">89%</p>
                      <p className="text-sm text-slate-400">Customer Satisfaction Score</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      Innovation Pipeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-yellow-400">3</p>
                      <p className="text-sm text-slate-400">Features in Production</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-400">5</p>
                      <p className="text-sm text-slate-400">Features in Development</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">12</p>
                      <p className="text-sm text-slate-400">Months of R&D Investment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Session Notes:</strong> 2M+ AI-generated session summaries with 12% adoption rate among eligible accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Dynamic Insights:</strong> Prevented $1.2M in potential revenue loss through predictive analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Virtual Technician:</strong> Reduced diagnostic time by 91% while maintaining 96% accuracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">✓</span>
                      <span><strong className="text-white">Market Position:</strong> 2.5x more session notes generated than primary competitor</span>
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

        {currentSection === 'conclusion' && (
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
            <div className="text-center space-y-8 px-8 max-w-4xl">
              <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Award className="w-20 h-20 text-green-300" />
              </div>
              <h2 className="text-5xl font-bold text-white">Leading the AI Revolution</h2>
              <p className="text-xl text-green-200 leading-relaxed">
                Our AI-powered features are transforming IT support operations, delivering measurable value 
                to over 1,200 enterprise customers while maintaining industry-leading satisfaction scores.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-4xl font-bold text-green-300 mb-2">2.4M+</p>
                  <p className="text-sm text-green-100">AI Outputs Generated</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-4xl font-bold text-green-300 mb-2">67%</p>
                  <p className="text-sm text-green-100">Time Savings</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-4xl font-bold text-green-300 mb-2">89%</p>
                  <p className="text-sm text-green-100">Customer Satisfaction</p>
                </div>
              </div>
              <div className="pt-6">
                <Badge className="text-lg px-6 py-2 bg-green-600 hover:bg-green-700">
                  Thank You
                </Badge>
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