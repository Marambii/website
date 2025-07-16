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
              className="group relative bg-gradient-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <Button variant="feature" className="w-full">
                  Learn More
                </Button>
              </div>
              
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;