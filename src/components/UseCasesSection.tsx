import { Dumbbell, Home, Building2, Briefcase, Target, User, Rocket } from "lucide-react";

const useCases = [
  {
    title: "Coaching centers & fitness studios",
    description: "Collect monthly fees without manual follow-ups.",
    icon: Dumbbell,
  },
  {
    title: "Landlords & PG owners", 
    description: "Rent collection made effortless.",
    icon: Home,
  },
  {
    title: "Housing societies & RWAs",
    description: "Automate monthly maintenance fees.",
    icon: Building2,
  },
  {
    title: "Coworking spaces",
    description: "Collect desk/office rentals on time.",
    icon: Briefcase,
  },
  {
    title: "Clubs & associations",
    description: "Hassle-free membership fee collection.",
    icon: Target,
  },
  {
    title: "Freelancers & tutors",
    description: "Automate recurring client payments.",
    icon: User,
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Perfect for <span className="bg-gradient-success bg-clip-text text-transparent">Every Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From small businesses to growing enterprises, Feezy Pay works for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-xl border hover:shadow-large transition-all duration-300 hover:scale-105 hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-success/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;