import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const Index = () => {
  const features = [
    {
      id: "feature-1",
      name: "AI-Powered Ticket Resolution",
      problem: "Support teams spend 60% of their time on repetitive, low-complexity tickets, leading to slow response times and agent burnout.",
      value: "Automated ticket classification and resolution suggestions reduce average handling time by 45% while improving first-contact resolution rates.",
      kpis: [
        { label: "Avg. Resolution Time", value: "-45%", trend: "down" },
        { label: "First Contact Resolution", value: "+32%", trend: "up" },
        { label: "Agent Productivity", value: "+28%", trend: "up" },
        { label: "Customer Satisfaction", value: "4.7/5", trend: "up" }
      ],
      achievement: "Processed 2.3M tickets automatically in Q4 2024 with 94% accuracy rate",
      customerQuote: {
        text: "The AI ticket resolution has transformed our support operations. We're handling 3x more tickets with the same team size.",
        author: "Sarah Chen",
        title: "VP of IT Operations",
        company: "TechCorp Global"
      },
      topCustomersByARR: [
        { name: "Enterprise Solutions Inc", arr: "$2.4M", logo: "ES" },
        { name: "Global Tech Partners", arr: "$1.8M", logo: "GT" },
        { name: "Innovation Systems", arr: "$1.5M", logo: "IS" },
        { name: "Digital Dynamics", arr: "$1.2M", logo: "DD" },
        { name: "CloudFirst Corp", arr: "$980K", logo: "CF" }
      ],
      topCustomersByUsage: [
        { name: "Global Tech Partners", tickets: "45K/mo", logo: "GT" },
        { name: "Enterprise Solutions Inc", tickets: "38K/mo", logo: "ES" },
        { name: "Digital Dynamics", tickets: "32K/mo", logo: "DD" },
        { name: "Innovation Systems", tickets: "28K/mo", logo: "IS" },
        { name: "TechCorp Global", tickets: "24K/mo", logo: "TC" }
      ]
    },
    {
      id: "feature-2",
      name: "Predictive Asset Management",
      problem: "IT teams lack visibility into device health, resulting in unexpected failures, costly emergency replacements, and user downtime.",
      value: "ML-driven predictive analytics identify at-risk devices 30 days in advance, enabling proactive maintenance and reducing unplanned downtime by 67%.",
      kpis: [
        { label: "Unplanned Downtime", value: "-67%", trend: "down" },
        { label: "Hardware Costs", value: "-23%", trend: "down" },
        { label: "Prediction Accuracy", value: "91%", trend: "up" },
        { label: "Mean Time to Repair", value: "-41%", trend: "down" }
      ],
      achievement: "Predicted and prevented 12,400 device failures across customer base in Q4 2024",
      customerQuote: {
        text: "We've eliminated surprise hardware failures. The predictive insights have saved us millions in emergency replacements.",
        author: "Michael Rodriguez",
        title: "CIO",
        company: "Financial Services Group"
      },
      topCustomersByARR: [
        { name: "Financial Services Group", arr: "$3.1M", logo: "FS" },
        { name: "Healthcare Systems Alliance", arr: "$2.7M", logo: "HS" },
        { name: "Manufacturing United", arr: "$2.2M", logo: "MU" },
        { name: "Retail Innovations", arr: "$1.9M", logo: "RI" },
        { name: "Education Network", arr: "$1.4M", logo: "EN" }
      ],
      topCustomersByUsage: [
        { name: "Manufacturing United", devices: "28K", logo: "MU" },
        { name: "Financial Services Group", devices: "24K", logo: "FS" },
        { name: "Healthcare Systems Alliance", devices: "21K", logo: "HS" },
        { name: "Retail Innovations", devices: "18K", logo: "RI" },
        { name: "Education Network", devices: "15K", logo: "EN" }
      ]
    },
    {
      id: "feature-3",
      name: "Intelligent Knowledge Base",
      problem: "Users struggle to find relevant solutions in sprawling knowledge bases, leading to increased ticket volume and frustration.",
      value: "AI-powered semantic search and auto-generated articles reduce ticket creation by 38% and improve self-service resolution rates.",
      kpis: [
        { label: "Self-Service Resolution", value: "+38%", trend: "up" },
        { label: "Search Accuracy", value: "89%", trend: "up" },
        { label: "Ticket Deflection", value: "+42%", trend: "up" },
        { label: "Time to Solution", value: "-52%", trend: "down" }
      ],
      achievement: "Generated 1,850 knowledge articles automatically from resolved tickets in Q4 2024",
      customerQuote: {
        text: "Our users can now find answers instantly. The AI understands context better than our old keyword search ever did.",
        author: "Jennifer Park",
        title: "Director of IT Support",
        company: "Innovation Systems"
      },
      topCustomersByARR: [
        { name: "Innovation Systems", arr: "$1.6M", logo: "IS" },
        { name: "TechCorp Global", arr: "$1.3M", logo: "TC" },
        { name: "Digital Dynamics", arr: "$1.1M", logo: "DD" },
        { name: "CloudFirst Corp", arr: "$890K", logo: "CF" },
        { name: "Enterprise Solutions Inc", arr: "$750K", logo: "ES" }
      ],
      topCustomersByUsage: [
        { name: "TechCorp Global", searches: "125K/mo", logo: "TC" },
        { name: "Innovation Systems", searches: "98K/mo", logo: "IS" },
        { name: "Digital Dynamics", searches: "87K/mo", logo: "DD" },
        { name: "Enterprise Solutions Inc", searches: "76K/mo", logo: "ES" },
        { name: "CloudFirst Corp", searches: "64K/mo", logo: "CF" }
      ]
    },
    {
      id: "feature-4",
      name: "Smart Workflow Automation",
      problem: "Manual approval processes and routing decisions create bottlenecks, delaying service delivery and frustrating users.",
      value: "AI-driven workflow automation intelligently routes requests, auto-approves low-risk changes, and reduces approval cycle time by 71%.",
      kpis: [
        { label: "Approval Cycle Time", value: "-71%", trend: "down" },
        { label: "Auto-Approval Rate", value: "64%", trend: "up" },
        { label: "Routing Accuracy", value: "96%", trend: "up" },
        { label: "Process Efficiency", value: "+58%", trend: "up" }
      ],
      achievement: "Automated 156,000 workflow decisions with 96% accuracy in Q4 2024",
      customerQuote: {
        text: "What used to take days now happens in minutes. The AI knows exactly who needs to approve what and when.",
        author: "David Thompson",
        title: "Head of Service Management",
        company: "Global Tech Partners"
      },
      topCustomersByARR: [
        { name: "Global Tech Partners", arr: "$2.9M", logo: "GT" },
        { name: "Enterprise Solutions Inc", arr: "$2.3M", logo: "ES" },
        { name: "Financial Services Group", arr: "$1.8M", logo: "FS" },
        { name: "Manufacturing United", arr: "$1.5M", logo: "MU" },
        { name: "Healthcare Systems Alliance", arr: "$1.2M", logo: "HS" }
      ],
      topCustomersByUsage: [
        { name: "Enterprise Solutions Inc", workflows: "52K/mo", logo: "ES" },
        { name: "Global Tech Partners", workflows: "48K/mo", logo: "GT" },
        { name: "Financial Services Group", workflows: "41K/mo", logo: "FS" },
        { name: "Manufacturing United", workflows: "35K/mo", logo: "MU" },
        { name: "Healthcare Systems Alliance", workflows: "29K/mo", logo: "HS" }
      ]
    },
    {
      id: "feature-5",
      name: "Anomaly Detection & Security",
      problem: "Security threats and unusual system behavior often go undetected until significant damage occurs, risking data breaches and compliance violations.",
      value: "Real-time AI anomaly detection identifies security threats and system irregularities 85% faster, preventing incidents before they escalate.",
      kpis: [
        { label: "Threat Detection Speed", value: "+85%", trend: "up" },
        { label: "False Positive Rate", value: "-76%", trend: "down" },
        { label: "Incidents Prevented", value: "2,340", trend: "up" },
        { label: "Mean Time to Detect", value: "-79%", trend: "down" }
      ],
      achievement: "Detected and prevented 2,340 security incidents across customer base in Q4 2024",
      customerQuote: {
        text: "The AI caught a sophisticated attack pattern that our traditional tools completely missed. It potentially saved us from a major breach.",
        author: "Amanda Foster",
        title: "CISO",
        company: "Financial Services Group"
      },
      topCustomersByARR: [
        { name: "Financial Services Group", arr: "$4.2M", logo: "FS" },
        { name: "Healthcare Systems Alliance", arr: "$3.5M", logo: "HS" },
        { name: "Global Tech Partners", arr: "$2.8M", logo: "GT" },
        { name: "Manufacturing United", arr: "$2.1M", logo: "MU" },
        { name: "Retail Innovations", arr: "$1.7M", logo: "RI" }
      ],
      topCustomersByUsage: [
        { name: "Financial Services Group", events: "2.4M/mo", logo: "FS" },
        { name: "Healthcare Systems Alliance", events: "1.9M/mo", logo: "HS" },
        { name: "Global Tech Partners", events: "1.6M/mo", logo: "GT" },
        { name: "Manufacturing United", events: "1.3M/mo", logo: "MU" },
        { name: "Retail Innovations", events: "980K/mo", logo: "RI" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">AI Innovation Showcase</h1>
          <p className="text-lg text-slate-600">Executive Presentation - Q4 2024</p>
        </div>

        {/* Feature Tabs */}
        <Tabs defaultValue="feature-1" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {features.map((feature, index) => (
              <TabsTrigger key={feature.id} value={feature.id} className="text-xs sm:text-sm">
                Feature {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="space-y-6">
              {/* Feature Title */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-slate-900">{feature.name}</h2>
              </div>

              {/* Problem Statement */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">Customer Problem Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-lg">{feature.problem}</p>
                </CardContent>
              </Card>

              {/* Value & Outcomes */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Customer Value & Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-lg">{feature.value}</p>
                </CardContent>
              </Card>

              {/* KPIs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Key Performance Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {feature.kpis.map((kpi, index) => (
                      <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-600">{kpi.label}</span>
                          {kpi.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          ) : (
                            <TrendingUp className="w-4 h-4 text-green-600 rotate-180" />
                          )}
                        </div>
                        <div className="text-2xl font-bold text-slate-900">{kpi.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Achievement */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700">Latest Achievement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-lg font-semibold">{feature.achievement}</p>
                </CardContent>
              </Card>

              {/* Feature Screenshot Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700">Feature Screenshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-12 flex items-center justify-center border-2 border-dashed border-slate-300">
                    <div className="text-center">
                      <Activity className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 text-lg">Feature Screenshot</p>
                      <p className="text-slate-400 text-sm mt-2">{feature.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Quote */}
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Customer Testimonial</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-slate-700 italic mb-4">
                    "{feature.customerQuote.text}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold">
                      {feature.customerQuote.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{feature.customerQuote.author}</div>
                      <div className="text-sm text-slate-600">{feature.customerQuote.title}</div>
                      <div className="text-sm text-slate-500">{feature.customerQuote.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Customers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* By ARR */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-700 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Top 5 Customers by ARR
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {feature.topCustomersByARR.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                              {customer.logo}
                            </div>
                            <div>
                              <div className="font-medium text-slate-900">{customer.name}</div>
                              <Badge variant="secondary" className="text-xs mt-1">Rank #{index + 1}</Badge>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-green-700">{customer.arr}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* By Usage */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-700 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Top 5 Customers by Usage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {feature.topCustomersByUsage.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                              {customer.logo}
                            </div>
                            <div>
                              <div className="font-medium text-slate-900">{customer.name}</div>
                              <Badge variant="secondary" className="text-xs mt-1">Rank #{index + 1}</Badge>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-purple-700">
                            {customer.tickets || customer.devices || customer.searches || customer.workflows || customer.events}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;