import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, Target } from "lucide-react";

const About = () => {
  const highlights = [
    "Strong Academic Background",
    "Effective English Communication",
    "Team Collaboration",
    "Open to New Challenges",
    "Continuous Learner"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            {/* Main Description */}
            <Card className="tech-border card-shadow hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Saya adalah seorang mahasiswa Computer Science di Binus University. 
                  Memiliki semangat tinggi, latar belakang akademik yang kuat, dan mampu 
                  berkomunikasi efektif dalam bahasa Inggris. Terbiasa bekerja dalam tim, 
                  terbuka terhadap tantangan baru, serta selalu mau belajar hal-hal baru.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">
                      <strong>University:</strong> Binus University
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Major:</strong> Computer Science
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card className="tech-border card-shadow hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-foreground">Key Highlights</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Here are some of my key strengths and characteristics:
                </p>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <Badge variant="secondary" className="text-sm">
                        {highlight}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <Card className="mt-8 tech-border card-shadow hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                To continuously grow as a computer science professional, contribute meaningfully 
                to technological innovation, and make a positive impact through collaborative 
                teamwork and dedication to learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;