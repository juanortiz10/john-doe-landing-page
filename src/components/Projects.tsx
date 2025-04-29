import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const projectsData: Project[] = [
  {
    title: "E-commerce Redesign",
    description: "A complete redesign of an e-commerce platform focused on improving user experience and conversion rates through clean, intuitive interfaces.",
    image: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["UI/UX", "Web Design", "E-commerce"]
  },
  {
    title: "Financial Dashboard",
    description: "An interactive dashboard for financial data visualization, providing users with real-time insights and analytics in a clean, minimal interface.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["Dashboard", "Data Visualization", "Web App"]
  },
  {
    title: "Travel Application",
    description: "A mobile application for travel enthusiasts, featuring personalized recommendations, trip planning tools, and beautiful visual storytelling.",
    image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["Mobile App", "UI Design", "Travel"]
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a photographer, showcasing their work through a clean, gallery-focused design with attention to visual details.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["Web Design", "Portfolio", "Photography"]
  }
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-20 bg-gray-50 transition-opacity duration-1000 ease-in-out ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block border border-gray-300 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;