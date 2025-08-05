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
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=120&width=120&text=Jane",
      bio: "Jane is a visionary leader with over 15 years of experience in SaaS and product development. She founded TimeTracker to empower freelancers.",
    },
    {
      name: "John Smith",
      role: "Lead Developer",
      image: "/placeholder.svg?height=120&width=120&text=John",
      bio: "John is a full-stack wizard passionate about building scalable and user-friendly applications. He leads our engineering efforts.",
    },
    {
      name: "Emily White",
      role: "Head of Marketing",
      image: "/placeholder.svg?height=120&width=120&text=Emily",
      bio: "Emily drives our growth and brand strategy. Her expertise in digital marketing helps us reach freelancers worldwide.",
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
            About <span className="text-blue-600">TimeTracker</span>
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-funnel mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                TimeTracker was founded in 2020 by a group of passionate
                freelancers who experienced firsthand the challenges of managing
                time and finances. We realized that existing tools were either
                too complex, too expensive, or lacked the specific features
                freelancers truly needed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission became clear: build a simple, intuitive, and
                powerful platform that helps freelancers focus on what they do
                best – their craft – while we handle the administrative burden.
                Since then, we've grown into a trusted partner for thousands of
                independent professionals worldwide.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-funnel mb-4">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-funnel">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-funnel">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-funnel">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-funnel mb-4">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-funnel">
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
