const PartnersSection = () => {
  const partners = [
    {
      name: "Jomo Kenyatta University of Agriculture and Technology",
      logo: "/lovable-uploads/520b1a83-82ad-414f-a175-122ec0c1f13d.png",
      description: "Leading agricultural and technology innovation"
    },
    {
      name: "JHUB Africa",
      logo: "/lovable-uploads/989284ce-332a-4145-aa81-5bc3cba070a2.png",
      description: "Driving innovations for transformation across Africa"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Partners
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with leading institutions to bring inclusive technology solutions to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-32 h-32 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {partner.description}
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

export default PartnersSection;