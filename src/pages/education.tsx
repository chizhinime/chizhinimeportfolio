import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Ignatius Ajuru University",
    year: "2021 – 2025",
    description: "Focused on software development, data structures, algorithms, and emerging technologies. Specialized in web development and AI integration.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Diploma in Applied Artificial Intelligence",
    institution: "Baze University (IDEAS Program)",
    year: "2024 – 2025",
    description: "Hands-on training in AI fundamentals, machine learning concepts, neural networks, and real-world problem solving with industry projects.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Diploma in Computer Hardware and Maintenance",
    institution: "Y2K Computer Service",
    year: "2023 – 2024",
    description: "Completed hands-on training focused on diagnosing, repairing, upgrading, and maintaining computer systems.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Level 3 in Front-End and Back-End Web Development",
    institution: "Computer Professionals (Registration Council of Nigeria), National Skills Qualification (NSQ)",
    year: "2024 – 2025",
    description: "Completed practical training covering the fundamentals of full-stack web development, including building responsive user interfaces, implementing backend logic, working with databases, and deploying web applications.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-green-500 to-teal-500"
  },
];

// Certificate and event images - using your actual file names
const certificateImages = [
  {
    id: 1,
    src: "/images/certificates/careerexu.jpg",
    alt: "Youthrive Tech Program Certificate",
    title: "Youthrive Tech Program",
    description: "Frontend Web Development, Aug 2024",
    type: "certificate"
  },
  {
    id: 2,
    src: "/images/certificates/stem2024.png",
    alt: "STEM Festival 2024 Volunteer Certificate",
    title: "STEM Festival 2024",
    description: "Volunteer Facilitator, July 2024",
    type: "volunteer"
  },
  {
    id: 3,
    src: "/images/certificates/stem2025.png",
    alt: "STEM Festival 2025 Volunteer Certificate",
    title: "STEM Festival 2025",
    description: "Data Analytics Volunteer, July 2025",
    type: "volunteer"
  },
  {
    id: 4,
    src: "/images/certificates/roqqo.png",
    alt: "Blockchain Conference 2025 Volunteer Award",
    title: "Blockchain Conference 2025",
    description: "Volunteer Award, 2025",
    type: "award"
  },
  {
    id: 5,
    src: "/images/certificates/sanecert.png",
    alt: "SANE Conference 2025 Volunteer Certificate",
    title: "SANE Conference 2025",
    description: "Mental Health Awareness Volunteer, May 2025",
    type: "volunteer"
  },
  {
    id: 6,
    src: "/images/certificates/youth.jpg",
    alt: "International Youth Conference 2025 Certificate",
    title: "International Youth Conference 2025",
    description: "Youth Shaping Global Development, May 2025",
    type: "conference"
  },
    {
    id: 7,
    src: "/images/events/careerex.png",
    alt: "Youthrive Tech Program Certificate",
    title: "Youthrive Tech Program",
    description: "Top 5 in Frontend Web Development, Aug 2024",
    type: "award"
  },
    {
    id: 8,
    src: "/images/events/ncs.jpg",
    alt: "Nigeria Computer Society (NCS) Volunteer",
    title: "Nigeria Computer Society (NCS)",
    description: "Nigeria Computer Society (NCS) Volunteer, Aug 2024",
    type: "conference"
  },
    {
    id: 9,
    src: "/images/events/ncs1.jpg",
    alt: "Nigeria Computer Society (NCS) Volunteer",
    title: "Nigeria Computer Society (NCS)",
    description: "Arranging Materials for Nigeria Computer Society (NCS) as a Volunteer, Aug 2024",
    type: "volunteer"
  },
    {
    id: 10,
    src: "/images/events/ncs2.jpg",
    alt: "Nigeria Computer Society (NCS) Volunteer",
    title: "Nigeria Computer Society (NCS)",
    description: "Arranging Materials for Nigeria Computer Society (NCS) as a Volunteer, Aug 2024",
    type: "volunteer"
  },
    {
    id: 11,
    src: "/images/events/sanevolunteer.jpg",
    alt: "SANE Conference 2025 Volunteer Certificate",
    title: "SANE Conference 2025",
    description: "Group Picture of Mental Health Awareness Volunteers, May 2025",
    type: "volunteer"
  },
    {
    id: 12,
    src: "/images/events/stemvoluteerdatateam.jpg",
    alt: "STEM Festival 2025 Volunteer Certificate",
    title: "STEM Festival 2025",
    description: "Data Analytics Volunteer Team, July 2025",
    type: "volunteer"
  },
];

export default function Education() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slidesToShow = isMobile ? 1 : 3;
  const totalSlides = certificateImages.length;
  const maxSlide = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, maxSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <section className="relative text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="absolute -top-10 left-1/4 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 right-1/4 w-56 h-56 bg-green-200/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl">
              <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Education & Certifications
              </span>
            </h1>
            <p className="text-emerald-700/80 text-base sm:text-lg max-w-3xl mx-auto px-4">
              My academic journey and professional certifications that have shaped my expertise in technology and computer science.
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center mb-8 sm:mb-12">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 ml-4">
              Academic Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 sm:w-2 h-full bg-gradient-to-b from-emerald-300 via-green-300 to-emerald-300 rounded-full" />
            
            <div className="space-y-8 sm:space-y-12">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full z-10 border-4 border-white shadow-lg" />
                  
                  {/* Content Card */}
                  <div 
                    className={`relative group ml-8 sm:ml-0 sm:w-5/12 ${
                      index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-xl`}>
                          <div className="text-white">
                            {edu.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-emerald-900">
                              {edu.title}
                            </h3>
                            <span className="inline-flex items-center px-3 py-1 mt-2 sm:mt-0 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full">
                              {edu.year}
                            </span>
                          </div>
                          <p className="text-emerald-700 font-medium mb-4">
                            {edu.institution}
                          </p>
                          <p className="text-emerald-700/80 text-sm sm:text-base">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates & Awards Carousel */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center mb-8 sm:mb-12">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl shadow-lg">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 ml-4">
              Certificates & Awards
            </h2>
          </div>

          {/* Certificate Type Tags */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {[
              { type: "certificate", label: "Certificates", color: "bg-emerald-100 text-emerald-800" },
              { type: "volunteer", label: "Volunteer Work", color: "bg-blue-100 text-blue-800" },
              { type: "award", label: "Awards", color: "bg-purple-100 text-purple-800" },
              { type: "conference", label: "Conferences", color: "bg-teal-100 text-teal-800" },
            ].map((tag) => (
              <span key={tag.type} className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 -translate-x-4"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 translate-x-4"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
              >
                {certificateImages.map((image) => (
                  <div 
                    key={image.id} 
                    className={`flex-shrink-0 ${isMobile ? 'w-full' : 'w-1/3'} px-2`}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
                          {/* Certificate Type Badge */}
                          <div className="absolute top-3 right-3 z-10">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              image.type === 'certificate' ? 'bg-emerald-100 text-emerald-800' :
                              image.type === 'volunteer' ? 'bg-blue-100 text-blue-800' :
                              image.type === 'award' ? 'bg-purple-100 text-purple-800' :
                              'bg-teal-100 text-teal-800'
                            }`}>
                              {image.type === 'certificate' ? 'Certificate' :
                               image.type === 'volunteer' ? 'Volunteer' :
                               image.type === 'award' ? 'Award' : 'Conference'}
                            </span>
                          </div>
                          
                          {/* Certificate Image */}
                          <div className="w-full h-full flex items-center justify-center p-4">
                            <div className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden flex items-center justify-center">
                              {/* Your actual certificate image */}
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-contain p-2"
                                loading="lazy"
                              />
                              
                              {/* Image Overlay Effect */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                          
                          {/* View Certificate Button */}
                          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a 
                              href={image.src} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-700 shadow-md hover:shadow-lg transition-shadow"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                              View Full
                            </a>
                          </div>
                        </div>
                        
                        {/* Certificate Info */}
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-emerald-900 mb-1 line-clamp-1">
                            {image.title}
                          </h3>
                          <p className="text-emerald-700/80 text-sm mb-2">
                            {image.description}
                          </p>
                          <div className="flex items-center text-xs text-emerald-600">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            Click to view certificate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 w-6' 
                      : 'bg-emerald-300 hover:bg-emerald-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}