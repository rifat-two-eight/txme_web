"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["features", "providers", "how-it-works", "faq"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features", id: "features" },
    { href: "#providers", label: "Providers", id: "providers" },
    { href: "#how-it-works", label: "How It Works", id: "how-it-works" },
    { href: "#faq", label: "FAQ", id: "faq" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          {/* Logo - slightly smaller */}
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/txme.svg" width={48} height={48} alt="logo" />
          </motion.a>

          {/* Desktop Navigation - smaller text + tighter spacing */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors duration-200 font-medium text-[0.95rem] lg:text-base ${
                    isActive
                      ? "text-[#FF5A36]"
                      : "text-gray-700 hover:text-[#FF5A36]"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-[3px] left-0 right-0 h-[2.5px] bg-[#FF5A36]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button - smaller & rounder */}
          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - more compact */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.href}
                    type="button"
                    className={`block w-full text-left px-5 py-2.5 rounded-xl transition-all font-medium text-[0.95rem] ${
                      isActive
                        ? "text-[#FF5A36] bg-orange-50/80 font-semibold"
                        : "text-gray-700 hover:text-[#FF5A36] hover:bg-gray-50/70"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        scrollToSection(link.id);
                      }, 100);
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;