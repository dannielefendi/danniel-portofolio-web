import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Binus University",
      period: "2023 - Now",
      degree: "Computer Science",
      status: "Current",
      description: "Pursuing a Bachelor's degree in Computer Science with focus on software development, algorithms, and data structures.",
      location: "Jakarta, Indonesia"
    },
    {
      institution: "SMA Sutomo 1 Medan",
      period: "2020 - 2023",
      degree: "Science Major",
      status: "Graduated",
      description: "Completed high school education with concentration in Science, building a strong foundation in mathematics and analytical thinking.",
      location: "Medan, Indonesia"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="text-primary">Education</span> Background
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 animate-slide-up">
            {educationData.map((edu, index) => (
              <Card key={index} className="tech-border card-shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-5 w-5 text-primary mr-2" />
                        <h4 className="text-xl font-semibold text-foreground">
                          {edu.institution}
                        </h4>
                      </div>
                      <p className="text-lg text-muted-foreground mb-2">
                        {edu.degree}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className={edu.status === "Current" ? "bg-primary text-white" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;