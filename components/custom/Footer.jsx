"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ Import pathname

export default function Footer() {
  const pathname = usePathname();

  // ✅ Hide footer on /Auth route
  if (pathname === "/Home/pages/Auth") return null;

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ's", href: "#faq" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/Home/pages/AboutUs" },
        { name: "Blog", href: "/Home/pages/Blog" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "/Home/pages/ContactUs" },
      ],
    },
    {
      title: "Support",
      links: [{ name: "Contact", href: "/Home/pages/ContactUs" }],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/Home/pages/PrivicyPolicy" },
        { name: "Terms of Service", href: "/Home/pages/Terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-600 rounded-md overflow-hidden flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    <img src="/logo.jpg" alt="logo" />
                  </span>
                </div>
                <span className="font-bold text-xl">Invocea</span>
              </div>
              <p className="font-dm text-white/80 mb-6 max-w-sm">
                The modern time tracking and invoicing solution for freelancers
                and teams who want to focus on their work, not their admin.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
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
              © 2025 Invocea. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/Home/pages/PrivicyPolicy"
                className="font-dm text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="/Home/pages/Terms"
                className="font-dm text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="/Home/pages/ContactUs"
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
