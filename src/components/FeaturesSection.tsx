import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, HandHeart, Mic } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

const PartnershipSection = () => {
  const [selectedTab, setSelectedTab] = useState("communities");

  const tabs = [
    { key: "communities", label: "Deaf Communities" },
    { key: "organizations", label: "Organizations & NGOs" },
    { key: "governments", label: "Governments & Institutions" },
  ];

  const tabContent = {
    organizations: {
      title: "Championing Deaf Inclusion",
      bullets: [
        "Partnering with NGOs to create accessible environments.",
        "Providing resources and support for deaf individuals.",
        "Collaborating on advocacy and awareness initiatives."
      ],
      image: "/uploads/two-african-woman-standing-blue-background-showing-palm-hand-doing-ok-gesture-with-thumbs-up-smiling-happy-cheerful.jpg"
    },
    communities: {
      title: "Empowering Deaf Communities",
      bullets: [
        "Facilitating community-driven projects for accessibility.",
        "Offering training and workshops in sign language.",
        "Building networks for peer support and empowerment."
      ],
      image: "/uploads/portrait-afro-american-couple.jpg"
    },
    governments: {
      title: "Partnering for Public Good",
      bullets: [
        "Supporting inclusive policies that leave no one behind.",
        "Strengthening access to essential services through communication equity.",
        "Enabling governments and institutions to better engage Deaf citizens with dignity and respect."
      ],
      image: "/uploads/friends-cooking-together-barbecue.jpg"
    }
  };

  const current = tabContent[selectedTab];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-2">
          Enabling inclusive ecosystems
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
        <p className="text-center text-lg text-muted-foreground mb-8">
          As a catalyst for accessibility, Instrumate Africa empowers multiple stakeholders,<br />
          from communities to institutions by bridging the communication gap with real-time sign language technology.
        </p>
        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-100 rounded-full p-2 gap-2">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedTab === tab.key ? 'bg-primary text-white shadow' : 'text-gray-700 hover:bg-primary/10'}`}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div>
            <h3 className="text-3xl font-semibold text-primary mb-4">{current.title}</h3>
            <ul className="space-y-4 mb-4">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-lg text-muted-foreground">
                  <span className="text-primary mt-1">✔️</span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="italic text-muted-foreground">
              We collaborate with public institutions to build a more just, accessible, and participatory society for all.
            </p>
          </div>
          {/* Image - Right Side */}
          <div className="relative">
            <img
              src={current.image}
              alt="Partnership visual"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <AnimatedCard>
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
          <PartnershipSection />
        </div>
      </section>
    </AnimatedCard>
  );
};

export default FeaturesSection;