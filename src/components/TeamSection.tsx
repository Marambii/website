import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lawrence Nderu",
      role: "Project Inspector",
      bio: "Ensuring quality and compliance across all development phases with meticulous attention to detail.",
      linkedin: "#",
      github: "#",
      email: "lawrence@instrumate-africa.com"
    },
    {
      name: "Francis Mung'ang'u",
      role: "Team Lead & API Developer", 
      bio: "Leading the development team while architecting robust API solutions for seamless integration.",
      linkedin: "#",
      github: "#",
      email: "francis@instrumate-africa.com"
    },
    {
      name: "John Njuki",
      role: "Backend Developer",
      bio: "Building scalable server-side solutions and database architectures for optimal performance.",
      linkedin: "#",
      github: "#",
      email: "john@instrumate-africa.com"
    },
    {
      name: "Baruch Marambi",
      role: "Frontend Developer",
      bio: "Creating intuitive user interfaces and responsive web applications for exceptional user experience.",
      linkedin: "#",
      github: "#",
      email: "baruch@instrumate-africa.com"
    },
    {
      name: "Mary Muragu",
      role: "Research And Integration",
      bio: "Conducting research and ensuring seamless integration of cutting-edge technologies and solutions.",
      linkedin: "#",
      github: "#",
      email: "mary@instrumate-africa.com"
    },
    {
      name: "Nevean Adhiambo",
      role: "UI/UX Developer",
      bio: "Designing accessible and beautiful user experiences that prioritize inclusivity and usability.",
      linkedin: "#",
      github: "#",
      email: "nevean@instrumate-africa.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of passionate individuals dedicated to breaking down communication barriers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-gradient-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              <div className="space-y-4">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
                
                {/* Social links */}
                <div className="flex justify-center space-x-3 pt-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;