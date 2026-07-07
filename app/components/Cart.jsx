"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/Context";

const Cart = () => {
  const { isOpen, setIsOpen } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    model: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#EDEDED] w-full h-screen flex items-center p-5 justify-center">
      <div className="bg-[#f7f7f7] w-[75vw] h-screen max-w-6xl rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-sm">
        {/* Left image panel */}
        <div className="relative w-full md:w-1/2 h-72 md:h-[720px]">
          <Image
            src="/form.jpg" // replace with your actual image path
            alt="Product visual"
            fill
            className="object-cover"
            priority
          />
          <p className="absolute bottom-6 left-6 text-white font-semibold text-lg z-10">
            Just as capable as you
          </p>
        </div>

        {/* Right form panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-8 sm:p-10">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-200 hover:bg-gray-200 transition-colors px-4 py-2 rounded-lg text-sm text-gray-700"
              >
                Back
              </button>

              <span className="text-gray-800 font-sans text-sm sm:text-base">
                Pre order now
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@quora.com"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors"
              />

              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full appearance-none font-sans border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors text-gray-700 bg-transparent"
                >
                  <option value="" className=" " disabled>
                    Country
                  </option>
                  <option value="us">United States</option>
                  <option value="nl">Netherlands</option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                </select>
                <ChevronIcon />
              </div>

              <div className="relative">
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full appearance-none border font-sans border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors text-gray-700 bg-transparent"
                >
                  <option value="" disabled>
                    Model
                  </option>
                  <option value="standard">AirBeat</option>
                  <option value="pro">ProAudio</option>
                </select>
                <ChevronIcon />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors resize-none"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium py-3 rounded-lg mt-1"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-8 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">In production</span>
              , ships Q3 2025
            </p>
            <span className="font-mono">00:00:00:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronIcon = () => (
  <svg
    className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default Cart;
