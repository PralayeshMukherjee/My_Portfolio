import { useEffect, useState } from 'react';
import { Code, Database, Globe, PenTool as Tool, Cpu, BookOpen } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // disconnect to avoid repeated triggers
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    // Fallback for mobile where IntersectionObserver may not trigger
    const mobileFallback = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      clearTimeout(mobileFallback);
      observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring MVC', level: 85 },
        { name: 'REST API', level: 88 },
        { name: 'Spring JPA', level: 82 },
        { name: 'Spring Security', level: 80 },
        { name: 'JWT', level: 85 }
      ],
      color: 'blue'
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'Tailwind CSS', level: 92 }
      ],
      color: 'green'
    },
    {
      title: 'Programming Languages',
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: 'Core Java', level: 92 },
        { name: 'Java', level: 90 },
        { name: 'C/C++', level: 85 },
        { name: 'Servlets', level: 80 }
      ],
      color: 'purple'
    },
    {
      title: 'Database & Tools',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'Maven', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 92 }
      ],
      color: 'orange'
    },
    {
      title: 'Development Tools',
      icon: <Tool className="h-6 w-6" />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'Linux/Ubuntu', level: 82 },
        { name: 'Tomcat', level: 80 }
      ],
      color: 'pink'
    },
    {
      title: 'Computer Science',
      icon: <BookOpen className="h-6 w-6" />,
      skills: [
        { name: 'Data Structures', level: 95 },
        { name: 'Algorithms', level: 92 },
        { name: 'OOPs', level: 90 },
        { name: 'DBMS', level: 85 }
      ],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 text-blue-500 border-blue-200 dark:border-blue-800',
      green: 'from-green-500 to-green-600 text-green-500 border-green-200 dark:border-green-800',
      purple: 'from-purple-500 to-purple-600 text-purple-500 border-purple-200 dark:border-purple-800',
      orange: 'from-orange-500 to-orange-600 text-orange-500 border-orange-200 dark:border-orange-800',
      pink: 'from-pink-500 to-pink-600 text-pink-500 border-pink-200 dark:border-pink-800',
      indigo: 'from-indigo-500 to-indigo-600 text-indigo-500 border-indigo-200 dark:border-indigo-800'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-blue-500">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's an overview of my technical skills and expertise across different domains
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border ${getColorClasses(category.color).split(' ').slice(2).join(' ')} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(category.color).split(' ').slice(0, 2).join(' ')} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${getColorClasses(category.color).split(' ').slice(0, 2).join(' ')} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            minWidth: isVisible ? '1%' : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
