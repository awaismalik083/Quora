"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import { useCart } from "../context/Context";

const list = [
  { title: "Automation" },
  { title: "Security" },
  { title: "Control" },
  { title: "Assistant" },
];

const words = ["Make", "Your", "Quora"];

const MotionImage = motion.create(Image);

const Hero = () => {
  const { isOpen, setIsOpen } = useCart();

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 lg:p-5">
      <div className="bg-[#F7F7F7]  w-full h-screen flex items-center justify-center rounded-2xl relative overflow-hidden">
        {/* Wrapper — clips everything outside */}
        <div className="text-5xl lg:text-7xl top-10 absolute lg:top-5 left-4 lg:left-5 overflow-hidden h-16 lg:h-24">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {words[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Centered Image */}
        <div className="relative w-[160px] mt-15 lg:mt-0 h-[200px] sm:w-[200px] sm:h-[250px] md:w-[280px] md:h-[320px] lg:w-[350px] lg:h-[400px]">
          <MotionImage
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "linear", delay: 0 }}
            src="/hero.png"
            fill
            alt="heroImage"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 280px, 350px"
            priority
            className="object-contain h-full w-full"
          />
        </div>

        {/* Links pinned to the right */}
        <ul className="absolute hidden  lg:flex right-8 top-1/2 -translate-y-1/2 list-none flex-col gap-1 text-[17px]">
          {list.map((item, index) => (
            <motion.li
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
              key={index}
              className={`transition-colors duration-500 ${
                activeIndex === index ? "text-[#0A0A0A]" : "text-[#D1D1D1]"
              }`}
            >
              {item.title}
            </motion.li>
          ))}
        </ul>

        {/* Bottom left text */}
        <div className="absolute  mt-70 lg:mt-0 lg:bottom-10 left-4 lg:left-5">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear", delay: 2 }}
            className="max-w-[260px] lg:max-w-[360px] text-[#0A0A0A] text-[15px] lg:text-[18px] font-normal"
          >
            Quora is like having a personal assistant for your entire home.
          </motion.h1>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center bg-[#000000] mt-3 lg:mt-10 w-[130px] lg:w-[150px] text-white justify-center rounded-4xl py-2 lg:py-3 text-sm lg:text-base"
          >
            Pre-order
          </motion.button>
        </div>

        {/* Bottom right side - Scroll Indicator */}
        <div className="w-6 h-10 absolute bottom-5 border flex justify-center items-start pt-1 right-4 lg:right-5 border-black rounded-full">
          <motion.div
            className="bg-black w-0.5 h-2 rounded-full"
            animate={{ y: [0, 18, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-10 items-center justify-center mt-20">
        <div className="bg-gray-200 h-19 flex items-center justify-center z-0 w-34 rounded-full relative">
          <Image
            height={50}
            width={50}
            src="/button.png"
            className="absolute z-10 "
            alt="button "
          />
        </div>
        <h1 className="text-4xl font-sans text-center font-[20px] text-[#000000]">
          Cutting-edge technology meets timeless design
        </h1>
        <Marquee
          className="max-w-xl "
          autoFill="true"
          direction="right"
          speed={"50"}
        >
          <div className="flex max-w-xl overflow-hidden items-center gap-15 justify-center">
            <Image
              width={30}
              height={30}
              src="/marquee/1.svg"
              className="w-30"
              alt="1"
            />
            <Image
              width={30}
              height={30}
              src="/marquee/2.svg"
              className="w-30"
              alt="2"
            />
            <Image
              width={30}
              height={30}
              src="/marquee/4.svg"
              className="w-30"
              alt="4"
            />
            <Image
              width={30}
              height={30}
              src="/marquee/5.svg"
              className="w-30"
              alt="5"
            />
            <Image
              width={30}
              height={30}
              src="/marquee/6.svg"
              className="w-30"
              alt="6"
            />
            <Image
              width={30}
              height={30}
              src="/marquee/7.svg"
              className="w-30"
              alt="7"
            />
          </div>
        </Marquee>

        {/* testimonial section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" bg-[#F7F7F7] rounded-2xl mt-20 w-full p-5"
        >
          <div className="flex flex-col  lg:flex-row items-center gap-8 lg:gap-4 w-full max-w-6xl">
            {/* Left image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/girl.png"
                alt="Sarah testimonial"
                className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover rounded-3xl"
              />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl h-auto lg:h-[400px] flex flex-col justify-center px-6 py-8 lg:px-16 lg:py-0">
              <span className="bg-[#F97316] text-white text-sm  font-medium px-5 py-2.5 rounded-full w-fit mb-6 lg:mb-8">
                Testimonial
              </span>

              <p className="text-xl sm:text-2xl lg:text-2xl font-sans leading-snug text-[#0A0A0A]  mb-8 lg:mb-10 max-w-3xl">
                Quora made our home feel smarter instantly. The setup was
                simple, intuitive, and surprisingly fast. From the moment we
                connected it, everything just worked — seamlessly and
                beautifully.
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="/girl.png"
                  alt="Sarah"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="italic text-[#0A0A0A] text-lg">
                  — Sarah, Kickflip
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
