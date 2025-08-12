"use client";

import { motion } from "framer-motion";
import {
  Clock,
  FileText,
  FolderOpen,
  Users,
  Check,
  ChevronDown,
  Star,
  Menu,
  X,
  Play,
  Eye,
  Send,
  Zap,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import WaitlistSection from "@/components/custom/JoinWaitList";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

export default function LandingPage() {
  const AuthRedirect = () => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem("Authenticated");

      if (isAuthenticated === "true") {
        router.replace("/Dashboard"); // or router.push()
      }
    }, [router]);

    return null; // or a loader/spinner
  };

  AuthRedirect();

  const [openFaq, setOpenFaq] = useState(null);

  const companies = [
    {
      name: "Fiverr",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/640px-Fiverr_Logo_09.2020.svg.png",
    },
    {
      name: "Upwork",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Upwork_Logo.svg/640px-Upwork_Logo.svg.png",
    },
    {
      name: "Freelancer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/FL_LOGO-REDUCTION.png?20161102055750",
    },
    {
      name: "PeoplePerHour",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/PeoplePerHour.com_2018_logo.png/640px-PeoplePerHour.com_2018_logo.png",
    },
    {
      name: "Dribbble",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Dribbble_logo.svg/640px-Dribbble_logo.svg.png",
    },
    {
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LinkedIn_Logo_2013_%282%29.svg/640px-LinkedIn_Logo_2013_%282%29.svg.png",
    },
    {
      name: "Behance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/640px-Behance_logo.svg.png",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Time Tracking",
      description:
        "Track time automatically or manually with our intuitive timer. Never lose track of billable hours again.",
    },
    {
      icon: FileText,
      title: "Invoice Generation",
      description:
        "Generate professional invoices instantly from your tracked time. Get paid faster with automated billing.",
    },
    {
      icon: FolderOpen,
      title: "Project Management",
      description:
        "Organize your work by projects and clients. Keep everything structured and easily accessible.",
    },
    {
      icon: Users,
      title: "Client History",
      description:
        "Maintain detailed records of all client interactions and project history in one place.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Start Timer or Log Task",
      description:
        "Begin tracking time with one click or manually log completed tasks.",
      icon: Play,
    },
    {
      number: "02",
      title: "Review Time Sheet",
      description:
        "Review and edit your time entries before generating invoices.",
      icon: Eye,
    },
    {
      number: "03",
      title: "Generate Invoice",
      description:
        "Create professional invoices and send them directly to clients.",
      icon: Send,
    },
  ];

  const testimonials = [
    {
      name: "Liam",
      role: "Freelance Designer",
      image: "/person_01.jpg",
      quote:
        "This tool has completely transformed how I manage my freelance business. I'm saving 5+ hours per week on admin tasks.",
    },
    {
      name: "Mike Chen",
      role: "Web Developer",
      image: "/person_02.jpg",
      quote:
        "The automatic time tracking is a game-changer. I never miss billable hours anymore and my clients love the detailed invoices.",
    },
    {
      name: "James",
      role: "Marketing Consultant",
      image: "/person_03.jpg",
      quote:
        "Simple, powerful, and exactly what I needed. The client management features are outstanding.",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out TimeTracker Pro",
      features: [
        "1 Project",
        "Time tracking & basic reports",
        "Invoice generation (with watermark)",
        "Email support",
        "Access to web dashboard",
      ],
      cta: "Start For Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Ideal for active freelancers & solo entrepreneurs.",
      features: [
        "Unlimited projects",
        "Advanced time tracking",
        "Professional invoicing",
        "Client portal access",
        "Detailed analytics",
        "Priority support",
      ],
      cta: "Start With Pro",
      popular: true,
    },
    {
      name: "Team Plan",
      price: "$29",
      period: "per month",
      description:
        "Perfect for small teams or agencies who need collaboration.",
      features: [
        "Everything in Pro",
        "Up to 5 team members",
        "Team time tracking dashboard",
        "Team-based invoice splitting",
        "Shared clients & projects",
        "Admin panel + role management",
        "Email & in-app chat support",
      ],
      cta: "Start With Team",
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const faqs = [
    {
      question: "What is the waitlist for?",
      answer:
        "Our waitlist gives you early access to our platform before the public launch. You'll be among the first to explore new features and shape the future of our product.",
    },
    {
      question: "How do I join the waitlist?",
      answer:
        "Simply sign up with your email. We’ll confirm your spot and keep you updated on your position and upcoming release dates.",
    },
    {
      question: "Does joining the waitlist cost anything?",
      answer:
        "No. Joining the waitlist is completely free and comes with no obligation to purchase anything later.",
    },
    {
      question: "When will I get access?",
      answer:
        "We’re rolling out access in batches. The earlier you join, the sooner you’ll get in. We'll notify you by email as soon as your invite is ready.",
    },
    {
      question: "Will I get any perks for joining early?",
      answer:
        "Yes! Early waitlist members will receive exclusive bonuses, feature previews, and special offers not available after the public launch.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Users",
    },
    {
      icon: Clock,
      value: "2M+",
      label: "Hours Tracked",
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fafcfd] py-20 lg:py-25 lg:pt-35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl hero-font font-bold text-gray-900 leading-tight">
                <span className="text-gray-900">Track Time -</span>{" "}
                <span className="text-blue-600">Generate Invoice -</span>
                <span className="text-gray-900">Get Paid</span>
              </h1>
              <p className="text-xl text-gray-700 mt-6 leading-relaxed">
                ZennyTrack The simplest way to track time, manage projects, and
                generate professional invoices. Stop losing money on unbilled
                hours.
              </p>
              <Link href="/Home/pages/Auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold mt-8 hover:bg-blue-700 shadow-lg"
                >
                  Join Waitlist Now
                </motion.button>
              </Link>
              {/* <p className="text-sm text-gray-500 mt-3">
                No credit card required • 14-day free trial
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Today's Activity
                      </h3>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">
                            Website Redesign
                          </span>
                        </div>
                        <span className="font-mono text-gray-900">2:34:12</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Client Meeting</span>
                        </div>
                        <span className="font-mono text-gray-900">1:15:30</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">Code Review</span>
                        </div>
                        <span className="font-mono text-gray-900">0:45:22</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Today</span>
                        <span className="text-2xl font-bold text-gray-900 font-mono">
                          4:35:04
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-[#fafcfd]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <p className="font-dm text-muted-foreground text-sm uppercase tracking-wider">
              Join By Professionals At
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex space-x-16 whitespace-nowrap"
            >
              {/* First set */}
              {companies.map((company, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 h-8 w-32 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-auto max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}

              {/* Second set for seamless loop */}
              {companies.map((company, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 h-8 w-32 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-auto max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
              Your Complete Toolkit For{" "}
              <span className="text-blue-600">Growth</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built for freelancers and teams who want to focus on their work,
              not their admin.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:border-blue-600/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 ">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
              <span className="text-blue-600">How</span> it works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(68, 109, 198, 0.25)",
                }}
                className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative group"
              >
                {/* Number circle with icon */}
                <div className="relative inline-block mb-6">
                  <motion.div
                    className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold  relative group-hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <step.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4  group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
              What <span className="text-blue-600">Beta Users</span> Says
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Be part of thousands of freelancers reshaping the future of their
              business with our revolutionary platform.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={staggerItem}
                className="bg-gradient-to-br from-white to-gray-50/30 p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Simple{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                pricing
              </span>
            </h2>
            <p className="font-dm text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade at any
              time.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`h-full relative group transition-all duration-500 hover:-translate-y-2 ${plan.popular
                    ? "border-2 border-blue-600 shadow-xl scale-105"
                    : "border-blue-100 hover:border-blue-600/30 hover:shadow-xl"
                    }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-dm">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-6">
                    <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="font-bold text-4xl">{plan.price}</span>
                      <span className="font-dm text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    </div>
                    <p className="font-dm text-muted-foreground">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Button
                      className={`w-full mb-6 font-dm ${plan.popular
                        ? "bg-blue-600 hover:bg-blue-600/90"
                        : "bg-blue-700 hover:bg-blue-700/90"
                        }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * featureIndex }}
                          className="flex items-center font-dm text-muted-foreground"
                        >
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
              <span className="text-blue-600">Frequently</span> asked questions
            </h2>
            <p className="text-xl text-gray-700">
              Everything you need to know about our platform
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section
      <section className="py-20 bg-gradient-to-br from-gray-800 via-blue-800 to-blue-800 relative overflow-hidden">
        Background decoration
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className=" font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to save time and grow your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                freelance business?
              </span>
            </h2>
            <p className="font-dm text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of freelancers and teams who trust TimeTracker Pro
              to manage their time and grow their revenue.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 font-dm text-lg px-8 py-4 group shadow-xl"
              >
                Start Free – No Credit Card Needed
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="/Home/pages/Auth">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-blue-900 text-white hover:bg-blue-600/10 font-dm text-lg px-8 py-4 backdrop-blur-sm"
                >
                  Join Now
                </Button>
              </Link>
            </motion.div>

            Stats
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300"
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className=" font-bold text-2xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="font-dm text-white/80 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Join WaitList Section */}
      <section id="waitllist">
        <WaitlistSection />
      </section>
    </div>
  );
}
