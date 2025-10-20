import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

export default function Donate() {
  const [amount, setAmount] = useState("50");
  const [donationType, setDonationType] = useState("one-time");
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = [25, 50, 100, 250];

  const handleDonate = async () => {
    setIsProcessing(true);
    
    try {
      const parsed = parseFloat(amount);
      if (!isFinite(parsed) || parsed < 1) {
        alert("Please enter a valid amount (minimum $1)");
        setIsProcessing(false);
        return;
      }

      console.log("Creating checkout session for amount:", parsed);
      const amountInCents = Math.round(parsed * 100);

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInCents, donationType }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        console.error("Error creating checkout session:", err);
        throw new Error(err.error || "Failed to create checkout session");
      }

      const data: { id?: string; url?: string } = await res.json();
      console.log("Checkout session created:", data);

      // Prefer redirectToCheckout with session id when available
      const pk = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;
      console.log("Stripe publishable key:", pk ? "[HIDDEN]" : "NOT FOUND");
      
      if (pk && data.id) {
        console.log("Initializing Stripe with session ID:", data.id);
        const stripe = await loadStripe(pk);
        if (!stripe) {
          console.error("Failed to initialize Stripe");
          throw new Error("Stripe failed to initialize");
        }
        console.log("Redirecting to Stripe Checkout...");
        const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
        if (error) {
          console.error("Stripe redirect error:", error);
          throw error;
        }
      } else if (data.url) {
        // Fallback to direct URL if provided
        console.log("Redirecting to:", data.url);
        window.location.href = data.url;
      } else {
        const errorMsg = "Checkout session created but no redirect info was provided";
        console.error(errorMsg, { hasPk: !!pk, hasId: !!data.id, hasUrl: !!data.url });
        throw new Error(errorMsg);
      }
    } catch (e: any) {
      console.error(e);
      alert(e?.message || "Unable to start checkout. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl py-12 animate-fade-in-up">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Make a Donation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your contribution provides clean water to communities in need. 100% of donations go directly to water projects.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8 mb-8 hover-lift">
          <div className="flex gap-3 mb-8">
            <button 
              onClick={() => setDonationType("one-time")}
              className={`flex-1 px-6 py-3 font-semibold transition-colors hover-scale ${
                donationType === "one-time" 
                  ? "bg-[#1e3a8a] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              One-Time
            </button>
            <button 
              onClick={() => setDonationType("monthly")}
              className={`flex-1 px-6 py-3 font-semibold transition-colors hover-scale ${
                donationType === "monthly" 
                  ? "bg-[#1e3a8a] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset.toString())}
                className={`py-3 font-semibold transition-colors hover-scale ${
                  amount === preset.toString()
                    ? "bg-[#1e3a8a] text-white border-2 border-[#1e3a8a]"
                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400"
                }`}
              >
                ${preset}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">$</span>
              <input 
                type="number" 
                min="1"
                step="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 focus:border-[#1e3a8a] focus:outline-none text-lg"
                placeholder="Enter amount"
              />
            </div>
          </div>

          <button 
            onClick={handleDonate}
            disabled={isProcessing || !amount || parseFloat(amount) < 1}
            className="w-full bg-[#1e3a8a] text-white py-4 font-semibold hover:bg-[#1e3a8a]/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors hover-scale"
          >
            {isProcessing ? 'Processing...' : `Donate $${amount || '0'} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`}
          </button>
          
          <p className="text-sm text-gray-600 text-center mt-4">
            Secure payment processing through Stripe
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>• $50 provides clean water for one person for one year</p>
            <p>• $500 trains local leaders in water system maintenance</p>
            <p>• $5,000 builds a complete well system for a community</p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mt-6 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Deductible</h3>
          <p className="text-sm text-gray-600">
            SunSip is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law. Tax ID: XX-XXXXXXX
          </p>
        </div>
      </div>
    </div>
  );
}