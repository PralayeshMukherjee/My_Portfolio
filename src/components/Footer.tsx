import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pralayesh Mukherjee
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Java Developer passionate about creating innovative solutions 
                and teaching programming to the next generation of developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  About
                </a>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Skills
                </a>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Projects
                </a>
                <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Experience
                </a>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>Sector V, Kolkata, West Bengal</p>
                <p>+91 9382530377</p>
                <p>rajmukherjee2807@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 sm:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Pralayesh Mukherjee</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;