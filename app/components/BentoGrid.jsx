"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Snowflake, Star, Clock } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

// Helper: splits text into animated characters
const SplitText = ({ text, className, delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible" // 👈 this line controls scroll-triggering
      viewport={{ once: true, amount: 0.6 }} // 👈 this line controls when it fires
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BentoGrid = () => {
  // Start with null so the server render and the very first client render
  // produce identical output. The real clock value is only set client-side,
  // after hydration, inside useEffect — this is what fixes the hydration
  // mismatch error you were seeing.
  const [timeStr, setTimeStr] = useState(null);

  useEffect(() => {
    const update = () => {
      setTimeStr(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update(); // set immediately on mount
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="p-5 mt-20"
      >
        <div className="grid gap-4 grid-cols-1 [grid-template-areas:'stats'_'device'_'app'_'sound'] lg:grid-cols-[1fr_1fr_1.35fr] lg:[grid-template-areas:'stats_device_app'_'sound_sound_app']">
          {/* Trusted by / stat card */}
          <div
            style={{ gridArea: "stats" }}
            className="relative overflow-hidden rounded-2xl h-[280px] lg:h-[360px] flex flex-col justify-between p-6 text-white"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/bg.jpeg"
              alt="bg"
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(120% 60% at 30% 100%, rgba(0,0,0,0.7), transparent 60%)",
              }}
            />
            <span className="relative text-sm font-medium tracking-wide">
              Trusted by:
            </span>
            <span className="relative text-4xl lg:text-5xl font-semibold self-center mb-8">
              156K
            </span>
            <span className="relative text-sm text-white/80">
              Leading technology users
            </span>
          </div>

          {/* Device / remote card */}
          <div
            style={{ gridArea: "device" }}
            className="relative overflow-hidden rounded-2xl h-[240px] lg:h-[360px] flex items-center justify-center"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/remote.jpeg"
              alt="remote"
            />
            {/* remote control */}

            <div className="w-20 h-10 rounded-full bg-[#1c1c1f] flex items-center justify-center">
              <Snowflake size={16} className="text-white/70" />
            </div>
          </div>

          {/* App rating / tall card */}
          <div
            style={{ gridArea: "app" }}
            className="relative overflow-hidden rounded-2xl flex flex-col justify-between min-h-[420px] lg:min-h-0"
          >
            <img
              src="/girl2.jpeg"
              alt="girl"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative p-5 mb-10 ">
              <div className="inline-flex items-center gap-2 bg-white rounded-full pl-1.5 pr-3 py-1.5 shadow-sm">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                  <Star size={11} className="text-white" fill="white" />
                </span>
                <span className="text-sm font-medium text-gray-900">
                  Top rated app
                </span>
              </div>
            </div>

            <div className="relative flex-1 " />

            <div className="relative p-5 font-sans flex items-end gap-2 text-white">
              <span className="text-3xl leading-none">4.9</span>
              <span className="text-sm text-white/90 mb-0.5">
                Based on 1200+ reviews
              </span>
            </div>

            {/* timestamp - now inside the card, at the bottom */}
            <div className="relative font-sans bg-black flex items-center gap-2 px-5 py-5 mt-4 rounded-b-2xl">
              <Clock size={16} className="text-white/60" />
              <span className="text-white text-xl tracking-wide mx-auto">
                {timeStr ?? "--:--:--"}
              </span>
            </div>
          </div>

          {/* 8D sound mode card */}
          <div
            style={{ gridArea: "sound", background: "#FFEFE9" }}
            className="rounded-2xl h-[220px] lg:h-[360px] flex items-center gap-4 px-6 lg:px-10"
          >
            <SplitText
              text="8D"
              className="text-6xl lg:text-8xl font-sans font-extrabold text-[#FF5E2B] leading-none"
            />
            <span className="text-2xl lg:text-4xl font-sans text-[#FF5E2B] leading-tight">
              <SplitText text="Immersive sound" delay={0.15} />
              <br />
              <SplitText text="Mode" delay={0.3} />
            </span>
          </div>
        </div>
      </motion.div>

      <section className="w-full overflow-x-hidden mt-40 px-5 lg:px-5 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
            {/* Left Content */}
            <motion.img
              src="/earbeats.jpeg"
              alt="Quora AirBeat"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
              w-full
              lg:w-1/2
              h-[350px]
              md:h-[500px]
              lg:h-[700px]
              rounded-3xl
              object-cover
            "
            />

            {/* Right Image */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col items-start gap-8"
            >
              <div className="bg-[#F7F7F7] rounded-2xl px-6 py-3">
                <p className="font-medium text-sm md:text-base">
                  Immerse yourself in sound
                </p>
              </div>

              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl">
                Quora AirBeat
              </h1>

              <p className="font-mono text-gray-600 leading-7 text-sm md:text-base">
                Dome HarmonyX features a sophisticated noise reduction system
                that delivers crystal-clear audio. Designed for clarity and
                precision, it lets you feel every wave of sound. Available in
                yellow, blue, grey, and black.
              </p>

              <button className="group flex items-center justify-center overflow-hidden rounded-full bg-[#EDEDED] px-6 py-4 cursor-pointer transition-all hover:bg-gray-200">
                <div className="flex items-center transition-all duration-300 group-hover:translate-x-4">
                  <FaArrowRight className="mr-2 opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />

                  <span className="font-medium">Preorder</span>

                  <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-6" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BentoGrid;