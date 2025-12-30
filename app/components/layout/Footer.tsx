"use client";

import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-orange-50 text-gray-700 py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Logo - smaller & cleaner */}
          <div className="flex items-center space-x-2">
            <Image src="/txme.svg" width={44} height={44} alt="TxMe logo" />
          </div>

          {/* Copyright - slightly smaller & crisp */}
          <p className="text-gray-600 text-xs sm:text-sm font-medium">
            © {currentYear} TxMe Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;