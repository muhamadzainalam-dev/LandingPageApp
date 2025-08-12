"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to an API endpoint)
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-gray-900 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900  leading-tight mb-6"
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions, feedback, or need support? We're here to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900  mb-6 text-center lg:text-left">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
                      placeholder="Regarding your service..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full gradient-brand text-white py-3 px-6 rounded-lg font-semibold hover:shadow-brand-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                  Contact Information
                </h2>
                <div className="space-y-6 text-gray-700 text-lg">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email Us:</p>
                      <a
                        href="mailto:zennytrack@gmail.com"
                        className="hover:underline text-blue-600"
                      >
                        zennytrack@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Call Us:</p>
                      <a
                        href="tel:+923163834219"
                        className="hover:underline text-blue-600"
                      >
                        +92 316 343 4219
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-full h-full"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9 12.14 12.14 0 01-8.82-4.47 4.28 4.28 0 001.32 5.71 4.25 4.25 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.27 4.27 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.71 8.71 0 0024 5.5a8.48 8.48 0 01-2.54.7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Follow Us:</p>
                      <a
                        href="https://twitter.com/zennytrack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        Twitter
                      </a>{" "}
                      |
                      <a
                        href="https://linkedin.com/company/zennytrack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600 ml-1"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Support Availability
                  </h3>
                  <p className="text-gray-700">
                    We’re here to assist you 24/7 via email and chat.
                  </p>
                  <p className="text-gray-700">
                    Phone support is available Monday–Friday, 9:00 AM – 6:00 PM
                    PKT.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
