import { ExternalLink, Github, Calendar, Code, Bot, Map } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bookie – The Ultimate Book Selling Platform',
      description: 'Full-stack book-selling platform with real-time inventory management and seller-buyer interaction.',
      duration: 'JAN 2025 - APRIL 2025',
      role: 'Full Stack Developer | React JS & Spring Boot',
      features: [
        'Built a full-stack book-selling platform with real-time inventory and seller-buyer interaction',
        'Enabled sellers to list books, manage stock, and set prices',
        'Developed a responsive UI with React JS for browsing and purchasing',
        'Integrated an AI chatbot for personalized book suggestions',
        'Added map feature using Leaflet.js to locate nearby sellers'
      ],
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'Leaflet.js', 'REST API', 'Tailwind CSS'],
      github: 'https://github.com/PralayeshMukherjee/Bookie',
      demo: 'https://bookie-delta.vercel.app/',
      gradient: 'from-blue-500 to-purple-600',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'FireFly – Your AI Health Companion',
      description: 'Open-source AI chatbot offering real-time medical support with multilingual and voice interaction.',
      duration: 'MAY 2025 - JUL 2025',
      role: 'Full Stack Development | ReactJS & Spring Boot',
      features: [
        'FireFly is an open-source AI chatbot that offers real-time medical support with multilingual and voice interaction',
        'It recommends doctors and medicines based on your location and evaluates symptoms via chat',
        'Built with strong encryption to protect user privacy while ensuring accessibility for all'
      ],
      technologies: ['React.js', 'Spring Boot', 'AI', 'Encryption', 'Voice API', 'Location Services'],
      github: 'https://github.com/PralayeshMukherjee/FireFly',
      demo: 'https://fire-fly-theta.vercel.app/',
      gradient: 'from-green-500 to-blue-600',
      icon: <Bot className="h-6 w-6" />
    },
    {
      title: 'DeepThreat – Smart Cybersecurity Platform',
      description: 'Advanced web platform that scans URLs and documents in real time using AI-powered analysis and 100+ security engines.',
      duration: 'AUG 2025 - OCT 2025',
      role: 'Full Stack Development | React (Vite) & Spring Boot',
      features: [
        'URL Scanner: Detects if a URL is Safe, Suspicious, or Malicious using custom algorithms and third-party APIs',
        'Document Scanner: Upload and analyze files (PDF, DOC, JPG, etc.) for hidden malware or threats',
        'Secure Authentication: Google OAuth 2.0 login with JWT-based authorization',
        'AI-Powered Threat Analysis: Combines DeepThreat’s engine with 100+ third-party algorithms for detailed security reports',
        'User-Friendly Dashboard: React + Tailwind UI with charts, pie visualizations, and reports'
      ],
      technologies: ['React (Vite)', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'OAuth 2.0', 'JWT', 'AI', 'Third-Party Security APIs'],
      github: 'https://github.com/PralayeshMukherjee/DeepThreat',
      demo: 'https://deepthreat.vercel.app/',
      gradient: 'from-purple-600 to-red-600',
      icon: <Bot className="h-6 w-6" />
}

  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {project.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github className="h-5 w-5" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200`}
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`relative p-8 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-2xl`}>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {project.title.split(' ')[0]}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                        
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            {project.title.includes('Bookie') ? (
                              <Code className="h-8 w-8 text-gray-400" />
                            ) : (
                              <Bot className="h-8 w-8 text-gray-400" />
                            )}
                          </div>
                          <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            {project.title.includes('Bookie') ? (
                              <Map className="h-8 w-8 text-gray-400" />
                            ) : (
                              <ExternalLink className="h-8 w-8 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;