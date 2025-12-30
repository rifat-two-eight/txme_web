"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, Calendar, Star } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up and complete secure identity verification (KYC) in minutes.',
    },
    {
      number: '02',
      icon: Search,
      title: 'Find Services',
      description: 'Search for service providers or browse by category and location.',
    },
    {
      number: '03',
      icon: Calendar,
      title: 'Book & Pay',
      description: 'Select a time slot and pay securely through our encrypted wallet.',
    },
    {
      number: '04',
      icon: Star,
      title: 'Rate & Review',
      description: 'Enjoy the service and share your experience to help others.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            How{' '}
            <span className="bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in four simple steps. It's fast, secure, and incredibly easy.
          </p>
        </motion.div>

        {/* Steps - tighter layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Connecting Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#FF5A36] to-orange-200 z-0" />
                )}

                <motion.div
                  className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 z-10"
                  whileHover={{ y: -8 }}
                >
                  {/* Step Number - smaller */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#FF5A36] to-[#D94A2E] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">{step.number}</span>
                  </div>

                  {/* Icon - smaller */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-[#FF5A36]" />
                  </motion.div>

                  {/* Content - smaller text */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - more compact */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-600 mb-5">
            Ready to get started? Download the app now!
          </p>
          <motion.button
            className="px-6 py-3.5 bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download TxMe
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;