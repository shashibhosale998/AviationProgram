import React from "react";
import { motion } from "framer-motion";
import { Home, FileText, Settings, LogOut } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Aviation Admin</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
            <Home size={18} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
            <FileText size={18} />
            <span>Blog</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
            <Settings size={18} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer text-red-500 hover:text-red-600 transition">
            <LogOut size={18} />
            <span>Logout</span>
          </li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-10"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome to your Dashboard 🚀
        </h2>

        {/* Example cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">Users</h3>
            <p className="text-gray-500 mt-2">Manage all registered users.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">Posts</h3>
            <p className="text-gray-500 mt-2">Create and manage blog posts.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">Settings</h3>
            <p className="text-gray-500 mt-2">Customize your application.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
