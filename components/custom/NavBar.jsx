"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Hide entire navbar on /Home/pages/Auth
  if (pathname === "/Home/pages/Auth") return null;

  // ✅ Hide nav items on these specific routes
  const hideNavItems = [
    "/Home/pages/AboutUs",
    "/Home/pages/PrivicyPolicy",
    "/Home/pages/TermsOfService",
    "/Home/pages/ContactUs",
    "/Home/pages/Blog",
    "/Home/pages/Terms",
    "/Home/pages/Auth",
    "/Home/pages/404",
  ].includes(pathname);

  return (
    <div className="bg-white">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-500/50 border-b-2"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <img
                    src="/logo.jpg"
                    alt="logo"
                    className="h-10 w-10 rounded-md"
                  />
                  <div className="text-2xl font-bold text-gray-900  hero-font">
                    Invocea
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Nav Items */}
            {!hideNavItems && (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Pricing
                  </a>
                  <a
                    href="#testimonials"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Testimonials
                  </a>
                  <a href="#faq" className="text-gray-600 hover:text-blue-600">
                    FAQ
                  </a>
                  <a href="/Home/pages/Auth" className="text-gray-600 hover:text-blue-600">
                    Login
                  </a>
                </div>
              </div>
            )}

            {/* Start Free Button */}
            <div className="hidden md:block">
              <Link href="/Home/pages/Auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
                >
                  Start Free
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            {!hideNavItems && (
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {mobileMenuOpen && !hideNavItems && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600">
                Pricing
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600">
                Testimonials
              </a>
              <a href="#faq" className="block px-3 py-2 text-gray-600">
                FAQ
              </a>
              <a href="/Auth" className="block px-3 py-2 text-gray-600">
                Login
              </a>
              <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg mt-2">
                Start Free
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}
