// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Public pages */
import Home from "./pages/public/Home.jsx";
import About from "./pages/public/About.jsx";
import Blog from "./pages/public/Blog.jsx";
import Contact from "./pages/public/Contact.jsx";

/* Auth */
import Login from "./pages/auth/Login.jsx"; // ⬅️ Make sure the file is `Login.jsx` (PascalCase)

/* Dashboard layout + pages */
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DashboardHome from "./pages/dashboard/DashboardHome.jsx";
import BlogManagement from "./pages/dashboard/BlogManagement.jsx";
import Settings from "./pages/dashboard/Settings.jsx";

/* Leads pages */
import AdmissionInquiries from "./pages/dashboard/leads/AdmissionInquiries.jsx";
import ContactInquiries from "./pages/dashboard/leads/ContactInquiries.jsx";
// import CallbackInquiries from "./pages/dashboard/leads/CallbackInquiries.jsx"; // optional

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard - layout route with nested child routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />                          {/* /dashboard */}
          <Route path="blog" element={<BlogManagement />} />                   {/* /dashboard/blog */}
          <Route path="settings" element={<Settings />} />                     {/* /dashboard/settings */}
          <Route path="admission-inquiries" element={<AdmissionInquiries />} />{/* /dashboard/admission-inquiries */}
          <Route path="contact-inquiries" element={<ContactInquiries />} />   {/* /dashboard/contact-inquiries */}
          {/* <Route path="callback-inquiries" element={<CallbackInquiries />} /> */} {/* /dashboard/callback-inquiries */}
        </Route>

        {/* fallback route (optional, 404) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
