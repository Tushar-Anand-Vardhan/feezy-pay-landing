import { useState } from "react";
import { Button } from "@/components/ui/button";

export const CLAUDE_MCP_URL = "https://mcp.feezypay.com/mcp";

const steps = [
  {
    number: "01",
    title: "Open Claude",
    description: "Go to claude.ai and sign in. A free Claude account works. You need a FeezyPay school owner login.",
  },
  {
    number: "02",
    title: "Add FeezyPay as a custom connector",
    description:
      "Customize → Connectors → Add custom connector. Name it FeezyPay. Paste the MCP URL below. Leave Client ID and Secret blank. Use Claude’s published identity.",
  },
  {
    number: "03",
    title: "Sign in with FeezyPay",
    description:
      "Claude opens a FeezyPay page. Use the same email and password as app.feezypay.com. Allow read-only access.",
  },
  {
    number: "04",
    title: "Ask about your school",
    description:
      "In a new chat, turn the FeezyPay connector on. Try “What’s due?”, “Who is overdue in Nursery?”, or “What has this student paid?”",
  },
];

export function ClaudeHowTo() {
  const [copied, setCopied] = useState(false);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(CLAUDE_MCP_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex gap-6 p-6 rounded-xl bg-card border hover:shadow-medium transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-xl bg-muted/40 border space-y-3">
        <p className="text-sm font-medium">Connector URL</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <code className="flex-1 text-sm break-all bg-card border rounded-lg px-4 py-3">
            {CLAUDE_MCP_URL}
          </code>
          <Button type="button" variant="outline" onClick={copyUrl}>
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Claude only sees the school you signed in as. It cannot record payments or change fees.
          Due means unpaid open invoices, not a guessed balance.
        </p>
      </div>
    </div>
  );
}
