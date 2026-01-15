import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const experiences = [
  {
    role: "STEM Festival Facilitator (Volunteer)",
    organization: "STEM Festival Initiative",
    duration: "July 2024 & July 2025",
    type: "Volunteer",
    description: "Facilitated technology workshops and robotics sessions for over 500 students across Port Harcourt. Guided participants through hands-on STEM activities, organized competition categories, and supported event coordination for both 2024 and 2025 editions. Managed the Data Analytics track in 2025 edition.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    skills: ["Event Facilitation", "STEM Education", "Public Speaking", "Workshop Coordination", "Data Analytics", "Student Mentoring"],
    achievements: [
      "Facilitated 4-day technology workshops for 500+ students",
      "Managed Data Analytics competition track in 2025",
      "Received Volunteer Excellence Awards for both years"
    ]
  },
  {
    role: "Computer Hardware Technician (Trainee)",
    organization: "Y2K Computer Services",
    duration: "6 Months",
    type: "Technical Training",
    description: "Provided comprehensive computer repair and maintenance services. Specialized in diagnosing hardware failures, performing component-level repairs, installing operating systems, and troubleshooting software issues. Assisted in data recovery operations and provided technical support to clients.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
    skills: ["Hardware Diagnostics", "Component Repair", "OS Installation", "Software Troubleshooting", "Data Recovery", "Customer Service"],
    achievements: [
      "Successfully repaired 50+ computers with various hardware issues",
      "Achieved 95% customer satisfaction rating",
      "Reduced average repair time by 30% through improved processes"
    ]
  },
  {
    role: "Frontend Web Developer (Intern)",
    organization: "Youthrive Tech Program",
    duration: "3 Months",
    type: "Internship",
    description: "Developed responsive web applications using modern frontend technologies. Collaborated with senior developers to implement UI/UX designs, optimize website performance, and ensure cross-browser compatibility. Contributed to client projects focusing on e-commerce and educational platforms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "from-emerald-500 to-green-500",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Responsive Design", "Git", "Figma"],
    achievements: [
      "Built 3 client projects from concept to deployment",
      "Improved website loading speed by 40%",
      "Successfully implemented responsive designs for mobile-first approach"
    ]
  },
  {
    role: "Conference Volunteer",
    organization: "Blockchain Conference 2025 & SANE Conference 2025",
    duration: "Multiple Events",
    type: "Volunteer",
    description: "Volunteered at multiple technology and mental health conferences. At Blockchain Conference 2025, assisted with participant registration, session coordination, and technical support. At SANE Conference 2025, contributed to mental health awareness initiatives and educational outreach programs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-indigo-500 to-purple-500",
    skills: ["Event Management", "Public Relations", "Technical Support", "Community Outreach", "Team Coordination"],
    achievements: [
      "Received Volunteer Award at Blockchain Conference 2025",
      "Supported 200+ conference participants",
      "Contributed to mental health awareness campaign reaching 500+ people"
    ]
  },
  {
    role: "International Youth Conference Participant",
    organization: "11th International Youth Conference",
    duration: "May 2025",
    type: "Conference",
    description: "Participated virtually in the 11th International Youth Conference focused on 'Youth Shaping Global Development'. Engaged in discussions about technology's role in sustainable development, networked with global youth leaders, and contributed to discussions on digital innovation for social impact.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: "from-teal-500 to-cyan-500",
    skills: ["Global Networking", "Cross-cultural Communication", "Sustainable Development", "Digital Innovation", "Youth Leadership"],
    achievements: [
      "Connected with youth leaders from 15+ countries",
      "Gained insights into technology for sustainable development",
      "Enhanced understanding of global youth challenges and opportunities"
    ]
  }
];

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperiences = activeFilter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="relative text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="absolute -top-10 left-1/4 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 right-1/4 w-56 h-56 bg-purple-200/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl">
              <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Professional Experience & Volunteering
              </span>
            </h1>
            <p className="text-emerald-700/80 text-base sm:text-lg max-w-3xl mx-auto px-4">
              A diverse portfolio of hands-on experiences, technical training, and volunteer engagements that have shaped my professional journey and technical expertise in the technology sector.
            </p>
          </div>
        </section>

        {/* Experience Filter */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Volunteer", "Internship", "Training", "Conference"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.toLowerCase() || (activeFilter === "all" && filter === "All")
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                {filter}
                {filter === "Volunteer" && (
                  <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full">
                    {experiences.filter(e => e.type === 'Volunteer').length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="relative mb-16 sm:mb-20 lg:mb-24">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 sm:w-2 h-full bg-gradient-to-b from-blue-300 via-emerald-300 to-purple-300 rounded-full" />
          
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col sm:flex-row items-start ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full z-10 border-4 border-white shadow-lg" />
                
                {/* Timeline Date */}
                <div className={`hidden sm:block sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:text-left sm:pl-12'}`}>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full">
                    <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-emerald-800">{exp.duration}</span>
                  </div>
                </div>
                
                {/* Experience Card */}
                <div className={`relative group ml-12 sm:ml-0 sm:w-6/12 ${index % 2 === 0 ? 'sm:pr-0' : 'sm:pl-0'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Mobile Date Badge */}
                    <div className="sm:hidden mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full">
                        <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-emerald-800">{exp.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl`}>
                        <div className="text-white">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-emerald-900">
                            {exp.role}
                          </h3>
                          <span className={`inline-flex items-center px-3 py-1 mt-2 sm:mt-0 text-xs font-medium rounded-full ${
                            exp.type === 'Volunteer' ? 'bg-purple-100 text-purple-800' :
                            exp.type === 'Internship' ? 'bg-emerald-100 text-emerald-800' :
                            exp.type === 'Technical Training' ? 'bg-blue-100 text-blue-800' :
                            'bg-teal-100 text-teal-800'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-emerald-700 font-medium mb-4">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {exp.organization}
                        </div>
                        
                        <p className="text-emerald-700/80 mb-6 text-sm sm:text-base">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        {exp.achievements && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-emerald-900 mb-2 flex items-center">
                              <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-sm text-emerald-700/80">
                                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"
                            >
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}