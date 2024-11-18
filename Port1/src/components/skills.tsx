import React, { useState } from 'react';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const skillsData: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React & TypeScript', proficiency: 90 },
        { name: 'HTML5, CSS3, Tailwind CSS', proficiency: 85 },
        { name: 'JavaScript (ES6+)', proficiency: 95 },
        { name: 'Responsive Design', proficiency: 80 },
        { name: 'State Management (Redux, Context API)', proficiency: 75 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'PHP', proficiency: 85 },
        { name: 'MySQL', proficiency: 90 },
        { name: 'Authentication & Authorization', proficiency: 90 },
        { name: 'XAMPP', proficiency: 80 },
      ],
    },
    {
      category: 'Database Administration',
      skills: [
        { name: 'MySQL & PostgreSQL', proficiency: 80 },
        { name: 'Database Design & Optimization', proficiency: 75 },
        { name: 'Data Modeling', proficiency: 70 },
        { name: 'SQL Query Optimization', proficiency: 85 },
        { name: 'Database Backup & Restoration', proficiency: 60 },
      ],
    },
  ];

  const toggleSkill = (skillName: string) => {
    setOpenSkill(openSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-8">
          My Skills
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Here are the technologies I have experience with, and how familiar I am with each.
        </p>

        {/* Grid Layout for Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                {category.category}
              </h3>
              {category.skills.map((skill) => (
                <div key={skill.name} className="bg-white shadow-lg rounded-lg">
                  <button
                    onClick={() => toggleSkill(skill.name)}
                    className="w-full text-left p-4 font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-t-lg transition-colors"
                  >
                    {skill.name}
                  </button>
                  {openSkill === skill.name && (
                    <div className="p-4">
                      <div className="flex items-center">
                        <span className="text-gray-700 mr-4">Proficiency:</span>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="bg-blue-600 h-4 rounded-full"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                        <span className="ml-4 text-gray-700">{skill.proficiency}%</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
