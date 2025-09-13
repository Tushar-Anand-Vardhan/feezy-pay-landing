import { Zap, MessageCircle, Shield, Clock, BarChart3 , ChartNoAxesCombined} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "No chasing payments",
    description: "Forget awkward reminders and follow-ups.",
  },
  {
    icon: MessageCircle,
    title: "Runs on WhatsApp", 
    description: "Customers don't need to install anything new.",
  },
  {
    icon: Shield,
    title: "Secure & trusted",
    description: "Powered by UPI Autopay with bank-grade security.",
  },
  {
    icon: Clock, 
    title: "Saves time",
    description: "One setup, payments roll in automatically.",
  },
  {
    icon: BarChart3,
    title: "Simple dashboard",
    description: "Track all subscribers and payments in one place.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Insightful Analytics",
    description: "Get meaningful analytics and run your business better.",
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">FeezyPay</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for busy business owners who want to focus on growth, not payment collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 p-8 bg-gradient-subtle rounded-2xl border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                99%
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-success bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-sm text-muted-foreground">Automated Collection</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                5min
              </div>
              <p className="text-sm text-muted-foreground">Setup Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;