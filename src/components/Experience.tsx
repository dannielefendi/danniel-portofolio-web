import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Worker",
      company: "Master Service",
      period: "2 months",
      type: "Work Experience",
      description: "Handle service of many problems such as corrupt memory, RAM upgrade, etc.",
      skills: ["Hardware Troubleshooting", "Customer Service", "Technical Support"],
      icon: Briefcase
    },
    {
      title: "Staff - Self-Development Division",
      company: "Binus Square Student Committee 15th Presidency (BSSC)",
      period: "2024 - 2025",
      type: "Organization",
      description: "Served as Staff in the Self-Development Division in Culture Sub-Division. Participated in BSSC Art Workshop 2025 event, taking part in Partnership Division by managing sponsorships and maintaining client communications.",
      skills: ["Partnership Management", "Event Organization", "Communication", "Leadership"],
      icon: Users
    },
    {
      title: "Volunteer",
      company: "Religious Moderation (Jakarta)",
      period: "1 day",
      type: "Volunteer Work",
      description: "Socialization about Religious Moderation at SMPN 229 in collaboration with TFI BINUS.",
      skills: ["Public Speaking", "Educational Outreach", "Collaboration", "Social Impact"],
      icon: Users
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Work Experience":
        return "bg-primary text-white";
      case "Organization":
        return "bg-accent text-white";
      case "Volunteer Work":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse range of experiences spanning technical work, organizational leadership, 
              and community volunteer efforts.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8 animate-slide-up">
            {experiences.map((exp, index) => (
              <Card key={index} className="tech-border card-shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    {/* Main Content */}
                    <div className="flex-1">
                      <div className="flex items-start mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 mt-1">
                          <exp.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">
                              {exp.title}
                            </h3>
                            <Badge className={getTypeColor(exp.type)}>
                              {exp.type}
                            </Badge>
                          </div>
                          <p className="text-lg text-primary font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Summary */}
          <Card className="mt-12 tech-border card-shadow animate-fade-in">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Diverse Experience Portfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Through various roles in technical support, organizational leadership, and community 
                outreach, I have developed a well-rounded skill set that combines technical expertise 
                with strong interpersonal and leadership abilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;