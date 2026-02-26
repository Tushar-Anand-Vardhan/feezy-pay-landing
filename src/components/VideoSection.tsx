import feezyDemoVideo from "@/assets/Feezy_demo_video.mp4";

export default function VideoSection() {
  return (
    <section className="section bg-gray-50 text-center">
      <div className="container mx-auto px-6 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
        Collecting fees has never been <span className="bg-gradient-primary bg-clip-text text-transparent">easier</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Most autopay platforms are bulky, expensive and not suitable for small business owners who run away from complicated dashboard.</p>
          
        <br></br>

        <div className="max-w-3xl mx-auto">
          <video
            className="rounded-xl shadow-lg w-full"
            src={feezyDemoVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          FeezyPay was built for businesses of all sizes. Its simple to use and solves one problem and solves it well.
          </p>
      </div>
    </section>
  );
}
