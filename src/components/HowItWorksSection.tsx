import howItWorksImage from "@/assets/how-it-works.png";

const steps = [
  {
    number: "01",
    title: "Add your subscribers",
    description: "Upload or enter your customer list in FeezyPay.",
    icon: "👥"
  },
  {
    number: "02", 
    title: "Send UPI Autopay links via WhatsApp",
    description: "Your customers approve once, directly on their phone.",
    icon: "📱"
  },
  {
    number: "03",
    title: "Get paid automatically every month",
    description: "No reminders, no delays, just smooth cash flow.",
    icon: "💰"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with automated payments in just three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={howItWorksImage} 
              alt="How FeezyPay works illustration"
              className="w-full h-auto rounded-2xl shadow-large"
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-xl bg-card border hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;