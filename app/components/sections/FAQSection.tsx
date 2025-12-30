"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is the app free to use?',
      answer: 'Yes, downloading and browsing is completely free. You only pay for the services you book. There are no hidden fees or subscription charges.',
    },
    {
      question: 'How do I withdraw my earnings?',
      answer: 'Providers can withdraw earnings directly to their bank account via our automated Stripe integration. Withdrawals are processed instantly and there are no minimum withdrawal amounts.',
    },
    {
      question: 'What documents do I need?',
      answer: 'A valid government ID (Passport or National ID) is required for identity verification. This helps us maintain a safe and trusted community for all users.',
    },
    {
      question: 'How secure are my payments?',
      answer: 'All payments are processed through Stripe, a world-leading payment processor. We use bank-grade encryption and never store your complete payment information on our servers.',
    },
    {
      question: 'Can I cancel or reschedule appointments?',
      answer: 'Yes, you can cancel or reschedule appointments according to the provider\'s cancellation policy. Most providers allow free cancellation up to 24 hours before the appointment.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about TxMe
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-[#FF5A36]'
                    : 'border-transparent hover:border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                        activeIndex === index ? 'text-[#FF5A36]' : 'text-gray-400'
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 sm:px-6 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Still have questions?</p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-[#FF5A36] to-[#D94A2E] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;