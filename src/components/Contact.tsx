import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "efendidanniel5@gmail.com",
      href: "mailto:efendidanniel5@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62-853-6292-3568",
      href: "tel:+6285362923568"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kemanggisan, Jakarta Barat",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/dannielefendi",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/danniel-efendi-439007326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:efendidanniel5@gmail.com",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, 
              or just having a conversation about technology and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Information */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-4">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Right Column - Social Links */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-100`}
                      >
                        <social.icon className="h-8 w-8 mb-2" />
                        <span className="text-xs font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Follow me on social media for updates and insights into my projects and learning journey. 
                      I regularly share my coding experiences, tech discoveries, and professional milestones.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Let's Collaborate!</h4>
                    <p className="text-sm text-gray-600">
                      I'm always interested in new projects, whether it's web development, 
                      mobile apps, or innovative tech solutions. Feel free to reach out!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;