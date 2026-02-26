import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
        <p>Feezy Pay is a subscription-based platform. Refunds are not available for partial months or unused time after payment.</p>
        <p>If you cancel before your next billing cycle, you won’t be charged again. In case of double billing or technical errors, email <strong>feezypay@gmail.com</strong> within 7 days for review.</p>
      </main>
      <Footer />
    </div>
  );
}
