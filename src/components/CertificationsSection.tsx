import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Certification } from '../types/profile';

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex items-center space-x-1 text-sm text-slate-600">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.name}</h3>
              <p className="text-slate-600 mb-4">{cert.issuer}</p>
              
              {cert.credentialId && (
                <p className="text-xs text-slate-500 mb-4">
                  Credential ID: {cert.credentialId}
                </p>
              )}

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View Credential</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;