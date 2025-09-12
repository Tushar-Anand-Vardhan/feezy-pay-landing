const testimonials = [
  {
    quote: "Feezy Pay has completely transformed how I collect student fees. No more headaches!",
    author: "Rajesh Kumar",
    role: "Coaching Center Owner",
    location: "Mumbai",
    rating: 5
  },
  {
    quote: "Collecting rent from 20 tenants is now a one-click job. Love it.",
    author: "Priya Sharma", 
    role: "Landlord",
    location: "Delhi",
    rating: 5
  },
  {
    quote: "Our gym membership fees are collected automatically. Amazing service!",
    author: "Amit Patel",
    role: "Fitness Studio Owner", 
    location: "Bangalore",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our <span className="bg-gradient-success bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy business owners who've automated their payments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border hover:shadow-large transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by 1,000+ businesses across India</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-card rounded-lg border">
              <span className="font-semibold">UPI Autopay</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border">
              <span className="font-semibold">WhatsApp Business</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border">
              <span className="font-semibold">Bank Grade Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;