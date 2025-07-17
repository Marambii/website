import africanProfessional from "@/assets/african-professional.jpg";
import { Heart, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                About Instrumate Africa
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Instrumate Africa, we believe that communication should never be a barrier. 
              Our mission is to create inclusive technology solutions that empower the deaf 
              and hard-of-hearing community across Africa.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We develop cutting-edge software that bridges the communication gap through 
              innovative features including real-time text-to-sign language conversion, 
              sign-to-text translation, and advanced speech-to-text capabilities.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto shadow-glow">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary">Inclusive</h3>
                <p className="text-sm text-muted-foreground">Building accessible solutions for everyone</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto shadow-glow">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary">Innovative</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge technology solutions</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto shadow-glow">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary">Community</h3>
                <p className="text-sm text-muted-foreground">Empowering the deaf community</p>
              </div>
            </div>
          </div>
          
          {/* Avatar Image - Right Side */}
          <div className="relative">
            <div className="relative">
              <img
                src="/lovable-uploads/a193b214-c6d4-468b-a2f4-e2d389e7507c.png"
                alt="Person performing sign language gesture"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;