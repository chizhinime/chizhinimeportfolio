import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website built with Next.js, TypeScript, and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing projects and skills. Built with modern web technologies and featuring responsive design, 3D effects, and smooth animations.",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Perfect for project management.",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Material-UI"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Includes dark mode and offline capabilities.",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Leaflet", "PWA"],
    imageUrl: "https://images.unsplash.com/photo-1589810264341-f89f6c7d5e81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chat assistant powered by OpenAI's API. Features conversational AI, context awareness, and multi-language support with a sleek interface.",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Next.js", "OpenAI API", "Express.js", "Redis", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fitness Tracking App",
    description: "A comprehensive fitness application with workout tracking, progress analytics, and personalized recommendations. Includes social features and achievement system.",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Google Fit API"],
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
];

export default function Projects() {
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
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                My Projects
              </span>
            </h1>
            <p className="text-emerald-700/80 text-base sm:text-lg max-w-3xl mx-auto px-4 mb-8 sm:mb-10">
              A collection of my work showcasing problem-solving skills, technical expertise, and attention to detail in web development.
            </p>
          </div>
        </section>
    

        {/* Projects Grid */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <Card 
                key={idx}
                title={project.title}
                description={project.description}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}