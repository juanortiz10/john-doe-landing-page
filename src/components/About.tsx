import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 bg-gray-50 transition-opacity duration-1000 ease-in-out ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I'm John Doe, a passionate designer and developer with over 10 years of experience creating elegant solutions 
              for complex problems. I believe in minimalism, not just as an aesthetic choice, but as a philosophy that guides 
              my approach to design and problem-solving.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              After graduating from Design University with a Master's degree in Interaction Design, I've worked with various 
              clients from startups to Fortune 500 companies, helping them build products that are both beautiful and functional.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              When I'm not designing or coding, you'll find me exploring the outdoors, practicing photography, 
              or experimenting with new cooking recipes.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Personal Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Name:</p>
                  <p className="font-medium">John Doe</p>
                </div>
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="font-medium">hello@johndoe.com</p>
                </div>
                <div>
                  <p className="text-gray-600">Location:</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-gray-600">Availability:</p>
                  <p className="font-medium">Freelance & Full-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;