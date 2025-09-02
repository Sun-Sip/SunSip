import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Donate() {
  const [customAmount, setCustomAmount] = useState(25);
  const [selectedAmount, setSelectedAmount] = useState(15);
  const [donationType, setDonationType] = useState("one-time");

  const impactStats = [
    { value: "7", label: "Households Transformed", icon: "🏠", color: "text-blue-600" },
    { value: "25+", label: "Lives Impacted", icon: "✨", color: "text-emerald-600" },
    { value: "3", label: "Days to Results", icon: "⚡", color: "text-purple-600" },
    { value: "100%", label: "Success Rate", icon: "🎯", color: "text-amber-600" }
  ];

  const donationTiers = [
    { amount: 5, title: "Seed Pack", desc: "Moringa seeds for multiple filters", impact: "Helps 1 person", icon: "🌱" },
    { amount: 15, title: "Filter for One", desc: "Complete filter system for one person", impact: "Saves 1 life", icon: "💧" },
    { amount: 50, title: "Household Setup", desc: "Clean water for entire household", impact: "Transforms 1 family", icon: "🏡" },
    { amount: 150, title: "Community Kit", desc: "Multiple families + training", impact: "Empowers community", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-lg">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/photo.png" alt="SunSip Logo" className="w-16 h-16 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-emerald-500/20" />
        </Link>
        <Navigation />
      </div>

      <div className="pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <h1 className="text-6xl font-bold mb-6 relative bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent">
                Fuel the Revolution
              </h1>
            </div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your support powers our mission to bring clean water to every community. 
              Join thousands of changemakers making waves of impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 mb-12">
                <div className="flex gap-4 mb-8">
                  <button 
                    onClick={() => setDonationType("one-time")}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      donationType === "one-time" 
                        ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-2xl" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    One-Time Impact
                  </button>
                  <button 
                    onClick={() => setDonationType("monthly")}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      donationType === "monthly" 
                        ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-2xl" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Monthly Revolution
                  </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {donationTiers.map((tier) => (
                    <div
                      key={tier.amount}
                      onClick={() => setSelectedAmount(tier.amount)}
                      className={`p-6 rounded-2xl text-center cursor-pointer transition-all duration-300 border-2 ${
                        selectedAmount === tier.amount
                          ? "border-emerald-500 bg-emerald-50 scale-105 shadow-lg"
                          : "border-gray-200 bg-white hover:border-blue-300 hover:scale-102"
                      }`}
                    >
                      <div className="text-4xl mb-3">{tier.icon}</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">${tier.amount}</div>
                      <div className="font-semibold text-gray-700 mb-2">{tier.title}</div>
                      <div className="text-sm text-gray-600 mb-3">{tier.desc}</div>
                      <div className="text-xs font-bold text-emerald-600">{tier.impact}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Custom Impact Amount</h3>
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-600">$</span>
                      <input 
                        type="number" 
                        value={customAmount}
                        onChange={(e) => setCustomAmount(Math.max(1, Number(e.target.value)))}
                        className="text-3xl font-bold text-center border-2 border-gray-300 rounded-xl pl-10 pr-6 py-4 w-32 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 outline-none"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
                      Donate Now
                    </button>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="1000"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-600 [&::-webkit-slider-thumb]:to-emerald-600"
                  />
                </div>

                <div className="text-center">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(25 / 100) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-bold text-emerald-600">25 lives transformed</span> – Help us reach 100!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-10 text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Payment Security</h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-white/10 rounded-2xl">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="font-bold mb-2">Bank-Level Encryption</h4>
                    <p className="text-blue-100 text-sm">256-bit SSL security</p>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-2xl">
                    <div className="text-4xl mb-4">💳</div>
                    <h4 className="font-bold mb-2">Multiple Options</h4>
                    <p className="text-blue-100 text-sm">Card, PayPal, Crypto</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center">💳</div>
                  <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center">📱</div>
                  <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center">₿</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Real-Time Impact</h3>
                <div className="space-y-4">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="text-3xl">{stat.icon}</div>
                      <div>
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-gray-600 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">🚀 Instant Impact</h3>
                <p className="text-amber-100 mb-6">Your donation activates within 24 hours</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                    <span className="text-sm">Immediate filter deployment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                    <span className="text-sm">Real-time tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                    <span className="text-sm">Impact report within days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Donate?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Direct Impact</h4>
                      <p className="text-gray-600 text-sm">100% goes to field operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Transparency</h4>
                      <p className="text-gray-600 text-sm">Real-time impact tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Speed</h4>
                      <p className="text-gray-600 text-sm">Deployment within days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}