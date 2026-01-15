import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section with 3D Effect */}
        <section className="relative text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Background Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-green-200/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* 3D Profile Circle */}
            <div className="relative mx-auto mb-8 sm:mb-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 rounded-full blur-xl opacity-70 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-emerald-100 to-green-50 rounded-full shadow-2xl transform group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-8 bg-gradient-to-tr from-emerald-300 to-green-200 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Hi, I'm Chizhinime Chijioke
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-800/80 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
              Computer Science Student | Frontend Developer | STEM Enthusiast
            </p>
            
            <p className="text-base text-emerald-700/80 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
              I'm a passionate Computer Science student at Ignatius Ajuru University with hands-on experience in web development, 
              computer hardware maintenance, and STEM education facilitation. I specialize in building modern web applications 
              using Next.js, React, and TypeScript while actively contributing to technology education through volunteer work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link href="/projects">
                <button className="relative px-8 py-4 overflow-hidden group rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="relative text-white font-semibold text-sm sm:text-base flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    View My Projects
                  </span>
                </button>
              </Link>
              
              <Link href="/contact">
                <button className="relative px-8 py-4 overflow-hidden group rounded-xl border-2 border-emerald-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-emerald-700 font-semibold text-sm sm:text-base flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get In Touch
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full" />
          
          <div className="pl-8 sm:pl-12 lg:pl-16">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg transform -translate-x-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 ml-4">
                Quick Facts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  ),
                  title: "Education",
                  content: "B.Sc. Computer Science (2021-2025)"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Certifications",
                  content: "6+ Professional Certificates"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Volunteer Work",
                  content: "STEM Festival Facilitator (2024 & 2025)"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ),
                  title: "Technical Skills",
                  content: "Hardware Repair & Maintenance"
                }
              ].map((fact, index) => (
                <div 
                  key={index} 
                  className="relative group transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl">
                        <div className="text-emerald-600">
                          {fact.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-emerald-900 mb-2">
                          {fact.title}
                        </h3>
                        <p className="text-emerald-700/80 text-sm sm:text-base">
                          {fact.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Focus Section */}
        <section className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 mb-4">
              Current Focus
            </h2>
            <p className="text-emerald-700/80 max-w-2xl mx-auto text-sm sm:text-base">
              What I'm actively working on and learning
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "AI & Machine Learning",
                description: "Studying Applied Artificial Intelligence through the Baze University IDEAS Program",
                icon: "🤖",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Web Development",
                description: "Building modern web applications with Next.js, React, and TypeScript",
                icon: "💻",
                color: "from-emerald-500 to-green-500"
              },
              {
                title: "STEM Education",
                description: "Volunteering as a STEM facilitator to inspire the next generation of tech enthusiasts",
                icon: "🎓",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((focus, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${focus.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{focus.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-emerald-900 mb-3">
                      {focus.title}
                    </h3>
                    <p className="text-emerald-700/80 text-sm">
                      {focus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-emerald-700/80 max-w-2xl mx-auto text-sm sm:text-base">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { name: "Next.js", color: "from-gray-900 to-black", icon: "⚡" },
              { name: "React", color: "from-blue-400 to-blue-600", icon: "⚛️" },
              { name: "TypeScript", color: "from-blue-500 to-blue-700", icon: "📘" },
              { name: "TailwindCSS", color: "from-teal-400 to-teal-600", icon: "🎨" },
              { name: "Node.js", color: "from-green-500 to-green-700", icon: "🟢" },
              { name: "MongoDB", color: "from-green-400 to-green-600", icon: "🍃" },
              { name: "Python", color: "from-blue-400 to-blue-600", icon: "🐍" },
              { name: "Git", color: "from-orange-500 to-red-500", icon: "📊" },
            ].map((skill, index) => (
              <div 
                key={index}
                className="relative group transform transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r via-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3`}>
                      <span className="text-2xl">{skill.icon}</span>
                    </div>
                    <span className="font-semibold text-emerald-900 text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-3xl opacity-10" />
            <div className="relative bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 rounded-3xl p-8 sm:p-12 border border-emerald-200/50">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 mb-4">
                  Ready to Collaborate?
                </h2>
                <p className="text-emerald-700/80 mb-8 text-base sm:text-lg">
                  Whether you have a project idea, need a technical partner, or want to discuss technology trends, I'd love to connect!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/education">
                    <button className="relative group px-8 py-4 overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative text-white font-semibold text-sm sm:text-base flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        View My Education
                      </span>
                    </button>
                  </Link>
                  
                  <Link href="/experience">
                    <button className="relative group px-8 py-4 overflow-hidden rounded-xl border-2 border-emerald-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative text-emerald-700 font-semibold text-sm sm:text-base flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        See My Experience
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
