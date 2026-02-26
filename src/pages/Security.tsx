import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Security() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />  
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Security</h1>

        <p>
          At Feezy Pay, security is foundational to our product. We ensure that
          every payment interaction is safe, encrypted, and compliant with
          industry standards.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Payment Security</h2>
        <p>
          All transactions are processed securely through Cashfree, a
          government-approved, RBI-regulated payment aggregator. Sensitive UPI
          data is never stored on Feezy Pay servers.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Data Encryption</h2>
        <p>
          All data transferred between users and our platform is encrypted using
          HTTPS/TLS 1.2+. We enforce secure cookies and strict origin policies.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Infrastructure</h2>
        <p>
          Feezy Pay runs on hardened cloud infrastructure with secure access
          controls, network firewalls, and continuous monitoring.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Access Control</h2>
        <p>
          Only authorized personnel with a legitimate business need can access
          internal systems. All access is monitored and logged.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. WhatsApp Privacy</h2>
        <p>
          Feezy Pay uses approved WhatsApp Business API providers. Messages are
          template-based, secure, and follow WhatsApp’s commerce guidelines.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Vulnerability Reporting</h2>
        <p>
          If you discover a security issue, report it to
          <strong> feezypay@gmail.com</strong>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
