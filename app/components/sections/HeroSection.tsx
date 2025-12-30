"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-16 right-8 w-64 h-64 bg-[#FF5A36] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-32 left-8 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute bottom-16 right-32 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your All-in-One Solution for{' '}
              <span className="bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] bg-clip-text text-transparent">
                Appointments & Payments
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Book professionals, manage appointments, and handle transactions securely—all from your pocket.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="flex items-center justify-center px-6 py-3.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                className="flex items-center justify-center px-6 py-3.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-10 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#FF5A36]">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#FF5A36]">10K+</div>
                <div className="text-sm text-gray-600">Service Providers</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#FF5A36]">4.8★</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup → smaller on PC/desktop */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Phone Frame - reduced size especially on lg screens */}
              <div className="relative w-[260px] sm:w-[280px] lg:w-[260px] h-[520px] sm:h-[560px] lg:h-[520px] bg-gray-900 rounded-[2.8rem] p-2.5 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-3xl z-10" />
                
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden relative">
                  <Image 
                    src='/txmeHome.png' 
                    alt='TxMe App Homepage' 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements - scaled down */}
              <motion.div
                className="absolute -top-3 -right-3 w-16 h-16 sm:w-18 sm:h-18 lg:w-16 lg:h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl sm:text-3xl">💳</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 w-16 h-16 sm:w-18 sm:h-18 lg:w-16 lg:h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -4, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-2xl sm:text-3xl">📅</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;