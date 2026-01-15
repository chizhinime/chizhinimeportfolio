// components/Loading.tsx
import { useEffect, useState } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide loading after completion
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        // Faster at start, slower at end
        const increment = prev < 50 ? 15 : prev < 80 ? 8 : 4;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 animate-spin-slow rounded-full" />
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-emerald-400/5 to-green-400/5 animate-spin-slow-reverse rounded-full" />
      </div>
      
      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Animated Circle */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8 mx-auto">
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          
          {/* Outer Circle */}
          <div className="absolute inset-0 border-4 border-emerald-200/20 rounded-full" />
          
          {/* Progress Circle */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(16, 185, 129, 0.1)"
              strokeWidth="4"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              className="transition-all duration-300 ease-out"
            />
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Inner Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Percentage */}
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {progress}%
            </div>
            <div className="text-emerald-200 text-sm sm:text-base font-medium">
              Loading Portfolio
            </div>
            
            {/* Loading Dots */}
            <div className="flex space-x-1 mt-4">
              {[0, 1, 2].map((dot) => (
                <div
                  key={dot}
                  className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"
                  style={{
                    animationDelay: `${dot * 0.2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Loading Message */}
        <div className="text-white/80 text-sm sm:text-base max-w-md mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-emerald-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Preparing your experience</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-emerald-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default Loading;