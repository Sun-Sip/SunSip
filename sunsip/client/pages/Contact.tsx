import { Navigation } from "@/components/Navigation";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    volunteer: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join the Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to make a difference? Get in touch and become part of our growing community.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell us about yourself and how you'd like to help..."
                  required
                />
              </div>

              {/* Volunteer Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="volunteer"
                  checked={formData.volunteer}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="volunteer" className="text-gray-700 leading-relaxed">
                  I want to volunteer and help distribute filters in my community
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
