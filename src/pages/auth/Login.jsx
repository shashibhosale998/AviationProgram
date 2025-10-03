import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ import

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/api/users/login", formData);
      console.log("Login Success:", res.data);

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-900 items-center justify-center relative">
        <motion.img
          src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
          alt="Aerospace"
          className="w-full h-full object-cover opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute text-white text-center px-10">
          <h1 className="text-4xl font-bold">Aviation Portal</h1>
          <p className="mt-4 text-lg">
            Empowering aerospace training with seamless digital solutions.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white px-8 lg:px-16">
        <div className="w-full max-w-md">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Welcome Back
          </motion.h2>
          <p className="mt-2 text-center text-gray-500">Login to your account</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 font-semibold hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
