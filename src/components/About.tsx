import { User, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Passionate and self-driven 3rd-year B.Tech Computer Science student with a strong 
                  foundation in Data Structures and Algorithms, having solved 700+ problems across 
                  platforms like LeetCode and CodeChef.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Proficient in Full Stack Java Development using Spring Boot and React JS, with 
                  hands-on experience in building real-world projects. Currently expanding skills 
                  in Spring Security and Linux system administration to deepen backend and deployment knowledge.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">+91 9382530377</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">rajmukherjee2807@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Sector V, Kolkata, West Bengal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Stats */}
            <div className="space-y-6">
              {/* Education */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      BTech Computer Science Engineering
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Techno India University</p>
                    <p className="text-gray-600 dark:text-gray-400">2023 - 2027</p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">CGPA: 9.07</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Achievements</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">700+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">DSA Problems Solved</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">66th</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">GeeksforGeeks Rank</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">600+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Students Guided</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">365</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Days LeetCode Streak</div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Languages</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Bengali</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Hindi</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">English</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Proficient</span>
                  </div>
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