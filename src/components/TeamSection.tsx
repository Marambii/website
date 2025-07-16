import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Okafor",
      role: "CEO & Co-Founder",
      bio: "Passionate advocate for inclusive technology with 10+ years in accessibility solutions.",
      linkedin: "#",
      github: "#",
      email: "sarah@instrumate-africa.com"
    },
    {
      name: "Michael Asante",
      role: "CTO & Co-Founder", 
      bio: "AI/ML expert specializing in computer vision and natural language processing.",
      linkedin: "#",
      github: "#",
      email: "michael@instrumate-africa.com"
    },
    {
      name: "Amina Hassan",
      role: "Head of Product Design",
      bio: "UX designer focused on creating intuitive interfaces for assistive technologies.",
      linkedin: "#",
      github: "#",
      email: "amina@instrumate-africa.com"
    },
    {
      name: "David Kimani",
      role: "Lead AI Engineer",
      bio: "Computer vision specialist with expertise in gesture recognition and ML algorithms.",
      linkedin: "#",
      github: "#",
      email: "david@instrumate-africa.com"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Community Outreach Manager",
      bio: "Deaf community advocate ensuring our solutions meet real-world needs.",
      linkedin: "#",
      github: "#",
      email: "fatima@instrumate-africa.com"
    },
    {
      name: "Joseph Ngozi",
      role: "Senior Software Developer",
      bio: "Full-stack developer with focus on real-time communication systems and mobile apps.",
      linkedin: "#",
      github: "#",
      email: "joseph@instrumate-africa.com"
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