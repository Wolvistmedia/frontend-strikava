import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export default function SuccessStories() {
  const stories = [
    {
      title: "Support Engineer to AWS Architect",
      name: "Rohit S.",
      role: "Cloud Architect | Bengaluru",
      tags: ["AWS", "Architecture", "Migration"],
      before: "L1 Support, 4.8 LPA",
      after: "Cloud Architect, 11.2 LPA",
      course: "AWS Solutions Architect Associate",
      link: "/programs/aws-solutions-architect-associate"
    },
    {
      title: "SysAdmin to DevOps Engineer",
      name: "Ankit R.",
      role: "DevOps Engineer | Pune",
      tags: ["CI/CD", "Kubernetes", "Automation"],
      before: "Infra Ops, 5.4 LPA",
      after: "DevOps Engineer, 12.5 LPA",
      course: "AWS DevOps Engineer Professional",
      link: "/programs/aws-devops-engineer-professional"
    },
    {
      title: "IT Executive to Azure Admin",
      name: "Sneha M.",
      role: "Azure Administrator | Noida",
      tags: ["Azure", "IAM", "Governance"],
      before: "IT Executive, 4.2 LPA",
      after: "Azure Administrator, 9.6 LPA",
      course: "Azure AZ-104",
      link: "/programs/azure-az104"
    },
    // // card-4
    // {
    //   title: "NOC Analyst to SOC Analyst",
    //   name: "Farhan K.",
    //   role: "SOC Analyst | Hyderabad",
    //   tags: ["SIEM", "Splunk", "Incident Response"],
    //   before: "NOC Analyst, 4.9 LPA",
    //   after: "SOC Analyst, 10.7 LPA",
    //   course: "Splunk SOC Analyst",
    //   link: "/programs/splunk-soc-analyst"
    // },
    // card-5
    {
      title: "Support Analyst to SIEM Engineer",
      name: "Vikram D.",
      role: "SIEM Engineer | Gurugram",
      tags: ["Sentinel", "KQL", "SOC"],
      before: "Support Analyst, 5.1 LPA",
      after: "SIEM Engineer, 10.9 LPA",
      course: "AWS Security Specialty",
      link: "/programs/show-all-courses-roadmap"
    },
    // // card-6
    // {
    //   title: "SQL Developer to Data Engineer",
    //   name: "Nitin P.",
    //   role: "Data Engineer | Mumbai",
    //   tags: ["SQL", "Pipelines", "Cloud Data"],
    //   before: "SQL Developer, 5.8 LPA",
    //   after: "Data Engineer, 12.1 LPA",
    //   course: "Sentinel SIEM Cloud Security",
    //   link: "/programs/sentinel-siem-cloud-security"
    // },
    // // card-7
    // {
    //   title: "Developer to Cloud Solutions Architect",
    //   name: "Karan B.",
    //   role: "Cloud Solutions Architect | Bengaluru",
    //   tags: ["Architecture", "AWS Pro", "Design"],
    //   before: "Developer, 7.1 LPA",
    //   after: "Cloud Solutions Architect, 16.0 LPA",
    //   course: "Cloud Data Security Certification Roadmap",
    //   link: "/programs/cloud-data-security-certification-roadmap"
    // },
    // card-8
    {
      title: "Support Executive to Linux Administrator",
      name: "Saurabh L.",
      role: "Linux Administrator | Indore",
      tags: ["Linux", "Server Ops", "Shell"],
      before: "Support Executive, 4.5 LPA",
      after: "Linux Administrator, 8.9 LPA",
      course: "Network Engineering Professional Track",
      link: "/programs/network-engineering-professional-track"
    },
    // // card-9
    // {
    //   title: "Network Admin to Cloud Network Engineer",
    //   name: "Pratik J.",
    //   role: "Cloud Network Engineer | Ahmedabad",
    //   tags: ["VPC", "Routing", "Hybrid Cloud"],
    //   before: "Network Admin, 6.0 LPA",
    //   after: "Cloud Network Engineer, 12.1 LPA",
    //   course: "Kubernetes Administrator CKA",
    //   link: "/programs/kubernetes-administrator-cka"
    // },
    // card 10
    {
      title: "Build Engineer to Platform Engineer",
      name: "Harshit V.",
      role: "Platform Engineer | Bengaluru",
      tags: ["CKA", "Kubernetes", "Containers"],
      before: "Build Engineer, 6.1 LPA",
      after: "Platform Engineer, 13.2 LPA",
      course: "Azure AZ-500",
      link: "/programs/azure-az500"
    },
    // card 11
   {
      title: "Coordinator to Project Lead",
      name: "Neeraj P.",
      role: "Project Lead | Jaipur",
      tags: ["PMI", "Planning", "Leadership"],
      before: "Coordinator, 5.6 LPA",
      after: "Project Lead, 10.6 LPA",
      course: "IT and Security Governance Certifications Roadmap",
      link: "/programs/governance-certifications-roadmap"
    },

    // card 12
    {
      title: "IT Support to ITSM Specialist",
      name: "Ritika S.",
      role: "ITSM Specialist | Kochi",
      tags: ["ITIL", "Service Ops", "Process"],
      before: "IT Support, 4.9 LPA",
      after: "ITSM Specialist, 9.2 LPA",
      course: "IT and Security Governance Certifications Roadmap",
      link: "/programs/governance-certifications-roadmap"
    },
    // card 13
    {
      title: "Audit Associate to GRC Consultant",
      name: "Deepak A.",
      role: "GRC Consultant | Kolkata",
      tags: ["GRC", "Audit", "Risk"],
      before: "Audit Associate, 5.2 LPA",
      after: "GRC Consultant, 10.1 LPA",
      course: "Linux Certifications Roadmap",
      link: "/programs/linux-certifications-roadmap"
    },
    // card-14
    {
      title: "Infra Engineer to Azure Security Engineer",
      name: "Pooja N.",
      role: "Azure Security Engineer | Delhi",
      tags: ["AZ-500", "Defender", "Identity"],
      before: "Infra Engineer, 6.4 LPA",
      after: "Azure Security Engineer, 13.6 LPA",
      course: "Azure AZ-500",
      link: "/programs/azure-az500"
    },
    // Card 15
    {
      title: "System Engineer to Cloud Security Engineer",
      name: "Megha T.",
      role: "Cloud Security Engineer | Chennai",
      tags: ["AWS Security", "IAM", "Compliance"],
      before: "System Engineer, 6.2 LPA",
      after: "Cloud Security Engineer, 13.7 LPA",
      course: "IT and Security Governance Certifications Roadmap",
      link: "/programs/governance-certifications-roadmap"
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 relative min-h-screen overflow-x-hidden">

     
      <div className="absolute top-1/4 left-0 w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-accent/20 blur-[100px] sm:blur-[120px] pointer-events-none rounded-full" />
      
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Read how professionals transformed their careers and achieved significant salary growth through our programs.
          </p>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, idx) => (
            <GlassCard
              key={idx}
              delay={idx * 0.15}
              className="flex flex-col h-full relative w-full overflow-hidden p-5 sm:p-6"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/10 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              
              {/* Content */}
              <div className="mb-5 sm:mb-6 relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {story.title}
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-primary">
                  {story.name}
                </h4>
                <p className="text-xs sm:text-sm text-foreground/70">
                  {story.role}
                </p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6 relative z-10">
                {story.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Before/After */}
              <div className="space-y-3 mb-6 sm:mb-8 flex-grow relative z-10 border-l-2 border-primary/30 pl-3 sm:pl-4">
                <div>
                  <p className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-wider mb-1">
                    Before
                  </p>
                  <p className="text-white text-sm sm:text-base font-medium">
                    {story.before}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-wider mb-1">
                    After
                  </p>
                  <p className="text-primary text-sm sm:text-base font-bold">
                    {story.after}
                  </p>
                </div>
              </div>
              
              {/* CTA */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 mt-auto relative z-10">
                <p className="text-xs sm:text-sm text-foreground/60 mb-2 sm:mb-3">
                  Course Taken:
                </p>
                <Link
                  href={story.link}
                  className="group flex items-center justify-between hover:bg-white/5 p-2 sm:p-3 rounded-lg transition-colors border border-transparent hover:border-white/10"
                >
                  <span className="text-white font-medium text-xs sm:text-sm">
                    {story.course}
                  </span>
                  <ArrowRight className="text-primary w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}