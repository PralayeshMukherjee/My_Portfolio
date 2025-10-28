import { Briefcase, Users, BookOpen, Award,Database,Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & <span className="text-blue-500">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey in technology and community involvement
            </p>
          </div>

          {/* Experience Section */}
          {/* Aicte */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                  <Briefcase className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Java Developer Intern
                      </h3>
                      <p className="text-lg text-yellow-600 dark:text-yellow-400 font-semibold">
                        EduSkills Foundation
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      July 2025 - Sep 2025
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Code className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Developed backend components using <strong>Java</strong> and improved performance by optimizing data handling.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Database className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Worked on database integration and learned <strong>Spring Boot</strong> and <strong>JDBC</strong> for practical application development.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Successfully completed the internship and earned recognition for Java backend development skills.
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                      Java
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      Spring Boot
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      MySQL
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-red-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      React JS
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      Backend Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GDG */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Core Team Member
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        Google Developer Group
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      Sep 2024 - May 2025
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Teach Data Structure and Algorithm to more than 200+ students
                      </span>
                    </div>
                    <div className="flex items-start">
                      <BookOpen className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Manage the Development Side of the Community
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      Teaching
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      Community Management
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      Technical Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Coding Achievements</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">DSA Problems Solved</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Various platforms</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">700+</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">GeeksforGeeks Rank</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Among 900+ college-mates</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">66th</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">LeetCode Consistency</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Daily problem solving</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">365 days</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Community Impact</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Students Guided</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Through GDG community</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">600+</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Teaching Sessions</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">DSA & Development</p>
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">200+</div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Core Team Recognition</h4>
                  <p className="text-sm opacity-90">
                    Recognized for outstanding contribution to Google Developer Group community 
                    and exceptional leadership in technical education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;