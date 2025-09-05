import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

const stats = [
  { value: 7, label: "Households Impacted", color: "text-primary" },
  { value: 25, label: "People Helped", color: "text-secondary" },
  { value: 3, label: "Days to Impact", color: "text-primary" },
];

const features = [
  {
    title: "Instant Purification",
    description: "Advanced filtration technology delivering clean water instantly",
    icon: "⚡",
  },
  {
    title: "Solar Powered",
    description: "Sustainable energy solutions for remote communities",
    icon: "☀️",
  },
  {
    title: "Smart Monitoring",
    description: "Real-time water quality tracking and analytics",
    icon: "📊",
  },
  {
    title: "Mobile Integration",
    description: "App-controlled systems with remote management",
    icon: "📱",
  },
  {
    title: "Community Hubs",
    description: "Centralized water stations with social impact",
    icon: "🏘️",
  },
  {
    title: "Youth Innovation",
    description: "Next-gen leaders driving sustainable solutions",
    icon: "🌟",
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/photo.png" alt="SunSip Logo" className="w-16 h-16 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-emerald-500/20" />
        </Link>
        <Navigation />
      </div>

      <section className="relative w-full h-[700px] md:h-[800px] bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-600">
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            SunSip
          </h1>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6">
            Clean Water, Bright Future
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-8 backdrop-blur-sm bg-black/30 rounded-xl p-4">
            A youth-led clean water initiative empowering underserved communities
            with affordable, locally built filtration systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-teal-500/25"
            >
              Join the Mission
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent">
            Next-Gen Water Solutions
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology meets sustainable impact
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center border border-gray-100 group"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
              Impact Metrics
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Real results from community-driven solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`text-6xl font-bold mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}{stat.label === "People Helped" ? "+" : ""}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent">
            Join the Movement
          </h2>
          <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
            Be part of the clean water revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/donate"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
            >
              Support Our Cause
            </Link>
            <Link
              to="/volunteer"
              className="border-2 border-emerald-600 text-emerald-600 px-12 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/photo.png" alt="SunSip Logo" className="w-12 h-12 object-cover rounded-lg" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing water access through innovation and community
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>             
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span className="text-xl">📸</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span className="text-xl">🐦</span>
              </a>
            </div>
            <p className="text-gray-400">hello@sunsip.org</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SunSip. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}