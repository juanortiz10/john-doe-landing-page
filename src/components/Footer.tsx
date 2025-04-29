import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-800 font-semibold">John Doe</span>
            <p className="text-gray-600 text-sm mt-1">Designer & Developer</p>
          </div>
          
          <div className="text-gray-600 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;