import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-[#1e3a8a]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              Clean Water Saves Lives
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              785 million people lack access to clean water. Your donation provides sustainable water solutions to communities in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="inline-block bg-white text-[#1e3a8a] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                to="/about"
                className="inline-block border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
              Your Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every dollar goes directly to building wells, installing filters, and training communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8">
              <div className="text-[#1e3a8a] text-4xl font-bold mb-3">$50</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Water Filter</h3>
              <p className="text-gray-600 leading-relaxed">
                Provides clean drinking water for one person for one year through household filtration systems.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <div className="text-[#1e3a8a] text-4xl font-bold mb-3">$500</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Trains local leaders to maintain water systems and educate their communities on hygiene practices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <div className="text-[#1e3a8a] text-4xl font-bold mb-3">$5,000</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Well Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Builds a complete water well system serving an entire community with sustainable access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200">
              <div className="text-5xl font-bold text-[#1e3a8a] mb-2">7</div>
              <div className="text-gray-600 font-medium">Households Served</div>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200">
              <div className="text-5xl font-bold text-[#1e3a8a] mb-2">25+</div>
              <div className="text-gray-600 font-medium">People with Clean Water</div>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200">
              <div className="text-5xl font-bold text-[#1e3a8a] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Transparent Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#1e3a8a]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Make Clean Water a Reality
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Your donation directly funds wells, filters, and training programs. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-block bg-white text-[#1e3a8a] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Today
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
