import React from 'react';
import { Skill } from '../types/profile';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const skillCategories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & DevOps',
    other: 'Other'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional web applications.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                {skillCategories[category as keyof typeof skillCategories]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-semibold text-slate-800">{skill.name}</h4>
                      <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;