import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    description: "Perfect for small businesses getting started",
    subscribers: "up to 100 subscribers",
    // features: [
    //   "WhatsApp notifications",
    //   "UPI Autopay setup",
    //   "Basic dashboard", 
    //   "Email support",
    //   "Payment retry logic"
    // ],
    popular: false,
    cta: "Coming soon" // "Get Started"
  },
  {
    name: "Growth",
    price: "₹1,499", 
    period: "/month",
    description: "Best for growing businesses",
    subscribers: "up to 500 subscribers",
    // features: [
    //   "Everything in Starter",
    //   "Advanced analytics",
    //   "Custom reminders",
    //   "Priority support"
    // ],
    popular: true,
    cta: "Get in touch"// "Start Growing"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large businesses with custom needs",
    subscribers: "unlimited subscribers",
    // features: [
    //   "Everything in Growth",
    //   "Dedicated account manager", 
    //   "Custom integrations",
    //   "White-label solution",
    //   "SLA guarantees",
    //   "Advanced reporting"
    // ],
    popular: false,
    cta: "Coming Soon" // "Contact Sales"
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-subtle border-primary shadow-glow' 
                  : 'bg-card hover:shadow-large'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.subscribers}</p>
                </div>

                {/* Features */}
                {/* <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg 
                        className="w-5 h-5 text-success flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul> */}

                {/* CTA */}
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12 p-6 bg-success-light rounded-xl">
          <div className="flex items-center justify-center gap-2 text-success mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">30-Day Money Back Guarantee</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;