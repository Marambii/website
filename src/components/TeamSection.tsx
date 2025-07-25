import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lawrence Nderu",
      role: "Project Inspector",
      bio: "Ensuring quality and compliance across all development phases with meticulous attention to detail.",
      linkedin: "https://linkedin.com/in/dr-lawrence-nderu",
      github: "https://github.com/magvtv/39_Lawrence",
      email: "lawrence@instrumate-africa.com"
    },
    {
      name: "Francis Mung'ang'u",
      role: "Team Lead & API Developer", 
      bio: "Leading the development team while architecting robust API solutions for seamless integration.",
      linkedin: "https://linkedin.com/in/francis-mung-ang-u-27b1272a6",
      github: "https://github.com/FRANCISMUNGANGU",
      email: "francis@instrumate-africa.com"
    },
    {
      name: "John Njuki",
      role: "Backend Developer",
      bio: "Backend development and database management",
      linkedin: "https://linkedin.com/in/jay-njuqy-26b6b0295",
      github: "https://github.com/bitflaw",
      email: "john@instrumate-africa.com"
    },
    {
      name: "Baruch Marambi",
      role: "Frontend Developer",
      bio: "Creating intuitive user interfaces and responsive web applications for exceptional user experience.",
      linkedin: "https://linkedin.com/in/baruch-marambi",
      github: "https://github.com/Marambii",
      email: "baruch@instrumate-africa.com"
    },
    {
      name: "Mary Muragu",
      role: "Backend Developer",
      bio: "Building robust backend systems and APIs for our platform",
      linkedin: "https://linkedin.com/in/mary-muragu-016482309",
      github: "https://github.com/Mmuragu",
      email: "mary@instrumate-africa.com"
    },
    {
      name: "Nevean Adhiambo",
      role: "UI/UX Developer",
      bio: "Creating intuitive and accessible user experiences for all learners",
      linkedin: "https://linkedin.com/in/nevean-adhiambo-37131b288",
      github: "https://github.com/neveanadhis",
      email: "nevean@instrumate-africa.com"
    }
  ];

  return (
    <AnimatedCard>
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
    </AnimatedCard>
  );
};

export default TeamSection;