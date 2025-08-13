"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Muhammad Zain",
      role: "CEO & Founder",
      image: "/ceo-founder.jpeg",
      bio: "Muhammad Zain is a visionary leader and tech entrepreneur with a strong passion for building impactful digital products. He founded TimeTracker to empower freelancers and solo workers to manage their time and earnings effortlessly.",
    },
    {
      name: "Shahmir Ali",
      role: "Manager of Operations",
      image: "/manager.jpg",
      bio: "Shahmir oversees operations with a focus on efficiency and growth. His expertise in workflow optimization and team coordination helps streamline services for freelancers worldwide.",
    },
    {
      name: "Muhammad Zain",
      role: "Lead Developer",
      image: "/ceo-founder.jpeg",
      bio: "As Lead Developer, Muhammad Zain specializes in creating scalable, user-friendly SaaS platforms. He drives the engineering team to deliver seamless, high-performance solutions.",
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
            className="text-5xl lg:text-7xl font-bold text-gray-900  leading-tight mb-6"
          >
            About <span className="text-blue-600">ZennyTrack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering freelancers to thrive by simplifying time tracking,
            project management, and invoicing.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                TimeTracker was founded in 2025 to solve a problem faced by
                countless freelancers and independent professionals: managing
                time and finances without drowning in overly complex or
                overpriced tools. From the start, our vision has been to create
                a simple, intuitive, and powerful platform that empowers people
                to focus on their craft while we take care of the administrative
                details.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In a short time, TimeTracker has grown from an idea into a
                trusted solution, helping users around the world streamline
                their workflows, track their productivity, and get paid faster.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/our-story-banner.png"
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide our work and commitment to our users.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={staggerItem}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 ">
                Simplicity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe powerful tools don't have to be complicated. Our
                focus is on intuitive design and ease of use.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 ">
                Empowerment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We empower freelancers to take control of their business, save
                time, and maximize their earnings.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 ">
                Reliability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our platform is built on a foundation of trust and stability,
                ensuring your data is always safe and accessible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The dedicated individuals behind TimeTracker, committed to your
              success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-gradient-to-br from-white to-gray-50/30 p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-6 border-4 border-blue-600/20"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2 ">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
