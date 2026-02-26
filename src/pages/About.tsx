import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold mb-6">About Feezy Pay</h1>
        <p>Feezy Pay is a SaaS tool designed to help small businesses, tutors, landlords, and organizations automate recurring payments.</p>
        <p>We integrate directly with government-approved UPI Autopay partners like Cashfree to provide secure, frictionless payments on WhatsApp.</p>
        <p>Our goal is to give entrepreneurs freedom from manual collections and help them scale smoothly.</p>
      </main>
      <Footer />
    </div>
  );
}
