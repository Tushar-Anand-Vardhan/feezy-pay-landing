import { Button } from "@/components/ui/button";

const pricingTiers = [
  { students: "Up to 50", autoLink: "₹499", autopay: "₹799" },
  { students: "51–100", autoLink: "₹799", autopay: "₹1,099" },
  { students: "101–500", autoLink: "₹1,299", autopay: "₹1,599" },
  { students: "501+", autoLink: "₹1,999", autopay: "₹2,299" },
] as const;

const whatsappHref =
  "https://wa.me/918478902299?text=Hey%2C%20I%20wanted%20to%20know%20more%20about%20Feezypay.";

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick your student slab and choose between Auto Link and UPI Autopay.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-10">
          <div className="relative rounded-2xl border bg-card overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-hero),_transparent_70%)] opacity-40 pointer-events-none" />

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Pricing by active students</h3>
                  <p className="text-muted-foreground">
                    Choose your slab. Upgrade to Autopay for recurring mandate automation.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Auto Link</span>
                  <span className="px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                    Autopay
                  </span>
                </div>
              </div>

              {/* Desktop table */}
              <div className="hidden md:block">
                <div className="rounded-xl border bg-background/40 overflow-hidden">
                  <div className="grid grid-cols-12 text-sm font-semibold text-muted-foreground">
                    <div className="col-span-5 px-5 py-4">Active students</div>
                    <div className="col-span-3 px-5 py-4 text-right">Auto Link</div>
                    <div className="col-span-4 px-5 py-4 text-right">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Autopay
                      </span>
                    </div>
                  </div>

                  <div className="divide-y">
                    {pricingTiers.map((tier) => (
                      <div key={tier.students} className="grid grid-cols-12 items-center">
                        <div className="col-span-5 px-5 py-5 font-medium">{tier.students}</div>
                        <div className="col-span-3 px-5 py-5 text-right font-semibold">{tier.autoLink}</div>
                        <div className="col-span-4 px-5 py-5 text-right">
                          <span className="inline-flex items-center justify-end w-full rounded-lg bg-gradient-subtle border border-primary/30 px-3 py-2 font-bold">
                            {tier.autopay}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {pricingTiers.map((tier) => (
                  <div key={tier.students} className="rounded-xl border bg-background/40 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-semibold">{tier.students}</div>
                      <span className="text-xs text-muted-foreground">Active students</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="rounded-lg border bg-card p-4">
                        <div className="text-xs text-muted-foreground">Auto Link</div>
                        <div className="text-xl font-bold mt-1">{tier.autoLink}</div>
                      </div>
                      <div className="rounded-lg border border-primary/30 bg-gradient-subtle p-4">
                        <div className="text-xs text-muted-foreground">Autopay</div>
                        <div className="text-xl font-bold mt-1">{tier.autopay}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="hero" size="lg" className="w-full">
                    Get in touch
                  </Button>
                </a>
                <a href="#video-sectioin" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">
                    Watch demo
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Prices shown are per month. Payment processing is handled by RBI regulated payment partners.
              </p>
            </div>
          </div>
        </div>

        <p className="text-md text-muted-foreground max-w-3xl mx-auto">
          FeezyPay is a software platform. Payment processing is handled by RBI regulated payment partners.
        </p>
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