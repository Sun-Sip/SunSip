import { Navigation } from "@/components/Navigation";
import { useState } from "react";

export default function Donate() {
  const [customAmount, setCustomAmount] = useState(25);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-20">
        {/* Impact Stats */}
        <div className="bg-white py-16 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <div className="text-gray-600">Households Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">25+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-gray-600">Days to Results</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-gray-600">Positive Feedback</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Sponsor Clean Water
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation helps purchase materials, train volunteers, and bring SunSip filters to more 
              communities. Every dollar helps.
            </p>
          </div>

          {/* Donation Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* $5 Package */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-primary mb-2">$5</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Seed Pack</h3>
              <p className="text-gray-600 mb-6">
                Provides moringa seeds for multiple filters
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Choose $5
              </button>
            </div>

            {/* $15 Package - Highlighted */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-secondary text-center transform scale-105">
              <div className="text-3xl font-bold text-secondary mb-2">$15</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Filter for One</h3>
              <p className="text-gray-600 mb-6">
                Complete filter system for one person
              </p>
              <button className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Choose $15
              </button>
            </div>

            {/* $50 Package */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-primary mb-2">$50</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Household Setup</h3>
              <p className="text-gray-600 mb-6">
                Clean water for an entire family
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Choose $50
              </button>
            </div>

            {/* $150 Package */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-primary mb-2">$150</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Kit</h3>
              <p className="text-gray-600 mb-6">
                Multiple families and training materials
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Choose $150
              </button>
            </div>
          </div>

          {/* Secure Payment Options */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Secure Payment Options
            </h2>
            
            {/* Custom Amount */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                Custom Amount
              </h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-2xl font-bold text-gray-900">$</span>
                <input 
                  type="number" 
                  value={customAmount}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  className="text-2xl font-bold text-center border-b-2 border-gray-300 focus:border-primary outline-none w-20"
                />
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold">
                  Donate
                </button>
              </div>
              
              {/* Range Slider */}
              <div className="max-w-md mx-auto">
                <input 
                  type="range"
                  min="5"
                  max="500"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Progress */}
            <div className="text-center">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-secondary h-2 rounded-full w-1/4"></div>
              </div>
              <p className="text-gray-600">
                <span className="font-semibold text-secondary">25 lives</span> impacted so far
              </p>
            </div>
          </div>

          {/* Join the Mission CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Join the Mission
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
