"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const page = () => {
  
  return (
    <div>
      <Navbar />

      <div className="p-5  sm:p-10">
        <Link
          href="/"
          className="cursor-pointer absolute z-50 top-0 mt-6 sm:mt-10 ml-4 sm:ml-5"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-sans">
            Quora
          </h1>
        </Link>
      </div>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-y-5 mt-10 md:mt-20 items-center justify-center px-4"
      >
        <div className="bg-[#F7F7F7] relative w-10 h-10 flex rounded-full justify-center items-center">
          <Image
            src="/mailbox.svg"
            width={20}
            className="absolute"
            height={20}
            alt="mailbox"
          />
        </div>
        <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl text-center">
          We're here to help
        </h1>
        <p className="text-center text-sm sm:text-md max-w-xl font-md">
          Whether you have a question, feedback, or need support, our team is
          ready to assist you.
        </p>

        <div className="p-2 sm:p-5 rounded-2xl w-full">
          <div className="flex flex-col md:flex-row bg-[#F7F7F7] p-3 sm:p-5 rounded-2xl gap-6 w-full">
            {/* Left: image */}
            <div className="w-full md:w-1/2 h-64 sm:h-96 md:h-[610px]">
              <Image
                width={500}
                height={300}
                className="rounded-2xl w-full h-full object-cover"
                src="/Model.jpeg"
                alt="model"
              />
            </div>

            {/* Right: stacked white cards */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Email</h2>
                <div className="flex flex-col gap-2 text-gray-700 text-sm sm:text-base">
                  <span>support@example.com</span>
                  <span>help@example.com</span>
                </div>
              </div>

              <div className="bg-white flex-col flex gap-y-4 sm:gap-y-5 rounded-2xl p-4 sm:p-6">
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full outline-none border-1 border-gray-400 px-3 py-2 sm:py-3 rounded-md text-[#7F7F7F] text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Jane@quora.com"
                  className="w-full outline-none border-1 border-gray-400 px-3 py-2 sm:py-3 rounded-md text-[#7F7F7F] text-sm sm:text-base"
                />

                <select
                  className="text-black outline-none font-sans border-1 border-gray-400 px-3 py-2 sm:py-3 rounded-md text-[#7F7F7F] text-sm sm:text-base"
                  name="Country"
                  id="Country"
                >
                  <option value="france">Country</option>
                  <option value="france">france</option>
                  <option value="United states">United states</option>
                  <option value="America">America</option>
                  <option value="Austria">Austria</option>
                </select>

                <textarea
                  className="w-full outline-none h-24 sm:h-30 py-2 sm:py-3 border-1 border-gray-400 px-3 rounded-md text-[#7F7F7F] text-sm sm:text-base"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>

                <button className="group relative w-full py-3 rounded-xl cursor-pointer bg-[#FF5E2B] text-white overflow-hidden">
                  <span className="absolute inset-0 bg-[#A48795] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                  <span className="relative z-10">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16 sm:mt-24 md:mt-30 mb-16 sm:mb-24 md:mb-30 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans text-center">
            Ask less. Know more
          </h1>
          <p className="text-center max-w-md mt-5 text-sm sm:text-base">
            Quick answers to the things you're wondering—so you can get back to
            living smarter.
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default page;
