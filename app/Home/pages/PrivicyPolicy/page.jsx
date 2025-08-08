"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-blue-600">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your data.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-8">
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <h2 className="text-3xl font-bold text-gray-900  mt-12 mb-4">
            Interpretation and Definitions
          </h2>
          <h3 className="text-2xl font-bold text-gray-900  mb-2">
            Interpretation
          </h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3 className="text-2xl font-bold text-gray-900  mb-2">
            Definitions
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to TimeTracker.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Website</strong> refers to TimeTracker, accessible from{" "}
              <a
                href="https://www.timetracker.com"
                className="text-blue-600 hover:underline"
              >
                www.timetracker.com
              </a>
              .
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900  mt-12 mb-4">
            Collecting and Using Your Personal Data
          </h2>
          <h3 className="text-2xl font-bold text-gray-900  mb-2">
            Types of Data Collected
          </h3>
          <h4 className="text-xl font-bold text-gray-900  mb-2">
            Personal Data
          </h4>
          <p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="text-xl font-bold text-gray-900  mb-2">
            Usage Data
          </h4>
          <p>
            Usage Data is collected automatically when using the Service. Usage
            Data may include information such as Your Device's Internet Protocol
            address (e.g. IP address), browser type, browser version, the pages
            of our Service that You visit, the time and date of Your visit, the
            time spent on those pages, unique device identifiers and other
            diagnostic data.
          </p>

          <h3 className="text-2xl font-bold text-gray-900  mb-2">
            Use of Your Personal Data
          </h3>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>To provide and maintain our Service</strong>, including to
              monitor the usage of our Service.
            </li>
            <li>
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </li>
            <li>
              <strong>For the performance of a contract:</strong> the
              development, compliance and undertaking of the purchase contract
              for the products, items or services You have purchased or of any
              other contract with Us through the Service.
            </li>
            <li>
              <strong>To contact You:</strong> To contact You by email or other
              equivalent forms of electronic communication, such as a mobile
              application's push notifications regarding updates or informative
              communications related to the functionalities, products or
              contracted services, including the security updates, when
              necessary or reasonable for their implementation.
            </li>
            <li>
              <strong>To provide You with news</strong>, special offers and
              general information about other goods, services and events which
              we offer that are similar to those that you have already purchased
              or enquired about unless You have opted not to receive such
              information.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900  mt-12 mb-4">
            Security of Your Personal Data
          </h2>
          <p>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>

          <h2 className="text-3xl font-bold text-gray-900  mt-12 mb-4">
            Changes to this Privacy Policy
          </h2>
          <p>
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: August 5, 2025
          </p>
        </div>
      </section>
    </div>
  );
}
