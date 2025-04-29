import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 400);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 700);
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white text-center px-6">
      <div className="max-w-4xl">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hello, I'm <span className="text-gray-800">John Doe</span>
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
          A creative professional passionate about design, innovation, and building remarkable digital experiences
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </button>
          <a 
            href="#projects" 
            className="border border-gray-300 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;