import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Demo - Left Side */}
          <div className="relative">
            <div className="relative aspect-video bg-primary/10 rounded-2xl overflow-hidden shadow-elegant">
              {/* Video placeholder with play overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-glow">
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-primary-foreground" />
                    ) : (
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    )}
                  </div>
                  <p className="text-primary font-medium">Click to play demo</p>
                </div>
              </div>
              
              {/* Video controls overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <div className="flex-1 h-1 bg-muted rounded-full">
                    <div className="w-1/3 h-full bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">2:34</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating feature indicators */}
            <div className="absolute -top-4 -right-4 bg-gradient-hero rounded-full px-4 py-2 shadow-glow">
              <span className="text-primary-foreground font-medium text-sm">Live Demo</span>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                See It In Action
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Watch our comprehensive demo showcasing how Instrumate Africa's technology 
              transforms communication accessibility. See real-time translations between 
              text, sign language, and speech in action.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Demo Highlights:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Real-time text to sign language conversion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Sign language gesture recognition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Voice to text transcription accuracy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Multi-platform compatibility</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4">
              <Button variant="hero" size="lg">
                Request Full Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;