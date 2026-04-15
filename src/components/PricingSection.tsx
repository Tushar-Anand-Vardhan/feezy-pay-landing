import { Button } from "@/components/ui/button";

const pricingTiers = [
  { customers: "Up to 50", autoLink: "₹499", autopay: "₹799" },
  { customers: "51–100", autoLink: "₹799", autopay: "₹1,099" },
  { customers: "101–500", autoLink: "₹1,299", autopay: "₹1,599" },
  { customers: "501+", autoLink: "₹1,999", autopay: "₹2,299" },
] as const;

const whatsappHref =
  "https://wa.me/918478902299?text=Hey%2C%20I%20wanted%20to%20know%20more%20about%20Feezypay.";

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple pricing based on{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">active customers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No setup fees. No hidden charges.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-10">
          <div className="relative rounded-2xl border bg-card overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-hero),_transparent_70%)] opacity-40 pointer-events-none" />

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Pricing by active customers</h3>
                  <p className="text-muted-foreground">
                    Choose your slab. Upgrade to Autopay for recurring mandate automation.
                  </p>
                </div>
              </div>

              {/* Auto Link vs Autopay */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl border bg-background/40 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-semibold">
                      Auto Link
                    </span>
                    <span className="text-xs text-muted-foreground">Best for manual follow-ups</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Send payment links via WhatsApp
                  </p>
                </div>

                <div className="rounded-xl border border-primary/30 bg-gradient-subtle p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-background/60 px-3 py-1 text-sm font-semibold">
                      Autopay
                    </span>
                    <span className="text-xs font-semibold text-foreground/80">Premium</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Automatically collect payments on due date
                  </p>
                </div>
              </div>

              {/* Desktop table */}
              <div className="hidden md:block">
                <div className="rounded-xl bg-background/40 overflow-hidden">
                  <div className="grid grid-cols-12 text-sm font-semibold text-muted-foreground">
                    <div className="col-span-5 px-5 py-4">Active customers</div>
                    <div className="col-span-3 px-5 py-4 text-right">Auto Link</div>
                    <div className="col-span-4 px-5 py-4 text-right">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Autopay
                      </span>
                    </div>
                  </div>

                  <div className="mt-1 space-y-2">
                    {pricingTiers.map((tier) => (
                      <div
                        key={tier.customers}
                        className="grid grid-cols-12 items-center rounded-lg bg-background/60 px-5 py-4"
                      >
                        <div className="col-span-5 font-semibold">{tier.customers}</div>
                        <div className="col-span-3 text-right text-lg font-bold text-foreground">
                          {tier.autoLink}
                        </div>
                        <div className="col-span-4 text-right">
                          <span className="inline-flex items-center justify-end rounded-lg border border-primary/30 bg-gradient-subtle px-3 py-2 text-lg font-bold">
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
                  <div key={tier.customers} className="rounded-xl bg-background/40 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-semibold">{tier.customers}</div>
                      <span className="text-xs text-muted-foreground">Active customers</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="rounded-lg bg-card p-4">
                        <div className="text-xs text-muted-foreground">Auto Link</div>
                        <div className="text-xl font-bold mt-1 text-foreground">{tier.autoLink}</div>
                      </div>
                      <div className="rounded-lg border border-primary/30 bg-gradient-subtle p-4">
                        <div className="text-xs text-muted-foreground">Autopay</div>
                        <div className="text-xl font-bold mt-1">{tier.autopay}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                You pay based on your active customers each month. Upgrade anytime as you grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="hero" size="lg" className="w-full">
                    Book a demo
                  </Button>
                </a>
                <a href="#video-sectioin" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full opacity-80 hover:opacity-100">
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