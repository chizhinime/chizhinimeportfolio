import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="relative text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="absolute -top-10 left-1/4 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 right-1/4 w-56 h-56 bg-green-200/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl">
              <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Hi, I'm Chizhinime
              </span>
            </h1>
            <p className="text-emerald-700/80 text-base sm:text-lg max-w-3xl mx-auto px-4 mb-8 sm:mb-10">
              A passionate Computer Science student and web developer specializing in Next.js, TypeScript, and modern web technologies. 
              I build solutions that bridge the gap between complex problems and elegant implementations.
            </p>
            
            {/* Profile Image */}
            <div className="relative mx-auto mb-8 sm:mb-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 rounded-full blur-xl opacity-70 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-emerald-100 to-green-50 rounded-full shadow-2xl transform group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-8 bg-gradient-to-tr from-emerald-300 to-green-200 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <button className="relative px-8 py-4 overflow-hidden group rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center mb-8 sm:mb-12">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg">
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
                content: "B.Sc. Computer Science (2021-2025)",
                description: "Ignatius Ajuru University"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Certifications",
                content: "6+ Professional Certificates",
                description: "AI, Web Dev, & Technical Training"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Volunteer Experience",
                content: "STEM Festival Facilitator",
                description: "2024 & 2025 editions"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Technical Skills",
                content: "Full-Stack Development",
                description: "Modern web technologies"
              }
            ].map((fact, index) => (
              <div 
                key={index} 
                className="relative group transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
                      <p className="text-emerald-900 font-medium mb-1">
                        {fact.content}
                      </p>
                      <p className="text-emerald-700/80 text-sm">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center mb-8 sm:mb-12">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 ml-4">
              Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { 
                name: "Next.js", 
                color: "from-gray-900 to-black",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 4.5L4.90515 4.14895C4.77875 3.98392 4.55208 3.94525 4.37693 4.05949C4.20178 4.17373 4.13364 4.40446 4.21958 4.6L4.5 4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM4.09485 4.85105L7.09485 8.85105L7.90515 8.14895L4.90515 4.14895L4.09485 4.85105ZM7.09485 8.85105C7.42578 9.26112 8.07422 9.26112 8.40515 8.85105L9.19585 9.53817C8.39586 10.5344 7.10414 10.5344 6.30415 9.53817L7.09485 8.85105ZM8.40515 8.85105L11.4052 4.85105L10.5948 4.14895L7.59485 8.14895L8.40515 8.85105Z" fill="white"/>
                  </svg>
                )
              },
              { 
                name: "React", 
                color: "from-blue-400 to-cyan-500",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21.3333C18.9455 21.3333 21.3333 18.9455 21.3333 16C21.3333 13.0545 18.9455 10.6667 16 10.6667C13.0545 10.6667 10.6667 13.0545 10.6667 16C10.6667 18.9455 13.0545 21.3333 16 21.3333Z" stroke="white" strokeWidth="1.5"/>
                    <path d="M16 21.3333C22.6274 21.3333 28 18.9455 28 16C28 13.0545 22.6274 10.6667 16 10.6667C9.37258 10.6667 4 13.0545 4 16C4 18.9455 9.37258 21.3333 16 21.3333Z" stroke="white" strokeWidth="1.5"/>
                    <path d="M12.6667 19.3333C17.294 25.3333 20.9813 28 22.6667 28C24.352 28 26.0393 25.3333 27.3333 19.3333C28.6273 13.3333 28.6273 8.66667 27.3333 4.66667C26.0393 0.666667 24.352 -1.90735e-06 22.6667 -1.90735e-06C20.9813 -1.90735e-06 17.294 0.666667 12.6667 4.66667C8.03933 8.66667 5.33333 13.3333 4 19.3333C2.66667 25.3333 2.66667 28 4 28C5.33333 28 8.03933 25.3333 12.6667 19.3333Z" stroke="white" strokeWidth="1.5"/>
                    <path d="M12.6667 12.6667C8.03933 8.66667 5.33333 4 4 4C2.66667 4 2.66667 6.66667 4 12.6667C5.33333 18.6667 8.03933 23.3333 12.6667 27.3333C17.294 31.3333 20.9813 32 22.6667 32C24.352 32 26.0393 31.3333 27.3333 27.3333C28.6273 23.3333 28.6273 18.6667 27.3333 12.6667C26.0393 6.66667 24.352 4 22.6667 4C20.9813 4 17.294 4.66667 12.6667 12.6667Z" stroke="white" strokeWidth="1.5"/>
                  </svg>
                )
              },
              { 
                name: "TypeScript", 
                color: "from-blue-600 to-blue-800",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16V0H32V32H0V16Z" fill="#3178C6"/>
                    <path d="M19.159 16.538C19.159 15.199 20.193 14.458 21.923 14.458C23.803 14.458 24.937 15.049 24.937 17.159V22.935H27.317V17.049C27.317 13.799 25.587 12.2 22.947 12.2C20.813 12.2 19.539 13.169 19.009 14.748L19.119 12.73H16.779V22.935H19.159V16.538Z" fill="white"/>
                    <path d="M9.81065 12.73H6.59065V22.935H9.81065V19.595C9.81065 17.535 11.1607 16.548 12.8707 16.548C13.3707 16.548 13.9407 16.618 14.2007 16.688V13.229C13.9007 13.169 13.4307 13.109 13.0207 13.109C11.2707 13.109 9.81065 14.298 9.81065 16.688V12.73Z" fill="white"/>
                  </svg>
                )
              },
              { 
                name: "TailwindCSS", 
                color: "from-teal-400 to-cyan-500",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 0C20.4 0 16.2 3.9 14.4 11.7C16.8 7.8 20.1 6.15 24.3 6.75C26.406 7.0572 27.819 8.145 29.43 9.4395C31.7109 11.3069 34.4093 13.5 40.5 13.5C47.1 13.5 51.3 9.6 53.1 1.8C50.7 5.7 47.4 7.35 43.2 6.75C41.094 6.4428 39.681 5.355 38.07 4.0605C35.7891 2.19315 33.0907 0 27 0ZM13.5 13.5C6.9 13.5 2.7 17.4 0.9 25.2C3.3 21.3 6.6 19.65 10.8 20.25C12.906 20.5572 14.319 21.645 15.93 22.9395C18.2109 24.8069 20.9093 27 27 27C33.6 27 37.8 23.1 39.6 15.3C37.2 19.2 33.9 20.85 29.7 20.25C27.594 19.9428 26.181 18.855 24.57 17.5605C22.2891 15.6931 19.5907 13.5 13.5 13.5Z" fill="white"/>
                  </svg>
                )
              },
              { 
                name: "Node.js", 
                color: "from-green-500 to-green-700",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 16.5C16.5 17.33 15.83 18 15 18H9C8.17 18 7.5 17.33 7.5 16.5V7.5C7.5 6.67 8.17 6 9 6H15C15.83 6 16.5 6.67 16.5 7.5V16.5Z" fill="white"/>
                    <path d="M12 7.5C13.38 7.5 14.5 8.62 14.5 10C14.5 11.38 13.38 12.5 12 12.5C10.62 12.5 9.5 11.38 9.5 10C9.5 8.62 10.62 7.5 12 7.5Z" fill="#339933"/>
                  </svg>
                )
              },
              { 
                name: "MongoDB", 
                color: "from-green-400 to-green-600",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
                    <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#47A248"/>
                    <path d="M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8Z" fill="white"/>
                  </svg>
                )
              },
              { 
                name: "Python", 
                color: "from-blue-500 to-blue-700",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3776AB"/>
                    <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#FFD43B"/>
                    <path d="M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8Z" fill="#3776AB"/>
                  </svg>
                )
              },
              { 
                name: "Git", 
                color: "from-orange-500 to-red-500",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#F05032"/>
                    <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="white"/>
                    <path d="M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8Z" fill="#F05032"/>
                  </svg>
                )
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="relative group transform transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r via-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3`}>
                      {skill.icon}
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
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-3xl opacity-10" />
          <div className="relative bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 rounded-3xl p-8 sm:p-12 border border-emerald-200/50">
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-emerald-700/80 mb-8 text-base sm:text-lg">
                Let's collaborate on your next project or discuss how I can help bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="relative group px-8 py-4 overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-white font-semibold text-sm sm:text-base flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Explore My Work
                  </span>
                </Link>
                
                <Link
                  href="/contact"
                  className="relative group px-8 py-4 overflow-hidden rounded-xl border-2 border-emerald-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-emerald-700 font-semibold text-sm sm:text-base flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Start a Conversation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
