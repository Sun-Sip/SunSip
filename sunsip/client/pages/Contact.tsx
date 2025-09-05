import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    volunteer: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      volunteer: e.target.checked
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/photo.png" alt="SunSip Logo" className="w-16 h-16 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-emerald-500/20" />
        </Link>
        <Navigation />
      </div>
      
      <div className="pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 relative bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent">
                Join The Mission
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform lives with clean water? Connect with us and become part of something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="mb-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">💬</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
                <p className="text-gray-500">We'll respond within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all duration-300 hover:border-blue-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all duration-300 hover:border-blue-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all duration-300 hover:border-blue-300 resize-none"
                    placeholder="Share your ideas, questions, or how you'd like to contribute..."
                    required
                  />
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-100">
                  <input
                    type="checkbox"
                    id="volunteer"
                    checked={formData.volunteer}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="volunteer" className="text-gray-700 leading-relaxed font-medium">
                    I want to volunteer and help distribute filters in my community
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-5 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center gap-3 group"
                >
                  <span>Launch Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Join SunSip?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🌟</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Direct Impact</h4>
                      <p className="text-blue-100 text-sm">See immediate results in communities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovation Hub</h4>
                      <p className="text-blue-100 text-sm">Work with cutting-edge water tech</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Network</h4>
                      <p className="text-blue-100 text-sm">Connect with change-makers worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
                  <p className="text-gray-600 text-sm">hello@sunsip.org</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Chat Support</h4>
                  <p className="text-gray-600 text-sm">24/7 response team</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white text-center shadow-lg">
                <h4 className="font-bold text-lg mb-2">🚀 Immediate Impact</h4>
                <p className="text-amber-100 text-sm">Join today, change lives tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}