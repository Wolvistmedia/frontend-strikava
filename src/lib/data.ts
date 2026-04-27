export interface TierModule {
  title: string;
  focus: string;
  duration?: string;
  desc: string;
}

export interface ProgramTier {
  level: string;
  desc: string;
  modules: TierModule[];
}

export interface Program {
  slug: string;
  title: string;
  category: string;
  desc: string;
  duration: string;
  mode: string;
  level: string;
  iconName: string;
  syllabus?: string[];
  tiers?: ProgramTier[];
}

export interface Category {
  slug: string;
  title: string;
  desc: string;
}

export const categories: Category[] = [
  { slug: "aws", title: "AWS", desc: "Amazon Web Services training and certification paths." },
  { slug: "google-cloud", title: "Google Cloud", desc: "GCP certifications for data and architecture." },
  { slug: "cybersecurity", title: "Cybersecurity", desc: "Defensive and offensive security training." },
  { slug: "networking", title: "Networking", desc: "Enterprise networking and CCNA/CCNP paths." },
  { slug: "devops", title: "DevOps", desc: "CI/CD, Kubernetes, and infrastructure automation." },
  { slug: "data", title: "Data & Analytics", desc: "Data engineering and analytics bootcamps." },
  { slug: "project-management", title: "Project Management", desc: "Agile, Scrum, and enterprise management." },
  { slug: "microsoft-azure", title: "Microsoft Azure", desc: "Azure administration and architecture tracks." }
];

export const programs: Program[] = [
  {
    slug: "aws-certifications-roadmap",
    title: "AWS Certifications Roadmap",
    category: "aws",
    desc: "Master AWS cloud certifications with structured learning paths across Foundational, Associate, Professional, and Specialty levels.",
    duration: "Flexible",
    mode: "Live",
    level: "Foundation to Advanced",
    iconName: "Cloud",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Entry-level certifications for cloud beginners and foundational AWS knowledge.",
        modules: [
          {
            title: "Cloud Practitioner",
            focus: "AWS cloud fundamentals, services overview, pricing",
            duration: "1-2 months",
            desc: "Perfect starting point for anyone new to cloud computing and AWS platform. No technical prerequisites required."
          },
          {
            title: "AI/ML Introduction",
            focus: "AI fundamentals",
            duration: "1-2 months",
            desc: "Foundational understanding of AI/ML concepts on AWS."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Intermediate certifications for AWS professionals with hands-on experience and technical expertise.",
        modules: [
          {
            title: "Cloud Architecture",
            focus: "Cloud architecture, design principles, solution deployment",
            duration: "2-3 months",
            desc: "Design and deploy scalable, secure, and reliable applications on AWS infrastructure."
          },
          {
            title: "Application Development",
            focus: "Development tools",
            duration: "2-3 months",
            desc: "Build and deploy cloud-native applications on AWS."
          },
          {
            title: "Operations & Management",
            focus: "SysOps & Infrastructure",
            duration: "2-3 months",
            desc: "Manage and operate AWS systems and infrastructure."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Advanced certifications for experienced AWS professionals with deep technical expertise.",
        modules: [
          {
            title: "Advanced Architecture",
            focus: "Complex architectures, multi-tier systems, enterprise design",
            duration: "3-4 months",
            desc: "Design and deploy robust, scalable solutions for enterprise customers at AWS cloud scale."
          },
          {
            title: "DevOps & Automation",
            focus: "CI/CD & CloudFormation",
            duration: "3-4 months",
            desc: "Implement and manage continuous delivery systems on AWS."
          }
        ]
      },
      {
        level: "Specialty Certifications",
        desc: "Domain-specific certifications for deep expertise in specialized AWS areas.",
        modules: [
          {
            title: "Network Design",
            focus: "VPCs, hybrid networking, edge technologies",
            duration: "3-4 months",
            desc: "Design and implement complex networking architectures on AWS including hybrid cloud setups."
          },
          {
            title: "Cloud Security",
            focus: "IAM & Workload Protection",
            duration: "3-4 months",
            desc: "Secure AWS workloads and implement security controls."
          },
          {
            title: "Machine Learning Engineering",
            focus: "SageMaker & AI",
            duration: "3-4 months",
            desc: "Build, train, and deploy ML models on AWS."
          },
          {
            title: "Data Analytics",
            focus: "Big Data & Redshift",
            duration: "3-4 months",
            desc: "Design and implement big data solutions on AWS."
          },
          {
            title: "Database Administration",
            focus: "RDS & DynamoDB",
            duration: "3-4 months",
            desc: "Design and manage AWS database services."
          },
          {
            title: "Enterprise Applications",
            focus: "SAP on AWS",
            duration: "3-4 months",
            desc: "Run SAP workloads on AWS cloud infrastructure."
          }
        ]
      }
    ]
  },
  {
    slug: "splunk-certifications-roadmap",
    title: "Splunk Certification Roadmap",
    category: "data",
    desc: "Search, SIEM, observability, and enterprise Splunk certification paths.",
    duration: "42 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    tiers: [
      {
        level: "Core Power User",
        desc: "Foundational log parsing and analytics capabilities.",
        modules: [
          {
            title: "Splunk Core Fundamentals",
            focus: "Data ingestion, basic search syntax, and platform navigation",
            duration: "2 Weeks",
            desc: "Learn to navigate Splunk, perform basic searches, and understand the core data pipeline architecture."
          },
          {
            title: "Advanced Search & Reporting",
            focus: "SPL Mastery, Data Models, Timecharts",
            duration: "3 Weeks",
            desc: "Master the Search Processing Language (SPL) to create advanced visualizations, statistical reports, and alerts."
          }
        ]
      },
      {
        level: "Enterprise Admin",
        desc: "Managing Splunk infrastructure at scale.",
        modules: [
          {
            title: "Splunk Enterprise Administration",
            focus: "Cluster Management, Indexers, Forwarders",
            duration: "4 Weeks",
            desc: "Deploy, configure, and manage Splunk Enterprise environments, focusing on data lifecycle and high availability."
          }
        ]
      },
      {
        level: "Security SIEM Specialist",
        desc: "Advanced threat hunting using Splunk ES.",
        modules: [
          {
            title: "Splunk Enterprise Security (ES)",
            focus: "Correlation Searches, Notable Events, Incident Review",
            duration: "4 Weeks",
            desc: "Implement and utilize Splunk ES to detect, investigate, and respond to cyber threats in real-time."
          }
        ]
      }
    ]
  },
  {
    slug: "sentinel-siem-cloud-security",
    title: "Azure Sentinel SIEM",
    category: "microsoft-azure",
    desc: "Microsoft Sentinel detection engineering, threat hunting, and SOC workflows.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Security Operations Foundation",
        desc: "Setting up the Azure security environment.",
        modules: [
          {
            title: "Azure Security Fundamentals",
            focus: "Azure Active Directory, Network Security Groups, Defender for Cloud",
            duration: "2 Weeks",
            desc: "Understand the core security mechanisms within the Azure ecosystem before diving into SIEM."
          },
          {
            title: "Sentinel Workspace Deployment",
            focus: "Log Analytics, Data Connectors, Retention Policies",
            duration: "2 Weeks",
            desc: "Configure the Log Analytics Workspace and connect data sources from Azure, AWS, and on-premises."
          }
        ]
      },
      {
        level: "Detection Engineering",
        desc: "Writing rules and hunting threats.",
        modules: [
          {
            title: "KQL Query Construction",
            focus: "Kusto Query Language, Parsing, Joins",
            duration: "3 Weeks",
            desc: "Master KQL to proactively hunt for anomalies and write custom analytic rules."
          },
          {
            title: "Playbooks and Automation (SOAR)",
            focus: "Logic Apps, Automated Responses, Incident Triage",
            duration: "3 Weeks",
            desc: "Build automated SOAR playbooks using Azure Logic Apps to respond to incidents instantly."
          }
        ]
      }
    ]
  },
  {
    slug: "ethical-hacking-certification-roadmap",
    title: "Ethical Hacking Roadmap",
    category: "cybersecurity",
    desc: "Ethical hacking path from fundamentals to advanced offensive security.",
    duration: "45 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Lock",
    tiers: [
      {
        level: "Foundational Penetration Testing",
        desc: "Core concepts of networking and enumeration.",
        modules: [
          {
            title: "Networking & Protocol Basics",
            focus: "TCP/IP, DNS, HTTP, Subnetting",
            duration: "1 Week",
            desc: "Deep dive into how the internet works to understand exactly how it can be exploited."
          },
          {
            title: "Vulnerability Scanning & Enum",
            focus: "Nmap, Nessus, OpenVAS, OSINT",
            duration: "2 Weeks",
            desc: "Learn reconnaissance techniques to map out attack surfaces and identify vulnerable systems."
          }
        ]
      },
      {
        level: "Exploitation & Post-Exploitation",
        desc: "Taking control of vulnerable targets.",
        modules: [
          {
            title: "Web App Penetration Testing",
            focus: "OWASP Top 10, SQLi, XSS, Burp Suite",
            duration: "3 Weeks",
            desc: "Identify and exploit vulnerabilities in web applications using industry-standard tools."
          },
          {
            title: "Privilege Escalation",
            focus: "Linux/Windows PrivEsc, Kernels, Misconfigurations",
            duration: "2 Weeks",
            desc: "Elevate your access from a low-level user shell to root/SYSTEM level control."
          }
        ]
      },
      {
        level: "Practical Application",
        desc: "Real-world testing scenarios.",
        modules: [
          {
            title: "Capture The Flag (CTF) Labs",
            focus: "HackTheBox, TryHackMe, Custom AD Labs",
            duration: "2 Weeks",
            desc: "Apply your skills in entirely simulated enterprise environments to prepare for certifications."
          }
        ]
      }
    ]
  },
  {
    slug: "qradar-certifications-roadmap",
    title: "QRadar SIEM Roadmap",
    category: "cybersecurity",
    desc: "IBM QRadar certifications for analyst, operator, admin, and architect roles.",
    duration: "41 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "QRadar Analyst",
        desc: "Day-to-day SOC monitoring and investigation.",
        modules: [
          {
            title: "Log & Flow Integration",
            focus: "Event collectors, Flow processors, DSMs",
            duration: "2 Weeks",
            desc: "Understand how QRadar ingests, normalizes, and correlates log and network flow data."
          },
          {
            title: "Offense Management",
            focus: "Investigating offenses, false positives, tuning",
            duration: "2 Weeks",
            desc: "Analyze and close offenses efficiently within a high-tempo SOC environment."
          }
        ]
      },
      {
        level: "QRadar Administrator",
        desc: "System management and custom engineering.",
        modules: [
          {
            title: "Rule Creation and Tuning",
            focus: "Building custom correlation rules, AQL, Building Blocks",
            duration: "3 Weeks",
            desc: "Design complex correlation rules using AQL to catch advanced persistent threats (APTs)."
          },
          {
            title: "Custom Dashboarding & API",
            focus: "Pulse App, REST API, Report Generation",
            duration: "2 Weeks",
            desc: "Create custom visualizations and integrate QRadar with external ticketing and threat intel systems."
          }
        ]
      }
    ]
  },
  {
    slug: "elk-certifications-roadmap",
    title: "Elastic ELK Certifications",
    category: "data",
    desc: "Elastic Engineer, Analyst, Observability, and SIEM certification path.",
    duration: "38 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Server",
    tiers: [
      {
        level: "Data Pipeline Engineering",
        desc: "Ingesting and parsing massive datasets.",
        modules: [
          {
            title: "Logstash Pipelines & Beats",
            focus: "Filebeat, Metricbeat, Grok parsing, Filters",
            duration: "2 Weeks",
            desc: "Build robust data ingestion pipelines using Logstash and Beats to ship data to Elasticsearch."
          },
          {
            title: "Elasticsearch Cluster Architecture",
            focus: "Nodes, Shards, Replicas, Index Lifecycle",
            duration: "3 Weeks",
            desc: "Design and optimize Elasticsearch clusters for high-speed indexing and querying."
          }
        ]
      },
      {
        level: "Analytics & Security",
        desc: "Visualizing data and detecting threats.",
        modules: [
          {
            title: "Kibana Visualizations",
            focus: "Dashboards, Canvas, TSVB, Machine Learning",
            duration: "2 Weeks",
            desc: "Build powerful interactive dashboards to visualize logs and metrics in Kibana."
          },
          {
            title: "Elastic Security Deployment",
            focus: "Elastic SIEM, Detection Rules, Endpoint Security",
            duration: "3 Weeks",
            desc: "Utilize the Elastic Security app to detect anomalies and manage endpoint protections."
          }
        ]
      }
    ]
  },
  {
    slug: "cloud-security-certifications-roadmap",
    title: "Cloud Security Roadmap",
    category: "cybersecurity",
    desc: "Cloud security pathways for AWS, Azure, GCP, and enterprise SOC use cases.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Cloud Infrastructure Defense",
        desc: "Securing the perimeter and workloads.",
        modules: [
          {
            title: "Cloud IAM Hardening",
            focus: "Role-based Access Control, Zero Trust, Federation",
            duration: "2 Weeks",
            desc: "Implement least privilege access and secure identity management across multi-cloud environments."
          },
          {
            title: "Network Security Controls",
            focus: "WAF, Shield, NSGs, Private Links",
            duration: "2 Weeks",
            desc: "Design secure network boundaries and protect against DDoS and application-layer attacks."
          }
        ]
      },
      {
        level: "Compliance & Response",
        desc: "Governance and incident handling.",
        modules: [
          {
            title: "Cloud Workload Protection",
            focus: "Container Security, CSPM, CWPP",
            duration: "3 Weeks",
            desc: "Secure Kubernetes clusters, serverless functions, and VM instances using cloud-native tools."
          },
          {
            title: "Cloud Incident Response",
            focus: "Forensics in the Cloud, Automation, Logging",
            duration: "2 Weeks",
            desc: "Execute IR procedures specifically designed for ephemeral cloud environments."
          }
        ]
      }
    ]
  },
  {
    slug: "comptia-enterprise-certification-roadmap",
    title: "CompTIA Certification Roadmap",
    category: "networking",
    desc: "Comptia tracks across Security+, Network+, Linux+, CASP+, and Cloud+.",
    duration: "44 Hrs",
    mode: "Live",
    level: "Foundation to Advanced",
    iconName: "Shield",
    tiers: [
      {
        level: "Core Infrastructure",
        desc: "Building the foundation of IT operations.",
        modules: [
          {
            title: "Network+ Infrastructure",
            focus: "Routing, Switching, Wireless, Troubleshooting",
            duration: "3 Weeks",
            desc: "Master the fundamentals of network infrastructure and protocols."
          },
          {
            title: "Linux+ Administration",
            focus: "Command Line, Scripting, Permissions",
            duration: "3 Weeks",
            desc: "Gain deep proficiency in managing and securing Linux operating systems."
          }
        ]
      },
      {
        level: "Security Professional",
        desc: "Securing enterprise environments.",
        modules: [
          {
            title: "Security+ Fundamentals",
            focus: "Threats, Attacks, Vulnerabilities, Crypto",
            duration: "3 Weeks",
            desc: "Establish core knowledge required of any cybersecurity role and earn DOD 8570 compliance."
          },
          {
            title: "CASP+ Advanced Security",
            focus: "Enterprise Architecture, Risk Management",
            duration: "4 Weeks",
            desc: "Advanced-level certification for senior security practitioners focusing on enterprise solutions."
          }
        ]
      }
    ]
  },
  {
    slug: "networking-certifications-roadmap",
    title: "Networking Certifications Roadmap",
    category: "networking",
    desc: "Networking path covering CCNA, CCNP, and enterprise network engineering skills.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Foundation to Advanced",
    iconName: "Network",
    tiers: [
      {
        level: "CCNA Foundation",
        desc: "Core routing and switching concepts.",
        modules: [
          {
            title: "OSI Model & IP Addressing",
            focus: "Subnetting, IPv4/IPv6, Protocols",
            duration: "2 Weeks",
            desc: "Understand the fundamental building blocks of data transmission across networks."
          },
          {
            title: "Switching and VLANs",
            focus: "Spanning Tree, Trunking, EtherChannel",
            duration: "2 Weeks",
            desc: "Configure and troubleshoot complex Layer 2 switching environments."
          }
        ]
      },
      {
        level: "CCNP Enterprise",
        desc: "Advanced routing and network automation.",
        modules: [
          {
            title: "Routing Protocols (OSPF, EIGRP, BGP)",
            focus: "Path Selection, Redistribution, Tuning",
            duration: "3 Weeks",
            desc: "Implement scalable and highly available Layer 3 routing architectures."
          },
          {
            title: "Network Automation Basics",
            focus: "Python, REST APIs, JSON, SD-WAN",
            duration: "3 Weeks",
            desc: "Transition from CLI administration to programmatic network automation."
          }
        ]
      }
    ]
  },
  {
    slug: "aws-solutions-architect-associate",
    title: "AWS Solutions Architect Associate",
    category: "aws",
    desc: "Master AWS architecture, compute, storage, and database services to design robust cloud solutions.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Core AWS Infrastructure",
        desc: "Building scalable compute and storage foundations.",
        modules: [
          {
            title: "AWS Core Services & EC2",
            focus: "AMIs, Auto Scaling, Load Balancing (ELB)",
            duration: "2 Weeks",
            desc: "Deploy highly available compute clusters using Elastic Compute Cloud."
          },
          {
            title: "VPC and Networking",
            focus: "Subnets, Route Tables, NAT Gateways, Peering",
            duration: "2 Weeks",
            desc: "Design secure virtual private clouds and manage network traffic flow."
          }
        ]
      },
      {
        level: "Data & Architecture",
        desc: "Managing state and decoupling applications.",
        modules: [
          {
            title: "S3 & Storage Solutions",
            focus: "Object Storage, EBS, EFS, Glacier",
            duration: "1 Week",
            desc: "Implement the correct storage tiering strategies for cost and performance."
          },
          {
            title: "RDS & DynamoDB",
            focus: "Relational vs NoSQL, Multi-AZ, Read Replicas",
            duration: "2 Weeks",
            desc: "Deploy and manage highly available database architectures."
          },
          {
            title: "High Availability & Scaling",
            focus: "SQS, SNS, Route53, CloudFront",
            duration: "2 Weeks",
            desc: "Architect globally distributed, decoupled, and fault-tolerant applications."
          }
        ]
      }
    ]
  },
  {
    slug: "aws-devops-engineer-professional",
    title: "AWS DevOps Engineer Professional",
    category: "devops",
    desc: "Advanced training for implementing CI/CD pipelines, automation, and infrastructure as code on AWS.",
    duration: "45 Hrs",
    mode: "Live",
    level: "Advanced",
    iconName: "Server",
    tiers: [
      {
        level: "Automation & CI/CD",
        desc: "Automating software delivery.",
        modules: [
          {
            title: "CI/CD Pipelines on AWS",
            focus: "CodeCommit, CodeBuild, CodeDeploy, CodePipeline",
            duration: "3 Weeks",
            desc: "Build fully automated, end-to-end continuous integration and deployment pipelines."
          },
          {
            title: "Infrastructure as Code",
            focus: "CloudFormation, AWS SAM, Terraform",
            duration: "3 Weeks",
            desc: "Provision and manage AWS infrastructure programmatically using templates."
          }
        ]
      },
      {
        level: "Operations & Observability",
        desc: "Managing deployments at scale.",
        modules: [
          {
            title: "Monitoring and Logging",
            focus: "CloudWatch, EventBridge, AWS X-Ray, CloudTrail",
            duration: "2 Weeks",
            desc: "Implement comprehensive observability to detect issues before they impact users."
          },
          {
            title: "Configuration Management",
            focus: "Systems Manager, OpsWorks, Elastic Beanstalk",
            duration: "2 Weeks",
            desc: "Manage fleet configurations and orchestrate application updates securely."
          }
        ]
      }
    ]
  },
  {
    slug: "azure-az104",
    title: "Azure Administrator (AZ-104)",
    category: "microsoft-azure",
    desc: "Learn to manage Azure subscriptions, secure identities, administer infrastructure, configure virtual networking, and manage resource traffic.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Identity & Governance",
        desc: "Securing access and managing costs.",
        modules: [
          {
            title: "Manage Azure Identities",
            focus: "Entra ID (Azure AD), Users, Groups, RBAC",
            duration: "2 Weeks",
            desc: "Implement role-based access control and manage enterprise identities."
          },
          {
            title: "Subscriptions & Governance",
            focus: "Azure Policies, Resource Groups, Cost Management",
            duration: "1 Week",
            desc: "Enforce compliance and control cloud spend across the organization."
          }
        ]
      },
      {
        level: "Compute & Networking",
        desc: "Deploying core infrastructure.",
        modules: [
          {
            title: "Deploy Compute Resources",
            focus: "Virtual Machines, App Services, AKS",
            duration: "2 Weeks",
            desc: "Provision and manage Windows and Linux virtual machines and containers."
          },
          {
            title: "Configure Virtual Networking",
            focus: "VNet Peering, VPN Gateway, Azure Firewall",
            duration: "3 Weeks",
            desc: "Design and implement complex Azure networking topologies."
          },
          {
            title: "Storage & Backup",
            focus: "Storage Accounts, Blob, File Shares, Recovery Services",
            duration: "2 Weeks",
            desc: "Manage data lifecycle and implement disaster recovery solutions."
          }
        ]
      }
    ]
  },
  {
    slug: "comptia-certifications-roadmap",
    title: "CompTIA Certification Roadmap",
    category: "cybersecurity",
    desc: "Complete CompTIA Security+ to SecurityX journey with DoD 8570 compliance and enterprise architecture training.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ 4 globally recognized CompTIA certifications",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ 4 globally recognized CompTIA certifications including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Entry-level to Expert progression",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Entry-level to Expert progression including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Real-world security lab environments",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Real-world security lab environments including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CompTIA-approved training partners",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CompTIA-approved training partners including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Exam prep and success guarantee",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Exam prep and success guarantee including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Career advancement roadmap",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Career advancement roadmap including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
  slug: "splunk-core-certified-user",
  title: "Splunk Core Certified User",
  category: "data",
  desc: "Build a strong foundation of Splunk platform fundamentals. Master searching, fields, lookups, alerts, reports, and dashboards on Enterprise or Cloud.",
  duration: "4-8 Weeks",
  mode: "Live",
  level: "Beginner",
  iconName: "Database",

  tiers: [
    {
      level: "Weeks 1-2: Splunk Fundamentals",
      desc: "Introduction to Splunk architecture, navigation, and data onboarding.",
      modules: [
        {
          title: "Platform Architecture",
          focus: "Indexer, search head, forwarder",
          duration: "2 Weeks",
          desc: "Understand Splunk components, data pipeline, and deployment models."
        },
        {
          title: "Navigation & Interface",
          focus: "UI and search basics",
          duration: "2 Weeks",
          desc: "Learn Splunk interface, menus, and search bar usage."
        },
        {
          title: "Data Onboarding",
          focus: "Inputs and indexing",
          duration: "2 Weeks",
          desc: "Ingest data using files, ports, and scripts."
        }
      ]
    },
    {
      level: "Weeks 3-4: SPL (Search Processing Language)",
      desc: "Core searching and data analysis skills.",
      modules: [
        {
          title: "SPL Basics",
          focus: "Syntax, filters",
          duration: "2 Weeks",
          desc: "Learn search queries, boolean logic, and operators."
        },
        {
          title: "Search Commands",
          focus: "Pipes and transformations",
          duration: "2 Weeks",
          desc: "Use commands to filter and transform data."
        },
        {
          title: "Fields & Extraction",
          focus: "Field handling",
          duration: "2 Weeks",
          desc: "Work with fields, aliases, and extraction techniques."
        }
      ]
    },
    {
      level: "Week 5: Reports & Dashboards",
      desc: "Create reports and visual dashboards.",
      modules: [
        {
          title: "Reports",
          focus: "Saved searches",
          duration: "1 Week",
          desc: "Build and format reports using Splunk."
        },
        {
          title: "Dashboards",
          focus: "Panels & layout",
          duration: "1 Week",
          desc: "Design interactive dashboards."
        }
      ]
    },
    {
      level: "Week 6: Alerts & Monitoring",
      desc: "Automate monitoring with alerts.",
      modules: [
        {
          title: "Alert Creation",
          focus: "Triggers",
          duration: "1 Week",
          desc: "Create alerts based on conditions."
        },
        {
          title: "Notifications",
          focus: "Email, webhook",
          duration: "1 Week",
          desc: "Send alerts via integrations."
        }
      ]
    },
    {
      level: "Week 7: Lookups & Knowledge Objects",
      desc: "Enhance data and manage knowledge.",
      modules: [
        {
          title: "Lookups",
          focus: "CSV & KV store",
          duration: "1 Week",
          desc: "Use lookup tables for enrichment."
        },
        {
          title: "Knowledge Objects",
          focus: "Tags & fields",
          duration: "1 Week",
          desc: "Manage reusable configurations."
        }
      ]
    },
    {
      level: "Week 8: Exam Preparation",
      desc: "Prepare for certification exam.",
      modules: [
        {
          title: "Mock Tests",
          focus: "Practice exams",
          duration: "1 Week",
          desc: "Attempt full-length tests and review."
        },
        {
          title: "Final Revision",
          focus: "Key concepts",
          duration: "1 Week",
          desc: "Revise important topics and strategies."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-core-certified-power-user",
  title: "Splunk Core Certified Power User",
  category: "data",
  desc: "Extend your Splunk expertise as a power user. Master knowledge objects, data models, field aliases, calculated fields, macros, and Common Information Model normalization for advanced data analysis.",
  duration: "6-10 Weeks",
  mode: "Live",
  level: "Intermediate",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: Advanced Search & Reporting",
      desc: "Master complex searches and reporting at power user level.",
      modules: [
        {
          title: "Advanced SPL Commands",
          focus: "Subsearches, nested searches, advanced stats, time-based analysis",
          duration: "2 Weeks",
          desc: "Master subsearches, multi-level searches, advanced stats functions, and span/bin operations for complex data analysis."
        },
        {
          title: "Data Transformation",
          focus: "Eval functions, field transformations, conditional logic",
          duration: "2 Weeks",
          desc: "Use eval function mastery, complex field transformations, conditional logic, and string manipulation functions."
        },
        {
          title: "Search Performance",
          focus: "Query optimization, index time vs search time",
          duration: "2 Weeks",
          desc: "Apply search efficiency techniques, understand index vs search time tradeoffs, and implement performance tuning strategies."
        }
      ]
    },
    {
      level: "Module 3-4: Knowledge Objects",
      desc: "Design and implement knowledge objects for data enrichment.",
      modules: [
        {
          title: "Event Types & Tags",
          focus: "Pattern matching, tag creation and grouping",
          duration: "2 Weeks",
          desc: "Create event types using pattern matching, assign tags, and organize tag groups for structured data classification."
        },
        {
          title: "Field Enhancement",
          focus: "Field aliases, calculated fields, custom validations",
          duration: "2 Weeks",
          desc: "Configure field aliases, create calculated fields, assign field types, and set up custom field validations."
        },
        {
          title: "Workflow Actions",
          focus: "Link and search actions, external tool integration",
          duration: "2 Weeks",
          desc: "Build workflow actions including link and search actions, integrate with external tools, and apply best practices."
        }
      ]
    },
    {
      level: "Module 5-6: Macros & Field Aliases",
      desc: "Build reusable search components with macros and field enrichment.",
      modules: [
        {
          title: "Macro Creation",
          focus: "Arguments, parameters, conditional and nested macros",
          duration: "2 Weeks",
          desc: "Define simple and complex macros with arguments, conditional logic, and nested macro patterns for reusable searches."
        },
        {
          title: "Field Aliases",
          focus: "Multi-field mapping, alias inheritance, conflict resolution",
          duration: "2 Weeks",
          desc: "Configure field aliases, handle multi-field mapping, manage alias inheritance, and resolve priority conflicts."
        },
        {
          title: "Advanced Field Operations",
          focus: "Props/transforms config, field precedence and hierarchy",
          duration: "2 Weeks",
          desc: "Apply field extraction patterns, configure props and transforms, and understand field precedence and inheritance rules."
        }
      ]
    },
    {
      level: "Module 7-8: Data Models",
      desc: "Design and implement data models for enterprise analytics.",
      modules: [
        {
          title: "Data Model Basics",
          focus: "Architecture, objects, attributes, acceleration",
          duration: "2 Weeks",
          desc: "Understand data model architecture, define objects and attributes, and configure acceleration for performance."
        },
        {
          title: "Object Design",
          focus: "Root and child objects, field inheritance, constraints",
          duration: "2 Weeks",
          desc: "Design root and child objects, implement field inheritance, apply constraints and filtering, and optimize objects."
        },
        {
          title: "Advanced Features",
          focus: "Acceleration, calculated object fields, advanced joins",
          duration: "2 Weeks",
          desc: "Implement data model acceleration, create calculated object fields, configure advanced joins, and manage versioning."
        }
      ]
    },
    {
      level: "Module 9: Common Information Model (CIM)",
      desc: "Master data normalization with Splunk's CIM framework.",
      modules: [
        {
          title: "CIM Fundamentals",
          focus: "CIM data models, field mappings, add-on design",
          duration: "1 Week",
          desc: "Understand CIM concepts, explore CIM data models, learn field mappings, and design CIM-compliant add-ons."
        },
        {
          title: "CIM Implementation",
          focus: "Tagging, props/transforms, field alias mapping",
          duration: "1 Week",
          desc: "Tag events for CIM compliance, configure props and transforms, map field aliases to CIM fields, and validate."
        },
        {
          title: "CIM Use Cases",
          focus: "Security, IT ops, app performance, cross-source correlation",
          duration: "1 Week",
          desc: "Normalize security data, IT operations, and application performance metrics for cross-source correlation."
        }
      ]
    },
    {
      level: "Module 10: Exam Prep & Review",
      desc: "Comprehensive exam preparation and final review for SPLK-1002.",
      modules: [
        {
          title: "Exam Skills Review",
          focus: "Exam format, time management, scenario analysis",
          duration: "1 Week",
          desc: "Review exam format, practice time management strategies, analyze advanced scenarios, and avoid common pitfalls."
        },
        {
          title: "Practice Exams",
          focus: "Full-length tests, timed simulations, performance analytics",
          duration: "1 Week",
          desc: "Attempt full-length practice tests, timed simulations, and advanced question sets with performance tracking."
        },
        {
          title: "Final Preparation",
          focus: "Concept review, expert Q&A, exam day strategies",
          duration: "1 Week",
          desc: "Comprehensive review of all concepts, expert Q&A sessions, troubleshooting complex scenarios, and exam day tips."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-core-certified-advanced-power-user",
  title: "Splunk Core Certified Advanced Power User",
  category: "data",
  desc: "Deepen your Splunk expertise with complex search commands, advanced knowledge objects, and best practices for dashboards and forms to get the most out of your data.",
  duration: "8-12 Weeks",
  mode: "Live",
  level: "Advanced",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: Complex Search Commands",
      desc: "Master expert-level SPL commands for deep data analysis.",
      modules: [
        {
          title: "Advanced Search Functions",
          focus: "Multivalue fields, mvexpand, streaming vs non-streaming commands",
          duration: "2 Weeks",
          desc: "Master advanced eval functions, multivalue field handling, streaming vs non-streaming commands, and advanced field extraction techniques."
        },
        {
          title: "Statistical & Analytical Commands",
          focus: "eventstats, streamstats, anomaly detection, predictive analytics",
          duration: "2 Weeks",
          desc: "Apply advanced stats, eventstats, streamstats, time-series analysis, anomaly detection, and predictive analytics using the predict command."
        },
        {
          title: "Advanced Data Manipulation",
          focus: "Transpose, untable, complex join, delta, accum",
          duration: "2 Weeks",
          desc: "Use transpose, untable, complex join and append, delta, accum, autoregress, and rare/outlier identification commands."
        }
      ]
    },
    {
      level: "Module 3-4: Complex Reporting Commands",
      desc: "Build sophisticated reports and data analysis workflows.",
      modules: [
        {
          title: "Advanced Reporting Techniques",
          focus: "Multi-dimensional pivot, trendline, conditional formatting",
          duration: "2 Weeks",
          desc: "Create complex table formatting, multi-dimensional pivot reports, trendline and forecasting, and conditional formatting."
        },
        {
          title: "Correlated Searches",
          focus: "Multi-search correlation, transaction command, pattern recognition",
          duration: "2 Weeks",
          desc: "Build multi-search correlation, detect sequential events, recognize patterns, and use the transaction command for grouping."
        },
        {
          title: "Scheduled Reports",
          focus: "Report acceleration, summary index, automated distribution",
          duration: "2 Weeks",
          desc: "Configure advanced report scheduling, report acceleration, leverage summary indexes, and automate report distribution."
        }
      ]
    },
    {
      level: "Module 5-6: Advanced Knowledge Object Use Cases",
      desc: "Expert-level knowledge object design for enterprise scenarios.",
      modules: [
        {
          title: "Advanced Event Types",
          focus: "Complex hierarchies, priority-based matching, multi-source",
          duration: "2 Weeks",
          desc: "Build complex event type hierarchies, apply priority-based matching, design multi-source event types, and optimize performance."
        },
        {
          title: "Advanced Field Extractions",
          focus: "Regex mastery, delimiter extractions, interactive extractor",
          duration: "2 Weeks",
          desc: "Master regex-based extraction, delimiter-based extractions, use the interactive extractor tool, and tune for performance."
        },
        {
          title: "Enterprise Use Case Design",
          focus: "Security monitoring, IT ops analytics, cross-domain correlation",
          duration: "2 Weeks",
          desc: "Design security monitoring, IT operations analytics, business intelligence, and cross-domain correlation use cases."
        }
      ]
    },
    {
      level: "Module 7-8: Dashboard Best Practices",
      desc: "Design enterprise-grade dashboards following Splunk best practices.",
      modules: [
        {
          title: "Dashboard Architecture",
          focus: "Panel layout, base searches, post-processing, performance",
          duration: "2 Weeks",
          desc: "Apply design principles, organize panel layout, configure base searches and post-processing, and optimize dashboard performance."
        },
        {
          title: "Advanced Visualizations",
          focus: "Choropleth maps, trellis layout, custom color palettes",
          duration: "2 Weeks",
          desc: "Implement custom visualization options, choropleth maps, trellis layout, and custom color palettes for enterprise dashboards."
        },
        {
          title: "Dynamic Dashboards",
          focus: "Token-based content, drilldown, panel event handlers",
          duration: "2 Weeks",
          desc: "Build token-based dynamic content, configure panel drilldowns, set up event handlers, and enable dynamic title updates."
        }
      ]
    },
    {
      level: "Module 9-10: Forms & Interactive Controls",
      desc: "Build interactive forms with user inputs and dynamic filtering.",
      modules: [
        {
          title: "Form Design",
          focus: "Input types, time range picker, cascading forms",
          duration: "2 Weeks",
          desc: "Design textbox, dropdown, and radio inputs, configure time range pickers, multi-select inputs, and cascading form defaults."
        },
        {
          title: "Token System",
          focus: "Token scope, manipulation, inter-panel communication",
          duration: "2 Weeks",
          desc: "Define and scope tokens, manipulate tokens in searches, enable inter-panel communication, and use URL-based token injection."
        },
        {
          title: "Advanced Interactivity",
          focus: "Panel visibility, submit behavior, nested drilldown flows",
          duration: "2 Weeks",
          desc: "Configure panel visibility conditions, submit behavior and auto-run, form field validation, and nested drilldown flows."
        }
      ]
    },
    {
      level: "Module 11-12: Capstone Projects & Exam Prep",
      desc: "Real-world enterprise projects and final exam preparation for SPLK-1003.",
      modules: [
        {
          title: "Capstone Projects",
          focus: "SOC dashboard, IT monitoring, executive reporting framework",
          duration: "2 Weeks",
          desc: "Build an end-to-end security operations dashboard, IT infrastructure monitoring, executive reporting framework, and complex SPL query portfolio."
        },
        {
          title: "Practice Exams",
          focus: "Full-length SPLK-1003 tests, timed simulations",
          duration: "1 Week",
          desc: "Attempt full-length SPLK-1003 practice tests, timed simulations, expert-level scenario questions, and detailed performance analysis."
        },
        {
          title: "Final Review",
          focus: "Concept review, expert Q&A, exam day strategies",
          duration: "1 Week",
          desc: "Comprehensive review of all concepts, expert Q&A sessions, edge case and pitfall review, and exam day strategies."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-cloud-certified-admin",
  title: "Splunk Cloud Certified Admin",
  category: "data",
  desc: "Build competence in managing and configuring Splunk Cloud — data inputs, forwarder configuration, data management, user accounts, monitoring, and problem isolation.",
  duration: "6-10 Weeks",
  mode: "Live",
  level: "Intermediate",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: Splunk Cloud Architecture",
      desc: "Understand the Splunk Cloud platform, components, and cloud-specific administration model.",
      modules: [
        {
          title: "Splunk Cloud Platform",
          focus: "Cloud vs on-premises, Victoria and Classic experience, shared responsibility",
          duration: "2 Weeks",
          desc: "Understand Splunk Cloud vs on-premises differences, deployment tiers, Victoria and Classic experience, and the shared responsibility model."
        },
        {
          title: "Admin Console Overview",
          focus: "Admin portal navigation, self-service capabilities, support portal",
          duration: "2 Weeks",
          desc: "Navigate the Splunk Cloud admin portal, understand self-service capabilities, use the Support Portal, and distinguish managed vs self-managed features."
        },
        {
          title: "Cloud Components",
          focus: "Search heads, indexers, cluster architecture, forwarder management",
          duration: "2 Weeks",
          desc: "Explore search heads, indexers, cluster architecture, deployment server, forwarder management, Search Head Clusters, and high availability concepts."
        }
      ]
    },
    {
      level: "Module 3-4: Data Inputs & Forwarder Configuration",
      desc: "Configure data collection pipelines from on-premises systems and cloud sources into Splunk Cloud.",
      modules: [
        {
          title: "Universal Forwarder Setup",
          focus: "Installation, inputs.conf/outputs.conf, certificates",
          duration: "2 Weeks",
          desc: "Install and configure universal forwarders, set up inputs.conf and outputs.conf, and manage authentication and certificates."
        },
        {
          title: "Data Input Types",
          focus: "File monitoring, syslog, HEC, cloud-native inputs (AWS, Azure, GCP)",
          duration: "2 Weeks",
          desc: "Configure file/directory monitoring, network inputs like syslog and TCP/UDP, HTTP Event Collector, and cloud-native inputs from AWS, Azure, and GCP."
        },
        {
          title: "Input Best Practices",
          focus: "Source type assignment, filtering, routing, troubleshooting ingestion",
          duration: "2 Weeks",
          desc: "Apply source type assignment, input filtering and routing, manage data volume, and troubleshoot ingestion issues."
        }
      ]
    },
    {
      level: "Module 5-6: Data Management",
      desc: "Manage indexes, data retention, and storage policies in Splunk Cloud.",
      modules: [
        {
          title: "Index Management",
          focus: "Creating indexes, access controls, self-storage and BYOS",
          duration: "2 Weeks",
          desc: "Create and configure indexes, manage default vs custom indexes, apply index-level access controls, and understand self-storage and BYOS options."
        },
        {
          title: "Data Retention Policies",
          focus: "Retention settings, frozen archival, DDAA, compliance lifecycle",
          duration: "2 Weeks",
          desc: "Configure retention settings per index, manage frozen data archival, use Dynamic Data Active Archive (DDAA), and ensure compliance lifecycle management."
        },
        {
          title: "Data Privacy & Masking",
          focus: "Field anonymization, obfuscation, GDPR, props.conf transforms",
          duration: "2 Weeks",
          desc: "Implement field anonymization and masking, data obfuscation, GDPR compliance, and configure props.conf for data transforms."
        }
      ]
    },
    {
      level: "Module 7: User Accounts & Access Control",
      desc: "Manage Splunk Cloud user accounts, roles, and authentication securely.",
      modules: [
        {
          title: "User & Role Management",
          focus: "User accounts, built-in/custom roles, capabilities and permissions",
          duration: "1 Week",
          desc: "Create user accounts, configure built-in and custom roles, manage capabilities and permissions, and handle user profile management."
        },
        {
          title: "Authentication Methods",
          focus: "LDAP/AD integration, SAML SSO, MFA configuration",
          duration: "1 Week",
          desc: "Configure Splunk-native auth, LDAP/AD integration, SAML SSO, and multi-factor authentication (MFA)."
        },
        {
          title: "Access Control Best Practices",
          focus: "Index restrictions, search-time field filtering, least privilege, audit logging",
          duration: "1 Week",
          desc: "Apply index-level restrictions, search-time field filtering, least privilege model, and implement audit logging and access reviews."
        }
      ]
    },
    {
      level: "Module 8-9: Monitoring & Problem Isolation",
      desc: "Monitor platform health, identify issues, and isolate problems in Splunk Cloud.",
      modules: [
        {
          title: "Monitoring Console",
          focus: "Health metrics, indexing rate tracking, search performance monitoring",
          duration: "2 Weeks",
          desc: "Use the Splunk Cloud monitoring console to track key health metrics, indexing rate and volume, and search performance."
        },
        {
          title: "Problem Isolation Techniques",
          focus: "Diagnosing ingestion failures, forwarder connectivity, search job debug",
          duration: "2 Weeks",
          desc: "Diagnose common admin issues, identify data ingestion failures, resolve forwarder connectivity problems, and inspect search jobs for debugging."
        },
        {
          title: "Alerting & Notifications",
          focus: "System health alerts, license monitoring, capacity planning",
          duration: "1 Week",
          desc: "Set up system health alerts, monitor license utilization, plan capacity, and escalate issues to Splunk Cloud Support."
        }
      ]
    },
    {
      level: "Module 10: Exam Preparation & Review",
      desc: "Comprehensive exam readiness for SPLK-2003 with mock tests and scenario practice.",
      modules: [
        {
          title: "Practice Exams",
          focus: "Full-length SPLK-2003 mock exams, timed simulation, gap analysis",
          duration: "1 Week",
          desc: "Attempt full-length SPLK-2003 mock exams, timed simulations, topic gap analysis, and detailed answer explanations."
        },
        {
          title: "Scenario-Based Review",
          focus: "Real-world admin scenarios, troubleshooting case studies",
          duration: "1 Week",
          desc: "Work through real-world admin scenarios, configuration decision exercises, troubleshooting case studies, and edge case handling."
        },
        {
          title: "Final Preparation",
          focus: "Objective review, expert Q&A, admin runbook, exam-day tips",
          duration: "1 Week",
          desc: "Review all objectives, conduct expert Q&A sessions, use the admin runbook and cheat-sheet, and apply exam-day strategies."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-enterprise-certified-admin",
  title: "Splunk Enterprise Certified Admin",
  category: "data",
  desc: "Develop expertise in daily Splunk Enterprise management — license management, indexers, search heads, configuration, monitoring, and getting data into the Splunk platform.",
  duration: "8-12 Weeks",
  mode: "Live",
  level: "Intermediate",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: Splunk Enterprise Architecture",
      desc: "Understand Splunk Enterprise components, deployment topologies, and the admin role.",
      modules: [
        {
          title: "Platform Architecture",
          focus: "Forwarder, indexer, search head roles, distributed topologies",
          duration: "2 Weeks",
          desc: "Explore Splunk Enterprise components, forwarder/indexer/search head roles, distributed topologies, and single-instance vs clustered deployments."
        },
        {
          title: "Splunk Admin Role",
          focus: "Admin responsibilities, Splunk Web, CLI commands, REST API",
          duration: "2 Weeks",
          desc: "Understand admin responsibilities, navigate Splunk Web admin, use CLI commands, and learn REST API fundamentals."
        },
        {
          title: "Configuration File System",
          focus: "File hierarchy, precedence, merging rules, deployment server",
          duration: "2 Weeks",
          desc: "Master configuration file hierarchy and precedence, system/app/user configs, merging and override rules, and deployment server usage."
        }
      ]
    },
    {
      level: "Module 3-4: License Management",
      desc: "Manage Splunk Enterprise licenses, pools, stacks, and quota violations effectively.",
      modules: [
        {
          title: "Splunk License Types",
          focus: "Enterprise, Free, Dev/Test, stack and pool architecture",
          duration: "2 Weeks",
          desc: "Understand Enterprise, Free, and Dev/Test license types, configure stack and pool architecture, set up license master and slave nodes."
        },
        {
          title: "License Monitoring",
          focus: "Daily usage tracking, violation alerts, usage dashboards",
          duration: "2 Weeks",
          desc: "Track daily usage, configure violation alerts, build usage dashboards, and identify high-volume data sources."
        },
        {
          title: "License Management Best Practices",
          focus: "Capacity planning, pool reallocation, audit and compliance",
          duration: "2 Weeks",
          desc: "Apply capacity planning, reduce unnecessary ingestion, reallocate pools, and maintain audit and compliance records."
        }
      ]
    },
    {
      level: "Module 5-6: Indexer Management",
      desc: "Configure and manage Splunk indexers, indexes, and indexer clusters for high availability.",
      modules: [
        {
          title: "Index Configuration",
          focus: "Custom indexes, indexes.conf tuning, bucket lifecycle",
          duration: "2 Weeks",
          desc: "Create custom indexes, tune indexes.conf, configure storage paths, and manage bucket lifecycle (hot/warm/cold/frozen)."
        },
        {
          title: "Indexer Clusters",
          focus: "Cluster architecture, replication/search factor, rolling restarts",
          duration: "2 Weeks",
          desc: "Configure cluster architecture with a Manager node, set replication and search factors, add/remove peers, and perform rolling restarts and upgrades."
        },
        {
          title: "Index Optimization",
          focus: "Tsidx management, performance tuning, SmartStore",
          duration: "2 Weeks",
          desc: "Manage tsidx files, apply performance tuning, configure data archive and retirement, and set up SmartStore for tiered storage."
        }
      ]
    },
    {
      level: "Module 7: Search Head Administration",
      desc: "Configure and maintain Splunk search heads and search head clusters.",
      modules: [
        {
          title: "Search Head Configuration",
          focus: "Roles, capabilities, connecting to indexers, app deployment",
          duration: "1 Week",
          desc: "Configure roles and capabilities, connect search heads to indexers, manage pool vs cluster setups, and handle app deployment."
        },
        {
          title: "Search Head Clusters (SHC)",
          focus: "SHC architecture, deployer, member bootstrapping, captain election",
          duration: "1 Week",
          desc: "Set up SHC architecture, configure the deployer role, bootstrap members, replicate knowledge objects, and manage captain elections."
        },
        {
          title: "Search Management",
          focus: "Job management, concurrent search limits, dispatch directory",
          duration: "1 Week",
          desc: "Manage search job quotas, configure concurrent search limits, maintain the dispatch directory, and handle saved search ownership."
        }
      ]
    },
    {
      level: "Module 8-9: Getting Data In",
      desc: "Configure all data ingestion methods and pipelines for Splunk Enterprise.",
      modules: [
        {
          title: "Forwarder Types & Configuration",
          focus: "Universal vs heavy forwarder, load balancing, SSL",
          duration: "2 Weeks",
          desc: "Configure universal and heavy forwarders, set up inputs.conf and outputs.conf, configure load balancing, SSL, and authentication."
        },
        {
          title: "Input Methods",
          focus: "File monitor, syslog, HEC, scripted inputs",
          duration: "2 Weeks",
          desc: "Configure file/directory monitor inputs, network inputs like TCP/UDP and syslog, HTTP Event Collector (HEC), and scripted inputs."
        },
        {
          title: "Data Parsing & Transformation",
          focus: "Source type tuning, props.conf, transforms.conf, data masking",
          duration: "2 Weeks",
          desc: "Tune source types, configure props.conf and transforms.conf, handle event breaking, and apply data masking for compliance."
        }
      ]
    },
    {
      level: "Module 10-11: Monitoring & Health Maintenance",
      desc: "Monitor Splunk Enterprise health and proactively maintain platform performance.",
      modules: [
        {
          title: "Monitoring Console",
          focus: "Distributed mode setup, indexing dashboards, forwarder monitoring",
          duration: "2 Weeks",
          desc: "Set up monitoring console in distributed mode, use indexing performance dashboards, monitor forwarders, and track resource utilization."
        },
        {
          title: "Health Reports & Alerts",
          focus: "Health check framework, proactive alerting, capacity planning",
          duration: "2 Weeks",
          desc: "Use the health check framework, set up system health monitoring, configure proactive alerts, and build capacity planning dashboards."
        },
        {
          title: "Troubleshooting",
          focus: "Ingestion gaps, search performance, splunkd.log analysis",
          duration: "1 Week",
          desc: "Resolve common admin issues, diagnose ingestion gaps and latency, troubleshoot search performance, and analyze splunkd.log and metrics.log."
        }
      ]
    },
    {
      level: "Module 12: Exam Preparation & Review",
      desc: "Full exam readiness with mock tests, scenario-based review, and gap analysis for SPLK-2001.",
      modules: [
        {
          title: "Practice Exams",
          focus: "Full-length SPLK-2001 mock tests, timed simulation, gap analysis",
          duration: "1 Week",
          desc: "Attempt full-length SPLK-2001 mock tests, timed simulations, topic gap analysis, and detailed answer walkthroughs."
        },
        {
          title: "Scenario-Based Review",
          focus: "Real-world admin incidents, cluster management case studies",
          duration: "1 Week",
          desc: "Work through real-world admin incidents, configuration decision exercises, cluster management case studies, and license violation drills."
        },
        {
          title: "Final Preparation",
          focus: "Objective review, expert Q&A, quick-reference sheets",
          duration: "1 Week",
          desc: "Review all objectives, conduct expert Q&A, use admin quick-reference sheets, and apply exam-day strategies."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-enterprise-certified-architect",
  title: "Splunk Enterprise Certified Architect",
  category: "data",
  desc: "Gain a thorough understanding of Splunk deployment methodology, planning, data collection, sizing, and managing distributed deployments with indexer and search head clustering.",
  duration: "10-14 Weeks",
  mode: "Live",
  level: "Advanced",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: Deployment Methodology",
      desc: "Build the architectural foundation for successful Splunk Enterprise deployments.",
      modules: [
        {
          title: "Architecture Framework",
          focus: "Deployment lifecycle, requirements gathering, reference architectures",
          duration: "2 Weeks",
          desc: "Understand the Splunk deployment lifecycle, gather requirements, map use cases to design, and apply reference architectures."
        },
        {
          title: "Deployment Models",
          focus: "Standalone, distributed, hybrid, single-site vs multisite",
          duration: "2 Weeks",
          desc: "Compare standalone, distributed, and hybrid deployment models, evaluate single-site vs multisite, and assess on-prem, cloud, and mixed availability tradeoffs."
        },
        {
          title: "Planning Best Practices",
          focus: "Stakeholder workshops, non-functional requirements, risk identification",
          duration: "2 Weeks",
          desc: "Run stakeholder workshops, capture non-functional requirements, assess operational readiness, and identify deployment risks early."
        }
      ]
    },
    {
      level: "Module 3-4: Data Collection & Sizing",
      desc: "Design data intake pipelines and size infrastructure correctly for enterprise scale.",
      modules: [
        {
          title: "Data Collection Strategy",
          focus: "Source inventory, forwarder decisions, HEC, source type standards",
          duration: "2 Weeks",
          desc: "Build source inventories, make forwarder decisions, configure HEC and scripted inputs, and establish source type standards."
        },
        {
          title: "Capacity Planning",
          focus: "Ingest sizing, storage forecasting, compute/memory sizing, growth modeling",
          duration: "2 Weeks",
          desc: "Estimate daily ingest volume, forecast storage needs, size compute and memory requirements, and model future growth."
        },
        {
          title: "Data Pipeline Design",
          focus: "Parsing/indexing/search separation, load balancing, collection resiliency",
          duration: "2 Weeks",
          desc: "Separate parsing, indexing, and search tiers, apply load balancing, filter data efficiently, and design resilient collection pipelines."
        }
      ]
    },
    {
      level: "Module 5-6: Distributed Deployment Design",
      desc: "Architect standard distributed Splunk Enterprise environments for performance and resilience.",
      modules: [
        {
          title: "Distributed Search Design",
          focus: "Search head/indexer separation, search affinity, deployer strategies",
          duration: "2 Weeks",
          desc: "Design search head and indexer separation, configure search affinity, plan knowledge object deployment, and define deployer strategies."
        },
        {
          title: "Network & Infrastructure",
          focus: "Port requirements, latency/bandwidth, storage design, virtualization tradeoffs",
          duration: "2 Weeks",
          desc: "Define port requirements, assess latency and bandwidth constraints, design storage architecture, and evaluate virtualization vs hardware tradeoffs."
        },
        {
          title: "Security & Governance",
          focus: "TLS, certificates, RBAC, auditability, configuration governance",
          duration: "2 Weeks",
          desc: "Implement TLS and certificates, configure RBAC in distributed setups, ensure auditability, and apply configuration governance practices."
        }
      ]
    },
    {
      level: "Module 7-8: Indexer Clustering",
      desc: "Plan, deploy, manage, and troubleshoot resilient indexer clustering architectures.",
      modules: [
        {
          title: "Cluster Planning",
          focus: "Replication/search factor, single-site/multisite, manager sizing",
          duration: "2 Weeks",
          desc: "Plan replication and search factors, design single-site and multisite clusters, configure bucket replication, and size the cluster manager."
        },
        {
          title: "Cluster Operations",
          focus: "Peer onboarding, rolling restarts, rebalancing, SmartStore in clusters",
          duration: "2 Weeks",
          desc: "Onboard peers, perform rolling restarts, rebalance buckets, and configure SmartStore within clustered environments."
        },
        {
          title: "Troubleshooting Clusters",
          focus: "Health diagnostics, peer loss recovery, bucket issues, replication lag",
          duration: "2 Weeks",
          desc: "Run cluster health diagnostics, recover from peer loss, resolve bucket issues, and address replication lag in production environments."
        }
      ]
    },
    {
      level: "Module 9-10: Search Head Clustering",
      desc: "Design and troubleshoot search head clusters for scale, redundancy, and knowledge consistency.",
      modules: [
        {
          title: "SHC Architecture",
          focus: "Captain election, deployer design, knowledge bundle replication",
          duration: "2 Weeks",
          desc: "Design captain election mechanisms, configure the deployer, manage knowledge bundle replication, and handle search artifact replication."
        },
        {
          title: "Operational Best Practices",
          focus: "App packaging, scheduled searches at scale, load balancer integration",
          duration: "2 Weeks",
          desc: "Package apps for SHC deployment, manage scheduled searches at scale, configure search concurrency, and integrate load balancers."
        },
        {
          title: "SHC Troubleshooting",
          focus: "Captain changes, rolling restarts, member drift, recovery and rebuild",
          duration: "2 Weeks",
          desc: "Manage captain changes, perform rolling restarts safely, detect and fix member drift, and execute SHC recovery and rebuild procedures."
        }
      ]
    },
    {
      level: "Module 11-12: Architecture Troubleshooting & Exam Prep",
      desc: "Validate deployment designs, solve platform issues, and prepare for SPLK-3001.",
      modules: [
        {
          title: "Architecture Review Labs",
          focus: "Design assessments, sizing worksheets, failure scenario exercises",
          duration: "2 Weeks",
          desc: "Conduct distributed design assessments, walk through sizing worksheets, run failure scenario exercises, and review deployment blueprints."
        },
        {
          title: "Practice Exams",
          focus: "Full-length architect mock exams, scenario-based questions, gap analysis",
          duration: "1 Week",
          desc: "Attempt full-length architect mock exams, work through scenario-based questions, analyze topic gaps, and review detailed explanations."
        },
        {
          title: "Final Review",
          focus: "Deployment methodology recap, cluster revision, architect exam strategies",
          duration: "1 Week",
          desc: "Recap deployment methodology, revise cluster management concepts, apply architect exam strategies, and conduct expert Q&A."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-core-certified-consultant",
  title: "Splunk Core Certified Consultant",
  category: "data",
  desc: "Expand your understanding of Splunk deployment methodology and implementation for large installations, including multi-tier architecture, clustering, scalability, sizing, and advisory best practices.",
  duration: "10-14 Weeks",
  mode: "Live",
  level: "Advanced",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: Deployment Methodology & Discovery",
      desc: "Build the consulting foundation for large Splunk platform engagements.",
      modules: [
        {
          title: "Engagement Discovery",
          focus: "Stakeholder interviews, current-state assessment, scope definition",
          duration: "2 Weeks",
          desc: "Conduct stakeholder interviews, assess current-state environments, define business objectives, and scope implementation engagements."
        },
        {
          title: "Deployment Methodology",
          focus: "Implementation lifecycle, phased rollout, risk management, operational handoff",
          duration: "2 Weeks",
          desc: "Apply the Splunk implementation lifecycle, plan phased rollout strategies, manage risks, and plan operational handoff."
        },
        {
          title: "Consultant Best Practices",
          focus: "Advisory communication, requirements-to-architecture mapping, value realization",
          duration: "2 Weeks",
          desc: "Use advisory communication frameworks, map requirements to architecture, plan deliverables, and drive value realization for customers."
        }
      ]
    },
    {
      level: "Module 3-4: Sizing & Capacity Planning",
      desc: "Size Splunk correctly for large data volumes, search concurrency, and future growth.",
      modules: [
        {
          title: "Ingest & Storage Sizing",
          focus: "Daily volume estimation, storage calculations, license sizing",
          duration: "2 Weeks",
          desc: "Estimate daily ingest volume, calculate storage requirements, model retention needs, and optimize license sizing."
        },
        {
          title: "Search Workload Sizing",
          focus: "Concurrent user planning, search head sizing, acceleration planning",
          duration: "2 Weeks",
          desc: "Plan concurrent user workloads, size search heads appropriately, assess scheduled search impact, and plan acceleration strategies."
        },
        {
          title: "Growth & Scalability Modeling",
          focus: "Phased scale-out, seasonal ingestion, capacity buffer, infrastructure tradeoffs",
          duration: "2 Weeks",
          desc: "Model phased scale-out strategies, account for seasonal ingestion, plan capacity buffers, and analyze infrastructure tradeoffs."
        }
      ]
    },
    {
      level: "Module 5-6: Multi-Tier Splunk Architecture",
      desc: "Design enterprise Splunk environments with clean role separation and scalable architecture patterns.",
      modules: [
        {
          title: "Tiered Platform Design",
          focus: "Forwarders, indexer/search head separation, deployment server roles",
          duration: "2 Weeks",
          desc: "Design forwarder and heavy forwarder tiers, separate indexers and search heads, define deployment server roles, and apply management tier principles."
        },
        {
          title: "Architecture Patterns",
          focus: "Single-site/multisite, hybrid and cloud, network flow zoning",
          duration: "2 Weeks",
          desc: "Apply single-site and multisite design patterns, evaluate hybrid and cloud deployments, define network flow zones, and assess availability patterns."
        },
        {
          title: "Governance & Standards",
          focus: "Configuration governance, app packaging, naming standards, documentation",
          duration: "2 Weeks",
          desc: "Implement configuration governance, define app packaging standards, establish node naming conventions, and maintain operational documentation."
        }
      ]
    },
    {
      level: "Module 7-8: Clustering & Scalability",
      desc: "Design and implement clustering strategies for resilience, performance, and enterprise growth.",
      modules: [
        {
          title: "Indexer Clustering",
          focus: "Replication/search factor, cluster manager, single-site and multisite models",
          duration: "2 Weeks",
          desc: "Plan replication and search factors, configure the cluster manager, understand bucket behavior, and design single-site and multisite models."
        },
        {
          title: "Search Head Clustering",
          focus: "Captain, members, deployer, load balancer, knowledge replication",
          duration: "2 Weeks",
          desc: "Configure captain, member, and deployer roles, plan load balancer integration, manage knowledge replication, and scale concurrency."
        },
        {
          title: "Scalability Patterns",
          focus: "Horizontal scale-out, bottleneck identification, growth path recommendations",
          duration: "2 Weeks",
          desc: "Apply horizontal scale-out patterns, identify bottlenecks, produce growth path recommendations, and conduct infrastructure tradeoff analysis."
        }
      ]
    },
    {
      level: "Module 9-10: Installation & Implementation",
      desc: "Translate design into implementation with repeatable installation and rollout practices.",
      modules: [
        {
          title: "Installation Planning",
          focus: "Node build checklists, OS/storage/network prerequisites, certificate planning",
          duration: "2 Weeks",
          desc: "Create node build checklists, define OS, storage, and network prerequisites, sequence installation steps, and plan certificate management."
        },
        {
          title: "Implementation Execution",
          focus: "Configuring distributed roles, bootstrap clustering, forwarder onboarding",
          duration: "2 Weeks",
          desc: "Configure distributed Splunk roles, bootstrap clustering environments, onboard forwarders, and validate post-install configurations."
        },
        {
          title: "Knowledge Transfer",
          focus: "Admin handoff documentation, runbook creation, acceptance criteria",
          duration: "2 Weeks",
          desc: "Produce admin handoff documentation, create operational runbooks, deliver operational training, and define acceptance criteria for sign-off."
        }
      ]
    },
    {
      level: "Module 11-12: Advisory Skills & Exam Prep",
      desc: "Develop consultant-grade recommendations and prepare for SPLK-3002.",
      modules: [
        {
          title: "Value Advisory",
          focus: "Platform value guidance, use case maturity, adoption strategy",
          duration: "2 Weeks",
          desc: "Guide customers toward platform value, assess use case maturity, define adoption strategies, and write architectural recommendation documents."
        },
        {
          title: "Practice Exams",
          focus: "Full-length SPLK-3002 mock exams, scenario questions, gap analysis",
          duration: "1 Week",
          desc: "Attempt full-length consultant mock exams, work through scenario-based questions, analyze topic gaps, and review detailed answer explanations."
        },
        {
          title: "Final Review",
          focus: "Methodology recap, sizing workshop, implementation pitfalls, expert Q&A",
          duration: "1 Week",
          desc: "Recap deployment methodology, run a sizing and architecture workshop, review implementation pitfalls, and conduct expert Q&A sessions."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-enterprise-security-certified-admin",
  title: "Splunk Enterprise Security Certified Admin",
  category: "cybersecurity",
  desc: "Enhance your ability to manage Splunk Enterprise Security with event processing, normalization, deployment planning, technology add-ons, risk analysis, threat intelligence, and protocol intelligence.",
  duration: "8-12 Weeks",
  mode: "Live",
  level: "Advanced",
  iconName: "Shield",
  tiers: [
    {
      level: "Module 1-2: SIEM Foundations & ES Architecture",
      desc: "Build foundational SIEM understanding and learn Splunk ES deployment design.",
      modules: [
        {
          title: "Introduction to SIEM and Splunk ES",
          focus: "SIEM role in SOC, detection lifecycle, ES components",
          duration: "1 Week",
          desc: "Understand what SIEM is, its role in SOC, detection and response lifecycle, and how ES extends Splunk with key app components."
        },
        {
          title: "Splunk ES Architecture",
          focus: "Core components, data pipeline, deployment models, scaling",
          duration: "2 Weeks",
          desc: "Learn ES architecture components, data ingestion pipeline, parsing and indexing, distributed deployment models, and SIEM infrastructure design."
        },
        {
          title: "Data Onboarding and Normalization",
          focus: "CIM, field mapping, tags, data model validation",
          duration: "2 Weeks",
          desc: "Onboard security telemetry, apply CIM normalization, validate field mapping and tags, and troubleshoot data model mapping gaps."
        }
      ]
    },
    {
      level: "Module 4-5: Dashboards & Detection Engineering",
      desc: "Use ES dashboards for SOC visibility and build detection logic with correlation searches.",
      modules: [
        {
          title: "Splunk ES Dashboards",
          focus: "Security posture, identity, endpoint, network dashboards",
          duration: "1 Week",
          desc: "Use Security Overview, Identity Intelligence, Network Activity, and Endpoint Activity dashboards for threat monitoring and SOC pivoting."
        },
        {
          title: "Correlation Searches",
          focus: "Detection rules, alert suppression, brute force, privilege escalation",
          duration: "2 Weeks",
          desc: "Engineer correlation rules, build detection logic, create and tune custom searches, and validate alert suppression for real-world attack scenarios."
        },
        {
          title: "Risk-Based Alerting (RBA)",
          focus: "Risk scoring, aggregation, risk objects, entity prioritization",
          duration: "2 Weeks",
          desc: "Implement RBA concepts, configure risk scoring and aggregation, define risk objects, tune thresholds, and align alerts with business risk priorities."
        }
      ]
    },
    {
      level: "Module 7-8: Incident Management & Threat Intelligence",
      desc: "Run consistent triage workflows and enrich detections with external intelligence.",
      modules: [
        {
          title: "Incident Review and Investigation",
          focus: "Triage methodology, attack timeline, evidence collection",
          duration: "2 Weeks",
          desc: "Apply incident review workflows, use prioritization playbooks, analyze attack timelines, correlate events, collect evidence, and draft response recommendations."
        },
        {
          title: "Threat Intelligence",
          focus: "IOC ingestion, threat feeds, IP reputation, intel-enriched alerts",
          duration: "2 Weeks",
          desc: "Integrate threat feeds, ingest IOCs, use malware indicators and IP reputation lists, validate IOC matches, and tune intelligence noise."
        },
        {
          title: "Notable Events and Incident Management",
          focus: "Incident lifecycle, SOC workflow, SLA tracking, quality checks",
          duration: "1 Week",
          desc: "Manage notable event lifecycle, govern incident status and ownership, track SLAs, and implement post-incident quality improvements."
        }
      ]
    },
    {
      level: "Module 10-11: Use Cases & Reporting",
      desc: "Implement practical enterprise detections and create role-specific SOC reporting.",
      modules: [
        {
          title: "Splunk ES Use Cases",
          focus: "Identity abuse, data exfiltration, lateral movement, insider threat",
          duration: "2 Weeks",
          desc: "Implement detections for brute force, privilege escalation, data exfiltration, malware communication, lateral movement, and insider/behavioral threats."
        },
        {
          title: "Dashboards and Reporting",
          focus: "Custom reports, executive dashboards, SOC performance metrics",
          duration: "1 Week",
          desc: "Create custom reports, trend reporting, executive dashboards, SOC performance views, and schedule audience-based metric delivery."
        },
        {
          title: "Splunk ES Administration",
          focus: "ES configuration, user roles, platform health, upgrades",
          duration: "2 Weeks",
          desc: "Manage ES configuration, user roles and permissions, index management, performance monitoring, and execute ES upgrades with backup and rollback procedures."
        }
      ]
    },
    {
      level: "Module 13: Automation & Integration",
      desc: "Connect ES with orchestration and enterprise tools to speed SOC response.",
      modules: [
        {
          title: "Automation Workflows",
          focus: "Alert automation, adaptive response, automated containment",
          duration: "1 Week",
          desc: "Build alert automation workflows, configure adaptive response actions, implement automated containment, and manage approval controls."
        },
        {
          title: "SOAR and Ticketing Integration",
          focus: "SOAR integration, ticketing systems, incident sync, escalation",
          duration: "1 Week",
          desc: "Integrate with SOAR platforms and ticketing systems, sync incidents, automate escalation, and monitor integration health."
        },
        {
          title: "Exam Preparation & Review",
          focus: "Mock exams, scenario review, tuning checklists, expert Q&A",
          duration: "1 Week",
          desc: "Attempt full-length ES Admin mock exams, review real-world scenarios, apply tuning checklists, and conduct expert Q&A for final readiness."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-siem-operations",
  title: "Splunk SIEM and SOC Operations",
  category: "cybersecurity",
  desc: "Comprehensive 13-module hands-on training for Splunk SIEM operations covering architecture, data normalization, detection engineering, risk-based alerting, threat hunting, incident response, and automation.",
  duration: "10-14 Weeks",
  mode: "Live",
  level: "Advanced",
  iconName: "Shield",
  tiers: [
    {
      level: "Module 1-3: Foundations & Data Onboarding",
      desc: "Build SIEM knowledge, understand ES architecture, and onboard security telemetry.",
      modules: [
        {
          title: "Introduction to SIEM and Splunk ES",
          focus: "SIEM role in SOC, detection lifecycle, ES components vs Splunk Enterprise",
          duration: "1 Week",
          desc: "Understand SIEM fundamentals, its role in SOC, the detection and response lifecycle, and how ES extends the core Splunk platform."
        },
        {
          title: "Splunk ES Architecture",
          focus: "Core components, data pipeline, distributed deployment models",
          duration: "2 Weeks",
          desc: "Learn ES architecture components, ingestion pipeline, parsing and indexing, distributed deployment models, and SIEM infrastructure scaling."
        },
        {
          title: "Data Onboarding and Normalization",
          focus: "CIM, field mapping, tags, data model validation",
          duration: "2 Weeks",
          desc: "Onboard Windows logs, syslog, and firewall data, apply CIM normalization, validate field mapping, and troubleshoot data model gaps."
        }
      ]
    },
    {
      level: "Module 4-6: Detection Engineering & Risk-Based Alerting",
      desc: "Build detection logic, use ES dashboards, and implement risk-based alerting.",
      modules: [
        {
          title: "Splunk ES Dashboards",
          focus: "Security posture, identity, endpoint, network monitoring dashboards",
          duration: "1 Week",
          desc: "Use Security Overview, Identity Intelligence, Network Activity, and Endpoint Activity dashboards for SOC monitoring and investigation pivoting."
        },
        {
          title: "Correlation Searches",
          focus: "Detection rules, brute force, privilege escalation, alert suppression",
          duration: "2 Weeks",
          desc: "Engineer correlation rules, build detection logic for brute force and malware scenarios, create custom alerts, and tune false positives."
        },
        {
          title: "Risk-Based Alerting (RBA)",
          focus: "Risk scoring, aggregation, risk objects, entity prioritization",
          duration: "2 Weeks",
          desc: "Implement RBA concepts, configure risk scoring and aggregation across risk objects, tune thresholds, and align alert priorities with business risk."
        }
      ]
    },
    {
      level: "Module 7-9: Incident Management & Threat Intelligence",
      desc: "Operationalize triage workflows and enrich detections with external intelligence.",
      modules: [
        {
          title: "Incident Review and Investigation",
          focus: "Triage methodology, attack timeline, evidence collection, escalation",
          duration: "2 Weeks",
          desc: "Apply incident review workflows, use prioritization playbooks, analyze attack timelines, correlate events, and draft response recommendations."
        },
        {
          title: "Threat Intelligence",
          focus: "IOC ingestion, threat feeds, IP reputation, intel-enriched alerts",
          duration: "2 Weeks",
          desc: "Integrate external threat feeds, ingest IOCs, validate IOC matches against live data, create intel-enriched notable events, and tune noise."
        },
        {
          title: "Notable Events and Incident Management",
          focus: "Incident lifecycle, SOC workflow, SLA tracking, post-incident improvement",
          duration: "1 Week",
          desc: "Manage the notable event lifecycle from alert generation through response, govern status and ownership, track SLAs, and improve quality."
        }
      ]
    },
    {
      level: "Module 10-11: Use Cases & Reporting",
      desc: "Implement enterprise attack detections and create role-specific SOC reporting.",
      modules: [
        {
          title: "Splunk ES Use Cases",
          focus: "Identity abuse, data exfiltration, lateral movement, insider threat",
          duration: "2 Weeks",
          desc: "Implement detections for brute force, privilege escalation, data exfiltration, malware communication, lateral movement, and behavioral anomalies."
        },
        {
          title: "Dashboards and Reporting",
          focus: "Custom reports, executive dashboards, SOC performance metrics",
          duration: "1 Week",
          desc: "Build custom reports, trend views, executive dashboards, SOC performance metrics, and schedule audience-based report delivery."
        }
      ]
    },
    {
      level: "Module 12-13: ES Administration & Automation",
      desc: "Maintain platform health and connect ES with orchestration tools for faster response.",
      modules: [
        {
          title: "Splunk ES Administration",
          focus: "ES configuration, user roles, platform health, upgrade lifecycle",
          duration: "2 Weeks",
          desc: "Configure ES platform settings, manage user roles and permissions, monitor performance and capacity, and execute upgrade and rollback procedures."
        },
        {
          title: "Automation and Integration",
          focus: "Alert automation, adaptive response, SOAR integration, API enrichment",
          duration: "2 Weeks",
          desc: "Build alert automation workflows, configure adaptive response, integrate with SOAR platforms and ticketing systems, and monitor integration health."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-it-service-intelligence",
  title: "Splunk IT Service Intelligence",
  category: "data",
  desc: "Grow your knowledge of monitoring mission-critical services with Splunk IT Service Intelligence, including architecture, deployment planning, service design, notable events, glass tables, and deep dives.",
  duration: "8-12 Weeks",
  mode: "Live",
  level: "Advanced",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: ITSI Architecture & Deployment Planning",
      desc: "Understand the architecture and planning requirements for a stable ITSI deployment.",
      modules: [
        {
          title: "ITSI Architecture",
          focus: "Core components, prerequisites, single-instance vs distributed, resource planning",
          duration: "2 Weeks",
          desc: "Explore ITSI core components, deployment prerequisites, single-instance vs distributed models, and resource planning for KPI search workloads."
        },
        {
          title: "Deployment Planning",
          focus: "Installation sequencing, app dependencies, HA preparation, upgrade/migration",
          duration: "2 Weeks",
          desc: "Plan installation sequencing, manage app dependencies, prepare for high availability and scaling, and plan upgrade and migration paths."
        },
        {
          title: "Operational Readiness",
          focus: "Index/storage planning, search scheduling, content governance, runbooks",
          duration: "2 Weeks",
          desc: "Plan index and storage requirements, configure search scheduling, establish content governance, and create rollback runbooks for production deployments."
        }
      ]
    },
    {
      level: "Module 3-4: Service Design & Implementation",
      desc: "Model mission-critical services and align KPIs, entities, and dependencies to business outcomes.",
      modules: [
        {
          title: "Service Modeling",
          focus: "Service trees, entity/dependency concepts, template-driven design",
          duration: "2 Weeks",
          desc: "Understand service, entity, and dependency concepts, build service trees, map components to business services, and apply template-driven design."
        },
        {
          title: "KPI Design",
          focus: "KPI selection, adaptive thresholds, anomaly detection, search-backed KPIs",
          duration: "2 Weeks",
          desc: "Select meaningful KPIs, configure adaptive thresholds, set up anomaly detection, and build search-backed KPI configurations."
        },
        {
          title: "Implementation Workflows",
          focus: "Import tools, service templates, health scoring, change control",
          duration: "2 Weeks",
          desc: "Use import tools and service templates, configure health scoring, and manage change control processes for ongoing service updates."
        }
      ]
    },
    {
      level: "Module 5-6: Notable Events & Episode Review",
      desc: "Configure alerting, event aggregation, and review workflows that support operations teams.",
      modules: [
        {
          title: "Notable Event Design",
          focus: "Creating notables, severity/urgency models, KPI state correlation, action rules",
          duration: "2 Weeks",
          desc: "Create notable events, define severity and urgency models, correlate notables with KPI states, and configure action rules."
        },
        {
          title: "Episode Review",
          focus: "Aggregation policies, analyst triage, assignment/ownership, deduplication",
          duration: "2 Weeks",
          desc: "Configure aggregation policies, establish analyst triage workflows, manage assignment and ownership, and reduce duplicate alerts."
        },
        {
          title: "Event Management Tuning",
          focus: "Alert storm reduction, threshold tuning, incident process integration",
          duration: "2 Weeks",
          desc: "Reduce alert storms, tune thresholds, integrate with incident management processes, and operationalize event workflows."
        }
      ]
    },
    {
      level: "Module 7-8: Glass Tables & Deep Dives",
      desc: "Build rich visualizations and investigation views for operators and service owners.",
      modules: [
        {
          title: "Glass Table Development",
          focus: "Layout design, service health/KPI elements, executive and operations views",
          duration: "2 Weeks",
          desc: "Design glass table layouts, add service health and KPI elements, configure interactivity, and create both executive and operations-level views."
        },
        {
          title: "Deep Dive Configuration",
          focus: "Lane/swim lane design, KPI correlation over time, root-cause analysis",
          duration: "2 Weeks",
          desc: "Design lane and swim lane layouts, correlate KPIs over time, support root-cause analysis, and optimize deep dives for team usability."
        },
        {
          title: "Visualization Best Practices",
          focus: "Actionable views, color/threshold consistency, reusable design standards",
          duration: "2 Weeks",
          desc: "Build actionable views, maintain color and threshold consistency, optimize performance, and establish reusable visualization design standards."
        }
      ]
    },
    {
      level: "Module 9-10: Operational Management & Tuning",
      desc: "Administer ITSI in production and keep service monitoring accurate and sustainable.",
      modules: [
        {
          title: "ITSI Administration",
          focus: "User roles, content lifecycle, backup/upgrade, monitoring ITSI health",
          duration: "2 Weeks",
          desc: "Manage user roles and permissions, maintain content lifecycle, perform backup and upgrade operations, and monitor ITSI platform health."
        },
        {
          title: "KPI & Service Tuning",
          focus: "Threshold tuning, health validation, search schedule optimization",
          duration: "2 Weeks",
          desc: "Tune KPI thresholds, validate service health accuracy, optimize search schedules, and control KPI sprawl in growing environments."
        },
        {
          title: "Troubleshooting",
          focus: "Broken KPIs, missing entities, notable/episode issues, latency",
          duration: "2 Weeks",
          desc: "Diagnose broken KPIs, resolve missing entity issues, fix notable and episode problems, and address glass table and deep dive latency."
        }
      ]
    },
    {
      level: "Module 11-12: Capstone & Exam Prep",
      desc: "Bring ITSI architecture, service design, and operations together in a practical final project.",
      modules: [
        {
          title: "ITSI Capstone Project",
          focus: "Mission-critical service model, KPIs, glass tables, notable event workflows",
          duration: "2 Weeks",
          desc: "Design a complete mission-critical service model with KPIs, thresholds, glass tables, deep dives, and notable event workflows end to end."
        },
        {
          title: "Practice Exams",
          focus: "Full-length ITSI mock tests, scenario questions, gap analysis",
          duration: "1 Week",
          desc: "Attempt full-length ITSI mock tests, work through scenario-based questions, analyze topic gaps, and review detailed answer explanations."
        },
        {
          title: "Final Review",
          focus: "Architecture recap, glass table workshop, operational pitfalls, expert Q&A",
          duration: "1 Week",
          desc: "Recap architecture and service design, run a glass table and deep dive workshop, review operational pitfalls, and conduct expert Q&A."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-soar-certified-automation-developer",
  title: "Splunk SOAR Certified Automation Developer",
  category: "data",
  desc: "Learn to install, configure, and use Splunk SOAR servers, design and debug playbooks, integrate with Splunk, and build advanced automation using custom code and REST APIs.",
  duration: "8-12 Weeks",
  mode: "Live",
  level: "Advanced",
  iconName: "Database",
  tiers: [
    {
      level: "Module 1-2: SOAR Installation & Architecture",
      desc: "Set up Splunk SOAR servers correctly and understand the platform architecture.",
      modules: [
        {
          title: "SOAR Platform Basics",
          focus: "Architecture, deployment models, system requirements, user roles",
          duration: "2 Weeks",
          desc: "Understand Splunk SOAR architecture, deployment models, system requirements, and configure user roles and permissions."
        },
        {
          title: "Installation & Configuration",
          focus: "Server installation, network/SSL, initial config, backup/upgrade planning",
          duration: "2 Weeks",
          desc: "Execute the server installation workflow, configure network and SSL settings, complete initial platform configuration, and plan for backup and upgrades."
        },
        {
          title: "Operational Readiness",
          focus: "App installation, asset/account strategy, execution environment",
          duration: "2 Weeks",
          desc: "Install apps, define asset and account strategy, configure execution environments, and prepare the platform for production automation operations."
        }
      ]
    },
    {
      level: "Module 3-4: Playbook Design & Basic Automation",
      desc: "Plan and create reliable SOAR playbooks for common security operations tasks.",
      modules: [
        {
          title: "Playbook Fundamentals",
          focus: "Lifecycle, containers, artifacts, actions, block design, branching",
          duration: "2 Weeks",
          desc: "Understand playbook lifecycle and execution flow, work with containers, artifacts, and actions, and apply block design and branching patterns."
        },
        {
          title: "Automation Use Cases",
          focus: "Phishing triage, enrichment, containment, human approval steps",
          duration: "2 Weeks",
          desc: "Build playbooks for phishing triage, data enrichment, automated containment and response, and workflows requiring human approval steps."
        },
        {
          title: "Design Best Practices",
          focus: "Idempotent design, error handling, input validation, maintainability",
          duration: "2 Weeks",
          desc: "Apply idempotent design principles, implement error handling, validate inputs, and build maintainable automation workflows."
        }
      ]
    },
    {
      level: "Module 5-6: Debugging & Advanced Playbooks",
      desc: "Debug playbooks efficiently and build more advanced SOAR automation flows.",
      modules: [
        {
          title: "Debugging Workflows",
          focus: "Execution tracing, diagnosing failed actions, testing conditional logic",
          duration: "2 Weeks",
          desc: "Trace playbook execution, diagnose failed actions, test conditional logic, and apply observability techniques for monitoring playbook runs."
        },
        {
          title: "Advanced Logic",
          focus: "Looping, callbacks, parallel execution, state handling, decomposition",
          duration: "2 Weeks",
          desc: "Implement looping, callbacks, and branching, configure parallel execution, manage state handling, and apply decomposition strategies for complex flows."
        },
        {
          title: "Operational Hardening",
          focus: "Reducing false triggers, guardrails, performance optimization, versioning",
          duration: "2 Weeks",
          desc: "Reduce false triggers, add guardrails, optimize playbook performance, and apply versioning and change management practices."
        }
      ]
    },
    {
      level: "Module 7-8: Splunk Integration & REST APIs",
      desc: "Connect SOAR to Splunk and external systems using APIs and structured integration patterns.",
      modules: [
        {
          title: "Splunk Platform Integration",
          focus: "Connecting to Splunk ES, passing events/notables, search-driven enrichment",
          duration: "2 Weeks",
          desc: "Connect SOAR to Splunk Enterprise and ES, pass events, notables, and artifacts between platforms, and build search-driven enrichment workflows."
        },
        {
          title: "REST API Usage",
          focus: "SOAR REST API, authentication/tokens, calling external APIs, JSON payloads",
          duration: "2 Weeks",
          desc: "Use SOAR REST API fundamentals, configure authentication and tokens, call external APIs, and design structured JSON payloads."
        },
        {
          title: "Integration Patterns",
          focus: "Webhook triggers, ticketing/email/endpoint tools, resilient error handling",
          duration: "2 Weeks",
          desc: "Build webhook and API-based triggers, integrate with ticketing, email, and endpoint tools, normalize responses, and implement resilient error handling."
        }
      ]
    },
    {
      level: "Module 9-10: Custom Code Development",
      desc: "Use custom coding techniques to build sophisticated automation beyond standard drag-and-drop blocks.",
      modules: [
        {
          title: "Python for SOAR",
          focus: "Custom functions, data structures, reusable helper logic, secure coding",
          duration: "2 Weeks",
          desc: "Write custom functions and code blocks, work with data structures, build reusable helper logic, and apply secure coding practices."
        },
        {
          title: "Complex Solution Development",
          focus: "Multi-stage orchestration, custom integrations, enrichment and routing",
          duration: "2 Weeks",
          desc: "Build multi-stage orchestration flows, develop custom integrations, implement enrichment, scoring, and routing logic, and balance flexibility with maintainability."
        },
        {
          title: "Testing & Security",
          focus: "Testing custom code, handling secrets, logging, code review and deployment",
          duration: "2 Weeks",
          desc: "Test custom code safely in SOAR, manage secrets securely, implement logging and traceability, and execute code review and deployment workflows."
        }
      ]
    },
    {
      level: "Module 11-12: Capstone & Exam Prep",
      desc: "Bring together SOAR installation, playbook engineering, integration, and custom coding in a real automation project.",
      modules: [
        {
          title: "Automation Capstone",
          focus: "End-to-end IR playbooks, Splunk/API integration, custom code for advanced logic",
          duration: "2 Weeks",
          desc: "Deploy and configure SOAR, build end-to-end incident response playbooks, integrate with Splunk and external APIs, and apply custom code for advanced logic."
        },
        {
          title: "Practice Exams",
          focus: "Full-length SOAR mock tests, scenario-based questions, gap analysis",
          duration: "1 Week",
          desc: "Attempt full-length SOAR developer mock tests, work through scenario-based development questions, analyze gaps, and review detailed explanations."
        },
        {
          title: "Final Review",
          focus: "Platform/playbook recap, API/custom code workshop, debugging pitfalls",
          duration: "1 Week",
          desc: "Recap SOAR platform and playbook concepts, run an API and custom code workshop, review common debugging pitfalls, and conduct expert Q&A."
        }
      ]
    }
  ]
},
  {
  slug: "splunk-o11y-cloud-certified-metrics-user",
  title: "Splunk O11y Cloud Certified Metrics User",
  category: "Splunk",
  desc: "Enhance your Splunk Observability Cloud monitoring. Go beyond logs and use real-time monitoring at scale across every layer of the development environment. Learn how to deploy and configure the OpenTelemetry Collector, send in metrics, find insights using analytics, visualize metrics, alert with detectors, and create efficient dashboards.",
  duration: "6-10 Weeks",
  mode: "Online",
  level: "Intermediate",
  iconName: "Activity",
  tiers: [
    {
      level: "Module 1-2: O11y Cloud Foundations (Weeks 1-2)",
      desc: "Build the foundation for effective metrics-driven monitoring in Splunk Observability Cloud.",
      modules: [
        {
          title: "Observability Concepts",
          focus: "Metrics, Traces & Architecture",
          duration: "Week 1",
          desc: "Metrics, traces, logs · Real-time vs historical · O11y Cloud architecture · Signals, dimensions, metadata"
        },
        {
          title: "Metrics Data Model",
          focus: "Time-Series & Cardinality",
          duration: "Week 1",
          desc: "Time-series concepts · Metric naming · Dimension strategy · Cardinality awareness · Data hygiene"
        },
        {
          title: "Platform Navigation",
          focus: "O11y Cloud Interface",
          duration: "Week 2",
          desc: "O11y Cloud interface · Charts and metric explorers · Service/infra views · Teams, access, workspaces"
        }
      ]
    },
    {
      level: "Module 3-4: OpenTelemetry Collector (Weeks 3-4)",
      desc: "Deploy and configure the OpenTelemetry Collector to send metrics from every layer of the environment.",
      modules: [
        {
          title: "Collector Architecture",
          focus: "Receivers, Processors & Exporters",
          duration: "Week 3",
          desc: "Receivers, processors, exporters · Agent vs gateway · Pipelines for metrics · Configuration structure"
        },
        {
          title: "Deployment & Configuration",
          focus: "Installing & Exporting to O11y",
          duration: "Week 3",
          desc: "Installing in VMs/containers · Host, app, infrastructure inputs · Exporting to O11y Cloud · Troubleshooting telemetry"
        },
        {
          title: "Operational Best Practices",
          focus: "Secure & Scalable Deployment",
          duration: "Week 4",
          desc: "Resource sizing · Filtering for cost efficiency · Secure deployment · Maintaining configs across environments"
        }
      ]
    },
    {
      level: "Module 5-6: Metrics Analytics & Insights (Weeks 5-6)",
      desc: "Use analytics to turn raw metrics into actionable operational insight.",
      modules: [
        {
          title: "Metric Analysis",
          focus: "Aggregation & Filtering",
          duration: "Week 5",
          desc: "Aggregation, rollups, stats · Filtering by dimensions · Comparative analysis across layers · Baseline/anomaly interpretation"
        },
        {
          title: "Finding Insights",
          focus: "Patterns & Capacity Planning",
          duration: "Week 5",
          desc: "Spotting saturation, latency, error patterns · Correlating infra and app metrics · High-cardinality areas · Capacity planning"
        },
        {
          title: "Efficient Querying",
          focus: "Scale & Resolution",
          duration: "Week 6",
          desc: "Reducing noisy queries · Chart resolution choices · Working at scale · Organizing common analysis patterns"
        }
      ]
    },
    {
      level: "Module 7-8: Detectors & Alerting (Weeks 7-8)",
      desc: "Create useful detectors that surface issues quickly without flooding teams with noise.",
      modules: [
        {
          title: "Detector Fundamentals",
          focus: "Static, Anomaly & Predictive Types",
          duration: "Week 7",
          desc: "Static, anomaly, predictive types · Threshold design · Multi-signal alerting · Lifecycle and ownership"
        },
        {
          title: "Alert Tuning",
          focus: "Reducing False Positives",
          duration: "Week 7",
          desc: "Reducing false positives · Windowing, delays, sensitivity · Environment-specific adjustments · Response mapping"
        },
        {
          title: "Notification Workflows",
          focus: "Routing & Escalation",
          duration: "Week 8",
          desc: "Routing alerts · On-call integration · Escalation design · Testing and maintenance"
        }
      ]
    },
    {
      level: "Module 9-10: Dashboards & Visualization (Weeks 9-10)",
      desc: "Build efficient dashboards that help teams monitor health, investigate issues, and communicate clearly.",
      modules: [
        {
          title: "Metric Visualization",
          focus: "Chart Types & Comparisons",
          duration: "Week 9",
          desc: "Choosing chart types · Comparing dimensions · Breakdowns and overlays · Fast operational reading"
        },
        {
          title: "Dashboard Design",
          focus: "Structure & Reusability",
          duration: "Week 9",
          desc: "Structuring for service ownership · Reusable layouts · Low-noise metric views · Balancing detail/readability"
        },
        {
          title: "Operational Dashboards",
          focus: "SRE, DevOps & Engineering Views",
          duration: "Week 10",
          desc: "SRE, DevOps, engineering dashboards · Service health, latency, throughput · Executive vs technical panels · Maintenance"
        }
      ]
    },
    {
      level: "Module 11-12: Capstone & Exam Prep (Weeks 11-12)",
      desc: "Bring together OpenTelemetry, analytics, detectors, and dashboards in a complete observability workflow.",
      modules: [
        {
          title: "Metrics Monitoring Capstone",
          focus: "End-to-End O11y Workflow",
          duration: "Week 11",
          desc: "Deploy Collector pipelines · Ingest metrics · Create detectors and alert routing · Build efficient dashboards"
        },
        {
          title: "Practice Exams",
          focus: "Mock Tests & Gap Analysis",
          duration: "Week 11-12",
          desc: "Full-length O11y metrics mock tests · Scenario-based analytics questions · Topic gap analysis · Detailed explanations"
        },
        {
          title: "Final Review",
          focus: "Recap & Expert Q&A",
          duration: "Week 12",
          desc: "Collector, analytics, detector recap · Dashboard design review · Monitoring pitfalls · Expert Q&A"
        }
      ]
    }
  ]
},
  {
  slug: "splunk-certified-cybersecurity-defense-analyst",
  title: "Splunk Certified Cybersecurity Defense Analyst",
  category: "Splunk",
  desc: "Grow your skills to start as a SOC analyst using Splunk analytics, threat-hunting, risk-based alerting, and industry best practices. Learn to protect businesses and mitigate risk while managing vulnerabilities and threats using common cyber defense systems for continual security monitoring.",
  duration: "6-10 Weeks",
  mode: "Online",
  level: "Intermediate",
  iconName: "Shield",
  tiers: [
    {
      level: "Module 1-2: SOC Analyst Foundations (Weeks 1-2)",
      desc: "Build the operational mindset and technical foundation for day-to-day cyber defense monitoring.",
      modules: [
        {
          title: "SOC Workflows",
          focus: "Roles, Triage & Escalation",
          duration: "Week 1",
          desc: "SOC roles, tiers, and analyst responsibilities · Alert triage and investigation flow · Using Splunk in day-to-day monitoring · Escalation and documentation discipline"
        },
        {
          title: "Security Data Fundamentals",
          focus: "Log Sources & Baselines",
          duration: "Week 1",
          desc: "Common security log sources and telemetry · Authentication, endpoint, network, and cloud logs · Understanding baselines and abnormal behavior · Field quality and investigation context"
        },
        {
          title: "Analyst Best Practices",
          focus: "Investigation & Communication",
          duration: "Week 2",
          desc: "Time management in active investigations · Reducing false positives with disciplined review · Evidence handling and case notes · Communicating findings clearly"
        }
      ]
    },
    {
      level: "Module 3-4: Splunk Analytics & Threat Hunting (Weeks 3-4)",
      desc: "Use Splunk analytics to investigate threats and proactively hunt for suspicious behavior.",
      modules: [
        {
          title: "Security Analytics",
          focus: "Search, Pivot & Correlation",
          duration: "Week 3",
          desc: "Search patterns for security investigations · Pivoting across users, hosts, IPs, and processes · Correlation of events across data sources · Using dashboards and reports for investigations"
        },
        {
          title: "Threat Hunting Techniques",
          focus: "Hypothesis-Driven Hunting",
          duration: "Week 3",
          desc: "Hypothesis-driven hunting workflows · Hunting for lateral movement and persistence · Behavioral search strategies · Tracking attacker patterns through telemetry"
        },
        {
          title: "Investigation Efficiency",
          focus: "Reusable Queries & Documentation",
          duration: "Week 4",
          desc: "Using saved searches and reusable hunt queries · Reducing noise with filtering and scoping · Documenting hunts and outcomes · Turning hunts into operational detections"
        }
      ]
    },
    {
      level: "Module 5-6: Risk-Based Alerting & Detection (Weeks 5-6)",
      desc: "Develop practical alerting strategies that help analysts prioritize the right threats quickly.",
      modules: [
        {
          title: "Risk-Based Alerting",
          focus: "RBA Concepts & Prioritization",
          duration: "Week 5",
          desc: "RBA concepts and security value · Risk objects, scores, and prioritization · Using risk context for investigation decisions · Tuning alerts for operational relevance"
        },
        {
          title: "Detection Workflows",
          focus: "Building & Refining Detections",
          duration: "Week 5",
          desc: "Building and refining useful detections · Alert validation and triage readiness · Mapping detections to common attack patterns · Balancing coverage and alert fatigue"
        },
        {
          title: "Continuous Monitoring",
          focus: "Dashboards & Feedback Loops",
          duration: "Week 6",
          desc: "Monitoring strategy across key environments · Using dashboards and reports for oversight · Tracking recurring patterns and exposures · Operational feedback loops for tuning"
        }
      ]
    },
    {
      level: "Module 7-8: Vulnerabilities, Threats & Defense Systems (Weeks 7-8)",
      desc: "Work with the kinds of controls and systems analysts use to reduce risk and respond to threats.",
      modules: [
        {
          title: "Vulnerability Management",
          focus: "Lifecycle & Prioritization",
          duration: "Week 7",
          desc: "Vulnerability lifecycle and prioritization · Using scanner and asset context in Splunk · Relating exposure to active threats · Driving remediation insights from telemetry"
        },
        {
          title: "Threat Management",
          focus: "Indicators & Escalation",
          duration: "Week 7",
          desc: "Tracking indicators and suspicious behaviors · Using threat intel context in investigations · Threat validation and escalation decisions · Mitigation-oriented analysis workflows"
        },
        {
          title: "Cyber Defense Systems",
          focus: "Cross-Tool Visibility in Splunk",
          duration: "Week 8",
          desc: "Common defense tools and telemetry types · Endpoint, firewall, proxy, and identity systems · Using cross-tool visibility in Splunk · Building context across multiple controls"
        }
      ]
    },
    {
      level: "Module 9-10: Capstone & Exam Prep (Weeks 9-10)",
      desc: "Bring together monitoring, threat hunting, and analyst decision-making in realistic defense scenarios.",
      modules: [
        {
          title: "Cyber Defense Capstone",
          focus: "End-to-End Analyst Scenario",
          duration: "Week 9",
          desc: "Triage and investigate a realistic alert queue · Hunt for suspicious behavior across multiple sources · Use risk context to prioritize cases · Produce actionable defense recommendations"
        },
        {
          title: "Practice Exams",
          focus: "Mock Tests & Gap Analysis",
          duration: "Week 9-10",
          desc: "Full-length defense analyst mock tests · Scenario-based SOC investigation questions · Topic-level review and gap analysis · Detailed answer explanation sessions"
        },
        {
          title: "Final Review",
          focus: "Recap & Expert Q&A",
          duration: "Week 10",
          desc: "Analytics, hunting, and alerting recap · Detection and monitoring review workshop · Analyst workflow pitfalls and guidance · Final expert Q&A"
        }
      ]
    }
  ]
},
 {
  slug: "siem-soc-operations-microsoft-sentinel",
  title: "SIEM SOC Operations with Microsoft Sentinel",
  category: "Cybersecurity",
  desc: "Build real SOC capabilities with Microsoft Sentinel across SIEM architecture, cloud log ingestion, KQL analytics, incident response, threat hunting, automation, and executive dashboards.",
  duration: "6-8 Weeks",
  mode: "Online",
  level: "Beginner to Intermediate",
  iconName: "MonitorCheck",
  tiers: [
    {
      level: "Module 1: Introduction to SIEM and Cloud Security",
      desc: "Understand SIEM foundations and how cloud-native security operations differ from traditional deployments.",
      modules: [
        {
          title: "SIEM Fundamentals",
          focus: "Architecture & Cloud SIEM",
          duration: "Week 1",
          desc: "What is SIEM · Traditional vs Cloud SIEM · Benefits of cloud SIEM · SIEM architecture"
        },
        {
          title: "SOC Fundamentals",
          focus: "Analyst Roles & Alert Lifecycle",
          duration: "Week 1",
          desc: "SOC workflow and analyst roles · Alert lifecycle · Use-case engineering basics · Process maturity concepts"
        },
        {
          title: "Microsoft Sentinel Overview",
          focus: "Capabilities & Deployment Models",
          duration: "Week 1",
          desc: "What Sentinel does · Core capabilities · Sentinel in Microsoft security stack · Common deployment models"
        }
      ]
    },
    {
      level: "Module 2: Azure Fundamentals for Security",
      desc: "Build the Azure foundation needed to deploy and operate Sentinel securely.",
      modules: [
        {
          title: "Azure Basics",
          focus: "Portal, Subscriptions & Governance",
          duration: "Week 1",
          desc: "Overview of Microsoft Azure · Portal navigation · Subscriptions and resource groups · Azure governance basics"
        },
        {
          title: "Core Azure Services",
          focus: "Networking, Storage & Regions",
          duration: "Week 1",
          desc: "Azure networking basics · Storage concepts · Region and availability · Resource organization for SOC"
        },
        {
          title: "Identity and Access",
          focus: "Entra ID, RBAC & Conditional Access",
          duration: "Week 2",
          desc: "Identity with Microsoft Entra ID · RBAC and least-privilege · Conditional access basics · Security best practices for SOC users"
        }
      ]
    },
    {
      level: "Module 3: Microsoft Sentinel Architecture",
      desc: "Design a scalable Sentinel environment with the right ingestion and workspace strategy.",
      modules: [
        {
          title: "Sentinel Core Components",
          focus: "Control Plane & Data Connectors",
          duration: "Week 2",
          desc: "Sentinel components and control plane · Log Analytics workspace architecture · Data connectors and content hub · Analytics and incident engine overview"
        },
        {
          title: "Ingestion Architecture",
          focus: "Patterns & Multi-Workspace Design",
          duration: "Week 2",
          desc: "Data ingestion patterns · Agent-based vs agentless collection · Connector prioritization · Multi-workspace design basics"
        },
        {
          title: "Commercials and Setup",
          focus: "Pricing, Licensing & Readiness",
          duration: "Week 2",
          desc: "Sentinel pricing and licensing · Cost estimation and retention planning · Workspace setup · Operational readiness checklist"
        }
      ]
    },
    {
      level: "Module 4: Data Collection and Log Ingestion",
      desc: "Connect key enterprise sources and validate telemetry quality for threat detection.",
      modules: [
        {
          title: "Connector Configuration",
          focus: "AMA Agents & Validation",
          duration: "Week 3",
          desc: "Configuring data connectors · Using AMA and other agents · Connector health and troubleshooting · Validation of incoming log streams"
        },
        {
          title: "Log Sources",
          focus: "Windows, Linux, Firewall & Cloud",
          duration: "Week 3",
          desc: "Windows server log collection · Linux server log collection · Firewall log integration · Cloud service telemetry onboarding"
        },
        {
          title: "Advanced Ingestion",
          focus: "Syslog, CEF & Normalization",
          duration: "Week 3",
          desc: "Endpoint security tool integration · Syslog integration · CEF log ingestion · Normalization and schema mapping basics"
        }
      ]
    },
    {
      level: "Module 5: Log Management and Querying",
      desc: "Use KQL effectively to search, filter, correlate, and visualize security telemetry.",
      modules: [
        {
          title: "KQL Essentials",
          focus: "Search, Filter & Query Patterns",
          duration: "Week 3-4",
          desc: "Introduction to Kusto Query Language (KQL) · Searching logs and table selection · Filtering events and time windows · Creating reusable query patterns"
        },
        {
          title: "Analytical Queries",
          focus: "Auth, Network & Anomaly Queries",
          duration: "Week 4",
          desc: "Event log analysis · Authentication log investigations · Network activity monitoring queries · Baseline and anomaly-style query design"
        },
        {
          title: "Dashboards and Workbooks",
          focus: "KQL-Driven Visualization",
          duration: "Week 4",
          desc: "Building dashboards from KQL · Log Analytics workspace queries · Query optimization basics · Operational reporting views"
        }
      ]
    },
    {
      level: "Module 6: Detection and Analytics Rules",
      desc: "Engineer high-quality detections that reduce noise and improve SOC signal quality.",
      modules: [
        {
          title: "Rule Creation",
          focus: "Scheduled & Near Real-Time Rules",
          duration: "Week 4-5",
          desc: "Creating detection rules · Scheduled analytics rules · Near real-time rules · Alert threshold tuning strategies"
        },
        {
          title: "Threat Framework Alignment",
          focus: "MITRE ATT&CK Mapping",
          duration: "Week 5",
          desc: "MITRE ATT&CK mapping · Threat scenario modeling · Use-case prioritization · Coverage gap identification"
        },
        {
          title: "Custom Detection Engineering",
          focus: "Logic, Suppression & Validation",
          duration: "Week 5",
          desc: "Alert generation workflows · Custom threat detection logic · Suppression and false-positive reduction · Detection validation testing"
        }
      ]
    },
    {
      level: "Module 7: Incident Management",
      desc: "Operationalize response with triage, investigation, correlation, and closure workflows.",
      modules: [
        {
          title: "Incident Foundations",
          focus: "Severity, Grouping & Escalation",
          duration: "Week 5",
          desc: "Understanding incidents in Sentinel · Incident severity and prioritization · Alert grouping and correlation basics · Ownership and escalation paths"
        },
        {
          title: "Investigation Workflows",
          focus: "Timeline, Entity Graph & Evidence",
          duration: "Week 5-6",
          desc: "Incident investigation techniques · Timeline analysis · Entity investigation graph usage · Evidence collection and documentation"
        },
        {
          title: "Case Management",
          focus: "Runbooks & Post-Incident Review",
          duration: "Week 6",
          desc: "Case management lifecycle · Incident response workflow · Runbooks and playbook handoffs · Post-incident review process"
        }
      ]
    },
    {
      level: "Module 8: Threat Hunting",
      desc: "Use hypothesis-driven hunting to uncover stealthy attacker behavior before alerts fire.",
      modules: [
        {
          title: "Hunting Methodology",
          focus: "Hypothesis & Hunt Cycle",
          duration: "Week 6",
          desc: "Threat hunting methodology · Hypothesis-driven hunt planning · Data source selection for hunts · Hunt cycle execution process"
        },
        {
          title: "Hunting Queries and Behavior",
          focus: "KQL Hunting & Pattern Analysis",
          duration: "Week 6",
          desc: "Hunting queries in KQL · Behavioral analysis techniques · Detecting suspicious activities · Pattern and sequence analysis"
        },
        {
          title: "Threat Intelligence Integration",
          focus: "IOC Matching & Hunt-to-Detection",
          duration: "Week 6-7",
          desc: "Using threat intelligence feeds · IOC matching and enrichment · Intelligence-driven detection ideas · Hunt-to-detection conversion"
        }
      ]
    },
    {
      level: "Module 9: Automation and Response",
      desc: "Automate repetitive SOC tasks to reduce MTTR and improve consistency of response.",
      modules: [
        {
          title: "Automation Basics",
          focus: "Playbooks & Logic Apps",
          duration: "Week 7",
          desc: "Security automation fundamentals · Playbooks in Sentinel · Logic Apps integration · Trigger and action design patterns"
        },
        {
          title: "Response Workflows",
          focus: "Auto-Remediation & Containment",
          duration: "Week 7",
          desc: "Automated response workflows · Incident auto-remediation concepts · Containment and notification actions · Approval-driven response gates"
        },
        {
          title: "Automation Governance",
          focus: "Versioning, Testing & Auditability",
          duration: "Week 7",
          desc: "Playbook versioning and testing · Error handling and retry strategies · Auditability and control checks · SOC integration best practices"
        }
      ]
    },
    {
      level: "Module 10: Dashboards and Visualization",
      desc: "Present actionable insights to SOC teams, managers, and stakeholders through workbooks and reports.",
      modules: [
        {
          title: "Workbook Design",
          focus: "SOC & Threat Intelligence Dashboards",
          duration: "Week 8",
          desc: "Creating workbooks · SOC dashboards · Threat intelligence dashboards · KPI-first design strategy"
        },
        {
          title: "Visualization and Reporting",
          focus: "Operational & Executive Reporting",
          duration: "Week 8",
          desc: "Custom visualization techniques · Operational and executive reporting · Alert and incident trend views · Hunt and detection performance dashboards"
        },
        {
          title: "Capstone Outcome",
          focus: "End-to-End Sentinel SOC Dashboard",
          duration: "Week 8",
          desc: "Build an end-to-end Sentinel SOC dashboard · Present incident lifecycle metrics · Map detection coverage to MITRE ATT&CK · Create role-based security reporting packs"
        }
      ]
    }
  ]
},
  {
  slug: "qradar-siem-soc-operations",
  title: "QRadar SIEM and SOC Operations",
  category: "Cybersecurity",
  desc: "The complete operational guide to IBM QRadar SIEM. Master 13 modules spanning architecture, event monitoring, threat detection, offense management, and advanced security operations for enterprise SOC environments.",
  duration: "13 Weeks",
  mode: "Online",
  level: "Beginner to Intermediate",
  iconName: "Radar",
  tiers: [
    {
      level: "Module 1: Introduction to SIEM & QRadar Basics",
      desc: "Foundations of Security Information and Event Management, QRadar platform overview, and SOC operations fundamentals.",
      modules: [
        {
          title: "SIEM Fundamentals",
          focus: "Core Functions & Use Cases",
          duration: "Week 1",
          desc: "What is SIEM and why it matters · Core SIEM functions: detection, response, compliance · SIEM vs. other security tools · Common SIEM use cases in enterprises"
        },
        {
          title: "QRadar Platform Overview",
          focus: "Architecture, Editions & Capabilities",
          duration: "Week 1",
          desc: "IBM QRadar architecture and components · QRadar editions: Community, Professional, Enterprise · Deployment models and sizing · Key QRadar capabilities and integrations"
        },
        {
          title: "SOC Operations & Roles",
          focus: "Analyst Roles & IR Workflow",
          duration: "Week 1",
          desc: "Security Operations Center structure · Roles: Analyst, Administrator, Manager, Architect · Incident response workflow in SOC · QRadar's role in SOC operations"
        }
      ]
    },
    {
      level: "Module 2: QRadar Architecture & System Components",
      desc: "Deep dive into QRadar infrastructure, components, data flow, and deployment architecture.",
      modules: [
        {
          title: "Core System Components",
          focus: "Console, Processors & Data Gateway",
          duration: "Week 2",
          desc: "Console: Management and analysis center · Event Processors: Log collection and parsing · Flow Processors: Network traffic analysis · Data Gateway: Data integration hub"
        },
        {
          title: "Data Flow & Processing",
          focus: "Ingestion, Correlation & Storage",
          duration: "Week 2",
          desc: "Event ingestion pipelines · Flow data collection from network · Real-time correlation and enrichment · Data storage and retention"
        },
        {
          title: "Deployment & High Availability",
          focus: "Scaling, Redundancy & Cloud",
          duration: "Week 2",
          desc: "Standalone vs. distributed architecture · Redundancy and failover mechanisms · Scaling for large environments · Virtual and cloud deployments"
        }
      ]
    },
    {
      level: "Module 3: QRadar User Interface & Navigation",
      desc: "Master the QRadar console, main dashboards, key tabs, and daily operational navigation.",
      modules: [
        {
          title: "Console & Layouts",
          focus: "Customization & Preferences",
          duration: "Week 3",
          desc: "QRadar console overview and customization · User preferences and interface settings · Workspace layouts and pinning · Dark mode and accessibility options"
        },
        {
          title: "Main Operational Dashboards",
          focus: "Offenses, Events, Flows & Analytics",
          duration: "Week 3",
          desc: "Offenses tab: Alert management and triage · Events tab: Log viewing and filtering · Flows tab: Network traffic analysis · Analytics: Dashboard creation and widgets"
        },
        {
          title: "Advanced Tabs & Functions",
          focus: "Assets, Reports & Admin",
          duration: "Week 3",
          desc: "Assets: Device and vulnerability tracking · Reports: Compliance and security reporting · Admin: System configuration and management · Manage: Rules, feeds, and integrations"
        }
      ]
    },
    {
      level: "Module 4: Log Sources & Data Collection",
      desc: "Configure log sources, understand event parsing, DSM, and network data collection methods.",
      modules: [
        {
          title: "Log Sources & Event Collection",
          focus: "Syslog, WEF & Categorization",
          duration: "Week 4",
          desc: "Syslog configuration and protocols · Windows event forwarding (WEF) · Application-specific log collection · Log source groups and categorization"
        },
        {
          title: "Device Support Matrix & DSM",
          focus: "Parsers & Custom DSM",
          duration: "Week 4",
          desc: "Device Support Module (DSM) overview · Out-of-the-box device support · Custom DSM creation · Vendor-specific parsers and fields"
        },
        {
          title: "Network Flow Data & Collection",
          focus: "NetFlow, Sensors & Baselines",
          duration: "Week 4",
          desc: "NetFlow and sFlow protocols · Network sensor deployment · Flow data enrichment and geo-location · Network traffic baseline creation"
        }
      ]
    },
    {
      level: "Module 5: Event Monitoring & Log Analysis",
      desc: "Monitor, filter, search, and analyze security events in real-time from all data sources.",
      modules: [
        {
          title: "Event Viewing & Filtering",
          focus: "Real-Time Streaming & Drilldown",
          duration: "Week 5",
          desc: "Event viewer interface and columns · Real-time event streaming · Filters and quick filters · Payload inspection and field drilldown"
        },
        {
          title: "Event Correlation & Parsing",
          focus: "Field Mapping & Normalization",
          duration: "Week 5",
          desc: "How QRadar parses events · Event field mapping and extraction · Normalization across multiple sources · Event category and type assignment"
        },
        {
          title: "Log Search & Retention",
          focus: "AQL, Saved Queries & Archiving",
          duration: "Week 5",
          desc: "Ariel Query Language (AQL) introduction · Historical log searches · Search scheduling and saved queries · Data retention policies and archiving"
        }
      ]
    },
    {
      level: "Module 6: Network Flow Monitoring & Analysis",
      desc: "Analyze network traffic, detect suspicious flows, and understand network behavior patterns.",
      modules: [
        {
          title: "Flow Analysis Fundamentals",
          focus: "Records, Fields & Indicators",
          duration: "Week 6",
          desc: "Flow records and fields · Source/destination, protocols, ports · Volume and behavior analysis · Suspicious traffic indicators"
        },
        {
          title: "Network Traffic Anomalies",
          focus: "Baselines, Exfiltration & C2",
          duration: "Week 6",
          desc: "Baseline network behavior · Anomaly detection techniques · Data exfiltration detection · Command & Control (C2) communication"
        },
        {
          title: "Flow Enrichment & Threat Intel",
          focus: "Geo-location, DNS & IOC Correlation",
          duration: "Week 6",
          desc: "Geo-location and IP reputation · DNS enrichment and reputation · Threat intelligence feed correlation · Known malicious indicators detection"
        }
      ]
    },
    {
      level: "Module 7: Offense Management & Alert Investigation",
      desc: "Manage security offenses, triage alerts, and conduct rapid threat investigations.",
      modules: [
        {
          title: "Offense Lifecycle Management",
          focus: "Status, Severity & Escalation",
          duration: "Week 7",
          desc: "Offense creation and triggering · Offense status: Open, In Progress, Closed · Severity and priority assignment · Offense escalation and assignment"
        },
        {
          title: "Alert Triage & Investigation",
          focus: "Root Cause & Evidence Collection",
          duration: "Week 7",
          desc: "Quick triage workflow for analysts · False positive identification · Root cause analysis techniques · Evidence collection and documentation"
        },
        {
          title: "Incident Response & Actions",
          focus: "Playbooks & Ticketing Integration",
          duration: "Week 7",
          desc: "Response playbooks in QRadar · Manual and automated responses · Firewall blocking actions · Integration with ticketing systems (JIRA, ServiceNow)"
        }
      ]
    },
    {
      level: "Module 8: QRadar Rules & Correlation Engine",
      desc: "Build custom detection rules using QRadar's Custom Rule Engine for advanced threat detection.",
      modules: [
        {
          title: "Built-In Rules & Policies",
          focus: "Rule Library & Compliance Policies",
          duration: "Week 8",
          desc: "QRadar default rules and policies · Rule library and categorization · Rule tuning and optimization · Industry and compliance policies"
        },
        {
          title: "Custom Rule Engine (CRE)",
          focus: "Event, Flow & Pattern Rules",
          duration: "Week 8",
          desc: "Rule structure and syntax · Event-based correlation rules · Flow-based correlation rules · Time-based and pattern matching rules"
        },
        {
          title: "Advanced Detection Patterns",
          focus: "Brute Force, Malware & APT",
          duration: "Week 8",
          desc: "Brute force attack detection · Malware infection patterns · Insider threat indicators · Advanced persistent threat (APT) hunting"
        }
      ]
    },
    {
      level: "Module 9: Asset Management & Vulnerability Tracking",
      desc: "Manage network assets, track vulnerabilities, and correlate threat data with asset attributes.",
      modules: [
        {
          title: "Asset Discovery & Profiles",
          focus: "Classification & Criticality Scoring",
          duration: "Week 9",
          desc: "Network asset discovery methods · Asset profiles and attributes · Device classification and grouping · Business criticality scoring"
        },
        {
          title: "Vulnerability Management",
          focus: "Scanner Integration & Risk Scoring",
          duration: "Week 9",
          desc: "Vulnerability data integration · Network scanner integration (Nessus, OpenVAS, Qualys) · Vulnerability tracking across assets · Risk calculation and prioritization"
        },
        {
          title: "Asset-Based Offense Analysis",
          focus: "Critical Asset Monitoring & Compliance",
          duration: "Week 9",
          desc: "Correlating offenses with assets · Critical asset monitoring · Asset-based reporting and compliance · Multi-layer asset relationships"
        }
      ]
    },
    {
      level: "Module 10: Advanced Search & Ariel Query Language",
      desc: "Master AQL for performing advanced log searches, threat hunting, and forensic investigations.",
      modules: [
        {
          title: "AQL Fundamentals",
          focus: "Syntax, Clauses & Data Types",
          duration: "Week 10",
          desc: "AQL syntax and structure · SELECT, WHERE, FROM clauses · Functions and operators · Field reference and data types"
        },
        {
          title: "Advanced Query Patterns",
          focus: "Aggregations, JOINs & Regex",
          duration: "Week 10",
          desc: "Aggregations and GROUP BY · Time-based filtering and windowing · JOIN operations for multi-source queries · Regular expressions and pattern matching"
        },
        {
          title: "Threat Hunting with AQL",
          focus: "Lateral Movement & Forensics",
          duration: "Week 10",
          desc: "Hunting for specific attack patterns · Lateral movement detection · Command execution forensics · Scheduled searches and alerts based on AQL"
        }
      ]
    },
    {
      level: "Module 11: Dashboards, Analytics & Security Reporting",
      desc: "Create custom dashboards, build analytics views, and generate compliance and security reports.",
      modules: [
        {
          title: "Custom Dashboard Creation",
          focus: "Widgets, Scheduling & Sharing",
          duration: "Week 11",
          desc: "Dashboard builder and widgets · Widget types and configurations · Real-time data visualization · Dashboard scheduling and sharing"
        },
        {
          title: "Analytics & Data Visualization",
          focus: "Charts, KPIs & Trend Analysis",
          duration: "Week 11",
          desc: "Analytics tab and custom queries · Visualization types (charts, graphs, maps) · KPI tracking and metrics · Incident trends and pattern analysis"
        },
        {
          title: "Compliance & Security Reporting",
          focus: "PCI-DSS, HIPAA & Audit Trails",
          duration: "Week 11",
          desc: "Built-in compliance reports (PCI-DSS, HIPAA, SOC2) · Custom report builder · Executive dashboards and summaries · Audit trails and investigation reports"
        }
      ]
    },
    {
      level: "Module 12: Threat Intelligence Integration",
      desc: "Integrate threat intelligence feeds, detect IOCs, and leverage IP reputation data for enhanced detection.",
      modules: [
        {
          title: "Threat Intelligence Feeds",
          focus: "Feed Sources & Configuration",
          duration: "Week 12",
          desc: "Intelligence feed types and sources · Configuring internal and external feeds · Feed validation and reliability · IPv4, IPv6, and domain feeds"
        },
        {
          title: "Indicator of Compromise Detection",
          focus: "Malicious IPs, Domains & Hashes",
          duration: "Week 12",
          desc: "Known malicious IP detection · Domain reputation and C2 detection · File hash matching and malware tracking · Email and domain reputation integration"
        },
        {
          title: "Reference Data & IP Intelligence",
          focus: "Reference Sets & Real-Time Updates",
          duration: "Week 12",
          desc: "Reference data sources and management · IP geolocation and reputation · Custom reference sets and lists · Real-time intelligence updates"
        }
      ]
    },
    {
      level: "Module 13: Advanced Features & Threat Detection",
      desc: "Master user behavior analytics, AI-driven detection, and advanced automation for next-generation threat detection.",
      modules: [
        {
          title: "User Behavior Analytics (UBA)",
          focus: "Behavioral Baselines & Insider Threats",
          duration: "Week 13",
          desc: "Behavioral baselines for users · Anomalous account activity detection · Insider threat identification · Account compromise indicators"
        },
        {
          title: "QRadar Advisor with Watson AI",
          focus: "AI-Powered Analysis & Enrichment",
          duration: "Week 13",
          desc: "AI-powered threat analysis · Automated correlation and enrichment · Severity prediction and ranking · Recommended investigation steps"
        },
        {
          title: "Custom Actions & Automation",
          focus: "SOAR Integration & Playbooks",
          duration: "Week 13",
          desc: "Custom response actions · Workflow automation and orchestration · Integration with SOAR platforms · Advanced playbook execution"
        }
      ]
    }
  ]
},
  {
  slug: "aws-cloud-architecture-professional",
  title: "AWS Cloud Architecture Professional",
  category: "AWS",
  desc: "Master advanced cloud architecture and design patterns for enterprise AWS solutions. Comprehensive training spanning cloud architecture fundamentals, compute optimization, storage solutions, networking, security, and advanced service integration for large-scale deployments.",
  duration: "12 Weeks",
  mode: "Online",
  level: "Advanced",
  iconName: "Cloud",
  tiers: [
    {
      level: "Module 1: AWS Architecture Fundamentals & Design Principles",
      desc: "AWS Well-Architected Framework, design principles, and foundational concepts for enterprise solutions.",
      modules: [
        {
          title: "Well-Architected Framework",
          focus: "Five Pillars & Design Trade-offs",
          duration: "Week 1",
          desc: "Five pillars · Design principles · AWS Well-Architected Tool · Architecture trade-offs"
        },
        {
          title: "Core AWS Services Overview",
          focus: "Compute, Storage & Integration",
          duration: "Week 1",
          desc: "Compute, storage, database · Networking, analytics, management · Integration services"
        },
        {
          title: "Scalability & Performance",
          focus: "Auto-Scaling, Caching & CDN",
          duration: "Week 1",
          desc: "Horizontal/vertical scaling · Load balancing, auto-scaling · Caching, CDN · Performance monitoring"
        }
      ]
    },
    {
      level: "Module 2: Compute Services & Optimization",
      desc: "EC2, Container services, serverless computing, and compute resource optimization for enterprise workloads.",
      modules: [
        {
          title: "EC2 & Instance Optimization",
          focus: "Reserved, Spot & Auto Scaling",
          duration: "Week 2",
          desc: "Instance types · Reserved, Savings Plans, Spot · Auto Scaling · Cost/performance monitoring"
        },
        {
          title: "Container & Orchestration",
          focus: "ECS, EKS & Microservices",
          duration: "Week 2",
          desc: "Docker, microservices · Amazon ECS/EKS · Container registries · Networking and security"
        },
        {
          title: "Serverless Computing",
          focus: "Lambda, API Gateway & Event-Driven",
          duration: "Week 2",
          desc: "AWS Lambda · API Gateway · Event-driven architectures · Cost optimization and scaling"
        }
      ]
    },
    {
      level: "Module 3: Storage Solutions & Data Management",
      desc: "S3, EBS, EFS, backup solutions, and storage architecture for enterprise workloads.",
      modules: [
        {
          title: "Amazon S3 & Object Storage",
          focus: "Storage Classes, Security & Cost",
          duration: "Week 3",
          desc: "Storage classes · Versioning, replication · Security and access control · Performance and cost"
        },
        {
          title: "Block & File Storage",
          focus: "EBS, EFS & Encryption",
          duration: "Week 3",
          desc: "Amazon EBS volumes and snapshots · Amazon EFS · Performance tuning · Encryption and security"
        },
        {
          title: "Backup & Disaster Recovery",
          focus: "AWS Backup & Cross-Region Replication",
          duration: "Week 3",
          desc: "AWS Backup · Cross-region replication · Data durability · Compliance and retention"
        }
      ]
    },
    {
      level: "Module 4: Database Solutions & Architecture",
      desc: "RDS, DynamoDB, ElastiCache, and database architecture for scalable applications.",
      modules: [
        {
          title: "Relational Database Services",
          focus: "RDS, Multi-AZ & Read Replicas",
          duration: "Week 4",
          desc: "Amazon RDS · Multi-AZ, read replicas · Backup, recovery, HA · Performance and cost"
        },
        {
          title: "NoSQL & Data Store",
          focus: "DynamoDB, ElastiCache & DocumentDB",
          duration: "Week 4",
          desc: "DynamoDB tables · Global tables · ElastiCache · DocumentDB"
        },
        {
          title: "Data Warehousing & Analytics",
          focus: "Redshift, Athena & Data Lakes",
          duration: "Week 4",
          desc: "Redshift · Athena, data lakes · Data migration and ETL · Big data integration"
        }
      ]
    },
    {
      level: "Module 5: Networking & Content Delivery",
      desc: "VPC design, networking architecture, and CDN strategies for enterprise cloud solutions.",
      modules: [
        {
          title: "VPC Architecture & Design",
          focus: "Subnets, Gateways & Hybrid Networking",
          duration: "Week 5",
          desc: "VPC design patterns · Subnets, route tables · Gateways, VPN · Multi-VPC and hybrid"
        },
        {
          title: "Advanced Networking Services",
          focus: "Direct Connect, Transit Gateway & PrivateLink",
          duration: "Week 5",
          desc: "Direct Connect · VPC Peering, Transit Gateway · PrivateLink · Network segmentation"
        },
        {
          title: "Load Balancing & CDN",
          focus: "ALB, NLB, CloudFront & Route 53",
          duration: "Week 5",
          desc: "ALB, NLB · CloudFront · Route 53 · Traffic management"
        }
      ]
    },
    {
      level: "Module 6: Security Architecture & Compliance",
      desc: "IAM, encryption, security best practices, and compliance frameworks for enterprise deployments.",
      modules: [
        {
          title: "Identity & Access Management",
          focus: "IAM Roles, Policies & Federated Identity",
          duration: "Week 6",
          desc: "IAM users, roles, policies · Cross-account access · Federated identity · MFA"
        },
        {
          title: "Data Security & Encryption",
          focus: "KMS, Secrets Manager & Key Rotation",
          duration: "Week 6",
          desc: "Encryption at rest/in transit · AWS KMS · Secrets Manager · Key rotation"
        },
        {
          title: "Security Monitoring & Compliance",
          focus: "CloudTrail, Config & Security Hub",
          duration: "Week 6",
          desc: "CloudTrail · AWS Config · Security Hub · Compliance frameworks (PCI, HIPAA, SOC)"
        }
      ]
    },
    {
      level: "Module 7: Multi-Region & High Availability",
      desc: "Global architecture, disaster recovery, and strategies for fault-tolerant systems across regions.",
      modules: [
        {
          title: "Multi-Region Architecture",
          focus: "Active-Active, Replication & Data Residency",
          duration: "Week 7",
          desc: "Active-active/passive patterns · Cross-region replication · Global traffic management · Data residency"
        },
        {
          title: "High Availability Design",
          focus: "Multi-AZ, Fault Isolation & Chaos Engineering",
          duration: "Week 7",
          desc: "Multi-AZ deployments · Fault isolation · Auto-recovery · Chaos engineering"
        },
        {
          title: "Disaster Recovery Planning",
          focus: "RTO/RPO, Warm Standby & DR Testing",
          duration: "Week 7",
          desc: "RTO/RPO metrics · Backup/restore · Pilot light, warm standby · DR testing"
        }
      ]
    },
    {
      level: "Module 8: Migration & Hybrid Architecture",
      desc: "Cloud migration strategies, hybrid cloud architecture, and enterprise integration patterns.",
      modules: [
        {
          title: "Migration Strategies",
          focus: "6 Rs, DMS & DataSync",
          duration: "Week 8",
          desc: "6 Rs · AWS DMS · DataSync, Storage Gateway · Application Transformation Network"
        },
        {
          title: "Hybrid Cloud Architecture",
          focus: "Outposts, Local Zones & Hybrid Networking",
          duration: "Week 8",
          desc: "On-premises integration · AWS Outposts, Local Zones · Hybrid storage/backup · Networking"
        },
        {
          title: "Enterprise Integration",
          focus: "AppFlow, Messaging & API Gateway",
          duration: "Week 8",
          desc: "Amazon AppFlow · Service Bus, messaging · Event-driven integration · API Gateway"
        }
      ]
    },
    {
      level: "Module 9: Cost Optimization & Resource Management",
      desc: "Cost analysis, optimization strategies, and resource governance for large-scale deployments.",
      modules: [
        {
          title: "Cost Analysis & Right-Sizing",
          focus: "Cost Explorer, Savings Plans & Spot",
          duration: "Week 9",
          desc: "AWS Cost Explorer · Reserved Instances, Savings Plans · Spot Instances · Compute Optimizer"
        },
        {
          title: "Resource Governance",
          focus: "Organizations, SCPs & Tagging",
          duration: "Week 9",
          desc: "AWS Organizations · SCPs · Tagging and cost allocation · Waste reduction"
        },
        {
          title: "Financial & Budget Management",
          focus: "Budgets, Capacity Planning & Forecasting",
          duration: "Week 9",
          desc: "AWS Budgets · Reserved capacity planning · ROI analysis · Cost forecasting"
        }
      ]
    },
    {
      level: "Module 10: DevOps & Infrastructure as Code",
      desc: "CI/CD pipelines, infrastructure automation, and operational excellence for enterprise applications.",
      modules: [
        {
          title: "Infrastructure as Code",
          focus: "CloudFormation, CDK & Terraform",
          duration: "Week 10",
          desc: "AWS CloudFormation · AWS CDK · Terraform · Configuration management"
        },
        {
          title: "CI/CD Pipelines & Deployment",
          focus: "CodePipeline, Blue-Green & Canary",
          duration: "Week 10",
          desc: "CodePipeline · CodeBuild · CodeDeploy · Blue-green, canary deployments"
        },
        {
          title: "Monitoring & Operational Excellence",
          focus: "CloudWatch, X-Ray & Dashboards",
          duration: "Week 10",
          desc: "CloudWatch metrics and logs · AWS X-Ray · Alarms and dashboards"
        }
      ]
    },
    {
      level: "Module 11: Machine Learning & Data Services",
      desc: "AWS ML services, data pipeline architecture, and analytics integration for intelligent systems.",
      modules: [
        {
          title: "Machine Learning Services",
          focus: "SageMaker & AWS AI Services",
          duration: "Week 11",
          desc: "Amazon SageMaker · AWS AI services (Rekognition, Comprehend, Forecast) · ML workflows"
        },
        {
          title: "Data Pipeline Architecture",
          focus: "Glue, Data Lakes & Kinesis",
          duration: "Week 11",
          desc: "AWS Glue · Data ingestion and transformation · Data lakes and warehouses · Kinesis streaming"
        },
        {
          title: "Analytics & Business Intelligence",
          focus: "Athena, QuickSight & Redshift Spectrum",
          duration: "Week 11",
          desc: "Athena · QuickSight dashboards · Redshift Spectrum · Analytics optimization"
        }
      ]
    },
    {
      level: "Module 12: Real-World Architecture Scenarios & Capstone",
      desc: "Enterprise case studies, complex solution design, and comprehensive architecture capstone projects.",
      modules: [
        {
          title: "Enterprise Architecture Patterns",
          focus: "E-Commerce, SaaS & Microservices",
          duration: "Week 12",
          desc: "E-commerce platform · SaaS multi-tenancy · Real-time streaming · Microservices"
        },
        {
          title: "Complex Solution Design",
          focus: "Hybrid, Global & Legacy Modernization",
          duration: "Week 12",
          desc: "Multi-tier applications · Hybrid cloud · Global distributed systems · Legacy modernization"
        },
        {
          title: "Capstone Project & Certification Prep",
          focus: "Architecture Review & Practice Exams",
          duration: "Week 12",
          desc: "Design enterprise solution · Architecture review · Practice exams · Exam readiness assessment"
        }
      ]
    }
  ]
},
  {
    slug: "google-cloud-certifications-roadmap",
    title: "Google Cloud Certifications Roadmap",
    category: "google-cloud",
    desc: "Google Cloud certifications roadmap covering Foundational, Associate, Professional, and AI/ML certification pathways for cloud engineers and architects.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Foundational: Google Cloud Digital Leader",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Foundational: Google Cloud Digital Leader including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Associate: Associate Cloud Engineer",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Associate: Associate Cloud Engineer including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Professional: Architect, Data, Dev, Network, Security, DevOps, Database",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Professional: Architect, Data, Dev, Network, Security, DevOps, Database including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ AI/ML: Machine Learning Engineer and Generative AI Engineer",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ AI/ML: Machine Learning Engineer and Generative AI Engineer including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Role-based exam preparation with lab practice",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Role-based exam preparation with lab practice including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Guided progression from beginner to specialist",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Guided progression from beginner to specialist including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
  slug: "google-cloud-professional-track",
  title: "Google Cloud Professional Track",
  category: "Google Cloud",
  desc: "A complete, role-focused Google Cloud learning track aligned with your requested certifications: Foundational, Associate, Professional, and AI/ML. This program prepares learners for real-world cloud roles and exam readiness through labs and architecture scenarios.",
  duration: "11 Modules",
  mode: "Online",
  level: "Beginner to Advanced",
  iconName: "CloudCog",
  tiers: [
    {
      level: "Module 1: Google Cloud Digital Leader",
      desc: "Cloud concepts, GCP value proposition, and digital transformation foundations.",
      modules: [
        {
          title: "Cloud Concepts & GCP Value",
          focus: "Digital Transformation Foundations",
          duration: "Module 1",
          desc: "Cloud computing fundamentals · GCP services overview · Digital transformation use cases · Business value of cloud adoption"
        },
        {
          title: "GCP Core Services",
          focus: "Compute, Storage & Networking Basics",
          duration: "Module 1",
          desc: "Core GCP service categories · Infrastructure vs platform vs software · Key Google Cloud differentiators · Cost and scaling fundamentals"
        },
        {
          title: "Exam Readiness",
          focus: "Digital Leader Certification Prep",
          duration: "Module 1",
          desc: "Digital Leader exam domains · Practice questions · Scenario-based review · Certification readiness assessment"
        }
      ]
    },
    {
      level: "Module 2: Google Associate Cloud Engineer",
      desc: "Deploy, monitor, and operate cloud resources using core Google Cloud services.",
      modules: [
        {
          title: "Core GCP Operations",
          focus: "Compute, Storage & IAM",
          duration: "Module 2",
          desc: "Compute Engine, GKE, Cloud Run · Cloud Storage, Persistent Disks · IAM roles and policies · Billing and resource management"
        },
        {
          title: "Networking & Monitoring",
          focus: "VPC, Load Balancing & Cloud Monitoring",
          duration: "Module 2",
          desc: "VPC networks and subnets · Firewall rules and routes · Cloud Monitoring and Logging · Alerting and dashboards"
        },
        {
          title: "Deployment & Operations",
          focus: "Deployment Manager & CLI",
          duration: "Module 2",
          desc: "gcloud CLI and Cloud Shell · Deployment Manager basics · Managed instance groups · Associate exam preparation"
        }
      ]
    },
    {
      level: "Module 3: Professional Cloud Architect",
      desc: "Design secure, scalable, resilient cloud architectures for enterprise workloads.",
      modules: [
        {
          title: "Architecture Design Patterns",
          focus: "Scalability, Reliability & HA",
          duration: "Module 3",
          desc: "Well-architected framework on GCP · High availability and fault tolerance · Multi-region design · Architecture trade-off analysis"
        },
        {
          title: "Security & Compliance",
          focus: "IAM, Encryption & Compliance Frameworks",
          duration: "Module 3",
          desc: "Identity and access best practices · Encryption at rest and in transit · Security Command Center · Compliance and audit requirements"
        },
        {
          title: "Enterprise Architecture",
          focus: "Migration, Cost & Capstone Design",
          duration: "Module 3",
          desc: "Migration strategies and patterns · Cost optimization for enterprise · Case study analysis · Professional Architect exam prep"
        }
      ]
    },
    {
      level: "Module 4: Professional Data Engineer",
      desc: "Build data pipelines, warehouses, analytics, and machine learning-ready data platforms.",
      modules: [
        {
          title: "Data Ingestion & Pipelines",
          focus: "Pub/Sub, Dataflow & Dataproc",
          duration: "Module 4",
          desc: "Cloud Pub/Sub messaging · Dataflow streaming and batch · Dataproc for Hadoop/Spark · Data pipeline design patterns"
        },
        {
          title: "Data Warehousing & Analytics",
          focus: "BigQuery & Data Studio",
          duration: "Module 4",
          desc: "BigQuery architecture and queries · Partitioning and clustering · Looker Studio dashboards · Analytics optimization"
        },
        {
          title: "ML-Ready Data Platforms",
          focus: "Feature Engineering & Data Governance",
          duration: "Module 4",
          desc: "Feature Store and Vertex AI datasets · Data governance with Dataplex · Cloud Composer orchestration · Data Engineer exam prep"
        }
      ]
    },
    {
      level: "Module 5: Professional Cloud Developer",
      desc: "Build and deploy cloud-native applications with CI/CD and managed services.",
      modules: [
        {
          title: "Cloud-Native Development",
          focus: "Cloud Run, GKE & App Engine",
          duration: "Module 5",
          desc: "Containerized apps with Cloud Run · Kubernetes on GKE · App Engine standard and flexible · Managed services for developers"
        },
        {
          title: "CI/CD & DevOps",
          focus: "Cloud Build, Artifact Registry & Pipelines",
          duration: "Module 5",
          desc: "Cloud Build pipelines · Artifact Registry · Cloud Deploy · Testing and rollback strategies"
        },
        {
          title: "APIs & Integration",
          focus: "Cloud Endpoints, Pub/Sub & Secrets",
          duration: "Module 5",
          desc: "Cloud Endpoints and API Gateway · Pub/Sub event-driven patterns · Secret Manager · Cloud Developer exam prep"
        }
      ]
    },
    {
      level: "Module 6: Professional Cloud Network Engineer",
      desc: "VPC architecture, hybrid connectivity, routing, and network performance optimization.",
      modules: [
        {
          title: "VPC Architecture",
          focus: "Shared VPC, Peering & Firewall Rules",
          duration: "Module 6",
          desc: "VPC design and shared VPC · VPC peering and Private Service Connect · Firewall rules and policies · Network segmentation patterns"
        },
        {
          title: "Hybrid Connectivity",
          focus: "Cloud VPN, Interconnect & DNS",
          duration: "Module 6",
          desc: "Cloud VPN and HA VPN · Dedicated and Partner Interconnect · Cloud DNS and private zones · Hybrid network architecture"
        },
        {
          title: "Load Balancing & Performance",
          focus: "GLB, CDN & Network Monitoring",
          duration: "Module 6",
          desc: "Global and regional load balancers · Cloud CDN configuration · Network Intelligence Center · Network Engineer exam prep"
        }
      ]
    },
    {
      level: "Module 7: Professional Cloud Security Engineer",
      desc: "Identity, access, key management, threat protection, and security operations on GCP.",
      modules: [
        {
          title: "Identity & Access Security",
          focus: "IAM, Org Policies & BeyondCorp",
          duration: "Module 7",
          desc: "IAM best practices and org policies · BeyondCorp and context-aware access · Workforce and workload identity · Privileged access management"
        },
        {
          title: "Data & Key Management",
          focus: "Cloud KMS, CMEK & DLP",
          duration: "Module 7",
          desc: "Cloud KMS and CMEK · Cloud DLP for data classification · VPC Service Controls · Secrets and certificate management"
        },
        {
          title: "Threat Protection & Compliance",
          focus: "Security Command Center & Audit Logging",
          duration: "Module 7",
          desc: "Security Command Center Premium · Chronicle SIEM integration · Audit logs and compliance · Security Engineer exam prep"
        }
      ]
    },
    {
      level: "Module 8: Professional Cloud DevOps Engineer",
      desc: "Reliability engineering, observability, deployment automation, and SRE practices.",
      modules: [
        {
          title: "SRE & Reliability",
          focus: "SLOs, Error Budgets & Incident Response",
          duration: "Module 8",
          desc: "SRE principles and practices · SLIs, SLOs, and error budgets · Incident management workflows · Postmortem culture"
        },
        {
          title: "Observability & Monitoring",
          focus: "Cloud Monitoring, Logging & Tracing",
          duration: "Module 8",
          desc: "Cloud Monitoring metrics and alerts · Cloud Logging and log-based metrics · Cloud Trace and Profiler · Operational dashboards"
        },
        {
          title: "Deployment Automation",
          focus: "Cloud Deploy, GKE & Progressive Delivery",
          duration: "Module 8",
          desc: "Cloud Deploy pipelines · Blue-green and canary releases · GKE autopilot operations · DevOps Engineer exam prep"
        }
      ]
    },
    {
      level: "Module 9: Professional Cloud Database Engineer",
      desc: "Design and manage relational, NoSQL, and distributed database solutions on GCP.",
      modules: [
        {
          title: "Relational Databases",
          focus: "Cloud SQL & AlloyDB",
          duration: "Module 9",
          desc: "Cloud SQL for MySQL/PostgreSQL · AlloyDB for analytics workloads · High availability and replication · Backup and recovery"
        },
        {
          title: "NoSQL & Distributed Databases",
          focus: "Firestore, Bigtable & Spanner",
          duration: "Module 9",
          desc: "Firestore for document storage · Bigtable for time-series data · Cloud Spanner for global ACID transactions · Database selection criteria"
        },
        {
          title: "Migration & Optimization",
          focus: "Database Migration Service & Performance",
          duration: "Module 9",
          desc: "Database Migration Service · Schema and query optimization · Monitoring database health · Database Engineer exam prep"
        }
      ]
    },
    {
      level: "Module 10: Professional Machine Learning Engineer",
      desc: "ML pipeline design, model training, deployment, monitoring, and MLOps practices.",
      modules: [
        {
          title: "ML Pipeline Design",
          focus: "Vertex AI, Feature Store & AutoML",
          duration: "Module 10",
          desc: "Vertex AI pipelines · AutoML and custom training · Feature Store design · Data preparation and labeling"
        },
        {
          title: "Model Training & Deployment",
          focus: "Training Jobs, Endpoints & Serving",
          duration: "Module 10",
          desc: "Distributed training on Vertex AI · Model Registry and endpoints · Online and batch prediction · A/B testing and model versions"
        },
        {
          title: "MLOps & Monitoring",
          focus: "Model Monitoring, CI/CD for ML & Responsible AI",
          duration: "Module 10",
          desc: "Model monitoring and drift detection · ML CI/CD pipelines · Responsible AI principles · ML Engineer exam prep"
        }
      ]
    },
    {
      level: "Module 11: Professional Generative AI Engineer",
      desc: "Prompt engineering, GenAI app patterns, RAG workflows, and responsible AI on Google Cloud.",
      modules: [
        {
          title: "Prompt Engineering & Foundation Models",
          focus: "Gemini, Vertex AI Studio & Prompt Design",
          duration: "Module 11",
          desc: "Gemini model family overview · Vertex AI Studio for prompt design · Few-shot and chain-of-thought prompting · Model tuning and grounding"
        },
        {
          title: "GenAI Application Patterns",
          focus: "RAG, Agents & Embeddings",
          duration: "Module 11",
          desc: "RAG workflow architecture · Vector Search and embeddings · Agent Builder and multi-agent patterns · GenAI API integration"
        },
        {
          title: "Responsible AI & Exam Prep",
          focus: "Safety, Evaluation & GenAI Certification",
          duration: "Module 11",
          desc: "Responsible AI and safety filters · Model evaluation and benchmarking · Enterprise GenAI governance · Generative AI Engineer exam prep"
        }
      ]
    }
  ]
},
 {
  slug: "network-engineering-professional-track",
  title: "Network Engineering Professional Track",
  category: "Networking",
  desc: "This complete track maps directly to your requested certifications and topics. It starts with networking fundamentals and progresses to advanced enterprise, cloud, and security networking for strong career outcomes.",
  duration: "10 Modules",
  mode: "Online",
  level: "Beginner to Advanced",
  iconName: "Network",
  tiers: [
    {
      level: "Module 1: CompTIA Network+ Foundations",
      desc: "Entry-level networking concepts for beginners and helpdesk/NOC roles.",
      modules: [
        {
          title: "Networking Basics",
          focus: "OSI, TCP/IP & Addressing",
          duration: "Module 1",
          desc: "Network types, topologies, and models · OSI and TCP/IP fundamentals · Common network devices and roles · Addressing and subnetting basics"
        },
        {
          title: "Core Protocols",
          focus: "IPv4, IPv6, DNS, DHCP & NAT",
          duration: "Module 1",
          desc: "IPv4, IPv6, DNS, DHCP, and NAT · TCP vs UDP behavior · Ports, sessions, and packet flow · Protocol troubleshooting basics"
        },
        {
          title: "Beginner Job Readiness",
          focus: "Helpdesk, NOC & Documentation",
          duration: "Module 1",
          desc: "Helpdesk and NOC workflow · Ticket handling and escalation · Basic monitoring tools usage · Network documentation standards"
        }
      ]
    },
    {
      level: "Module 2: Network+ Troubleshooting, Wireless, and Security",
      desc: "Operational support skills from the Network+ topic set.",
      modules: [
        {
          title: "Troubleshooting Methods",
          focus: "Layer-by-Layer Fault Isolation",
          duration: "Module 2",
          desc: "Structured troubleshooting approach · Layer-by-layer fault isolation · Connectivity and latency diagnosis · CLI and analyzer basics"
        },
        {
          title: "Wireless Networking",
          focus: "Wi-Fi Standards, Coverage & Roaming",
          duration: "Module 2",
          desc: "Wi-Fi standards and channels · Access point and controller concepts · Coverage, roaming, and interference · Wireless troubleshooting checks"
        },
        {
          title: "Network Security Basics",
          focus: "Firewalls, ACLs & Secure Config",
          duration: "Module 2",
          desc: "Firewalls, ACLs, and segmentation · Authentication and access controls · Threat types in enterprise networks · Secure configuration baseline"
        }
      ]
    },
    {
      level: "Module 3: Cisco CCNA Core Networking",
      desc: "Routing and switching fundamentals aligned with CCNA outcomes.",
      modules: [
        {
          title: "Routing and Switching",
          focus: "MAC Learning, VLANs & STP",
          duration: "Module 3",
          desc: "Switching logic and MAC learning · Inter-VLAN routing fundamentals · Static and dynamic routing · STP and redundancy concepts"
        },
        {
          title: "VLAN Configuration",
          focus: "Trunks, Segmentation & Troubleshooting",
          duration: "Module 3",
          desc: "VLAN planning and segmentation · Trunks and native VLAN · Access/trunk port troubleshooting · Routing between VLANs"
        },
        {
          title: "IP Connectivity",
          focus: "Addressing, Gateways & Reachability",
          duration: "Module 3",
          desc: "Addressing strategy and design · Gateway and route validation · Reachability testing techniques · Connectivity incident handling"
        }
      ]
    },
    {
      level: "Module 4: CCNA Security and Automation",
      desc: "CCNA-level network security basics and automation fundamentals.",
      modules: [
        {
          title: "Security Basics",
          focus: "Port Hardening, ACLs & Device Trust",
          duration: "Module 4",
          desc: "Switch port and access hardening · Basic ACL and filtering use cases · Identity and device trust concepts · Secure network operations"
        },
        {
          title: "Network Automation",
          focus: "Controller-Based & API-Driven Config",
          duration: "Module 4",
          desc: "Automation overview for networks · Controller-based networking concepts · API-driven configuration basics · Change consistency and rollback"
        },
        {
          title: "CCNA Role Alignment",
          focus: "Career Scenarios & Team Collaboration",
          duration: "Module 4",
          desc: "Network engineer responsibilities · SOC analyst networking expectations · Cybersecurity team collaboration · Interview-oriented scenario drills"
        }
      ]
    },
    {
      level: "Module 5: Cisco CCNP Enterprise Depth",
      desc: "Advanced routing, enterprise networking, and troubleshooting depth.",
      modules: [
        {
          title: "Advanced Routing",
          focus: "OSPF, BGP & Traffic Engineering",
          duration: "Module 5",
          desc: "OSPF, BGP, and policy control · Route redistribution strategies · Traffic engineering concepts · High-availability routing design"
        },
        {
          title: "Enterprise Networking",
          focus: "Campus, Branch & Core-Distribution-Access",
          duration: "Module 5",
          desc: "Campus and branch architectures · Core-distribution-access model · Scalable segmentation patterns · Operational resilience planning"
        },
        {
          title: "Advanced Troubleshooting",
          focus: "Control-Plane, Data-Plane & Protocol Instability",
          duration: "Module 5",
          desc: "Complex incident diagnosis · Control-plane and data-plane checks · Protocol instability handling · Post-incident optimization"
        }
      ]
    },
    {
      level: "Module 6: CCNP SD-WAN and Network Security",
      desc: "Enterprise WAN modernization and advanced security topics from the CCNP path.",
      modules: [
        {
          title: "SD-WAN Architecture",
          focus: "Overlay-Underlay & Controller-Based WAN",
          duration: "Module 6",
          desc: "Overlay-underlay fundamentals · Controller-based WAN operations · Application-aware routing · Branch policy orchestration"
        },
        {
          title: "WAN Operations",
          focus: "Path Selection, QoS & Telemetry",
          duration: "Module 6",
          desc: "Path selection and failover · QoS and performance management · Telemetry and health visibility · Troubleshooting SD-WAN flows"
        },
        {
          title: "CCNP Security Integration",
          focus: "Segmentation, Secure Edge & Compliance",
          duration: "Module 6",
          desc: "Segmentation and policy control · Secure branch and edge design · Threat-aware network design · Compliance-aligned operations"
        }
      ]
    },
    {
      level: "Module 7: Cisco CCIE Expert-Level Domains",
      desc: "Expert track for enterprise infrastructure, service provider, and data center networking.",
      modules: [
        {
          title: "Enterprise Infrastructure",
          focus: "Large-Scale Design & HA at Scale",
          duration: "Module 7",
          desc: "Large-scale enterprise design · High availability at scale · Complex policy and segmentation · Optimization and resiliency tuning"
        },
        {
          title: "Service Provider Networking",
          focus: "MPLS, Traffic Engineering & Backbone",
          duration: "Module 7",
          desc: "Provider-grade routing concepts · MPLS and traffic engineering overview · Carrier reliability patterns · Large backbone troubleshooting"
        },
        {
          title: "Data Center Networking",
          focus: "Spine-Leaf, East-West & Fabric",
          duration: "Module 7",
          desc: "Spine-leaf and fabric principles · East-west traffic design · Virtualization-aware networking · Data center security controls"
        }
      ]
    },
    {
      level: "Module 8: Juniper JNCIA and JNCIS Path",
      desc: "Juniper associate to specialist progression with routing and operations focus.",
      modules: [
        {
          title: "JNCIA Foundations",
          focus: "Juniper OS, Routing & Switching Basics",
          duration: "Module 8",
          desc: "Juniper platform and OS basics · Routing protocol fundamentals · Basic switching and interfaces · Network operations workflow"
        },
        {
          title: "JNCIS Specialist Focus",
          focus: "Enterprise Routing & Config Validation",
          duration: "Module 8",
          desc: "Enterprise routing and switching · Intermediate design decisions · Configuration validation · Production network tuning"
        },
        {
          title: "Juniper Troubleshooting",
          focus: "Protocol Diagnosis & Root-Cause Reports",
          duration: "Module 8",
          desc: "Protocol and link issue diagnosis · Path and policy verification · Operational best practices · Escalation and root-cause reports"
        }
      ]
    },
    {
      level: "Module 9: Cloud Networking with Azure AZ-700",
      desc: "Designing and implementing Microsoft Azure networking solutions.",
      modules: [
        {
          title: "Virtual Networks",
          focus: "VNet, Peering & Private Endpoints",
          duration: "Module 9",
          desc: "VNet and subnet architecture · Peering and segmentation · Private endpoints and isolation · Cloud routing strategy"
        },
        {
          title: "Load Balancing and Gateways",
          focus: "Azure LB, App Gateway & VPN Gateway",
          duration: "Module 9",
          desc: "Azure Load Balancer and App Gateway · VPN Gateway architecture · Traffic distribution patterns · Availability and failover design"
        },
        {
          title: "Hybrid Networking",
          focus: "ExpressRoute, Hybrid DNS & Governance",
          duration: "Module 9",
          desc: "On-prem to cloud integration · ExpressRoute and VPN planning · Hybrid DNS and connectivity · Security and governance controls"
        }
      ]
    },
    {
      level: "Module 10: Security Networking Track (Security+ and CISSP)",
      desc: "Network security controls and architecture foundations for cybersecurity alignment.",
      modules: [
        {
          title: "CompTIA Security+ Networking",
          focus: "Threat Landscape & Defense-in-Depth",
          duration: "Module 10",
          desc: "Network threat landscape · Defense-in-depth for networks · Secure access and authentication · Operational security monitoring"
        },
        {
          title: "CISSP Security Architecture",
          focus: "Risk-Based Controls & Governance",
          duration: "Module 10",
          desc: "Security design principles · Risk-based network controls · Governance and compliance mapping · Enterprise security operations"
        },
        {
          title: "Career Outcome Mapping",
          focus: "Network Security Engineer Pathway",
          duration: "Module 10",
          desc: "Network security engineer pathway · SOC and NOC collaboration model · Incident readiness checklist · Certification strategy and timeline"
        }
      ]
    }
  ]
},
  {
    slug: "audit-certifications-roadmap",
    title: "Information Security Audit Certifications Roadmap",
    category: "cybersecurity",
    desc: "Audit and governance certifications roadmap covering CISA, CISM, CRISC, ISO 27001 Lead Auditor, and CISSP with role-based progression guidance.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CISA: Information systems auditing and governance",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISA: Information systems auditing and governance including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CISM: Security governance and incident management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISM: Security governance and incident management including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CRISC: Risk management and control design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CRISC: Risk management and control design including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ ISO 27001 Lead Auditor: ISMS and compliance audits",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ISO 27001 Lead Auditor: ISMS and compliance audits including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CISSP: Security architecture and governance depth",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISSP: Security architecture and governance depth including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Comparison matrix and suggested progression",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Comparison matrix and suggested progression including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
  slug: "security-audit-governance-operations",
  title: "Security Audit and Governance Operations",
  category: "Cybersecurity",
  desc: "Deep practical program aligned to CISA, CISM, CRISC, ISO 27001 Lead Auditor, and CISSP requirements. Learn to run audits, design controls, manage risk, and build enterprise-grade security governance programs.",
  duration: "10 Modules",
  mode: "Online",
  level: "Intermediate to Advanced",
  iconName: "ClipboardCheck",
  tiers: [
    {
      level: "Module 1: Information Systems Auditing Foundations (CISA)",
      desc: "Audit lifecycle, scope definition, sampling, evidence collection, and reporting principles.",
      modules: [
        {
          title: "Audit Lifecycle",
          focus: "Planning, Execution & Closure",
          duration: "Module 1",
          desc: "Planning and objective setting · Scoping and stakeholder alignment · Execution checkpoints · Closure and reporting"
        },
        {
          title: "Evidence and Controls",
          focus: "Testing, Quality & Audit Trail",
          duration: "Module 1",
          desc: "Control testing techniques · Evidence quality criteria · Gap documentation · Audit trail integrity"
        },
        {
          title: "Audit Reporting",
          focus: "Findings, Impact & Action Plans",
          duration: "Module 1",
          desc: "Findings prioritization · Risk impact articulation · Management action plans · Follow-up tracking"
        }
      ]
    },
    {
      level: "Module 2: IT Governance and Policy Management (CISA/CISM)",
      desc: "Governance frameworks, policy structures, accountability models, and board-level reporting.",
      modules: [
        {
          title: "Governance Frameworks",
          focus: "COBIT, Accountability & Executive Metrics",
          duration: "Module 2",
          desc: "COBIT and governance mapping · Policy hierarchy models · Roles and accountability · Executive governance metrics"
        },
        {
          title: "Policy Lifecycle",
          focus: "Drafting, Ownership & Periodic Reviews",
          duration: "Module 2",
          desc: "Drafting and approvals · Control ownership definition · Policy communication plans · Periodic policy reviews"
        },
        {
          title: "Management Reporting",
          focus: "KRI, KPI & Board Reporting",
          duration: "Module 2",
          desc: "KRI and KPI design · Governance dashboards · Board reporting patterns · Escalation criteria"
        }
      ]
    },
    {
      level: "Module 3: Risk Management and Assessment (CRISC)",
      desc: "Risk identification, analysis, appetite alignment, and response planning.",
      modules: [
        {
          title: "Risk Identification",
          focus: "Threat Mapping & Asset Criticality",
          duration: "Module 3",
          desc: "Threat and vulnerability mapping · Business process risk discovery · Asset criticality analysis · Dependency risk reviews"
        },
        {
          title: "Risk Analysis",
          focus: "Scoring, Impact Modeling & Scenarios",
          duration: "Module 3",
          desc: "Qualitative risk scoring · Impact and likelihood modeling · Residual risk calculations · Scenario-based analysis"
        },
        {
          title: "Risk Response",
          focus: "Mitigate, Transfer, Accept & Monitor",
          duration: "Module 3",
          desc: "Mitigate, transfer, accept, avoid · Control selection mapping · Risk treatment plans · Monitoring and governance"
        }
      ]
    },
    {
      level: "Module 4: Control Design and IT Risk Mitigation (CRISC)",
      desc: "Design effective preventive, detective, and corrective controls for enterprise risk reduction.",
      modules: [
        {
          title: "Control Design Principles",
          focus: "Objectives, SoD & Feasibility",
          duration: "Module 4",
          desc: "Control objective alignment · Preventive vs detective controls · Segregation of duties · Control feasibility analysis"
        },
        {
          title: "Implementation Patterns",
          focus: "Technical, Procedural & Compensating Controls",
          duration: "Module 4",
          desc: "Technical and procedural controls · Compensating controls · Automation opportunities · Integration with operations"
        },
        {
          title: "Control Effectiveness",
          focus: "Maturity, Testing & Continuous Improvement",
          duration: "Module 4",
          desc: "Control maturity assessment · Testing and validation · Exception management · Continuous improvement cycles"
        }
      ]
    },
    {
      level: "Module 5: Security Program Management (CISM)",
      desc: "Build and run scalable security programs aligned with business strategy.",
      modules: [
        {
          title: "Program Strategy",
          focus: "Chartering, Roadmap & Maturity Planning",
          duration: "Module 5",
          desc: "Security program chartering · Roadmap and investment planning · Capability maturity planning · Stakeholder alignment"
        },
        {
          title: "Operations Integration",
          focus: "SOC, Audit & Third-Party Governance",
          duration: "Module 5",
          desc: "SOC and audit coordination · Business unit engagement · Service management alignment · Third-party governance"
        },
        {
          title: "Performance Management",
          focus: "Metrics, Executive Comms & Value Tracking",
          duration: "Module 5",
          desc: "Program metrics framework · Executive communication model · Issue tracking and closure · Value realization tracking"
        }
      ]
    },
    {
      level: "Module 6: Incident Management and Response Governance (CISM)",
      desc: "Incident governance, escalation models, and post-incident compliance actions.",
      modules: [
        {
          title: "Incident Governance",
          focus: "Classification, Escalation & Regulatory Timelines",
          duration: "Module 6",
          desc: "Incident classification models · Escalation policy design · Decision authority mapping · Regulatory response timelines"
        },
        {
          title: "Response Workflows",
          focus: "Evidence Retention & Communication Playbooks",
          duration: "Module 6",
          desc: "Cross-team response process · Evidence retention standards · Communication playbooks · Containment governance"
        },
        {
          title: "Post-Incident Controls",
          focus: "Root Cause Reviews & Audit-Ready Docs",
          duration: "Module 6",
          desc: "Root cause governance reviews · Control remediation plans · Audit-ready documentation · Lessons learned integration"
        }
      ]
    },
    {
      level: "Module 7: ISO 27001 ISMS Foundations and Policy Architecture",
      desc: "Build ISMS scope, policy structure, and control governance aligned to ISO 27001 requirements.",
      modules: [
        {
          title: "ISMS Scope and Context",
          focus: "Boundaries, Interested Parties & SoA",
          duration: "Module 7",
          desc: "Scope definition methods · Interested parties analysis · Context and boundaries · Statement of applicability basics"
        },
        {
          title: "ISO Policy Stack",
          focus: "Mandatory Policies & Document Governance",
          duration: "Module 7",
          desc: "Mandatory policy set · Control procedure mapping · Document governance model · Version control and approvals"
        },
        {
          title: "Control Domains",
          focus: "Annex A, Objectives & Evidence",
          duration: "Module 7",
          desc: "Annex A structure overview · Control objective mapping · Ownership and operation · Evidence expectations"
        }
      ]
    },
    {
      level: "Module 8: ISO 27001 Lead Audit Execution",
      desc: "Plan and execute compliance audits, handle non-conformities, and close corrective actions.",
      modules: [
        {
          title: "Audit Planning",
          focus: "Plans, Schedules & Sampling Strategy",
          duration: "Module 8",
          desc: "Audit plans and schedules · Checklist creation · Sampling strategy · Team assignment and logistics"
        },
        {
          title: "Audit Fieldwork",
          focus: "Interviews, Verification & Finding Classification",
          duration: "Module 8",
          desc: "Interview techniques · Control verification methods · Evidence adequacy testing · Finding classification"
        },
        {
          title: "Corrective Actions",
          focus: "Root Cause, Closure & Continuous Readiness",
          duration: "Module 8",
          desc: "Root-cause validation · Action plan quality checks · Closure evidence review · Continuous compliance readiness"
        }
      ]
    },
    {
      level: "Module 9: CISSP Governance, Risk, and Compliance Depth",
      desc: "Advanced governance and architecture thinking for senior security roles.",
      modules: [
        {
          title: "Security Governance Design",
          focus: "Operating Models & Risk-Aligned Decisions",
          duration: "Module 9",
          desc: "Governance operating models · Security architecture governance · Risk-aligned decision making · Leadership communication"
        },
        {
          title: "Compliance Architecture",
          focus: "Multi-Framework Mapping & Control Harmonization",
          duration: "Module 9",
          desc: "Multi-framework mapping · Control harmonization · Audit evidence architecture · Regulatory change handling"
        },
        {
          title: "Enterprise Security Strategy",
          focus: "Roadmap, Prioritization & Executive Briefings",
          duration: "Module 9",
          desc: "Long-term roadmap planning · Program prioritization · Resource and budget alignment · Executive risk briefings"
        }
      ]
    },
    {
      level: "Module 10: Career and Certification Strategy Workshop",
      desc: "Build your personalized exam and role transition plan across CISA, CISM, CRISC, ISO 27001, and CISSP.",
      modules: [
        {
          title: "Certification Sequencing",
          focus: "Role-Based Order & Study Planning",
          duration: "Module 10",
          desc: "Role-based certification order · Study planning templates · Prerequisite gap mapping · Time-to-certification strategy"
        },
        {
          title: "Portfolio and Resume Alignment",
          focus: "Audit Portfolio & Interview Prep",
          duration: "Module 10",
          desc: "Audit evidence portfolio · Governance project storytelling · Risk-case interview preparation · Leadership role positioning"
        },
        {
          title: "Capstone Audit Simulation",
          focus: "End-to-End Audit & Executive Report",
          duration: "Module 10",
          desc: "End-to-end audit scenario · Risk and control recommendations · Executive report submission · Mentor review and roadmap"
        }
      ]
    }
  ]
},
  {
    slug: "governance-certifications-roadmap",
    title: "IT and Security Governance Certifications Roadmap",
    category: "cybersecurity",
    desc: "Single-page governance certifications roadmap covering CGEIT, COBIT, CISM, CRISC, and ISO 27001 Lead Implementer for IT and security governance careers.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CGEIT for enterprise IT governance leadership",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CGEIT for enterprise IT governance leadership including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ COBIT framework for process and control design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ COBIT framework for process and control design including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CISM for security governance and management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISM for security governance and management including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CRISC for risk governance and control monitoring",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CRISC for risk governance and control monitoring including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ ISO 27001 Lead Implementer for ISMS implementation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ISO 27001 Lead Implementer for ISMS implementation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Single-page comparison for role-based decisions",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Single-page comparison for role-based decisions including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "linux-certifications-roadmap",
    title: "Linux Certifications Roadmap",
    category: "devops",
    desc: "Single-page Linux certifications roadmap covering Linux+, RHCSA, RHCE, LPIC, and Linux Foundation paths for system administration and enterprise operations.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Server",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CompTIA Linux+ for beginner to intermediate skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CompTIA Linux+ for beginner to intermediate skills including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ RHCSA for core Red Hat administration",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ RHCSA for core Red Hat administration including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ RHCE for advanced automation and enterprise operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ RHCE for advanced automation and enterprise operations including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ LPIC-1, LPIC-2, LPIC-3 progression",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ LPIC-1, LPIC-2, LPIC-3 progression including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Linux Foundation LFCS and LFCE tracks",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Linux Foundation LFCS and LFCE tracks including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Role alignment for admin, security, and operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Role alignment for admin, security, and operations including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
  slug: "kali-linux-ethical-hacking-fundamentals",
  title: "Kali Linux Ethical Hacking Fundamentals",
  category: "Cybersecurity",
  desc: "Learn ethical hacking fundamentals with Kali Linux through a structured 12-module track. Build practical skills in Linux operations, network scanning, vulnerability assessment, password attacks, wireless testing, basic exploitation, and professional reporting.",
  duration: "12 Modules",
  mode: "Online",
  level: "Beginner",
  iconName: "Terminal",
  tiers: [
    {
      level: "Module 1: Introduction to Kali Linux",
      desc: "What is Kali Linux, ethical hacking basics, cybersecurity concepts, and Kali Linux features vs other distributions.",
      modules: [
        {
          title: "Core Concepts",
          focus: "Ethical Hacking & Cybersecurity Basics",
          duration: "Module 1",
          desc: "What is Kali Linux · Ethical hacking fundamentals · Cybersecurity basics · Kali Linux feature overview"
        },
        {
          title: "Distribution Context",
          focus: "Kali vs Other Distros & Tool Ecosystem",
          duration: "Module 1",
          desc: "Kali vs other Linux distributions · Use cases for penetration testing · Role in security operations · Tool ecosystem overview"
        },
        {
          title: "Compliance and Ethics",
          focus: "Legal Scope & Responsible Disclosure",
          duration: "Module 1",
          desc: "Penetration testing basics · Legal considerations in hacking · Authorized scope boundaries · Responsible disclosure basics"
        }
      ]
    },
    {
      level: "Module 2: Installation of Kali Linux",
      desc: "Set up Kali Linux using VMware, VirtualBox, and Live USB with recommended hardware requirements.",
      modules: [
        {
          title: "Installation Methods",
          focus: "VMware, VirtualBox & Live USB",
          duration: "Module 2",
          desc: "VMware installation · VirtualBox installation · Live USB installation · Boot and setup verification"
        },
        {
          title: "System Requirements",
          focus: "RAM, CPU & Resource Allocation",
          duration: "Module 2",
          desc: "RAM: 4-8 GB · CPU: 2 cores · Disk: 40-50 GB · Resource allocation best practices"
        },
        {
          title: "Lab Task",
          focus: "Install, Update & Validate",
          duration: "Module 2",
          desc: "Install Kali Linux on VMware · Update repositories post-install · Create snapshot and backup · Validate network access"
        }
      ]
    },
    {
      level: "Module 3: Kali Linux Interface",
      desc: "Desktop environment, file system structure, menu categories, and package management workflows.",
      modules: [
        {
          title: "Interface and Navigation",
          focus: "Desktop, Menus & Terminal Workflow",
          duration: "Module 3",
          desc: "Desktop environment walkthrough · Kali menu categories · Terminal workflow basics · System settings review"
        },
        {
          title: "File System and Packages",
          focus: "Linux FS Structure & Package Management",
          duration: "Module 3",
          desc: "Linux file system structure · Package management basics · Tool organization understanding · Workspace setup tips"
        },
        {
          title: "Operations Tasks",
          focus: "Updating, Installing & Dependency Checks",
          duration: "Module 3",
          desc: "Updating Kali Linux · Installing tools · Repository health checks · Version and dependency checks"
        }
      ]
    },
    {
      level: "Module 4: Basic Linux Commands",
      desc: "Command-line essentials for system operations in security testing environments.",
      modules: [
        {
          title: "Navigation Commands",
          focus: "ls, cd, mkdir, cp & mv",
          duration: "Module 4",
          desc: "ls, pwd, cd · mkdir, rm · cp, mv · Directory and file workflows"
        },
        {
          title: "Permissions and Processes",
          focus: "chmod, ps & Process Control",
          duration: "Module 4",
          desc: "chmod fundamentals · ps and top usage · Process visibility and control · Privilege awareness"
        },
        {
          title: "Lab Task",
          focus: "File Management & Process Monitoring",
          duration: "Module 4",
          desc: "Practice command-line operations · Create and manage files · Modify permissions safely · Monitor running processes"
        }
      ]
    },
    {
      level: "Module 5: Networking Basics",
      desc: "IP concepts, interfaces, DNS, routing, and network diagnostic commands.",
      modules: [
        {
          title: "Networking Concepts",
          focus: "IP, Interfaces, DNS & Routing",
          duration: "Module 5",
          desc: "IP address concepts · Network interfaces · DNS and routing basics · Connectivity models"
        },
        {
          title: "Commands",
          focus: "ifconfig, ping, netstat & traceroute",
          duration: "Module 5",
          desc: "ifconfig and ip · ping · netstat · traceroute"
        },
        {
          title: "Lab Task",
          focus: "Connectivity, DNS & Route Validation",
          duration: "Module 5",
          desc: "Check network connectivity · Inspect interface configuration · Validate DNS and routes · Document diagnostics output"
        }
      ]
    },
    {
      level: "Module 6: Network Scanning",
      desc: "Use Nmap for host discovery, port scanning, and service detection.",
      modules: [
        {
          title: "Nmap Fundamentals",
          focus: "Workflow, Scoping & Output",
          duration: "Module 6",
          desc: "Nmap workflow basics · Target scoping rules · Safe scan planning · Output interpretation"
        },
        {
          title: "Scanning Topics",
          focus: "Host Discovery, Ports & Services",
          duration: "Module 6",
          desc: "Host discovery · Port scanning · Service detection · Result classification"
        },
        {
          title: "Lab Task",
          focus: "Scan Devices & Baseline Report",
          duration: "Module 6",
          desc: "Scan network devices · Identify active hosts · List open ports and services · Create baseline scan report"
        }
      ]
    },
    {
      level: "Module 7: Vulnerability Assessment",
      desc: "Identify security weaknesses using scanning and analysis tools.",
      modules: [
        {
          title: "Assessment Basics",
          focus: "Scanning Concepts & Risk Severity",
          duration: "Module 7",
          desc: "Vulnerability scanning concepts · Weakness identification process · Risk severity understanding · False-positive awareness"
        },
        {
          title: "Tools",
          focus: "Nikto, OpenVAS & Finding Triage",
          duration: "Module 7",
          desc: "Nikto for web checks · OpenVAS fundamentals · Scan scope and tuning · Finding triage process"
        },
        {
          title: "Lab Task",
          focus: "Scan, Classify & Remediation Notes",
          duration: "Module 7",
          desc: "Run vulnerability scans · Review and classify findings · Validate critical issues · Prepare remediation notes"
        }
      ]
    },
    {
      level: "Module 8: Password Attacks",
      desc: "Understand password cracking concepts and controlled testing methods.",
      modules: [
        {
          title: "Attack Concepts",
          focus: "Dictionary, Brute-Force & Policy",
          duration: "Module 8",
          desc: "Password cracking basics · Dictionary attacks · Brute-force attacks · Password policy implications"
        },
        {
          title: "Tools",
          focus: "John the Ripper, Hydra & Wordlists",
          duration: "Module 8",
          desc: "John the Ripper basics · Hydra introduction · Wordlist strategy · Rate and lockout awareness"
        },
        {
          title: "Lab Task",
          focus: "Controlled Tests & Secure Controls",
          duration: "Module 8",
          desc: "Run controlled password tests · Measure crack attempt behavior · Evaluate weak credential impact · Recommend secure controls"
        }
      ]
    },
    {
      level: "Module 9: Wireless Security Testing",
      desc: "Wi-Fi security basics, WPA/WPA2 concepts, and wireless analysis methods.",
      modules: [
        {
          title: "Wireless Security Concepts",
          focus: "WPA/WPA2, Attack Surface & Defense",
          duration: "Module 9",
          desc: "Wi-Fi security basics · WPA/WPA2 overview · Attack surface understanding · Defensive configuration baseline"
        },
        {
          title: "Tooling",
          focus: "Aircrack-ng & Legal Testing Boundaries",
          duration: "Module 9",
          desc: "Aircrack-ng basics · Capture and analysis workflow · Handshake awareness · Legal testing boundaries"
        },
        {
          title: "Lab Task",
          focus: "Encryption Posture & Hardening Actions",
          duration: "Module 9",
          desc: "Wireless network analysis · Inspect encryption posture · Identify weak setup patterns · Document hardening actions"
        }
      ]
    },
    {
      level: "Module 10: Introduction to Exploitation",
      desc: "Exploitation concepts, payload basics, and Metasploit framework introduction.",
      modules: [
        {
          title: "Exploitation Foundations",
          focus: "Payloads, Attack Chain & Risk Mapping",
          duration: "Module 10",
          desc: "Exploitation concepts · Payload basics · Attack chain understanding · Risk and impact mapping"
        },
        {
          title: "Metasploit Basics",
          focus: "Framework Structure & Safe Test Setup",
          duration: "Module 10",
          desc: "Framework structure · Module categories · Safe test environment setup · Result logging fundamentals"
        },
        {
          title: "Lab Task",
          focus: "Controlled Demo & Mitigation Mapping",
          duration: "Module 10",
          desc: "Basic exploitation demo · Controlled environment testing · Capture proof-of-concept output · Map mitigation recommendations"
        }
      ]
    },
    {
      level: "Module 11: Reporting and Documentation",
      desc: "Create professional penetration testing and vulnerability documentation.",
      modules: [
        {
          title: "Security Reports",
          focus: "Findings, Severity & Executive Summary",
          duration: "Module 11",
          desc: "Security testing report structure · Finding severity and evidence · Business risk articulation · Executive summary writing"
        },
        {
          title: "Documentation Standards",
          focus: "Reproducibility, Evidence & Remediation",
          duration: "Module 11",
          desc: "Vulnerability documentation · Reproducibility criteria · Screenshot and log handling · Remediation tracking"
        },
        {
          title: "PenTest Format",
          focus: "Template, Scope & Sign-Off",
          duration: "Module 11",
          desc: "Basic penetration test template · Scope and assumptions · Methodology and tools used · Closure and sign-off notes"
        }
      ]
    },
    {
      level: "Module 12: Basic Ethical Hacking Lab",
      desc: "Integrated hands-on lab covering setup, scanning, vulnerability checks, and password testing.",
      modules: [
        {
          title: "Setup and Discovery",
          focus: "Kali Install, Nmap & Port Identification",
          duration: "Module 12",
          desc: "Install Kali Linux · Configure test environment · Scan network using Nmap · Identify open ports"
        },
        {
          title: "Assessment Workflow",
          focus: "Vulnerability Scan & Remediation Planning",
          duration: "Module 12",
          desc: "Perform vulnerability scan · Validate high-priority findings · Assess exposure impact · Plan remediation order"
        },
        {
          title: "Credential and Report Lab",
          focus: "Password Testing & Final Report",
          duration: "Module 12",
          desc: "Test password cracking workflow · Record lab evidence · Draft concise assessment report · Present final recommendations"
        }
      ]
    }
  ]
},
  {
    slug: "vmware-certification-courses-roadmap",
    title: "VMware Certification Courses Roadmap",
    category: "cybersecurity",
    desc: "Single-page VMware certification roadmap covering vSphere, NSX, vSAN, Cloud Foundation, disaster recovery, SD-WAN, Aria operations, Kubernetes, and Azure integration.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ ESXi and vCenter administration",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ESXi and vCenter administration including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Network virtualization and micro-segmentation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Network virtualization and micro-segmentation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Software-defined storage and vSAN clusters",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Software-defined storage and vSAN clusters including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Hybrid cloud and cloud lifecycle operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Hybrid cloud and cloud lifecycle operations including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Disaster recovery and replication planning",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Disaster recovery and replication planning including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Automation, performance monitoring, and capacity planning",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Automation, performance monitoring, and capacity planning including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "azure-certifications-roadmap",
    title: "Microsoft Azure Certification Roadmap",
    category: "microsoft-azure",
    desc: "Complete Microsoft Azure certification roadmap covering Fundamental (AZ-900, AI-900, DP-900, SC-900), Associate, Expert, and Security specialist tracks. 13+ certifications with hands-on Azure lab training.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Azure architecture and core services",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Azure architecture and core services including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Virtual machines, networking, and storage",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Virtual machines, networking, and storage including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Identity and access management (IAM)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Identity and access management (IAM) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Azure subscription and cost management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Azure subscription and cost management including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
  slug: "azure-az900",
  title: "Microsoft Azure Fundamentals AZ-900",
  category: "Microsoft Azure",
  desc: "Your starting point for cloud and Azure. Understand cloud concepts, core Azure services, pricing, governance, and compliance. Perfect for beginners, management, and non-technical professionals entering cloud.",
  duration: "2-4 Weeks",
  mode: "Online",
  level: "Beginner",
  iconName: "CloudLightning",
  tiers: [
    {
      level: "Module 1: Cloud Concepts (25–30%)",
      desc: "Understand what cloud computing is, why it matters, and how different service and deployment models work.",
      modules: [
        {
          title: "What is Cloud Computing?",
          focus: "CapEx vs OpEx & Shared Responsibility",
          duration: "Week 1",
          desc: "Definition and benefits of cloud computing · CapEx vs. OpEx cost models · Shared responsibility model · High availability, scalability, and reliability"
        },
        {
          title: "Cloud Service Models",
          focus: "IaaS, PaaS & SaaS",
          duration: "Week 1",
          desc: "Infrastructure as a Service (IaaS) · Platform as a Service (PaaS) · Software as a Service (SaaS) · When to use each model — real-world examples"
        },
        {
          title: "Cloud Deployment Models",
          focus: "Public, Private, Hybrid & Multi-Cloud",
          duration: "Week 1",
          desc: "Public cloud — Microsoft Azure · Private cloud — on-premises · Hybrid cloud — mixed environments · Multi-cloud strategies and use cases"
        }
      ]
    },
    {
      level: "Module 2: Azure Architecture and Core Services (35–40%)",
      desc: "Explore Azure's global infrastructure and key services across compute, networking, and storage.",
      modules: [
        {
          title: "Azure Global Infrastructure",
          focus: "Regions, Availability Zones & ARM",
          duration: "Week 2",
          desc: "Azure regions, region pairs, and geographies · Availability Zones and data center redundancy · Azure Resource Manager (ARM) and resource groups · Azure subscriptions and management groups"
        },
        {
          title: "Compute and Networking Services",
          focus: "VMs, App Service, VNet & ExpressRoute",
          duration: "Week 2",
          desc: "Azure Virtual Machines (IaaS compute) · Azure App Service, Functions, and Containers · Azure Virtual Networks, VPN Gateway · Azure DNS and ExpressRoute overview"
        },
        {
          title: "Storage and Database Services",
          focus: "Blob, SQL, Cosmos DB & Redundancy",
          duration: "Week 2-3",
          desc: "Azure Blob, Disk, File, and Queue Storage · Azure SQL Database and Cosmos DB · Azure Database for MySQL and PostgreSQL · Storage redundancy options overview"
        }
      ]
    },
    {
      level: "Module 3: Security, Compliance, and Azure Management (30–35%)",
      desc: "Learn how Azure protects your data, manages identities, and helps control costs.",
      modules: [
        {
          title: "Security and Identity",
          focus: "Entra ID, MFA & Zero Trust",
          duration: "Week 3",
          desc: "Azure Active Directory (Entra ID) basics · Multi-factor authentication (MFA) · Azure Defender and Microsoft Sentinel overview · Zero Trust security model introduction"
        },
        {
          title: "Governance and Compliance",
          focus: "Azure Policy, Blueprints & GDPR",
          duration: "Week 3",
          desc: "Azure Policy and resource locks · Azure Blueprints overview · Microsoft compliance frameworks (GDPR, ISO) · Trust Center and Service Trust Portal"
        },
        {
          title: "Cost Management and SLAs",
          focus: "Pricing Calculator, TCO & SLAs",
          duration: "Week 3-4",
          desc: "Azure pricing calculator and TCO calculator · Cost management and billing tools · Azure SLAs and availability guarantees · Azure free account and spending limits"
        }
      ]
    }
  ]
},
  {
  slug: "azure-az500",
  title: "Microsoft Azure Security Engineer AZ-500",
  category: "azure",
  desc: "Implement Azure security controls, manage identity and access, protect platforms and data, and respond to security threats. The core certification for cloud security engineers and SOC teams working on Azure.",
  duration: "4-8 Weeks",
  mode: "Live",
  level: "Associate",
  iconName: "Shield",
  tiers: [
    {
      level: "Module 1 (25–30%): Manage Identity and Access",
      desc: "Secure identities using Azure Active Directory, Privileged Identity Management, and Conditional Access policies.",
      modules: [
        {
          title: "Azure Active Directory (Entra ID)",
          focus: "Users, groups, hybrid identity, managed identities, app registrations",
          duration: "1-2 Weeks",
          desc: "Configure Azure AD users, groups, and external identities. Implement Azure AD Connect and hybrid identity, manage Managed Identities, and configure application registrations."
        },
        {
          title: "Privileged Identity Management (PIM)",
          focus: "JIT access, access reviews, role monitoring",
          duration: "1 Week",
          desc: "Configure and activate PIM for Azure AD roles, implement just-in-time privileged access, configure access reviews, and monitor privileged role assignments."
        },
        {
          title: "Conditional Access and MFA",
          focus: "CA policies, MFA, Identity Protection, Password Protection",
          duration: "1 Week",
          desc: "Create and manage Conditional Access policies, configure Multi-Factor Authentication, implement Identity Protection risk policies, and configure Azure AD Password Protection."
        }
      ]
    },
    {
      level: "Module 2 (35–40%): Implement Platform Protection",
      desc: "Secure Azure network perimeter, compute workloads, containers, and Azure Key Vault.",
      modules: [
        {
          title: "Network Security",
          focus: "NSG, ASG, Azure Firewall, DDoS, WAF",
          duration: "1-2 Weeks",
          desc: "Configure Network Security Groups and ASGs, deploy Azure Firewall and Firewall Policy, implement DDoS Protection Standard, and configure WAF on App Gateway."
        },
        {
          title: "Compute and Container Security",
          focus: "VM encryption, Defender for Servers, AKS, container registry",
          duration: "1-2 Weeks",
          desc: "Configure VM endpoint protection and disk encryption, enable Microsoft Defender for Servers, secure AKS clusters, and implement container registry security policies."
        },
        {
          title: "Key Vault and Secrets Management",
          focus: "Keys, secrets, certificates, RBAC, managed HSM",
          duration: "1 Week",
          desc: "Create and configure Azure Key Vault, manage keys, secrets and certificates, configure Key Vault access policies and RBAC, and implement Key Vault managed HSM."
        }
      ]
    },
    {
      level: "Module 3 (25–30%): Manage Security Operations",
      desc: "Monitor, investigate, and respond to threats using Microsoft Sentinel, Defender, and Azure Monitor.",
      modules: [
        {
          title: "Microsoft Sentinel (SIEM)",
          focus: "Connectors, analytics rules, KQL threat hunting, playbooks",
          duration: "1-2 Weeks",
          desc: "Configure Microsoft Sentinel workspace and connectors, create analytics rules and incident detection, perform threat hunting with KQL, and configure automation rules and playbooks."
        },
        {
          title: "Microsoft Defender for Cloud",
          focus: "Secure score, security policies, alerts, threat intelligence",
          duration: "1 Week",
          desc: "Enable and configure Defender for Cloud plans, interpret secure score and recommendations, configure security policies and compliance, and manage alerts and threat intelligence."
        },
        {
          title: "Monitoring and Incident Response",
          focus: "Azure Monitor, Log Analytics, incident investigation, audit logging",
          duration: "1 Week",
          desc: "Configure Azure Monitor diagnostic logs and alerts, analyze security logs in Log Analytics, investigate security incidents, and configure audit logging for Azure resources."
        }
      ]
    },
    {
      level: "Module 4 (5–10%): Secure Data and Applications",
      desc: "Protect Azure storage, databases, and application configurations using encryption and security policies.",
      modules: [
        {
          title: "Storage and Database Security",
          focus: "Storage encryption, SQL ATP, TDE, SQL auditing",
          duration: "1 Week",
          desc: "Configure Azure Storage encryption and access policies, enable Advanced Threat Protection for SQL, implement Transparent Data Encryption, and configure SQL auditing and vulnerability assessments."
        },
        {
          title: "Application Security",
          focus: "App Service security, OAuth 2.0, Managed Identities, API Management",
          duration: "1 Week",
          desc: "Configure App Service security and authentication, implement OAuth 2.0 and OpenID Connect, use Managed Identities for app-to-service auth, and configure API Management security policies."
        }
      ]
    }
  ]
},
  {
  slug: "azure-az305",
  title: "Microsoft Azure Solutions Architect AZ-305",
  category: "azure",
  desc: "Design end-to-end Azure solutions for enterprise requirements — governance, identity, compute, networking, data, and business continuity. The expert-level certification for cloud architects building production Azure environments.",
  duration: "6-8 Weeks",
  mode: "Live",
  level: "Expert",
  iconName: "Building2",
  tiers: [
    {
      level: "Module 1 (25–30%): Design Identity, Governance, and Monitoring Solutions",
      desc: "Architect identity systems, governance frameworks, and monitoring strategies for enterprise Azure environments.",
      modules: [
        {
          title: "Identity and Access Architecture",
          focus: "Azure AD tenant design, hybrid identity, B2B/B2C, PIM strategy",
          duration: "1-2 Weeks",
          desc: "Design Azure AD (Entra ID) tenant architecture, hybrid identity with Azure AD Connect, external identity and B2B/B2C solutions, and Privileged Identity Management strategy."
        },
        {
          title: "Governance and Compliance Design",
          focus: "Management groups, Azure Policy, tagging, Blueprints",
          duration: "1 Week",
          desc: "Design management group and subscription hierarchy, architect Azure Policy and initiative assignments, design resource tagging and naming conventions, and plan Azure Blueprints for landing zone governance."
        },
        {
          title: "Monitoring and Logging Architecture",
          focus: "Azure Monitor, Log Analytics, alerts, Sentinel integration",
          duration: "1 Week",
          desc: "Design Azure Monitor and Log Analytics strategy, architect alerts, dashboards and workbook solutions, design diagnostic settings and data collection rules, and integrate with Microsoft Sentinel for security monitoring."
        }
      ]
    },
    {
      level: "Module 2 (25–30%): Design Data Storage Solutions",
      desc: "Architect scalable, secure, and performant data storage and integration solutions in Azure.",
      modules: [
        {
          title: "Relational Data Solutions",
          focus: "Azure SQL, Managed Instance, Elastic Pools, geo-replication",
          duration: "1-2 Weeks",
          desc: "Design Azure SQL Database and Managed Instance, architect Elastic Pools for multi-tenant apps, design Azure Database for MySQL and PostgreSQL, and plan high availability and geo-replication strategies."
        },
        {
          title: "Non-Relational and Storage Design",
          focus: "Cosmos DB, Blob/Files/Queues, storage tiers, Data Lake Gen2",
          duration: "1 Week",
          desc: "Design Azure Cosmos DB for globally distributed apps, architect Azure Storage tiers and lifecycle policies, and design Azure Data Lake Storage Gen2 solutions."
        },
        {
          title: "Data Integration Solutions",
          focus: "Data Factory, Synapse Analytics, Event Hub, Stream Analytics",
          duration: "1 Week",
          desc: "Design Azure Data Factory pipelines and workflows, architect Azure Synapse Analytics workspaces, design event-driven data flows with Event Hub, and integrate Azure Stream Analytics for real-time processing."
        }
      ]
    },
    {
      level: "Module 3 (25–30%): Design Infrastructure Solutions",
      desc: "Design compute architecture, container platforms, application delivery, and network topology for enterprise workloads.",
      modules: [
        {
          title: "Compute and Application Architecture",
          focus: "VMs, App Service, Azure Functions, auto-scaling, Batch",
          duration: "1-2 Weeks",
          desc: "Design VM-based compute with availability sets and zones, architect Azure App Service and Azure Functions solutions, design auto-scaling strategies, and architect Azure Batch for HPC and parallel processing."
        },
        {
          title: "Container and Microservices Design",
          focus: "AKS, Container Apps, ACR, service mesh, ingress",
          duration: "1 Week",
          desc: "Design Azure Kubernetes Service architectures, architect Azure Container Apps and microservices, design Azure Container Registry for image management, and plan service mesh and ingress controller strategies."
        },
        {
          title: "Network Topology and Connectivity",
          focus: "Hub-and-spoke, VPN/ExpressRoute, Firewall, Front Door",
          duration: "1 Week",
          desc: "Design hub-and-spoke and Virtual WAN topologies, architect hybrid connectivity via VPN Gateway and ExpressRoute, design Azure Firewall and WAF placement, and architect Azure Front Door and Traffic Manager solutions."
        }
      ]
    },
    {
      level: "Module 4 (10–15%): Design Business Continuity Solutions",
      desc: "Architect high availability, backup, and disaster recovery strategies to meet enterprise SLA and RTO/RPO requirements.",
      modules: [
        {
          title: "High Availability Design",
          focus: "Multi-region active-active, availability zones, Load Balancer HA",
          duration: "1 Week",
          desc: "Design multi-region active-active architectures, architect availability zones and region pairs, design Azure Load Balancer and Application Gateway HA, and plan SLA targets and uptime commitments."
        },
        {
          title: "Backup and Disaster Recovery",
          focus: "Azure Backup, Site Recovery, RTO/RPO, Recovery Services Vault",
          duration: "1 Week",
          desc: "Architect Azure Backup for VMs, SQL, and file shares, design Azure Site Recovery replication topology, plan RTO/RPO requirements and failover testing, and design Recovery Services Vault and backup policies."
        }
      ]
    }
  ]
},
  {
  slug: "azure-az400",
  title: "Microsoft DevOps Engineer AZ-400",
  category: "azure",
  desc: "Design and implement DevOps practices on Azure using source control, CI/CD pipelines, infrastructure as code, security integration, and observability. The expert-level path for engineers building high-velocity delivery systems.",
  duration: "6-8 Weeks",
  mode: "Live",
  level: "Expert",
  iconName: "GitBranch",
  tiers: [
    {
      level: "Module 1 (10–15%): Design and Implement DevOps Processes",
      desc: "Define collaboration models, Agile planning workflows, and project visibility across engineering teams.",
      modules: [
        {
          title: "Collaboration Strategy",
          focus: "Team structures, DevOps operating model, value stream mapping, KPIs",
          duration: "1 Week",
          desc: "Design team structures and DevOps operating model, implement communication and handoff workflows, define value stream mapping practices, and set measurable DevOps KPIs and goals."
        },
        {
          title: "Work Item and Backlog Management",
          focus: "Azure Boards, Agile/Scrum, sprint planning, traceability, dashboards",
          duration: "1 Week",
          desc: "Configure Azure Boards for Agile and Scrum, plan sprint boards, epics, and user stories, design traceability across requirements and releases, and implement dashboards for delivery insights."
        },
        {
          title: "Process Improvement",
          focus: "Lean principles, feedback loops, lead time, change control",
          duration: "1 Week",
          desc: "Apply Lean principles for delivery optimization, use feedback loops for continuous improvement, reduce bottlenecks and lead time, and design governance with change control policies."
        }
      ]
    },
    {
      level: "Module 2 (10–15%): Source Control and Build Strategies",
      desc: "Implement Git strategy, repository standards, automated builds, and package management.",
      modules: [
        {
          title: "Git and Repository Management",
          focus: "Branching strategy, PR policies, repo permissions, Azure Repos/GitHub",
          duration: "1 Week",
          desc: "Design branching strategy (GitFlow, trunk-based), configure pull request policies and code reviews, implement repository permissions and protections, and integrate Azure Repos and GitHub workflows."
        },
        {
          title: "Build Pipeline Design",
          focus: "YAML pipelines, build agents, multi-stage validation, caching",
          duration: "1 Week",
          desc: "Create YAML-based Azure Pipelines, configure build agents and hosted runners, implement multi-stage build validation, and optimize build performance and caching."
        },
        {
          title: "Artifacts and Package Management",
          focus: "Azure Artifacts, NuGet/npm/Maven feeds, versioning, secure publishing",
          duration: "1 Week",
          desc: "Manage artifacts in Azure Artifacts, use NuGet, npm, and Maven feed strategies, configure versioning and package retention policies, and implement secure package publishing workflows."
        }
      ]
    },
    {
      level: "Module 3 (15–20%): Release and Deployment Strategies",
      desc: "Build resilient release pipelines and deploy applications safely across environments.",
      modules: [
        {
          title: "Release Pipeline Architecture",
          focus: "Multi-stage pipelines, approvals, gates, environment promotion",
          duration: "1-2 Weeks",
          desc: "Design multi-stage release pipelines, configure approvals, gates, and checks, implement environment promotion strategy, and automate releases with templates and variables."
        },
        {
          title: "Deployment Patterns",
          focus: "Blue/green, canary, deployment slots, feature flags, rollback",
          duration: "1 Week",
          desc: "Implement blue/green and canary deployments, configure deployment slots for App Service, use feature flags and progressive rollout, and design rollback and recovery strategy."
        },
        {
          title: "Infrastructure as Code (IaC)",
          focus: "ARM, Bicep, Terraform, CI/CD integration, state and drift management",
          duration: "1-2 Weeks",
          desc: "Provision infrastructure using ARM and Bicep, manage resources with Terraform, integrate IaC into CI/CD workflows, and implement state and drift management."
        }
      ]
    },
    {
      level: "Module 4 (10–15%): Security and Compliance",
      desc: "Embed security controls into the pipeline and enforce governance in delivery workflows.",
      modules: [
        {
          title: "Secure Pipeline Design",
          focus: "Key Vault secrets, service connections, signed artifacts, integrity",
          duration: "1 Week",
          desc: "Implement secret management with Key Vault, harden service connections and access scopes, configure pipeline permissions and checks, and use signed artifacts and integrity controls."
        },
        {
          title: "DevSecOps Practices",
          focus: "SAST, DAST, dependency scanning, policy-as-code, SBOM",
          duration: "1 Week",
          desc: "Integrate SAST, DAST, and dependency scanning into pipelines, enforce policy-as-code and compliance gates, automate vulnerability reporting workflows, and implement SBOM and supply-chain protections."
        },
        {
          title: "Governance and Auditing",
          focus: "Audit trails, compliance dashboards, risk alignment, evidence collection",
          duration: "1 Week",
          desc: "Configure audit trails for release activities, design compliance reporting dashboards, align with enterprise risk requirements, and manage evidence collection for audits."
        }
      ]
    },
    {
      level: "Module 5 (10–15%): Monitoring and Continuous Improvement",
      desc: "Establish observability, operational feedback, and reliability engineering practices.",
      modules: [
        {
          title: "Application Monitoring",
          focus: "Application Insights, dashboards, alerts, metrics/logs/traces correlation",
          duration: "1 Week",
          desc: "Configure Application Insights and telemetry, build dashboards for health and performance, set alerts and action groups, and correlate metrics, logs, and traces."
        },
        {
          title: "Reliability and Incident Response",
          focus: "SLO/SLI, error budgets, incident runbooks, post-incident review, chaos testing",
          duration: "1 Week",
          desc: "Define SLO/SLI objectives and error budgets, implement incident workflows and runbooks, automate post-incident review process, and design chaos testing and resilience drills."
        }
      ]
    }
  ]
},
  {
    slug: "cloud-data-security-certification-roadmap",
    title: "Oracle Enterprise and Cloud Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course Oracle roadmap covering Database 19c administration, SQL, multitenant, Data Guard, backup and recovery, OCI architecture, WebLogic, ODI, SOA, Exadata, Primavera, and Oracle 23ai features.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Cloud administration and architecture design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Cloud administration and architecture design including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Power BI and Fabric analytics engineering",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Power BI and Fabric analytics engineering including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Azure AI solution implementation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Azure AI solution implementation including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Security operations, identity, and cloud security controls",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Security operations, identity, and cloud security controls including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ DevOps automation and cloud app development",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ DevOps automation and cloud app development including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ ITSM fundamentals and enterprise networking basics",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ITSM fundamentals and enterprise networking basics including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "oracle-enterprise-cloud-certification-roadmap",
    title: "CompTIA Enterprise Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course CompTIA roadmap: SY0-701, N10-009, 1101-1102, 220-1101/220-1102, CySA+, PT0-002, XK0-005, DA0-001, CAS-004, CV0-004, CAS-005 (SecurityX), N10-008, ITF+, Cloud Essentials+, SK0-005.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Oracle database administration and SQL proficiency",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Oracle database administration and SQL proficiency including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Multitenant architecture, Data Guard, and backup recovery expertise",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Multitenant architecture, Data Guard, and backup recovery expertise including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ OCI architecture and cloud integration design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ OCI architecture and cloud integration design including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ WebLogic, ODI, and SOA middleware administration skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ WebLogic, ODI, and SOA middleware administration skills including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Exadata implementation and platform operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Exadata implementation and platform operations including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Primavera project planning and delivery management workflows",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Primavera project planning and delivery management workflows including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "isc2-certification-roadmap",
    title: "ISC2 Cybersecurity Certification Roadmap",
    category: "cybersecurity",
    desc: "ISC2 roadmap covering CISSP, CCSP, CGRC, ISSAP, SSCP, Certified in Cybersecurity, ISSEP, ISSMP, and CAP for architecture, engineering, compliance, and leadership roles.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Security fundamentals, operations, and control implementation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Security fundamentals, operations, and control implementation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Enterprise security governance and risk compliance capabilities",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Enterprise security governance and risk compliance capabilities including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Cloud security architecture and data protection practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Cloud security architecture and data protection practices including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Security architecture and engineering depth",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Security architecture and engineering depth including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Authorization, governance, and compliance management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Authorization, governance, and compliance management including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Leadership readiness for senior security management roles",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Leadership readiness for senior security management roles including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "itil-prince2-six-sigma-roadmap",
    title: "ITIL, PRINCE2 and Lean Six Sigma Roadmap",
    category: "project-management",
    desc: "Integrated 15-course roadmap covering ITIL 4 specialist/strategist/leader tracks, PRINCE2 and PRINCE2 Agile pathways, and IASSC Lean Six Sigma Yellow/Green/Black Belt certifications.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Briefcase",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ End-to-end ITIL service value chain and operating model understanding",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ End-to-end ITIL service value chain and operating model understanding including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Project governance and control using PRINCE2 principles and practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Project governance and control using PRINCE2 principles and practices including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Agile project leadership with PRINCE2 Agile practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Agile project leadership with PRINCE2 Agile practices including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Process optimization using Lean Six Sigma DMAIC approaches",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Process optimization using Lean Six Sigma DMAIC approaches including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Stakeholder value, strategy alignment, and continual improvement delivery",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Stakeholder value, strategy alignment, and continual improvement delivery including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Leadership readiness across operations, delivery, and transformation programs",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Leadership readiness across operations, delivery, and transformation programs including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "sap-s4hana-enterprise-roadmap",
    title: "SAP S/4HANA Enterprise Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course SAP roadmap covering S4H00, UX100, ACT100, MDG100, MDG200, S4140, SAP Basis, S/4HANA Cloud Private Edition, RISE onboarding, ADM328 upgrade, HCM, Ariba AR710, DS10, and TS4F01.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ S/4HANA platform understanding and end-to-end process awareness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ S/4HANA platform understanding and end-to-end process awareness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ SAP implementation lifecycle with SAP Activate methodology",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ SAP implementation lifecycle with SAP Activate methodology including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Master data governance and quality process integration skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Master data governance and quality process integration skills including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ System administration, conversion, upgrade, and cloud onboarding readiness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ System administration, conversion, upgrade, and cloud onboarding readiness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Functional capabilities across HCM, SuccessFactors, Ariba, and Finance",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Functional capabilities across HCM, SuccessFactors, Ariba, and Finance including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Data transformation and integration with SAP Data Services and MDG",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Data transformation and integration with SAP Data Services and MDG including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "ec-council-certification-roadmap",
    title: "EC-Council Cybersecurity Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course EC-Council roadmap covering CEH v13 AI, CPENT, CCISO, CEH v12, CSA, ECIH, ICS/SCADA cybersecurity, WAHS, CHFI v11, CCSE v2, CTIA v2, CBP v2, CND v3, EDRP v3, and CCT v1.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Ethical hacking, penetration testing, and web security assessment skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Ethical hacking, penetration testing, and web security assessment skills including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ SOC monitoring, threat intelligence, and incident handling capabilities",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ SOC monitoring, threat intelligence, and incident handling capabilities including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Forensics investigation and evidence handling practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Forensics investigation and evidence handling practices including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Cloud security engineering and critical infrastructure defense readiness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Cloud security engineering and critical infrastructure defense readiness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Network defense, disaster recovery, and operational resilience knowledge",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Network defense, disaster recovery, and operational resilience knowledge including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Leadership pathway from technical defense to CISO-level strategy",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Leadership pathway from technical defense to CISO-level strategy including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "redhat-openshift-enterprise-roadmap",
    title: "Red Hat and OpenShift Enterprise Roadmap",
    category: "devops",
    desc: "Integrated 15-course Red Hat and OpenShift roadmap covering RH124, RH134, RH199, RH294, DO180, DO188, DO280, DO288, RH415, AD248, RH436, DO322, CL260, and DO328 for enterprise platform engineering.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Server",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ RHEL 9 system administration and Linux automation workflows",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ RHEL 9 system administration and Linux automation workflows including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ OpenShift cluster operations, upgrades, and production hardening",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ OpenShift cluster operations, upgrades, and production hardening including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Container development using Podman and Kubernetes-native patterns",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Container development using Podman and Kubernetes-native patterns including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ High availability clustering, security hardening, and disaster readiness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ High availability clustering, security hardening, and disaster readiness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Storage integration with Ceph and OpenStack environments",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Storage integration with Ceph and OpenStack environments including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Resilient microservices with service mesh and Istio architectures",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Resilient microservices with service mesh and Istio architectures including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "show-all-courses-roadmap",
    title: "VMware Private Cloud Professional Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course VMware private cloud roadmap covering vSphere, Cloud Foundation, NSX, vSAN, Azure VMware Solution, Kubernetes operations, Aria Automation, Aria Operations, SRM, and SD-WAN design and deployment.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Cloud Security Roadmap",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Cloud Security Roadmap including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "AWS Security Specialty",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into AWS Security Specialty including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Microsoft Azure Security Engineer (AZ-500)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Microsoft Azure Security Engineer (AZ-500) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Google Cloud Professional Security Engineer",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Google Cloud Professional Security Engineer including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Cyber Security Fundamentals",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Cyber Security Fundamentals including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Ethical Hacking and Penetration Testing",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Ethical Hacking and Penetration Testing including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "DevSecOps and Automation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into DevSecOps and Automation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Data Protection and Privacy Governance",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Data Protection and Privacy Governance including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "enterprise-cloud-security-professional-roadmap",
    title: "Enterprise Cloud and Security Professional Roadmap",
    category: "cybersecurity",
    desc: "Show all selected 15 courses in one page: PL-300, AZ-104, AI-102, AWS Cloud Practitioner, DP-600, AZ-305, CISSP, SC-200, ITIL 4 Foundation, CCNA v2.1, SC-300, AZ-500, AZ-400, DW-101, and AZ-204.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "BCS Foundation Certificate in Business Analysis",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Business Analysis including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Practitioner Certificate in Business Analysis Practice",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Business Analysis Practice including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Practitioner Certificate in Requirements Engineering",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Requirements Engineering including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "BCS Practitioner Certificate in Modelling Business Processes",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Modelling Business Processes including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Foundation Certificate in Agile",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Agile including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Foundation Certificate in IS Project Management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in IS Project Management including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "BCS Foundation Certificate in Business Change",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Business Change including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Foundation Certificate in Data Management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Data Management including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Practitioner Certificate in Data Protection",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Data Protection including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "pmi-project-leadership-roadmap",
    title: "PMI Project, Program and Portfolio Leadership Roadmap",
    category: "project-management",
    desc: "Integrated 15-course PMI roadmap covering PMP, CAPM, PMI-ACP, PgMP, PfMP, PMI-PBA, DASM, DAC, DASSM, PMI-SP, project budgeting, change management, and portfolio management.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Briefcase",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "PMP (Project Management Professional)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PMP (Project Management Professional) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "CAPM (Certified Associate in Project Management)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into CAPM (Certified Associate in Project Management) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "PMI-ACP (Agile Certified Practitioner)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PMI-ACP (Agile Certified Practitioner) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "PgMP & PfMP (Program & Portfolio Management)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PgMP & PfMP (Program & Portfolio Management) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "PMI-PBA (Professional in Business Analysis)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PMI-PBA (Professional in Business Analysis) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "DASM & DASSM (Disciplined Agile Scrum Master)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into DASM & DASSM (Disciplined Agile Scrum Master) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "DAC (Disciplined Agile Coach)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into DAC (Disciplined Agile Coach) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Project Budgeting and Cost Control",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Project Budgeting and Cost Control including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Change Management in Projects",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Change Management in Projects including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
  slug: "bcs-business-analysis-roadmap",
  title: "BCS Business Analysis and Architecture Roadmap",
  category: "project-management",
  desc: "One structured roadmap for business analysis, enterprise and solution architecture, agile analysis, information assurance architecture, data management, and IS project management.",
  duration: "Flexible",
  mode: "Live",
  level: "Foundation to Practitioner",
  iconName: "Briefcase",
  tiers: [
    {
      level: "Track 1: Business Analysis Core",
      desc: "Build foundational and advanced business analysis skills from first principles to practitioner-level application.",
      modules: [
        {
          title: "BCS Foundation Certificate in Business Analysis",
          focus: "Analysis principles, stakeholder understanding, requirements basics",
          duration: "2-3 Weeks",
          desc: "Start your business analysis career with core BA methods — foundational analysis principles, stakeholder engagement, and requirements gathering and documentation basics."
        },
        {
          title: "BCS Practitioner Certificate in Business Analysis Practice",
          focus: "Advanced BA techniques, practical application frameworks, organizational change",
          duration: "3-4 Weeks",
          desc: "Apply advanced business analysis techniques and practical application frameworks to real organizational change scenarios and enterprise improvement initiatives."
        },
        {
          title: "Professional Certificate in Agile Business Analysis",
          focus: "Agile BA techniques, iterative delivery, product team collaboration",
          duration: "2-3 Weeks",
          desc: "Master business analysis in agile delivery and product team environments — backlog refinement, user story mapping, iterative requirements, and agile stakeholder management."
        }
      ]
    },
    {
      level: "Track 2: Architecture Foundations",
      desc: "Establish architecture knowledge across business, data, and technology domains before specializing.",
      modules: [
        {
          title: "BCS Foundation Certificate in Architecture Concepts and Domains",
          focus: "Architecture domains, principles, governance, business/data/technology baseline",
          duration: "2-3 Weeks",
          desc: "Gain an architecture baseline across business, data, and technology domains — foundational architecture principles, governance frameworks, and domain relationships."
        },
        {
          title: "BCS Practitioner Certificate in Enterprise and Solution Architecture",
          focus: "Enterprise architecture, solution design, strategic alignment",
          duration: "3-4 Weeks",
          desc: "Link business objectives to architecture and solution outcomes — enterprise architecture frameworks, solution design principles, capability mapping, and strategic alignment methods."
        },
        {
          title: "BCS Professional Certificate in Business Architecture",
          focus: "Business capability modeling, target operating model, transformation planning",
          duration: "3-4 Weeks",
          desc: "Design business capability models and target operating models — strategic business architecture methods and transformation planning for enterprise-level change programs."
        }
      ]
    },
    {
      level: "Track 3: Security and Data Governance",
      desc: "Extend architecture skills into information assurance and data management specializations.",
      modules: [
        {
          title: "BCS Practitioner Certificate in Information Assurance Architecture",
          focus: "Security architecture, assurance frameworks, compliance, enterprise systems",
          duration: "3-4 Weeks",
          desc: "Build secure, compliant, and assurance-focused architectures — security architecture concepts, information assurance frameworks, risk management, and governance for enterprise systems."
        },
        {
          title: "BCS Practitioner Certificate in Data Management Essentials",
          focus: "Data governance, data quality, metadata, lifecycle management",
          duration: "2-3 Weeks",
          desc: "Develop data management capabilities for modern enterprises — data governance principles, data quality frameworks, metadata management, and data lifecycle strategies."
        }
      ]
    },
    {
      level: "Track 4: IS Project Management",
      desc: "Complete the roadmap with structured project delivery and governance for information systems initiatives.",
      modules: [
        {
          title: "IS Project Management",
          focus: "Project planning, delivery controls, governance, stakeholder management",
          duration: "3-4 Weeks",
          desc: "Apply practical project management for information systems initiatives — project planning, delivery controls, risk and issue management, governance structures, and stakeholder engagement."
        }
      ]
    }
  ]
},
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getProgramsByCategory(categorySlug: string): Program[] {
  return programs.filter(p => p.category === categorySlug);
}
