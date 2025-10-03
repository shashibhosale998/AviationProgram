// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/xproguard" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/xproguard" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Xproguard" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/xproguard/#" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/xproguard" },
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@xproguard.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "123 Security Street, Tech Valley, CA 94025" },
  ];

  return (
    <footer className="relative w-full bg-[#0A192F] text-gray-300 overflow-hidden">
      {/* Background overlay (pointer-events-none so it doesn't block clicks) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(10, 25, 47, 0.95), rgba(10, 25, 47, 0.8)), url('https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e42412a75f0eb7e72b5d14_pattern-01.svg')",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      {/* Content - centered and constrained */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left - Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">Xproguard</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-sm">
            Securing the future with innovative cybersecurity solutions.
          </p>

          <div className="flex space-x-3 mt-6">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white transition-all inline-flex items-center justify-center"
                aria-label={name}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <Link to="/" className="text-gray-400 hover:text-blue-400 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link to="/applications" className="text-gray-400 hover:text-blue-400 transition-all">
                Applications
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-all">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-gray-400 hover:text-blue-400 transition-all">
                News
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">Contact Us</h3>
          <ul className="space-y-3 text-lg">
            {contactInfo.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start text-gray-400">
                <Icon className="h-6 w-6 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {currentYear} Xproguard. All rights reserved.
      </div>
    </footer>
  );
}
