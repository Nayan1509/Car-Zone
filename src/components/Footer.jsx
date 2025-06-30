// src/components/Footer.jsx

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">CarZone</h2>
            <p className="text-sm text-gray-400">
              Your premium car showroom for luxury and performance vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/home" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/cars" className="hover:text-blue-400">Cars</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-400">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">📍 New Delhi, India</p>
            <p className="text-sm text-gray-400">📞 +91 0123456789</p>
            <p className="text-sm text-gray-400">✉️ support@carzone.com</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CarZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
