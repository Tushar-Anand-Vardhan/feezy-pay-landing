import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Never chase payments again.
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Automate your collections with Feezy Pay and get back your time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 border-white min-w-64"
            >
              Start Collecting Payments Today
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white hover:bg-white/10 min-w-48"
            >
              Book a Demo
            </Button>
          </div>

          {/* Features summary */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">5-Minute Setup</h3>
              <p className="text-white/80 text-sm">Get started in minutes, not hours</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Bank-Grade Security</h3>
              <p className="text-white/80 text-sm">Your money and data are safe</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">24/7 Support</h3>
              <p className="text-white/80 text-sm">We're here when you need us</p>
            </div>
          </div>

          {/* Final trust message */}
          <div className="pt-8">
            <p className="text-white/80 text-sm">
              Join 1,000+ businesses already automating their payments with Feezy Pay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;