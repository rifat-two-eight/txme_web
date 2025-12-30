"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Calendar, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const ProvidersSection = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Custom Working Hours",
      description: "Set your availability and rates on your own terms.",
    },
    {
      icon: DollarSign,
      title: "Instant Payments",
      description: "Get paid directly to your bank account with zero delays.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Reach more clients and expand your service offerings.",
    },
    {
      icon: Users,
      title: "Manage Clients",
      description: "Effortlessly track appointments and client history.",
    },
  ];

  return (
    <section
      id="providers"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Grow Your Business with{" "}
              <span className="bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] bg-clip-text text-transparent">
                TxMe
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Join thousands of professionals who trust TxMe to manage their
              appointments and payments seamlessly.
            </motion.p>

            <motion.div className="space-y-5 mb-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#FF5A36] to-[#D94A2E] flex items-center justify-center shadow-md flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
              className="px-6 py-3.5 bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] text-white rounded-xl font-semibold shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Provider
            </motion.button>
          </motion.div>

          {/* RIGHT CONTENT – SMALLER PHONE MOCKUP */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* PHONE FRAME - reduced size */}
              <div className="relative w-[260px] sm:w-[280px] lg:w-[260px] h-[520px] sm:h-[560px] lg:h-[520px] bg-gray-900 rounded-[2.8rem] p-2.5 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-3xl z-10" />

                {/* SCREEN */}
                <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden relative">
                  <Image
                    src="/provider2.png"
                    alt="TxMe Provider Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* FLOATING TOP CARD - smaller */}
              <motion.div
                className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-xl font-bold text-[#FF5A36]">$12K+</div>
                <div className="text-xs text-gray-600">Monthly</div>
              </motion.div>

              {/* FLOATING BOTTOM CARD - smaller */}
              <motion.div
                className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 z-20 flex items-center space-x-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-lg">⭐</span>
                <div>
                  <div className="font-bold text-[#FF5A36]">4.9</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;