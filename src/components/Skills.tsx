import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Users, Globe, Lightbulb, MessageSquare, Award } from "lucide-react";

const Skills = () => {
  const hardSkills = [
    { name: "Microsoft Word", icon: Monitor },
    { name: "Microsoft Excel", icon: Monitor },
    { name: "Microsoft PowerPoint", icon: Monitor },
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Creativity", icon: Lightbulb },
    { name: "Leadership", icon: Award },
    { name: "Communication", icon: MessageSquare },
    { name: "Proficient in English", icon: Globe },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A combination of technical proficiency and interpersonal skills 
              that enable me to excel in collaborative environments.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            {/* Hard Skills */}
            <Card className="tech-border card-shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center text-xl font-semibold text-foreground">
                  <Monitor className="h-6 w-6 text-primary mr-2" />
                  Hard Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hardSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <skill.icon className="h-5 w-5 text-primary mr-3" />
                    <Badge variant="outline" className="text-sm font-medium">
                      {skill.name}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="tech-border card-shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center text-xl font-semibold text-foreground">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <skill.icon className="h-5 w-5 text-primary mr-3" />
                    <Badge variant="outline" className="text-sm font-medium">
                      {skill.name}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills Summary */}
          <Card className="mt-8 tech-border card-shadow animate-fade-in">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Continuous Learning Mindset
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Beyond these core skills, I am constantly exploring new technologies and methodologies 
                in computer science. My passion for learning drives me to stay updated with industry 
                trends and best practices, ensuring I can contribute effectively to any team or project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;