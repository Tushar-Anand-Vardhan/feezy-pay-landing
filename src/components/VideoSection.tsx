const DEMO_EMBED_URL = "https://www.youtube-nocookie.com/embed/ipETf7zQJFc";
const DEMO_WATCH_URL = "https://youtu.be/ipETf7zQJFc";

export default function VideoSection() {
  return (
    <section className="section bg-gray-50 text-center">
      <div className="container mx-auto px-6 space-y-4">
        <h2
          id="demo-heading"
          className="text-3xl md:text-5xl font-bold"
        >
          Collecting fees has never been{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">easier</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Most autopay platforms are bulky, expensive and not suitable for small business owners who run away from complicated dashboard.
        </p>

        <div className="max-w-4xl mx-auto pt-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-border/50 bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={DEMO_EMBED_URL}
              title="FeezyPay product demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            <a
              href={DEMO_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Watch on YouTube
            </a>
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-2">
          FeezyPay was built for businesses of all sizes. Its simple to use and solves one problem and solves it well.
        </p>
      </div>
    </section>
  );
}
