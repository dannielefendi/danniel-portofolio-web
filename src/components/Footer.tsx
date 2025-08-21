import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/dannielefendi",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:efendidanniel5@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Danniel Efendi</h3>
              <p className="text-background/80 leading-relaxed">
                Computer Science student passionate about technology, 
                innovation, and continuous learning.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block w-full text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-background/80">
                <p>efendidanniel5@gmail.com</p>
                <p>+62-853-6292-3568</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-12 h-12 bg-background/10 rounded-full hover:bg-background/20 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-background/80 mb-4 sm:mb-0">
                © {currentYear} Danniel Efendi. All rights reserved.
              </p>
              <div className="flex items-center text-background/80">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" />
                <span>using React & TypeScript</span>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
            aria-label="Back to top"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;