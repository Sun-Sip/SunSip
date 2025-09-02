import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-green-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            SunSip
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-8">
            Clean Water, Bright Future
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A youth-led clean water initiative empowering underserved communities with 
            affordable, locally built filtration systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/donate"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Join the Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-gray-600 font-medium">Households Impacted</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="text-4xl font-bold text-secondary mb-2">25+</div>
              <div className="text-gray-600 font-medium">People Helped</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-gray-600 font-medium">Days to Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
