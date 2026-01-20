import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  BarChart3, 
  Trophy, 
  Quote, 
  ChevronLeft,
  ChevronRight,
  Calendar,
  Shield,
  DollarSign,
  Activity
} from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  launchDate: string;
  eligibility: string;
  problemStatement: string;
  customerValue: string[];
  description: string;
  kpis: Array<{
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral' | 'bad';
  }>;
  latestAchievement: {
    title: string;
    description: string;
    date: string;
  };
  screenshot: string;
  quotes: Array<{
    text: string;
    author: string;
    role: string;
    company: string;
  }>;
  topCustomersByARR: Array<{
    name: string;
    arr: string;
  }>;
  topCustomersByUsage: Array<{
    name: string;
    usage: string;
  }>;
}

interface FeatureOverviewProps {
  features: Feature[];
  selectedFeature: string;
  onFeatureChange: (featureId: string) => void;
}

const FeatureOverview = ({ features, selectedFeature, onFeatureChange }: FeatureOverviewProps) => {
  const currentFeature = features.find(f => f.id === selectedFeature) || features[0];
  const currentIndex = features.findIndex(f => f.id === selectedFeature);
  const FeatureIcon = currentFeature.icon;

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : features.length - 1;
    onFeatureChange(features[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < features.length - 1 ? currentIndex + 1 : 0;
    onFeatureChange(features[nextIndex].id);
  };

  return (
    <div className="flex-1 bg-slate-900 light:bg-slate-50 p-4 overflow-auto">
      <div className="max-w-[1800px] mx-auto">
        {/* Compact Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${currentFeature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <FeatureIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white light:text-slate-900">{currentFeature.name}</h1>
              <div className="flex items-center gap-3 text-xs text-slate-400 light:text-slate-600 mt-0.5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {currentFeature.launchDate}
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {currentFeature.eligibility}
                </span>
              </div>
            </div>
          </div>
          
          {/* Feature Selector */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-800 light:bg-white border-slate-700 light:border-slate-300 hover:bg-slate-700 light:hover:bg-slate-100 text-slate-300 light:text-slate-700" onClick={handlePrevious}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Button
                  key={feature.id}
                  variant={selectedFeature === feature.id ? 'default' : 'outline'}
                  onClick={() => onFeatureChange(feature.id)}
                  className={`h-8 text-xs ${
                    selectedFeature === feature.id 
                      ? `${feature.color} text-white hover:opacity-90` 
                      : 'bg-slate-800 light:bg-white border-slate-700 light:border-slate-300 hover:bg-slate-700 light:hover:bg-slate-100 text-slate-300 light:text-slate-700'
                  }`}
                  size="sm"
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {feature.name}
                </Button>
              );
            })}
            <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-800 light:bg-white border-slate-700 light:border-slate-300 hover:bg-slate-700 light:hover:bg-slate-100 text-slate-300 light:text-slate-700" onClick={handleNext}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Problem & Value */}
            <Card className="bg-slate-800 light:bg-white border-slate-700 light:border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-white light:text-slate-900">
                  <Target className="w-4 h-4 text-red-400 light:text-red-600" />
                  Problem & Value
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate-400 light:text-slate-600 mb-1">PROBLEM</p>
                  <p className="text-xs text-slate-300 light:text-slate-700 leading-relaxed">{currentFeature.problemStatement}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 light:text-slate-600 mb-1">VALUE</p>
                  <ul className="space-y-1">
                    {currentFeature.customerValue.map((value, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                        <span className="text-green-400 light:text-green-600 font-bold mt-0.5">•</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* KPIs */}
            <Card className="bg-slate-800 light:bg-white border-slate-700 light:border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-white light:text-slate-900">
                  <BarChart3 className="w-4 h-4 text-blue-400 light:text-blue-600" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {currentFeature.kpis.map((kpi, index) => (
                    <div key={index} className="bg-slate-900 light:bg-slate-50 p-2 rounded border border-slate-700 light:border-slate-200">
                      <p className="text-[10px] text-slate-400 light:text-slate-600 mb-0.5">{kpi.label}</p>
                      <p className="text-lg font-bold text-white light:text-slate-900">{kpi.value}</p>
                      <Badge 
                        variant="secondary" 
                        className={`text-[10px] h-4 ${
                          kpi.trend === 'bad' ? 'bg-red-900/50 light:bg-red-100 text-red-300 light:text-red-700 border-red-700 light:border-red-300' :
                          kpi.trend === 'up' ? 'bg-green-900/50 light:bg-green-100 text-green-300 light:text-green-700 border-green-700 light:border-green-300' : 
                          kpi.trend === 'down' ? 'bg-red-900/50 light:bg-red-100 text-red-300 light:text-red-700 border-red-700 light:border-red-300' : 
                          'bg-blue-900/50 light:bg-blue-100 text-blue-300 light:text-blue-700 border-blue-700 light:border-blue-300'
                        }`}
                      >
                        {kpi.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Latest Achievement */}
            <Card className="bg-slate-800 light:bg-white border-slate-700 light:border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-white light:text-slate-900">
                  <Trophy className="w-4 h-4 text-yellow-400 light:text-yellow-600" />
                  Latest Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 light:from-yellow-100 light:to-orange-100 p-3 rounded border-l-2 border-yellow-500">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-xs text-white light:text-slate-900">{currentFeature.latestAchievement.title}</h3>
                    <Badge variant="outline" className="text-[10px] h-4 border-yellow-600 light:border-yellow-500 text-yellow-400 light:text-yellow-700">{currentFeature.latestAchievement.date}</Badge>
                  </div>
                  <p className="text-xs text-slate-300 light:text-slate-700">{currentFeature.latestAchievement.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Top Customers - Split View */}
            <Card className="bg-slate-800 light:bg-white border-slate-700 light:border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-white light:text-slate-900">Top Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {/* By ARR */}
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <DollarSign className="w-3 h-3 text-green-400 light:text-green-600" />
                      <p className="text-[10px] font-semibold text-slate-400 light:text-slate-600">BY ARR</p>
                    </div>
                    <div className="space-y-1.5">
                      {currentFeature.topCustomersByARR.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-1.5 bg-slate-900 light:bg-slate-50 rounded text-[10px] border border-slate-700 light:border-slate-200">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-[8px]">{index + 1}</span>
                            </div>
                            <span className="font-medium truncate text-slate-300 light:text-slate-700">{customer.name}</span>
                          </div>
                          <span className="text-green-400 light:text-green-600 font-semibold ml-1">{customer.arr}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* By Usage */}
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <Activity className="w-3 h-3 text-blue-400 light:text-blue-600" />
                      <p className="text-[10px] font-semibold text-slate-400 light:text-slate-600">BY USAGE</p>
                    </div>
                    <div className="space-y-1.5">
                      {currentFeature.topCustomersByUsage.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-1.5 bg-slate-900 light:bg-slate-50 rounded text-[10px] border border-slate-700 light:border-slate-200">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-[8px]">{index + 1}</span>
                            </div>
                            <span className="font-medium truncate text-slate-300 light:text-slate-700">{customer.name}</span>
                          </div>
                          <span className="text-blue-400 light:text-blue-600 font-semibold ml-1">{customer.usage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Screenshot */}
            <Card className="bg-slate-800 light:bg-white border-slate-700 light:border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-white light:text-slate-900">Feature in Action</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded overflow-hidden border border-slate-700 light:border-slate-200">
                  <img 
                    src={currentFeature.screenshot} 
                    alt={`${currentFeature.name} screenshot`}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Customer Quotes */}
            <Card className="bg-slate-800 light:bg-white border-slate-700 light:border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-white light:text-slate-900">
                  <Quote className="w-4 h-4 text-purple-400 light:text-purple-600" />
                  Customer Testimonials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentFeature.quotes.map((quote, index) => (
                    <div key={index} className="bg-purple-900/20 light:bg-purple-50 p-3 rounded border-l-2 border-purple-500">
                      <p className="text-xs text-slate-300 light:text-slate-700 italic mb-2">"{quote.text}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-700 light:bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-200 light:text-white font-semibold text-[10px]">
                            {quote.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-[10px] text-white light:text-slate-900">{quote.author}</p>
                          <p className="text-[9px] text-slate-400 light:text-slate-600">{quote.role}, {quote.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOverview;