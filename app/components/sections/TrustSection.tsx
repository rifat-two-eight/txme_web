"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, FileCheck } from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Verified Users',
      description: 'All accounts go through secure KYC verification with government ID checks.',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Bank-grade encryption powered by Stripe for all transactions.',
    },
    {
      icon: FileCheck,
      title: 'Data Privacy',
      description: 'Your personal information is protected with industry-leading security standards.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FF5A36] to-[#D94A2E] mb-5 shadow-2xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Shield className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4">
            Bank-Grade{' '}
            <span className="bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] bg-clip-text text-transparent">
              Security
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your data is our priority. All accounts are verified with secure ID checks, and payments are processed via Stripe.
          </p>
        </motion.div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#FF5A36]/50 transition-all duration-300 h-full"
                  whileHover={{ y: -8 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF5A36] to-[#D94A2E] flex items-center justify-center mb-5 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Badges - more compact */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { icon: CheckCircle, label: 'SSL Encrypted' },
            { icon: Shield, label: 'PCI Compliant' },
            { icon: Lock, label: 'GDPR Ready' },
            { icon: FileCheck, label: 'SOC 2 Certified' },
          ].map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 text-sm sm:text-base"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 90, 54, 0.5)' }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A36]" />
                <span className="font-semibold">{badge.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          className="text-center text-gray-400 mt-10 max-w-3xl mx-auto text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          We use industry-standard encryption and security practices to ensure your data and transactions remain private and protected at all times.
        </motion.p>
      </div>
    </section>
  );
};

export default TrustSection;