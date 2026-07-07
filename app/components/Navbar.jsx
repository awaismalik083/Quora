"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Product", href: "/product" },
    { label: "About Us", href: "/About" },

    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "linear" }}
      className="fixed right-5 lg:right-10 top-10 w-[110px] right-0 lg:w-[170px] z-10"
    >
      <motion.div
        animate={{ height: isOpen ? "auto" : "48px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative flex flex-col overflow-hidden rounded-2xl bg-[#313131] text-[#666666] px-5"
      >
        {/* Menu trigger */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex gap-5 lg:gap-20 h-12 items-center cursor-pointer select-none text-white shrink-0"
        >
          Menu
          <div className="flex flex-col gap-1">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
              transition={{ duration: 0.3 }}
              className="h-1 w-1 rounded-full bg-white"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
              transition={{ duration: 0.3 }}
              className="h-1 w-1 rounded-full bg-white"
            />
          </div>
        </div>

        {/* Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-white flex flex-col gap-3 list-none pb-4"
            >
              {navLinks.map(({ label, href }) => (
                <motion.li
                  key={label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  <Link href={href} className="cursor-pointer">
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
