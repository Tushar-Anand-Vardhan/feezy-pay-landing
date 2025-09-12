import feezyDemoVideo from "@/assets/Feezy_demo_video.mp4";

export default function VideoSection() {
  return (
    <section className="section bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Collecting Fees have never been easier</h2>
        <p className="text-lg text-gray-600 mb-8">
          Most autopay platforms are bulky, expensive and not suitable for small business owners who run away from complicated dashboard.
        </p>
        <p>
            Feezy was built for them. Its super simple to use and solves one great problem amazingly.
        </p>
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
      </div>
    </section>
  );
}
