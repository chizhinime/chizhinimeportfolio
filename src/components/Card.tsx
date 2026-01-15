import { ExternalLink, Github } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  technologies?: string[];
  imageUrl?: string;
}

const Card = ({ 
  title, 
  description, 
  liveUrl, 
  githubUrl, 
  technologies = [],
  imageUrl 
}: CardProps) => {
  return (
    <div className="relative group transform transition-all duration-300 hover:-translate-y-2">
      {/* 3D Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Project Card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-bl-full" />
        
        {/* Project Image or Placeholder */}
        <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 aspect-video">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-200 to-green-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-emerald-600 font-medium">Project Preview</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Project Content */}
        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-800 transition-colors">
            {title}
          </h3>
          
          <p className="text-emerald-700/80 mb-6 text-sm sm:text-base">
            {description}
          </p>
          
          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 relative group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl transform transition-transform duration-300 group-hover/btn:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <button className="relative w-full py-3 rounded-xl flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-semibold text-sm sm:text-base">Live Demo</span>
              </button>
            </a>
            
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 relative group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl transform transition-transform duration-300 group-hover/btn:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <button className="relative w-full py-3 rounded-xl flex items-center justify-center">
                  <Github className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-semibold text-sm sm:text-base">Code</span>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;