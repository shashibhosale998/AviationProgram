import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              SkyWings Aviation
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-black hover:text-blue-600 transition duration-300">
              Courses
            </a>
            <a href="#" className="text-black hover:text-blue-600 transition duration-300">
              About
            </a>
            <a href="#" className="text-black hover:text-blue-600 transition duration-300">
              Programs
            </a>
            <a href="#" className="text-black hover:text-blue-600 transition duration-300">
              Placements
            </a>
            <a href="#" className="text-black hover:text-blue-600 transition duration-300">
              Contact
            </a>

            {/* Login Button */}
            <a
              href="/login"
              className="px-6 py-2 font-semibold rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Login
            </a>

            {/* Enquire Now Button */}
            <a
              href="#"
              className="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Courses", "About", "Programs", "Placements", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-50"
              >
                {item}
              </a>
            ))}

            <a
              href="#"
              className="block w-full text-center mt-4 px-6 py-2 font-semibold rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Login
            </a>
            <a
              href="#"
              className="block w-full text-center mt-3 px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
