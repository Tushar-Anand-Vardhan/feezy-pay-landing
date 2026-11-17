import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ClaudeHowTo } from "@/components/ClaudeHowTo";

export default function Claude() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">FeezyPay for Claude</p>
            <h1 className="text-3xl md:text-5xl font-bold">Ask Claude about your school’s fees</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              School owners can connect Claude to FeezyPay and ask about students, invoices,
              collections, and overdue fees in chat. Claude signs in as you. It only sees your
              school. It cannot record a payment or change a fee.
            </p>
          </div>

          <ClaudeHowTo />

          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-xl font-semibold text-foreground">What Claude can answer</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>What’s due? Who is overdue in a class?</li>
              <li>What has a student paid this year, and what is remaining?</li>
              <li>Collected this month, receipts, UPI vs cash</li>
            </ul>
            <p>
              Remaining means unpaid open invoices — the same numbers as the dashboard.{" "}
              <a href="https://mcp.feezypay.com/privacy" className="text-primary hover:underline">
                Privacy for this connector
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
