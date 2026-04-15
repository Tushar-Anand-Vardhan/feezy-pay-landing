import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustratioin.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-hero),_transparent_70%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Automate Fees.{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Track Collections.
                </span>
                <br />
                  Stay Organized.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                FeezyPay is a fee collection system that automates UPI Autopay mandates and payment tracking.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Button variant="hero" size="xl" className="group">
                Start Collecting Payments
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <a href="https://wa.me/918478902299?text=Hey%2C%20I%20wanted%20to%20know%20more%20about%20Feezypay."
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Get in Touch
                </Button>
              </a>
              <Button variant="outline" size="xl" asChild>
                <a href="#demo">Watch Demo</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Secure UPI Autopay</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">WhatsApp Native</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="FeezyPay automation illustration"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-success/10 rounded-full animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;