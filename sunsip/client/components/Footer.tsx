import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About SunSip</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A nonprofit dedicated to providing sustainable clean water solutions to communities in need worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-600 hover:text-gray-900">
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/donate" className="text-[#1e3a8a] hover:underline font-medium">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Partner With Us
                </Link>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-4">
              Email: info@sunsip.org
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-200 text-sm text-gray-600 text-center">
          <p>© {currentYear} SunSip. 501(c)(3) Nonprofit Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
