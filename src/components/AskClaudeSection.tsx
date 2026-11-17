import { Link } from "react-router-dom";
import { ClaudeHowTo } from "@/components/ClaudeHowTo";

const AskClaudeSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">New</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Ask Claude about{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">your collections</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect your FeezyPay school to Claude. Ask who is overdue, what a student has paid, or
            what came in this month. Answers come from your dashboard, for your school only.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ClaudeHowTo />
          <p className="text-center text-sm text-muted-foreground mt-8">
            More detail, including privacy:{" "}
            <Link to="/claude" className="text-primary hover:underline">
              feezypay.com/claude
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AskClaudeSection;
