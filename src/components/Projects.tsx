import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Folder } from 'lucide-react';
import taslaCars from '@/components/assets/taslaCarsPc.png';
import spaceXPC from '@/components/assets/spaceXPC.png';

interface FeaturedProject {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  external: string;
  image?: string;
  featured: boolean;
}

const Projects = () => {
  const projects: FeaturedProject[] = [
    {
      "title": "Tesla Car Booking",
      "description": "Experience streamlined car management and reservations with our React and Rails web app, allowing admins to effortlessly handle inventory while users reserve cars by model, city, and time.",
      "technologies": ["Ruby on Rails", "MySQL", "React", "Tailwind"],
      "github": "https://github.com/Alibaba2023/Tesla-car-booking-back-end",
      "external": "https://tesla-car-booking-front.onrender.com/",
      "image": taslaCars,
      "featured": true
    },
    {
      "title": "Space Travelers",
      "description": "In this task, we will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
      "technologies": ["React", "Redux", "API", "Tailwind"],
      "github": "https://github.com/Alibaba2023/space-travelers",
      "external": "https://spacextravels.netlify.app/",
      "image": spaceXPC,
      "featured": true
    },
    {
      "title": "World Weather App",
      "description": "World Weather App is a user-friendly web application with two pages. On the first page, users can select their desired country, and on the second page, they will be presented with real-time weather conditions for the selected location.",
      "technologies": ["HTML", "Bootstrap", "React"],
      "github": "https://github.com/Alibaba2023/world-weather-app",
      "external": "https://world-weather-app.onrender.com/",
      "featured": false
    },
    {
      "title": "Hardware Pioneers",
      "description": "My HTML, CSS, and JavaScript-built project aims to raise technology awareness within the company through an interactive website. It is from a real event that occurs every year in a different country.",
      "technologies": ["HTML", "Bootstrap", "Ruby"],
      "github": "https://github.com/Alibaba2023/Hardware_Pioneers",
      "external": "https://alibaba2023.github.io/Hardware_Pioneers/",
      "featured": false
    },
    {
      "title": "Book Store",
      "description": "BookStore is an innovative web project designed to simplify book management for avid readers and book enthusiasts. This API-powered platform allows users to effortlessly add, organize, and remove books from their virtual bookshelves.",
      "technologies": ["HTML", "Bootstrap", "Ruby"],
      "github": "https://github.com/Alibaba2023/book-store",
      "external": "https://book-store-oti6.onrender.com/",
      "featured": false
    },
    {
      "title": "Awesome Book Store",
      "description": "Awesome-book project enables effortless book addition and removal, providing a simple way to stay organized. Responsive and nice user interface best for storing books.",
      "technologies": ["HTML", "Bootstrap", "Ruby"],
      "github": "https://alibaba2023.github.io/Awesome-Book/",
      "external": "https://alibaba2023.github.io/Awesome-Book/",
      "featured": false
    },
    {
      "title": "Math Magicians",
      "description": "A calculator that can provide the calculated operation. It has been the industry's standard. Responsive and nice user interface best for math operations. With a random quote that fetches from the API.",
      "technologies": ["HTML", "Bootstrap", "Ruby"],
      "github": "https://github.com/Alibaba2023/math-magicians",
      "external": "https://math-magicians-hffp.onrender.com/",
      "featured": false
    },
    {
      "title": "To Do List",
      "description": "A calculator that can provide the calculated operation. It has been the industry's standard. Responsive and nice user interface best for math operations. With a random quote that fetches from the API.",
      "technologies": ["HTML", "Bootstrap", "Ruby"],
      "github": "https://github.com/Alibaba2023/math-magicians",
      "external": "https://math-magicians-hffp.onrender.com/",
      "featured": false
    },
  ];

  // Separate featured and other projects
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
          <span className="numbered-heading">Some Things I've Built</span>
        </h2>
        
        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, i) => (
            <div 
              key={i} 
              className={`relative grid md:grid-cols-12 items-center gap-6 md:gap-10 ${
                i % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project Image (mockup) */}
              <div className={`md:col-span-7 rounded-md overflow-hidden ${
                i % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <div className="relative h-0 pb-[56.25%] bg-portfolio-light-navy">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-portfolio-lightest-slate opacity-30">
                    <img src={project.image} alt="" />
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className={`md:col-span-5 z-10 ${
                i % 2 === 1 ? 'md:text-right' : ''
              }`}>
                <p className="font-mono text-portfolio-accent text-sm mb-2">Featured Project</p>
                <h3 className="text-portfolio-lightest-slate text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <div className="bg-portfolio-light-navy p-6 rounded-md mb-4 shadow-xl">
                  <p className="text-portfolio-light-slate">
                    {project.description}
                  </p>
                </div>
                <ul className={`flex flex-wrap text-sx font-mono mb-6 gap-3 ${
                  i % 2 === 1 ? 'justify-end' : ''
                }`}>
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="border border-gray-300 rounded-lg p-2">{tech}</li>
                  ))}
                </ul>
                <div className={`flex text-portfolio-lightest-slate gap-4 ${
                  i % 2 === 1 ? 'justify-end' : ''
                }`}>
                  <a href={project.github} className="hover:text-portfolio-accent transition-colors" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="hover:text-portfolio-accent transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <h3 className="text-center text-2xl font-bold text-portfolio-lightest-slate mb-12">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, i) => (
            <Card key={i} className="bg-portfolio-light-navy hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <Folder className="text-portfolio-accent" size={40} />
                  <div className="flex gap-4">
                    <a href={project.github} className="text-portfolio-lightest-slate hover:text-portfolio-accent transition-colors" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                    <a href={project.external} className="text-portfolio-lightest-slate hover:text-portfolio-accent transition-colors" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-portfolio-lightest-slate text-xl font-bold mb-2">
                  {project.title}
                </h4>
                
                <p className="text-portfolio-light-slate mb-6 flex-grow">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap text-xs font-mono mt-auto gap-3">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="border border-gray-300 rounded-lg p-2 text-portfolio-light-slate">{tech}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
