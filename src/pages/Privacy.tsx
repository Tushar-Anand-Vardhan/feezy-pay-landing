import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p>Feezy Pay helps small businesses automate recurring payments via UPI Autopay on WhatsApp.</p>
        <p>We collect minimal data. Name, email, and customer details uploaded by you. Payment authorizations are handled securely by Cashfree. Feezy Pay never stores sensitive payment info.</p>
        <p>Your data is used only to process transactions and improve the platform. We never sell or share it with third parties beyond payment partners.</p>
        <p>You may request deletion of your account by emailing <strong>feezypay@gmail.com</strong>.</p>
      </main>
      <Footer />
    </div>
  );
}
