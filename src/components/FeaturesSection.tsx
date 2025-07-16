import { Button } from "@/components/ui/button";
import { MessageSquare, HandHeart, Mic } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Text to Sign",
      description: "Convert written text into visual sign language animations in real-time, making written content accessible to the deaf community.",
      color: "from-primary to-primary-glow"
    },
    {
      icon: HandHeart,
      title: "Sign to Text",
      description: "Advanced computer vision technology that translates sign language gestures into written text with high accuracy.",
      color: "from-secondary to-accent"
    },
    {
      icon: Mic,
      title: "Speech to Text",
      description: "Real-time speech recognition that converts spoken words into text, enabling seamless communication for all users.",
      color: "from-accent to-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Core Features
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three powerful technologies working together to create an inclusive communication ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative h-80 w-full perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-card rounded-2xl p-8 shadow-elegant flex flex-col items-center justify-center text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-glow mb-6`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {feature.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-card rounded-2xl p-8 shadow-elegant flex flex-col justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-glow mb-6 mx-auto`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;