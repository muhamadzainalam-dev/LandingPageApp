"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowLeft,
  Github,
  Chrome,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const slideIn = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.4 },
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    localStorage.setItem("Authenticated", "true");
    redirect("/");
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-600/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-blue-600/20 rounded-full animate-float delay-500"></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-blue-600/40 rounded-full animate-float delay-1000"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="text-center lg:text-left">
            <Link
              href="/"
              className="inline-flex items-center text-gray-800 hover:text-blue-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 font-funnel leading-tight mb-6">
              Welcome to <span className="text-blue-600">TimeTracker</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join thousands of freelancers who have transformed their workflow.
              Track time, manage projects, and get paid faster.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "⏱️ Automatic time tracking",
                "📊 Professional invoicing",
                "👥 Client management",
                "📈 Detailed reporting",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-2xl mr-3">{feature.split(" ")[0]}</span>
                  <span className="text-lg">{feature.substring(3)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 lg:p-10 relative overflow-hidden">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              {/* Mobile Back Button */}
              <div className="lg:hidden mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <AnimatePresence mode="wait">
                  <motion.div key={isLogin ? "login" : "signup"} {...slideIn}>
                    <h2 className="text-3xl font-bold text-gray-800 font-funnel mb-2">
                      {isLogin ? "Welcome back" : "Create account"}
                    </h2>
                    <p className="text-gray-700">
                      {isLogin ? "Sign in to your account to continue" : ""}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-blue-600/30 hover:shadow-blue-700 transition-all duration-300"
                >
                  <Chrome className="w-5 h-5 mr-3" />
                  Continue with Google
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-blue-600/30 hover:shadow-blue-700 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-3" />
                  Continue with GitHub
                </motion.button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Form */}
              <AnimatePresence mode="wait">
                <motion.form
                  key={isLogin ? "login-form" : "signup-form"}
                  {...slideIn}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Field (Sign Up Only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
                          placeholder="Enter your full name"
                          required={!isLogin}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me / Forgot Password */}
                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Remember me
                        </span>
                      </label>
                      <a
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-600 transition-colors"
                      >
                        Forgot password?
                      </a>
                    </div>
                  )}

                  {/* Terms Agreement (Sign Up Only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600 mt-1"
                          required
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          I agree to the{" "}
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-600 transition-colors"
                          >
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-600 transition-colors"
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-blue-800 transition-all duration-300 transform hover:scale-105"
                  >
                    {isLogin ? "Sign In" : "Create Account"}
                  </motion.button>
                </motion.form>
              </AnimatePresence>

              {/* Toggle Auth Mode */}
              <div className="text-center mt-6">
                <p className="text-gray-700">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <button
                    onClick={toggleAuthMode}
                    className="text-blue-600 hover:text-blue-600 font-semibold transition-colors"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
