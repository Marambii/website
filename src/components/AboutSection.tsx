import React, { useState } from "react";
import africanProfessional from "@/assets/african-professional.jpg";
import { Heart, Users, Zap } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

const AboutSection = () => {
  return (
    <>
    <AnimatedCard>
      <section id="about" className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
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
                At Instrumate Africa, we believe that Education should never be a barrier. 
                Our mission is to bridge the gap in education by providing innovative, 
                accessible tools that empower learners with hearing disabilities to fully participate 
                in their educational journey.
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
                  src="/uploads/a193b214-c6d4-468b-a2f4-e2d389e7507c.png"
                  alt="Person performing sign language gesture"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant"
                />
                <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedCard>

    <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-transparent">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          About Our <span className="text-primary">Mission</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedCard className="space-y-6" direction="left">
          <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-bullseye text-cyan-600 text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To bridge the communication gap in education by providing innovative, 
              accessible tools that empower learners with hearing disabilities to 
              fully participate in their educational journey.
            </p>
          </div>
        </AnimatedCard>
        
        <AnimatedCard className="space-y-6" delay={0.2} direction="right">
          <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-8 p-8 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-graduation-cap text-white text-3xl mb-4"></i>
            <h3 className="text-2xl text-gray-900 font-bold mb-4">SDG 4 Alignment</h3>
            <p className="leading-relaxed text-gray-700">
              <strong>Quality Education:</strong> We're committed to ensuring inclusive 
              and equitable quality education and promoting lifelong learning 
              opportunities for all, especially those with hearing disabilities.
            </p>
          </div>
        </AnimatedCard>
      </div>
      
      <AnimatedCard className="mt-16 text-center" delay={0.4} direction="up">
        <div className="bg-sky-200 p-8 rounded-2xl">
          <i className="fas fa-heart text-red-500 text-4xl mb-4"></i>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact & Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Through technology and innovation, we envision a world where every learner, 
            regardless of their hearing ability, has access to quality education and 
            can communicate effectively in their learning environment.
          </p>
        </div>
      </AnimatedCard>
    </div>
    </section>

</>
  );
};

const AboutPage = () => (
  <>
    <AboutSection />
  </>
);

export default AboutPage;