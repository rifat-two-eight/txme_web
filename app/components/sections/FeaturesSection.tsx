"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Wallet, Video, Clock, Shield, Star } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Seamless Booking',
      description: 'Find and book trusted service providers in seconds. Real-time availability at your fingertips.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Wallet,
      title: 'Secure Wallet',
      description: 'Top-up, withdraw, and send money instantly. Powered by Stripe Connect for maximum security.',
      color: 'from-[#FF5A36] to-[#D94A2E]',
    },
    {
      icon: Video,
      title: 'Video Consultations',
      description: 'Connect efficiently with built-in video calling for remote services and consultations.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - more compact */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in{' '}
            <span className="bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] bg-clip-text text-transparent">
              One App
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make your life easier, whether you're booking services or providing them.
          </p>
        </motion.div>

        {/* Features Grid - tighter */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Icon - smaller */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content - smaller text */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[0.95rem] sm:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Benefits - more compact */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { icon: Clock, label: 'Real-time Updates' },
            { icon: Shield, label: 'Bank-grade Security' },
            { icon: Star, label: 'Verified Reviews' },
            { icon: Calendar, label: 'Smart Scheduling' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-7 h-7 text-[#FF5A36] mb-2" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;