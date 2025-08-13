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
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-8">
          <p>
            This Privacy Policy explains how TimeTracker ("we", "our", "us")
            collects, uses, and safeguards your personal and business data when
            you use our time tracking, invoicing, and productivity services. By
            using TimeTracker, you agree to the terms outlined in this policy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Data We Collect
          </h2>
          <p>
            We collect the following types of information to provide and improve
            our service:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Account Information:</strong> Name, email, password, and
              profile details you provide when signing up.
            </li>
            <li>
              <strong>Work & Project Data:</strong> Time logs, project names,
              task descriptions, invoices, and related attachments.
            </li>
            <li>
              <strong>Billing Information:</strong> Payment details (processed
              securely via third-party payment providers).
            </li>
            <li>
              <strong>Usage Data:</strong> Device type, browser version, pages
              visited, time spent in the app, and interaction history.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            How We Use Your Data
          </h2>
          <p>Your data is used to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Provide core features like time tracking, invoicing, and
              reporting.
            </li>
            <li>Sync your activity across devices securely.</li>
            <li>Generate and deliver downloadable PDF invoices.</li>
            <li>Send service updates, tips, and support notifications.</li>
            <li>Improve our features based on anonymized usage patterns.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Data Sharing & Storage
          </h2>
          <p>
            We do not sell your personal data. Limited data may be shared with
            trusted service providers (e.g., cloud hosting, payment processors,
            analytics tools) solely for delivering our services. All data is
            stored on secure servers with encryption at rest and in transit.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access, update, or delete your account data at any time.</li>
            <li>
              Export your time tracking and invoicing data in a structured
              format.
            </li>
            <li>Opt out of non-essential email communications.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Security
          </h2>
          <p>
            We use encryption, secure authentication, and regular audits to
            protect your data. However, no method of transmission or storage is
            completely secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy as our services evolve. If changes
            are significant, we will notify you via email or in-app notification
            before they take effect.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: August 12, 2025
          </p>
        </div>
      </section>
    </div>
  );
}
