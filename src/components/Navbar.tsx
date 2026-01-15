import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-emerald-900/95 via-emerald-800/95 to-emerald-700/95 backdrop-blur-md shadow-2xl py-3' 
          : 'bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 py-4'
      }`}>
        {/* 3D Depth Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/20 to-transparent pointer-events-none" />
        
        {/* 3D Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo with 3D Effect */}
            <Link href="/">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300" />
                <h1 className="relative text-xl sm:text-2xl font-extrabold text-white transform transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-105">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-green-100">
                    Chizhinime
                  </span>
                  <span className="text-emerald-300 ml-2">Portfolio</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation - 3D Buttons */}
            <div className="hidden md:flex space-x-1">
              {[
                { href: "/", label: "Home" },
                { href: "/education", label: "Education" },
                { href: "/experience", label: "Experience" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <button className="relative px-4 py-2 overflow-hidden group">
                    {/* 3D Button Layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-lg transform transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    
                    <span className="relative text-white font-semibold tracking-wide text-sm">
                      {item.label}
                    </span>
                  </button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-lg bg-gradient-to-br from-emerald-700 to-emerald-600 shadow-lg transform transition-transform active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
              {isOpen ? (
                <X className="w-6 h-6 text-white relative" />
              ) : (
                <Menu className="w-6 h-6 text-white relative" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with 3D Effect */}
      {isOpen && (
        <div className="md:hidden fixed top-[73px] left-0 right-0 z-40">
          <div className="bg-gradient-to-b from-emerald-800 to-emerald-700 shadow-2xl rounded-b-2xl overflow-hidden border-t border-emerald-700">
            {/* Mobile Menu Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-transparent" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 p-4 space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/education", label: "Education" },
                { href: "/experience", label: "Experience" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <div 
                    onClick={() => setIsOpen(false)}
                    className="transform transition-all duration-300 hover:translate-x-2"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative p-4 bg-gradient-to-r from-emerald-800/90 to-emerald-700/90 backdrop-blur-sm rounded-xl border border-emerald-600/50 shadow-lg">
                        <span className="text-lg font-medium text-white flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mr-3 transform group-hover:scale-150 transition-transform" />
                          {item.label}
                        </span>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;