import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education } from '../types/profile';

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Academic background and qualifications that shaped my technical foundation.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{edu.degree}</h3>
                      <p className="text-lg text-slate-600">{edu.field}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">{edu.institution}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    )}
                    {edu.gpa && (
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-2">Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-slate-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;