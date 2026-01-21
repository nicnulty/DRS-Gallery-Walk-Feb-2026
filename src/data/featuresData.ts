import { FileText, Lightbulb, Stethoscope } from 'lucide-react';

const getAssetPath = (filename: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${filename}`.replace(/\/+/g, '/');
};

export const featuresData = [
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
      { label: 'Monthly Session Notes', value: '200K', change: '43% of all sessions', trend: 'neutral' as const },
      { label: 'Adoption Rate', value: '12%', change: 'from eligible accounts', trend: 'neutral' as const },
      { label: 'Monthly Active Accounts', value: '642', change: 'unique paid accounts', trend: 'neutral' as const },
      { label: 'Weekly Active Users', value: '63%', change: 'use >1x per week', trend: 'up' as const },
      { label: 'Total Session Notes Created', value: '2M', change: '2.5x more than Teamviewer', trend: 'up' as const },
      { label: 'Failure Rate', value: '12%', change: '+42.8% from last month', trend: 'bad' as const }
    ],
    latestAchievement: {
      title: 'Session Insights Beta Launch Success',
      description: 'Session Insights Beta released mid-December achieved a 4.6% adoption rate within just 2 weeks, demonstrating strong early interest in advanced analytics and pattern detection capabilities.',
      date: 'December 2025'
    },
    screenshot: getAssetPath('session-notes-screenshot.png'),
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
      { label: 'Issues Detected Early', value: '450/mo', change: '+340%', trend: 'up' as const },
      { label: 'Prediction Accuracy', value: '94%', change: '+47%', trend: 'up' as const },
      { label: 'Response Time', value: '< 1 sec', change: '-95%', trend: 'down' as const },
      { label: 'Actionable Insights', value: '89%', change: '+56%', trend: 'up' as const }
    ],
    latestAchievement: {
      title: 'Prevented Major Outage',
      description: 'Dynamic Insights detected an emerging pattern of authentication failures across RetailMax\'s infrastructure 4 hours before it would have caused a system-wide outage, preventing an estimated $1.2M in lost revenue.',
      date: 'February 2024'
    },
    screenshot: getAssetPath('placeholder.svg'),
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
      { label: 'Diagnostic Time', value: '3 min', change: '-91%', trend: 'down' as const },
      { label: 'Accuracy Rate', value: '96%', change: '+42%', trend: 'up' as const },
      { label: 'Issues Resolved', value: '12K/mo', change: '+280%', trend: 'up' as const },
      { label: 'Escalations', value: '-67%', change: '-67%', trend: 'down' as const }
    ],
    latestAchievement: {
      title: 'Junior Technician Excellence',
      description: 'ACME Corporation\'s newest support hire resolved 450 complex tickets in their first month using Virtual Technician—matching the performance of 5-year veterans and earning a 4.9/5 customer satisfaction rating.',
      date: 'March 2024'
    },
    screenshot: getAssetPath('placeholder.svg'),
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