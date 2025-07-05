import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const EducationSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "GC University Faisalabad",
      location: "Chinab, Choke, Faisalabad",
      duration: "2020 - 2024",
      gpa: "3.66/4.0",
      status: "Completed",
      description: "Specialized in Machine Learning and Artificial Intelligence with focus on deep learning algorithms and neural networks.",
      courses: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Algorithms and Data Structures"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Research Assistant in AI Lab",
        "Published 2 papers in ML conferences"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      degree: "Intermediate in Pre-Engineering",
      institution: "Government College Gojra",
      location: "Gojra",
      duration: "2018 - 2020",
      gpa: "55%",
      status: "Completed",
      description: "Completed F.Sc (Pre-Engineering) with a strong foundation in Mathematics, Physics, and Chemistry. This academic background helped develop analytical thinking, problem-solving skills, and a solid base for further studies in Computer Science and Software Development.",
      courses: [
        "Software Engineering",
        "Web Development",
        "Mobile App Development",
        "System Design"
      ],
      achievements: [
        "Magna Cum Laude",
        "Winner of Annual Hackathon 2019"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      degree: " Web Development Bootcamp",
      institution: "CosmiCode Group 2.0",
      location: "Online",
      duration: "2023 - 2024",
      gpa: "Certificate",
      status: "Completed",
      description: "Intensive bootcamp covering modern web development technologies and frameworks with hands-on project experience.",
      courses: [
        "React.js & Redux",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "AWS Cloud Services",
        "DevOps & CI/CD"
      ],
      achievements: [
        "Top 5% of cohort",
        "Built 2 Mern-stack applications",
        "Mentored junior developers"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and continuous learning path in technology and computer science
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Main Content */}
              <div className="relative p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  {/* Left Side - Main Info */}
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-start mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center mr-4`}>
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-purple-300 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Info Row */}
                    <div className="flex flex-wrap gap-6 mb-4">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 mr-2" />
                        <span>{edu.gpa}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Right Side - Status & Expand Button */}
                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                        ✓ {edu.status}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => toggleExpanded(edu.id)}
                      className="flex items-center text-purple-300 hover:text-white transition-colors duration-200"
                    >
                      <span className="mr-2">
                        {expandedCard === edu.id ? 'Show Less' : 'Show More'}
                      </span>
                      {expandedCard === edu.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCard === edu.id && (
                  <div className="mt-8 pt-8 border-t border-white/20 animate-in slide-in-from-top-4 duration-500">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Courses */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                          Key Courses
                        </h4>
                        <div className="space-y-2">
                          {edu.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-yellow-400" />
                          Achievements
                        </h4>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">3+</div>
            <div className="text-gray-300">Degrees & Certifications</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">6</div>
            <div className="text-gray-300">Years of Study</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">3.6</div>
            <div className="text-gray-300">Average GPA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;