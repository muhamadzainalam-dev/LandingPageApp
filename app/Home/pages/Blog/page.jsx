"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Mastering Time Management as a Freelancer",
      description:
        "Learn effective strategies to optimize your time and boost productivity.",
      date: "July 28, 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Productivity",
      url: "#",
    },
    {
      title: "5 Tips for Creating Professional Invoices",
      description:
        "Ensure you get paid on time with these essential invoicing best practices.",
      date: "July 20, 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Finance",
      url: "#",
    },
    {
      title: "Project Management for Creative Professionals",
      description:
        "Streamline your creative projects from concept to completion.",
      date: "July 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Project Management",
      url: "#",
    },
    {
      title: "The Future of Freelancing: Trends to Watch",
      description:
        "Stay ahead of the curve with insights into the evolving freelance landscape.",
      date: "July 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Industry Trends",
      url: "#",
    },
    {
      title: "Building Strong Client Relationships",
      description:
        "Strategies for effective communication and long-term client loyalty.",
      date: "July 5, 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Client Relations",
      url: "#",
    },
    {
      title: "Automating Your Freelance Business",
      description:
        "Discover tools and techniques to automate repetitive tasks and save time.",
      date: "June 28, 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Tools",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
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
            className="text-5xl lg:text-7xl font-bold text-gray-900 font-funnel leading-tight mb-6"
          >
            Our <span className="text-blue-600">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Insights, tips, and resources for freelancers to grow their business
            and master their craft.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-gray-900"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            {/* Categories (Placeholder) */}
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors">
                All
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
                Productivity
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
                Finance
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
                Marketing
              </button>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50/30 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <Link href={post.url}>
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-2">
                      {post.category}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-funnel group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                      {post.description}
                    </p>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
