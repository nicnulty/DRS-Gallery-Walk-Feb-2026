import { useState } from 'react';
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
  FileText,
  Lightbulb,
  Stethoscope,
  Calendar,
  Shield,
  DollarSign,
  Activity
} from 'lucide-react';

const Index = () => {
  const [selectedFeature, setSelectedFeature] = useState('session-notes');

  const features = [
    {
      id: 'session-notes',
      name: 'Session Notes',
      icon: FileText,
      color: 'bg-blue-600',
      launchDate: 'GA June 30, 2025',
      eligibility: 'v3 Premium and v3 MSP (since November 2025: all v3 and v4 tiers)',
      problemStatement: 'Support teams face three critical challenges: excessive time spent on routine tasks and troubleshooting, limited ability to leverage past resolutions, and inconsistent outcomes due to manual processes. This leads to inefficiency, knowledge loss, and variable service quality.',
      customerValue: [
        'Enhanced Productivity: Reduce Average Handle Time (AHT) and improve First Call Resolution (FCR) rates',
        'Improved Service Level Agreements (SLAs): Achieve greater reliability and predictability through automation based on session notes & insights',
        'Reduced Labor Costs: Facilitate upskilling and automation without requiring advanced expertise',
        'Seamless End-to-End Workflow: Generate knowledge base articles from previous resolutions'
      ],
      description: 'LogMeIn Resolve Session Notes is an AI-powered documentation tool that automatically generates session summaries and detailed notes from recorded remote support sessions.',
      kpis: [
        { label: 'Monthly Session Notes', value: '200K', change: '43% of all sessions', trend: 'neutral' },
        { label: 'Adoption Rate', value: '12%', change: 'from eligible accounts', trend: 'neutral' },
        { label: 'Monthly Active Accounts', value: '642', change: 'unique paid accounts', trend: 'neutral' },
        { label: 'Weekly Active Users', value: '63%', change: 'use >1x per week', trend: 'up' },
        { label: 'Total Session Notes Created', value: '2M', change: '2.5x more than Teamviewer', trend: 'up' },
        { label: 'Failure Rate', value: '12%', change: '+42.8% from last month', trend: 'bad' }
      ],
      latestAchievement: {
        title: 'Session Insights Beta Launch Success',
        description: 'Session Insights Beta released mid-December achieved a 4.6% adoption rate within just 2 weeks, demonstrating strong early interest in advanced analytics and pattern detection capabilities.',
        date: 'December 2024'
      },
      screenshot: '/placeholder.svg',
      quotes: [
        {
          text: 'Session notes are the backbone of my workflow — they ensure I remember exactly what steps I took to resolve a problem, making follow-up and billing seamless.',
          author: 'L&S Marketing',
          role: 'Solo Operator',
          company: 'Small Business IT Support Provider'
        }
      ],
      topCustomersByARR: [
        { name: 'Radiology Partners', arr: '$148K' },
        { name: 'Covington & Burling', arr: '$71K' },
        { name: 'Dent Wizard Intl', arr: '$70K' },
        { name: 'Afas Software', arr: '$61K' }
      ],
      topCustomersByUsage: [
        { name: 'TechSupport Pro', usage: '12.4K' },
        { name: 'IT Solutions Group', usage: '9.8K' },
        { name: 'Managed Services Co', usage: '8.2K' },
        { name: 'Help Desk Plus', usage: '7.6K' }
      ]
    },
    {
      id: 'dynamic-insights',
      name: 'Dynamic Insights',
      icon: Lightbulb,
      color: 'bg-purple-600',
      launchDate: 'November 2023',
      eligibility: 'Enterprise tier only',
      problemStatement: 'Support teams are reactive, discovering patterns and trends only after they become major problems. Without real-time intelligence, opportunities to prevent issues, optimize processes, and improve service quality are constantly missed.',
      customerValue: [
        'Identify emerging issues before they escalate',
        'Discover optimization opportunities in real-time',
        'Make data-driven decisions instantly',
        'Predict and prevent customer pain points'
      ],
      description: 'Dynamic Insights provides real-time pattern detection and predictive analytics across your entire support operation.',
      kpis: [
        { label: 'Issues Detected Early', value: '450/mo', change: '+340%', trend: 'up' },
        { label: 'Prediction Accuracy', value: '94%', change: '+47%', trend: 'up' },
        { label: 'Response Time', value: '< 1 sec', change: '-95%', trend: 'down' },
        { label: 'Actionable Insights', value: '89%', change: '+56%', trend: 'up' }
      ],
      latestAchievement: {
        title: 'Prevented Major Outage',
        description: 'Dynamic Insights detected an emerging pattern of authentication failures across RetailMax\'s infrastructure 4 hours before it would have caused a system-wide outage, preventing an estimated $1.2M in lost revenue.',
        date: 'February 2024'
      },
      screenshot: '/placeholder.svg',
      quotes: [
        {
          text: 'Dynamic Insights is like having a crystal ball for our support operations. We\'re now preventing problems we didn\'t even know existed. It\'s shifted us from reactive to truly proactive.',
          author: 'David Park',
          role: 'CTO',
          company: 'RetailMax Systems'
        },
        {
          text: 'The real-time pattern detection is incredible. Last month, it identified a configuration drift affecting 200+ devices before a single customer complained. That\'s the kind of proactive service that builds loyalty.',
          author: 'Jennifer Walsh',
          role: 'Director of IT Operations',
          company: 'HealthTech Solutions'
        }
      ],
      topCustomersByARR: [
        { name: 'RetailMax Systems', arr: '$245K' },
        { name: 'HealthTech Solutions', arr: '$198K' },
        { name: 'ACME Corporation', arr: '$176K' },
        { name: 'TechCorp Global', arr: '$165K' }
      ],
      topCustomersByUsage: [
        { name: 'RetailMax Systems', usage: '2.3K' },
        { name: 'HealthTech Solutions', usage: '2.0K' },
        { name: 'ACME Corporation', usage: '1.9K' },
        { name: 'TechCorp Global', usage: '1.8K' }
      ]
    },
    {
      id: 'virtual-technician',
      name: 'Virtual Technician',
      icon: Stethoscope,
      color: 'bg-green-600',
      launchDate: 'September 2023',
      eligibility: 'All tiers (Basic, Professional, Enterprise)',
      problemStatement: 'Diagnosing technical issues requires deep expertise and time-consuming manual investigation. Junior technicians struggle with complex problems, while senior technicians are overwhelmed with routine diagnostics that could be automated.',
      customerValue: [
        'Instant expert-level diagnostics for any issue',
        'Empower junior technicians with AI guidance',
        'Reduce diagnostic time from hours to minutes',
        'Consistent, thorough troubleshooting every time'
      ],
      description: 'Virtual Technician provides AI-powered diagnostic capabilities that guide technicians through complex troubleshooting scenarios.',
      kpis: [
        { label: 'Diagnostic Time', value: '3 min', change: '-91%', trend: 'down' },
        { label: 'Accuracy Rate', value: '96%', change: '+42%', trend: 'up' },
        { label: 'Issues Resolved', value: '12K/mo', change: '+280%', trend: 'up' },
        { label: 'Escalations', value: '-67%', change: '-67%', trend: 'down' }
      ],
      latestAchievement: {
        title: 'Junior Technician Excellence',
        description: 'ACME Corporation\'s newest support hire resolved 450 complex tickets in their first month using Virtual Technician—matching the performance of 5-year veterans and earning a 4.9/5 customer satisfaction rating.',
        date: 'March 2024'
      },
      screenshot: '/placeholder.svg',
      quotes: [
        {
          text: 'Virtual Technician has democratized expertise across our entire support team. Our junior technicians now handle issues that used to require senior escalation. It\'s like giving everyone a decade of experience overnight.',
          author: 'Marcus Johnson',
          role: 'VP of Technical Support',
          company: 'ACME Corporation'
        },
        {
          text: 'The diagnostic accuracy is remarkable. Virtual Technician catches edge cases and subtle issues that even our most experienced technicians sometimes miss. It\'s raised the bar for our entire operation.',
          author: 'Emily Chen',
          role: 'Support Operations Manager',
          company: 'FinanceHub Inc'
        }
      ],
      topCustomersByARR: [
        { name: 'ACME Corporation', arr: '$312K' },
        { name: 'TechCorp Global', arr: '$287K' },
        { name: 'FinanceHub Inc', arr: '$254K' },
        { name: 'HealthTech Solutions', arr: '$223K' }
      ],
      topCustomersByUsage: [
        { name: 'ACME Corporation', usage: '45.7K' },
        { name: 'TechCorp Global', usage: '38.9K' },
        { name: 'FinanceHub Inc', usage: '34.6K' },
        { name: 'HealthTech Solutions', usage: '29.3K' }
      ]
    }
  ];

  const currentFeature = features.find(f => f.id === selectedFeature) || features[0];
  const currentIndex = features.findIndex(f => f.id === selectedFeature);
  const FeatureIcon = currentFeature.icon;

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : features.length - 1;
    setSelectedFeature(features[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < features.length - 1 ? currentIndex + 1 : 0;
    setSelectedFeature(features[nextIndex].id);
  };

  return (
    <div className="flex-1 bg-gray-50 p-4 overflow-auto min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        {/* Compact Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${currentFeature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <FeatureIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{currentFeature.name}</h1>
              <div className="flex items-center gap-3 text-xs text-gray-600 mt-0.5">
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
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={handlePrevious}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Button
                  key={feature.id}
                  variant={selectedFeature === feature.id ? 'default' : 'outline'}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`h-8 text-xs ${selectedFeature === feature.id ? feature.color : ''}`}
                  size="sm"
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {feature.name}
                </Button>
              );
            })}
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleNext}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Problem & Value */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-600" />
                  Problem & Value
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">PROBLEM</p>
                  <p className="text-xs text-gray-700 leading-relaxed">{currentFeature.problemStatement}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">VALUE</p>
                  <ul className="space-y-1">
                    {currentFeature.customerValue.map((value, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-green-600 font-bold mt-0.5">•</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* KPIs */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {currentFeature.kpis.map((kpi, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded">
                      <p className="text-[10px] text-gray-500 mb-0.5">{kpi.label}</p>
                      <p className="text-lg font-bold">{kpi.value}</p>
                      <Badge 
                        variant="secondary" 
                        className={`text-[10px] h-4 ${
                          kpi.trend === 'bad' ? 'bg-red-100 text-red-700' :
                          kpi.trend === 'up' ? 'bg-green-100 text-green-700' : 
                          kpi.trend === 'down' ? 'bg-red-100 text-red-700' : 
                          'bg-blue-100 text-blue-700'
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
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                  Latest Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded border-l-2 border-yellow-500">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-xs">{currentFeature.latestAchievement.title}</h3>
                    <Badge variant="outline" className="text-[10px] h-4">{currentFeature.latestAchievement.date}</Badge>
                  </div>
                  <p className="text-xs text-gray-700">{currentFeature.latestAchievement.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Top Customers - Split View */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Top Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {/* By ARR */}
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <DollarSign className="w-3 h-3 text-green-600" />
                      <p className="text-[10px] font-semibold text-gray-600">BY ARR</p>
                    </div>
                    <div className="space-y-1.5">
                      {currentFeature.topCustomersByARR.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-1.5 bg-gray-50 rounded text-[10px]">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-[8px]">{index + 1}</span>
                            </div>
                            <span className="font-medium truncate">{customer.name}</span>
                          </div>
                          <span className="text-green-700 font-semibold ml-1">{customer.arr}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* By Usage */}
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <Activity className="w-3 h-3 text-blue-600" />
                      <p className="text-[10px] font-semibold text-gray-600">BY USAGE</p>
                    </div>
                    <div className="space-y-1.5">
                      {currentFeature.topCustomersByUsage.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-1.5 bg-gray-50 rounded text-[10px]">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-[8px]">{index + 1}</span>
                            </div>
                            <span className="font-medium truncate">{customer.name}</span>
                          </div>
                          <span className="text-blue-700 font-semibold ml-1">{customer.usage}</span>
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
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Feature in Action</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500 text-lg">Feature Screenshot</p>
                    <p className="text-slate-400 text-sm mt-2">{currentFeature.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Quotes */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Quote className="w-4 h-4 text-purple-600" />
                  Customer Testimonials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentFeature.quotes.map((quote, index) => (
                    <div key={index} className="bg-purple-50 p-3 rounded border-l-2 border-purple-500">
                      <p className="text-xs text-gray-700 italic mb-2">"{quote.text}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-700 font-semibold text-[10px]">
                            {quote.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-[10px]">{quote.author}</p>
                          <p className="text-[9px] text-gray-600">{quote.role}, {quote.company}</p>
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

export default Index;