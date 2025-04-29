import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

type Skill = {
  category: string;
  items: string[];
};

const skillsData: Skill[] = [
  {
    category: "Design",
    items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Visual Design"]
  },
  {
    category: "Development",
    items: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Responsive Design"]
  },
  {
    category: "Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Git"]
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability"]
  }
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-20 bg-white transition-opacity duration-1000 ease-in-out ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            I continuously invest in expanding my skill set and staying current with industry trends to deliver
            cutting-edge solutions and exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;