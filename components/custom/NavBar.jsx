"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "react-day-picker";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#howitworks" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ's", href: "#faq" },
    // { name: "Pricing", href: "#pricing" },
    // { name: "Login", href: "#login" },
  ];

  const hideNavItems = [
    "/pages/AboutUs",
    "/pages/PrivicyPolicy",
    "/pages/TermsOfService",
    "/pages/ContactUs",
    "/pages/Blog",
    "/pages/Terms",
    "/pages/Auth",
    "/pages/404",
  ].includes(pathname);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-[#155dfd] to-blue-700 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.jpg" alt="" className="h-8 w-8" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                ZennyTrack
              </span>
            </motion.div>
          </Link>

          {!hideNavItems && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-dm"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="#waitllist">
                <Button
                  variant="default"
                  className="bg-blue-700 hover:bg-blue-700/90 font-dm"
                >
                  Join Waitlist
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-dm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link href="#waitllist">
                <Button
                  variant="default"
                  className="w-full bg-blue-500 hover:bg-blue-500/90 font-dm"
                >
                  Join News Letter
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
