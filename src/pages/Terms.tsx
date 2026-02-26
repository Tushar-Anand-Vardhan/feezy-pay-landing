import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p>
          These Terms of Service (“Terms”) govern your access and use of the
          Feezy Pay platform (“Service”). By using Feezy Pay, you agree to
          these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Service Description</h2>
        <p>
          Feezy Pay is a payment automation SaaS tool that allows businesses
          and individuals to collect recurring payments using UPI Autopay via
          WhatsApp. Feezy Pay is not a payment gateway, payments are processed
          through our trusted third-party partner Cashfree Payments(RBI-regulated
          payment aggregator).
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Account Responsibility</h2>
        <p>
          You are responsible for safeguarding your account credentials and
          ensuring that data you upload (such as customer phone numbers) is
          lawful and accurate.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Acceptable Use</h2>
        <ul className="list-disc pl-6">
          <li>No spamming or unsolicited message sending.</li>
          <li>No use of the platform for fraudulent or illegal payments.</li>
          <li>No uploading incorrect or unauthorized customer data.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. Payment Terms</h2>
        <p>
          Subscription fees are billed monthly or annually as per the selected
          plan. Fees are non-refundable except in cases of double billing or
          verified technical errors.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Liability</h2>
        <p>
          Feezy Pay is not liable for failed transactions caused by customer
          banks, UPI infrastructure outages, or incorrect customer authorization.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Termination</h2>
        <p>
          We reserve the right to suspend accounts involved in violations of
          our policies or for suspicious/fraudulent activity.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Changes to Terms</h2>
        <p>
          Feezy Pay may update these Terms occasionally. Updates will be
          communicated via email or WhatsApp.
        </p>

        <p className="pt-4">For any queries: feezypay@gmail.com</p>
      </main>
      <Footer />
    </div>
  );
}
