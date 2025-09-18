import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Smartphone, Eye, Database, Monitor } from "lucide-react";
import {  Server } from "lucide-react";


const Projects = () => {
  const projects = [
    {
      title: "CryptoScope",
      description: "A cryptocurrency price tracking website built with React.js and deployed on Vercel. It provides real-time market data, 10-day graphs, cryptocurrency rankings, 24H high/low values, market capitalization, and current prices.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Vercel", "Chart.js"],
      icon: Monitor,
      githubUrl: "https://github.com/dannielefendi/CryptoScope.git",
      category: "Frontend Web Development"
    },    

    {
      title: "ANPR System",
      description: "Automatic Number Plate Recognition system using YOLOv8 for vehicle detection and PaddleOCR for text recognition. Implements computer vision techniques for real-time plate detection.",
      technologies: ["YOLOv8", "PaddleOCR", "Computer Vision", "Python"],
      icon: Eye,
      githubUrl: "https://github.com/dannielefendi/Automatic-Number-Plate-Recognition-for-Indonesian-Plates.git",
      category: "Computer Vision"
    },

    {
      title: "SAT-U Website",
      description: "A responsive web application developed with Laravel and Blade for managing Student Activity Transcript (SAT) data at Bina Nusantara University. The system includes seminar registration and other modules, providing an efficient platform for students and administrators to track and manage activities.",
      technologies: ["Laravel", "Blade", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: Server,
      githubUrl: "https://github.com/dannielefendi/SAT-U-Website",
      category: "Full-Stack Web Development"
    },

    // {
    //   title: "Ashpatl 9 Rejens",
    //   description: "A racing game-themed website inspired by Asphalt 9: Legends. The project began with visual concept design and references, followed by UI/UX prototyping in Figma. After multiple iterations and revisions, the final design was implemented using HTML, CSS, and JavaScript.",
    //   technologies: ["Figma", "UI/UX Design", "HTML", "CSS", "JavaScript"],
    //   icon: Monitor,
    //   githubUrl: "https://github.com/dannielefendi/Project-HCI-Ashpatl-9-Rejens.git",
    //   category: "Web Development"
    // },

    {
      title: "Reminder App",
      description: "A mobile application built with Flutter for task and reminder management. Features include local notifications, task categorization, and intuitive user interface design.",
      technologies: ["Flutter", "Dart", "Mobile Development"],
      icon: Smartphone,
      githubUrl: "https://github.com/dannielefendi/Flutter-Simple-Reminder-Project.git",
      category: "Mobile Development"
    }    
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mobile Development":
        return "bg-primary text-white";
      case "Computer Vision":
        return "bg-accent text-white";
      case "Data Structures":
        return "bg-secondary text-secondary-foreground";
      case "DevOps":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating skills in mobile development, 
              computer vision, data structures, and modern development practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            {projects.map((project, index) => (
              <Card key={index} className="tech-border card-shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-3">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge className={`mt-1 ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <Card className="mt-12 tech-border card-shadow hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Visit my GitHub profile to discover more projects, contributions, and ongoing development work. 
                I'm constantly working on new ideas and expanding my technical skills.
              </p>
              <Button
                size="lg"
                asChild
                className="hero-gradient text-white border-0 tech-shadow hover:scale-105 transition-all duration-300"
              >
                <a
                  href="https://github.com/dannielefendi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Visit GitHub Profile
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;