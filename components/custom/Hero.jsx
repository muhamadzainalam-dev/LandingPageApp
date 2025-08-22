import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#fafcfd] via-white to-blue-50/30 py-12 sm:py-16 lg:py-24 xl:py-32"
      aria-labelledby="hero-title"
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-1"
          >
            <h1
              id="hero-title"
              className="font-bold text-gray-900 font-clash leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                fontFamily: "Chillax",
                fontWeight: 700,
              }}
            >
              <div className="text-gray-900 mb-2">Track Time</div>
              <div className="text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text mb-2">
                Generate Invoice
              </div>
              <div className="text-gray-900">Get Paid</div>
            </h1>

            <p className="text-base sm:text-lg xl:text-xl text-gray-700 mt-4 sm:mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <b>AGAYN</b> — The simplest way to track time manage projects, and
              generate professional invoices . Stop losing money on unbilled
              hours.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#waitllist"
                aria-label="Join our waitlist to get early access"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-blue-300/50 focus:outline-none transform"
                >
                  Join Waitlist Now
                </motion.button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    {
                      id: 1,
                      img: "/person_01.jpg",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      id: 2,
                      img: "/person_02.jpg",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      id: 3,
                      img: "/person_03.jpg",
                      color: "from-green-400 to-emerald-400",
                    },
                    {
                      id: 4,
                      img: "/person_04.jpg",
                      color: "from-orange-400 to-red-400",
                    },
                    {
                      id: 5,
                      img: "/person_05.jpg",
                      color: "from-blue-400 to-purple-400",
                    },
                  ].map((person) => (
                    <motion.div
                      key={person.id}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${person.color} border-2 border-white overflow-hidden cursor-pointer`}
                    >
                      <img
                        src={person.img}
                        alt={`Satisfied user ${person.id}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add(
                            "flex",
                            "items-center",
                            "justify-center"
                          );
                          e.target.parentElement.innerHTML = `<div class="text-white text-xs font-bold">${person.id}</div>`;
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="font-medium">Join 1,200+ others</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current"
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  Highly anticipated
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              {/* Enhanced glassmorphism overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-50/30 pointer-events-none"
                aria-hidden="true"
              ></div>

              {/* Card Header */}
              <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Today's Activity
                    </h3>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-3 py-1.5 rounded-full shadow-sm border border-emerald-200/50"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-2 h-2 bg-emerald-500 rounded-full"
                    ></motion.div>
                    <span className="text-xs sm:text-sm font-semibold">
                      Active
                    </span>
                  </motion.div>
                </div>

                {/* Activity Items */}
                <div className="space-y-3">
                  {[
                    {
                      name: "Website Redesign",
                      time: "3:10:03",
                      color: "bg-blue-600",
                      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                      progress: 75,
                    },

                    {
                      name: "Code Review",
                      time: "1:25:01",
                      color: "bg-violet-500",
                      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                      progress: 45,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl border border-white/60 transition-all duration-300 group`}
                    >
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            >
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d={item.icon}
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="text-gray-800 font-semibold text-sm sm:text-base block">
                                {item.name}
                              </span>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="w-16 sm:w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.progress}%` }}
                                    transition={{
                                      duration: 1,
                                      delay: 0.8 + index * 0.2,
                                    }}
                                    className={`h-full ${item.color} rounded-full`}
                                  />
                                </div>
                                <span className="text-xs text-gray-500">
                                  {item.progress}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-gray-900 font-bold text-sm sm:text-base block">
                              {item.time}
                            </span>
                            <span className="text-xs text-gray-500">
                              Running
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Total Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="-mt-2 pt-6"
                >
                  <div className="bg-gradient-to-r from-gray-50/80 to-gray-100/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/50 shadow-inner">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-md">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-bold text-sm sm:text-base">
                          Total Today
                        </span>
                      </div>
                      <div className="text-right">
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1 }}
                          className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text font-mono block"
                        >
                          4:35:04
                        </motion.span>
                        <span className="text-xs text-gray-500">
                          Hours logged
                        </span>
                      </div>
                    </div>

                    {/* Daily goal progress */}
                    <div className="mt-4 pt-4 border-t border-gray-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600 font-medium">
                          Daily Goal Progress
                        </span>
                        <span className="text-xs text-gray-600 font-medium">
                          58% (8h target)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "58%" }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full relative"
                        >
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
