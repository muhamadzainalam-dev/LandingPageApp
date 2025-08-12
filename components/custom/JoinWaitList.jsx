"use client";
import { useState, useEffect } from "react";
import {
  Bell,
  Mail,
  CheckCircle,
  Users,
  Star,
  Gift,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(() => {
    const savedCount =
      typeof window !== "undefined" ? window.waitlistCount : null;
    return savedCount || 1247;
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaitlistCount((prev) => {
        const increment = Math.floor(Math.random() * 3) + 1;
        const newCount = prev + increment;

        if (typeof window !== "undefined") {
          window.waitlistCount = newCount;
        }

        return newCount;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error

    if (!email) {
      setErrorMessage("Email is required.");
      return;
    }

    setIsLoading(true);

    try {
      // 1️⃣ Validate email using Abstract API
      const apiKey = "26631a698c8d48c6877bfbb0aa64a552";
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(
          email
        )}`
      );
      const data = await response.json();

      if (
        !data.is_valid_format.value ||
        data.deliverability !== "DELIVERABLE"
      ) {
        setErrorMessage("Please enter a valid, deliverable email address.");
        setIsLoading(false);
        return;
      }

      // 2️⃣ Save to Google Sheets
      const sheetResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbwGhXMMaglmNHzC6OVtaVMADV9CKUOWizkeRD99E7v67c3gNO8v6GiHiOgY12pisI4NYQ/exec",
        {
          method: "POST",
          mode: "no-cors", // prevents CORS errors
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Treat as success (can't confirm because of no-cors)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setShowSuccess(true);

      setWaitlistCount((prev) => {
        const newCount = prev + 1;
        if (typeof window !== "undefined") {
          window.waitlistCount = newCount;
        }
        return newCount;
      });

      // 3️⃣ Show success after saving
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setShowSuccess(true);

      setWaitlistCount((prev) => {
        const newCount = prev + 1;
        if (typeof window !== "undefined") {
          window.waitlistCount = newCount;
        }
        return newCount;
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const benefits = [
    {
      icon: Bell,
      title: "Early Access",
      description:
        "Be the first to experience our revolutionary time tracking features",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: Star,
      title: "Exclusive Features",
      description: "Get access to premium features during our beta launch",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gift,
      title: "Special Pricing",
      description: "Lock in exclusive pricing with up to 50% off regular rates",
      color: "from-blue-600 to-purple-500",
    },
  ];

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 left-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              showSuccess ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Success animation */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                <CheckCircle className="h-16 w-16 text-white relative z-10" />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-blue-500/30 rounded-full animate-bounce"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: "2s",
                    }}
                  />
                ))}
              </div>
            </div>

            <h3 className="font-bold text-4xl md:text-5xl text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Welcome aboard! 🎉
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for joining our exclusive waitlist. You're now part of
              an elite group of early adopters who will shape the future of time
              tracking.
            </p>

            {/* Success stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                  <TrendingUp className="h-6 w-6" />
                  <span className="font-bold text-2xl">
                    {waitlistCount.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Total members</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                  <Star className="h-6 w-6" />
                  <span className="font-bold text-2xl">TOP 5%</span>
                </div>
                <p className="text-sm text-gray-600">Early adopter</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                  <Gift className="h-6 w-6" />
                  <span className="font-bold text-2xl">50% OFF</span>
                </div>
                <p className="text-sm text-gray-600">Launch discount</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-bold text-xl text-gray-800 mb-2">
                What happens next?
              </h4>
              <p className="text-gray-600 mb-4">
                We'll send you exclusive updates, beta access invitations, and
                special offers directly to your inbox.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <Mail className="h-5 w-5" />
                <span className="font-medium">
                  Check your email for a welcome message!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Hero icon with enhanced animation */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Bell className="h-10 w-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Ripple effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-blue-600/20 rounded-full animate-ping"></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-600/10 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
            Join the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent relative">
              Waitlist
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
            Be among the first to experience the future of time tracking. Get
            early access, exclusive features, and special pricing when we
            launch.
          </p>

          {/* Live counter with enhanced styling and animation */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 px-6 py-3 rounded-full border border-blue-200 mb-12 relative overflow-hidden">
            {/* Background pulse effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 animate-pulse"></div>

            <div className="flex items-center gap-2 relative z-10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-sm font-medium text-gray-600">Live:</span>
            </div>
            <Users className="h-4 w-4 text-blue-600 animate-pulse relative z-10" />
            <div className="relative z-10">
              <span className="font-bold text-blue-600 text-lg transition-all duration-500 hover:scale-110 inline-block">
                {waitlistCount.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-gray-600 relative z-10">
              members joined
            </span>

            {/* Notification dot for new members */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>

          {/* Enhanced Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Waitlist Form */}
          <div className="max-w-lg mx-auto">
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                  <div className="flex">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 pl-12 pr-4 bg-transparent border-0 focus:outline-none text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 h-14 font-medium relative overflow-hidden group disabled:opacity-70 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="relative z-10 flex items-center gap-2">
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span>Join Waitlist</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              )}
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    { id: 1, img: "/person_01.jpg" },
                    { id: 2, img: "/person_02.jpg" },
                    { id: 3, img: "/person_03.jpg" },
                    { id: 4, img: "/person_04.jpg" },
                    { id: 5, img: "/person_05.jpg" },
                  ].map((person, i) => (
                    <div
                      key={person.id}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br from-blue-${
                        400 + i * 100
                      } to-cyan-${
                        400 + i * 100
                      } border-2 border-white overflow-hidden flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
                    >
                      <img
                        src={person.img}
                        alt={`Person ${person.id}`}
                        className="w-8 h-8 object-cover rounded-full shadow-md"
                      />
                    </div>
                  ))}
                </div>

                <span>Join {waitlistCount.toLocaleString()}+ others</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="text-gray-500 ml-1">Highly anticipated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
