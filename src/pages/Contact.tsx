import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />  
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

        <p className="text-lg mb-6 text-center">
          We are here to help with anything related to Feezy Pay: subscriptions,
          onboarding, payments, integrations, or general questions.
        </p>

        <div className="bg-white rounded-xl shadow p-8 space-y-6 max-w-xl mx-auto">
          <div>
            <h2 className="text-xl font-semibold">Name</h2>
            <p className="text-gray-700">Tushar Anand Vardhan</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-700">8478902299</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-700">feezypay@gmail.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Support Hours</h2>
            <p className="text-gray-700">Monday – Saturday, 9 AM – 7 PM IST</p>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-10">
          For urgent issues, call or WhatsApp us anytime.
        </p>
      </main>

      <Footer />
    </div>
  );
}
