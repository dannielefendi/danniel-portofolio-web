import { Button } from "@/components/ui/button";
import { Github, Mail, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img
                src={profilePhoto}
                alt="Danniel Efendi"
                className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              <span className="text-primary">Danniel</span> Efendi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Computer Science Student
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Saya adalah seorang mahasiswa Computer Science di Binus University. 
              Memiliki semangat tinggi, latar belakang akademik yang kuat, dan mampu 
              berkomunikasi efektif dalam bahasa Inggris. Terbiasa bekerja dalam tim, 
              terbuka terhadap tantangan baru, serta selalu mau belajar hal-hal baru.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="hero-gradient text-white border-0 tech-shadow hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <a
                  href="https://github.com/dannielefendi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("#about")}
                className="text-muted-foreground hover:text-primary"
              >
                <FileText className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;