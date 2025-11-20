import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />  
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Compliance</h1>

        <p>
          Feezy Pay adheres to all major regulatory and compliance requirements
          relevant to UPI Autopay and SaaS platforms operating in India.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. UPI Autopay Compliance</h2>
        <p>
          All recurring mandates are created and processed through NPCI-approved
          UPI Autopay systems via Cashfree. We comply with all NPCI guidelines.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. RBI Guidelines</h2>
        <p>
          Since Feezy Pay does not store or process sensitive payment data
          directly, we rely on RBI-regulated partners for mandate processing and
          transaction execution.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Data Protection</h2>
        <p>
          We comply with India’s data privacy regulations and follow best
          practices for secure handling of customer information.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. WhatsApp Business Compliance</h2>
        <p>
          All WhatsApp messages are sent using approved WhatsApp Business API
          providers and follow WhatsApp’s business and commerce policies.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Audit and Logging</h2>
        <p>
          Internal access, platform behavior, and API operations are logged
          securely for auditing and fraud detection.
        </p>

        <p className="pt-4">
          For compliance questions, email <strong>feezypay@gmail.com</strong>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
