"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on /Auth route
  if (pathname === "/pages/Auth") return null;

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        // { name: "Pricing", href: "#pricing" },
        { name: "FAQ's", href: "#faq" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/pages/AboutUs" },
        // { name: "Blog", href: "/pages/Blog" },
        { name: "Contact", href: "/pages/ContactUs" },
      ],
    },
    {
      title: "Stay Connected",
      links: [
        { name: "Instagram", href: "https://instagram.com/zennytrack" },
        {
          name: "Facebook",
          href: "https://www.facebook.com/profile.php?id=61579216805718",
        },
        { name: "YouTube", href: "https://www.youtube.com/@zenny_track" },
        {
          name: "Pinterest",
          href: "https://www.pinterest.com/zennytrack",
        },
      ],
    },

    // {
    //   title: "Support",
    //   links: [{ name: "Contact", href: "/pages/ContactUs" }],
    // },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/pages/PrivicyPolicy" },
        // { name: "Terms of Service", href: "/pages/Terms" },
      ],
    },
  ];

  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <Link href="#">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-2 mb-4"
                >
                  <div className="w-10 h-10 bg-blue-600/20 to-blue-700 rounded-lg flex items-center justify-center overflow-hidden">
                    <img src="/logo.png" alt="" className="h-8 w-8" />
                  </div>
                  <span className="font-bold text-xl">AGAYN</span>
                </motion.div>
              </Link>
              <p className="font-dm text-white/80 mb-6 max-w-sm">
                The modern time tracking and invoicing solution for freelancers
                and teams who want to focus on their work, not their admin.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://x.com/zennytrack"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muhamadzain-dev/"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/zennytrack"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zennytrack@gmail.com&su=I%20want%20to%20learn%20more&body=Hello%2C%0AI%20would%20like%20to%20learn%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Footer sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * sectionIndex, duration: 0.8 }}
              >
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="font-dm text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="font-dm text-white/60 text-sm mb-4 md:mb-0">
              © 2025 AGAYN. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/pages/PrivicyPolicy"
                className="font-dm text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="/pages/ContactUs"
                className="font-dm text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
