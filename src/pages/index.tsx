import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="w-full px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Hero Section with 3D Effect */}
        <section className="relative text-center mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Background Decorative Elements */}
          <div className="absolute -top-6 -left-6 xs:-top-8 xs:-left-8 sm:-top-10 sm:-left-10 w-20 xs:w-28 sm:w-40 h-20 xs:h-28 sm:h-40 bg-emerald-200/20 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute -bottom-6 -right-6 xs:-bottom-8 xs:-right-8 sm:-bottom-10 sm:-right-10 w-24 xs:w-36 sm:w-60 h-24 xs:h-36 sm:h-60 bg-green-200/20 rounded-full blur-2xl sm:blur-3xl" />
          
          <div className="relative z-10">
            {/* 3D Profile Circle */}
            <div className="relative mx-auto mb-4 xs:mb-6 sm:mb-8 md:mb-10 w-20 xs:w-28 sm:w-36 md:w-40 lg:w-48 h-20 xs:h-28 sm:h-36 md:h-40 lg:h-48 group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 rounded-full blur-lg sm:blur-xl opacity-70 animate-pulse" />
              <div className="absolute inset-2 xs:inset-3 sm:inset-4 bg-gradient-to-br from-emerald-100 to-green-50 rounded-full shadow-xl sm:shadow-2xl transform group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-4 xs:inset-6 sm:inset-8 bg-gradient-to-tr from-emerald-300 to-green-200 rounded-full flex items-center justify-center">
                <svg className="w-10 xs:w-12 sm:w-16 md:w-20 lg:w-24 h-10 xs:h-12 sm:h-16 md:h-20 lg:h-24 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Hi, I'm Chizhinime
              </span>
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-emerald-800/80 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-4 xs:mb-6 sm:mb-8 md:mb-10 px-2 xs:px-3 sm:px-4">
              I'm a passionate web developer specializing in modern technologies like Next.js, TypeScript, and TailwindCSS. 
              I love building client projects and personal initiatives that solve real-world problems with elegant solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              <Link href="/projects">
                <button className="relative px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-3 md:py-4 overflow-hidden group rounded-lg sm:rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-lg sm:rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="relative text-white font-semibold text-xs xs:text-sm sm:text-base flex items-center justify-center">
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 xs:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    View My Projects
                  </span>
                </button>
              </Link>
              
              <Link href="/contact">
                <button className="relative px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-3 md:py-4 overflow-hidden group rounded-lg sm:rounded-xl border border-emerald-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg sm:rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-100 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-emerald-700 font-semibold text-xs xs:text-sm sm:text-base flex items-center justify-center">
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 xs:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section className="relative mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 top-0 bottom-0 w-0.5 xs:w-1 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full" />
          
          <div className="pl-6 xs:pl-8 sm:pl-10 md:pl-12 lg:pl-16">
            <div className="flex items-center mb-4 xs:mb-5 sm:mb-6 md:mb-8">
              <div className="p-2 xs:p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg sm:rounded-xl shadow-lg transform -translate-x-3 xs:-translate-x-4">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-900 ml-2 xs:ml-3 sm:ml-4">
                Quick Facts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  ),
                  title: "Education",
                  content: "Bachelor's in Computer Science"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Certifications",
                  content: "AI Diploma, Web Development"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Volunteer",
                  content: "STEM Festival Data Analyst"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                  title: "Skills",
                  content: "Next.js, React, TypeScript, TailwindCSS"
                }
              ].map((fact, index) => (
                <div 
                  key={index} 
                  className="relative group transform transition-transform duration-300 hover:-translate-y-1 xs:hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl xs:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-emerald-100 shadow-lg hover:shadow-xl xs:hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start space-x-2 xs:space-x-3 sm:space-x-4">
                      <div className="p-2 xs:p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg xs:rounded-xl">
                        <div className="text-emerald-600">
                          {fact.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-emerald-900 mb-1 xs:mb-2 truncate">
                          {fact.title}
                        </h3>
                        <p className="text-emerald-700/80 text-xs xs:text-sm sm:text-base md:text-base truncate">
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

        {/* Skills Grid */}
        <section className="relative">
          <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-900 mb-2 xs:mb-3 sm:mb-4">
              Technical Expertise
            </h2>
            <p className="text-emerald-700/80 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto text-xs xs:text-sm sm:text-base md:text-base">
              Proficient in modern web development technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {[
              { name: "Next.js", color: "from-gray-900 to-black" },
              { name: "React", color: "from-blue-400 to-blue-600" },
              { name: "TypeScript", color: "from-blue-500 to-blue-700" },
              { name: "TailwindCSS", color: "from-teal-400 to-teal-600" },
              { name: "Node.js", color: "from-green-500 to-green-700" },
              { name: "MongoDB", color: "from-green-400 to-green-600" },
              { name: "GraphQL", color: "from-pink-500 to-purple-600" },
              { name: "Python", color: "from-blue-400 to-blue-600" },
            ].map((skill, index) => (
              <div 
                key={index}
                className="relative group transform transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r via-transparent rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-6 border border-emerald-100 shadow-md hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-1 xs:mb-2 sm:mb-3`}>
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-emerald-900 text-xs xs:text-sm sm:text-base md:text-base truncate w-full">
                      {skill.name}
                    </span>
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
