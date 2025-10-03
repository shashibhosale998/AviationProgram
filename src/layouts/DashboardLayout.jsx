// src/layouts/DashboardLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

/**
 * DashboardLayout
 * - Sidebar + TopHeader + Outlet for nested routes
 */

const Sidebar = ({ className = "" }) => {
  const NavItem = ({ icon, label, to }) => (
    <NavLink
      to={to}
      end={to === "/dashboard"}
      className={({ isActive }) =>
        `flex items-center gap-3 w-full text-left px-4 py-3 rounded-md transition ${
          isActive ? "bg-blue-50 text-blue-700 font-medium shadow-sm" : "text-gray-600 hover:bg-gray-50"
        }`
      }
    >
      <span className="w-8 h-8 flex items-center justify-center rounded-md bg-white/60 text-gray-600">
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </NavLink>
  );

  return (
    <aside className={`w-72 min-w-[220px] border-r border-gray-200 h-screen sticky top-0 bg-white ${className}`}>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-md flex items-center justify-center text-white font-bold">A</div>
          <div>
            <div className="text-sm font-semibold">Aviation</div>
            <div className="text-xs text-gray-400">v.o.1</div>
          </div>
        </div>

        <nav className="space-y-2">
          <div className="text-xs text-gray-400 uppercase px-4 mb-1">Dashboard</div>

          <NavItem to="/dashboard" icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 13h8V3H3v10zM13 21h8v-8h-8v8zM13 3v8h8V3h-8zM3 21h8v-6H3v6z" fill="currentColor" />
            </svg>
          } label="Dashboard" />

          <div className="text-xs text-gray-400 uppercase px-4 mt-6 mb-1">Leads</div>

          <NavItem to="/dashboard/admission-inquiries" icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2L1 7l11 5 9-4.09V17a1 1 0 01-1 1h-2v2h-2v-2H9v2H7v-2H5a1 1 0 01-1-1V7L12 11" fill="currentColor" />
            </svg>
          } label="Admission Inquiries" />

          <NavItem to="/dashboard/contact-inquiries" icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M21 16.5v3a2 2 0 01-2.2 2 19 19 0 01-8.6-3.4 19 19 0 01-6.6-6.6A19 19 0 012 5.2 2 2 0 014 3h3A2 2 0 019 4.2c.1.8.3 1.6.6 2.4a2 2 0 01-.5 2.1L8.1 10.9a13 13 0 006 6l1.9-1.1a2 2 0 012.1-.5c.8.3 1.6.5 2.4.6A2 2 0 0121 16.5z" fill="currentColor" />
            </svg>
          } label="Contact Inquiries" />

          <div className="text-xs text-gray-400 uppercase px-4 mt-6 mb-1">Website</div>

          <NavItem to="/" icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2L2 7v13h20V7L12 2z" fill="currentColor" />
            </svg>
          } label="Home" />

          <NavItem to="/about" icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          } label="About" />

          <NavItem to="/dashboard/admission" icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          } label="Admission" />
        </nav>
      </div>
    </aside>
  );
};

const TopHeader = () => (
  <header className="flex items-center justify-between gap-4 py-4 px-6 border-b border-gray-100 bg-white">
    <div className="flex items-center gap-4">
      <button className="p-2 rounded-md lg:hidden hover:bg-gray-50" aria-label="menu">
        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="text-lg font-semibold">Welcome</div>
    </div>

    <div className="flex items-center gap-4">
      <button className="p-2 rounded-full hover:bg-gray-50" title="Toggle theme">
        <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <button className="p-2 rounded-full hover:bg-gray-50" title="Settings">
        <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM19.4 15a1 1 0 0 0 .2 1.1l.6.6a1 1 0 0 1-1.4 1.4l-.6-.6a1 1 0 0 0-1.1-.2 7 7 0 0 1-3.9 0 1 1 0 0 0-1.1.2l-.6.6a1 1 0 1 1-1.4-1.4l.6-.6a1 1 0 0 0 .2-1.1 7 7 0 0 1 0-3.9 1 1 0 0 0-.2-1.1l-.6-.6a1 1 0 1 1 1.4-1.4l.6.6a1 1 0 0 0 1.1.2 7 7 0 0 1 3.9 0 1 1 0 0 0 1.1-.2l.6-.6a1 1 0 1 1 1.4 1.4l-.6.6a1 1 0 0 0-.2 1.1 7 7 0 0 1 0 3.9z" fill="currentColor"/></svg>
      </button>

      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/32?img=5" alt="you" className="w-9 h-9 rounded-full border border-gray-100" />
      </div>
    </div>
  </header>
);

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopHeader />
        <main className="p-6">
          {/* page content renders here */}
          <section className="">
            <Outlet />
          </section>

          <footer className="mt-8 text-sm text-gray-400 flex justify-between">
            <div>Aviation crafted with ♥ by Meta Plus Media Pvt Ltd</div>
            <div className="space-x-6">
              <a href="/" className="hover:underline">Home</a>
              <a href="/support" className="hover:underline">Support</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
