import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import AdmissionPopup from "../../components/AdmissionPopup";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
   
     
      <div className="bg-gray-50 font-sans">
      {/* Admission Popup */}
      <AdmissionPopup />

      {/* Navbar */}
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative bg-blue-800 text-white py-20 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-80"></div>
        <div className="absolute top-4 left-4 p-2 bg-yellow-400 text-blue-900 rounded-lg font-bold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          India's #1 Aviation Institute
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left pt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Launch Your Aviation Career
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto md:mx-0">
            Join thousands of successful aviation professionals who started their journey with us
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-yellow-500 text-blue-900 font-bold rounded-lg transition duration-300 hover:bg-yellow-600">
              10,000+ Students Placed
            </button>
            <a href="#" className="px-6 py-3 border-2 border-white text-white rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-white hover:text-blue-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              </svg>
              <span>Apply Now</span>
            </a>
            <a href="#" className="px-6 py-3 border-2 border-white text-white rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-white hover:text-blue-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Watch Video</span>
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50,000+</p>
              <p className="text-sm">Graduates</p>
            </div>
            <div>
              <p className="text-3xl font-bold">200+</p>
              <p className="text-sm">Airline Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Aviation Training Programs --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-4 text-blue-600 bg-blue-100 rounded-full font-medium text-sm">
            Professional Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Aviation Training Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive training programs designed to prepare you for a successful career in aviation industry
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/placeholder-course-1.jpg" alt="Hospitality Services" className="w-full h-48 object-cover" />
              <span className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                8 Months
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Hospitality Services</h3>
              <p className="mt-1 text-gray-500">Travel & Customer Service Excellence</p>
              <div className="mt-4 flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h3.586a1 1 0 01.707.293L12.586 7.5a1 1 0 01.293.707V16a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM4 6v10h10v-3.586l-4-4H4z" /></svg>
                  <span>4 days/week</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                  <span>3 hours/day</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Key Features:</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Service Excellence
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Communication Skills
                  </li>
                </ul>
              </div>
              <a href="#" className="mt-6 inline-block w-full text-center py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300">
                Learn More
                <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/placeholder-course-2.jpg" alt="Pilot Training" className="w-full h-48 object-cover" />
              <span className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                24 Months
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Pilot Training Preparation</h3>
              <p className="mt-1 text-gray-500">Commercial Pilot License Foundation</p>
              <div className="mt-4 flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h3.586a1 1 0 01.707.293L12.586 7.5a1 1 0 01.293.707V16a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM4 6v10h10v-3.586l-4-4H4z" /></svg>
                  <span>6 days/week</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                  <span>6 hours/day</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Key Features:</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Flight Theory
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Navigation
                  </li>
                </ul>
              </div>
              <a href="#" className="mt-6 inline-block w-full text-center py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300">
                Learn More
                <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/placeholder-course-3.jpg" alt="Air Traffic Control" className="w-full h-48 object-cover" />
              <span className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                15 Months
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Air Traffic Control</h3>
              <p className="mt-1 text-gray-500">Aviation Communication & Control</p>
              <div className="mt-4 flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h3.586a1 1 0 01.707.293L12.586 7.5a1 1 0 01.293.707V16a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM4 6v10h10v-3.586l-4-4H4z" /></svg>
                  <span>5 days/week</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                  <span>4 hours/day</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Key Features:</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Radar Operations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Communication Protocols
                  </li>
                </ul>
              </div>
              <a href="#" className="mt-6 inline-block w-full text-center py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300">
                Learn More
                <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Placements Section --- */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-4 text-blue-600 bg-blue-100 rounded-full font-medium text-sm">
            Career Success
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Students Get Placed In
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Leading airlines and aviation companies across the globe trust our graduates
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-blue-100 mb-4">
              {/* Icon for Average Package */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6z" /></svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹4.5 LPA</p>
            <p className="text-gray-500 mt-1">Average Package</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-blue-100 mb-4">
              {/* Icon for Highest Package */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3v2a3 3 0 003-3v-2c0-1.657-1.343-3-3-3S9 9.343 9 11v2a3 3 0 003 3V8z" /></svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹12 LPA</p>
            <p className="text-gray-500 mt-1">Highest Package</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-blue-100 mb-4">
              {/* Icon for Placement Rate */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a4 4 0 100 8m0-8a4 4 0 010-8 4 4 0 010 8zm0 8a4 4 0 100-8m0 8a4 4 0 010-8 4 4 0 010 8z" /></svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">95%</p>
            <p className="text-gray-500 mt-1">Placement Rate</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-blue-100 mb-4">
              {/* Icon for Interview Success */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <p className="text-2xl font-bold text-gray-900">88%</p>
            <p className="text-gray-500 mt-1">Interview Success</p>
          </div>
        </div>
      </section>

      {/* --- Trusted by Airlines --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Leading Airlines
          </h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Replace with actual airline logos */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="/placeholder-logo.png" alt="Airline Logo" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Start Your Aviation Journey?
          </h2>
          <p className="mt-4 text-lg">
            Join thousands of successful aviation professionals
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full transition duration-300 hover:bg-white hover:text-blue-700"
            >
              <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 9a1 1 0 000 2h4a1 1 0 100-2H6zm0 4a1 1 0 000 2h8a1 1 0 100-2H6z" /></svg>
              Download Brochure
            </a>
            <a
              href="#"
              className="px-6 py-3 text-blue-700 font-semibold rounded-full bg-white transition duration-300 hover:bg-gray-100"
            >
              Apply Now
              <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 SkyWings Aviation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;