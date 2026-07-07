"use client";
import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="mt-20 bg-[#F7F7F7] h-screen p-5">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" bg-[#000000] h-[220vh] lg:h-[115vh]  rounded-2xl"
      >
        <div className=" flex flex-col lg:flex-row justify-center lg:justify-between px-10 py-14 ">
          {/* Left column */}
          <div className="flex flex-col items-start justify-between">
            <div>
              <h1 className="text-white text-3xl font-sans font-light">
                Smarter Living
              </h1>
              <p className="text-[#747474] max-w-sm mt-2">
                With Quora, your home isn’t just smart—it’s thoughtfully
                connected.
              </p>
            </div>

           
          </div>

          {/* Right columns */}
          <div className="flex relative flex-col mt-20 lg:flex-row gap-10 lg:gap-40 mr-50">
            <ul className="list-none">
              <h1 className="text-white font-semibold font-sans mb-4">
                Company
              </h1>
              <li className="text-[#747474] mb-3">Product</li>
              <li className="text-[#747474] mb-3">About us</li>
              <li className="text-[#747474] mb-3">Blog</li>
              <li className="text-[#747474]">Contact</li>
            </ul>

            <ul className="list-none">
              <h1 className="text-white font-semibold font-sans mb-4">Legal</h1>
              <li className="text-[#747474] mb-3">Terms of Service</li>
              <li className="text-[#747474] mb-3">Privacy Policy</li>
              <li className="text-[#747474]">Refund Policy</li>
            </ul>
          </div>
        </div>


        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:mt-[-120px] mt-3 overflow-hidden"
        >
          <h1 className="text-5xl lg:text-[24rem] font-bold font-sans tracking-wider flex justify-center bg-gradient-to-b from-white  to-black bg-clip-text text-transparent">
            Quora
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
