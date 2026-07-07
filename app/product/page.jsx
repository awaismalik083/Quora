"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/Context";

const page = () => {
  const { isOpen, setIsOpen } = useCart();

  return (
    <>
      <Navbar />
      <div className="h-screen relative">
        <img
          src="/Main.jpeg"
          className="w-screen z-0 relative h-screen object-cover"
          alt="main"
        />
        <Link
          href="/"
          className="cursor-pointer absolute z-50 top-0 mt-6 sm:mt-10 ml-4 sm:ml-5"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-sans">
            Quora
          </h1>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group absolute bottom-3 left-4 sm:left-5 text-white flex items-center justify-center overflow-hidden rounded-full bg-black px-4 sm:px-6 py-3 sm:py-4 cursor-pointer transition-all"
        >
          <div className="flex items-center transition-all duration-300 group-hover:translate-x-4">
            <FaArrowRight className="mr-2 opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="font-medium  text-sm sm:text-base">
              Preorder
            </span>
            <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-6" />
          </div>
        </button>
        <h1 className="absolute bottom-28 sm:bottom-40 md:bottom-30 text-2xl sm:text-3xl md:text-4xl text-white font-semibold left-4 sm:left-5 max-w-[80%] sm:max-w-none">
          Redefining Portable Audio
        </h1>
        {/* <p className="text-white hidden lg:block text-sm sm:text-base font-medium absolute left-4 sm:left-5 bottom-16 sm:bottom-24 md:bottom-30 max-w-[85%] sm:max-w-md">
          Engineered for those who demand more from their audio, this speaker
          delivers bold sound in a sleek, rugged form—ready for any setting.
        </p> */}
      </div>

      <div className="p-5 sm:p-10 mt-16 sm:mt-30">
        <div className="bg-gray-300 w-24 sm:w-30 py-2 sm:py-3 text-center rounded-xl text-sm sm:text-base">
          {" "}
          Overview
        </div>
        <div className="flex flex-col md:flex-row mt-8 sm:mt-10 gap-4 md:gap-0 md:justify-between">
          <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-xl font-sans">
            Proven by People, Designed to Perform
          </h1>
          <p className="max-w-xl font-medium text-sm sm:text-base">
            Backed by a global community of users, our speakers combine
            cutting-edge tech with sleek design—made to stand out
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-10 sm:mt-20 h-auto md:h-[400px] gap-4">
          {/* Left: Image panel */}
          <div className="flex-1 rounded-2xl overflow-hidden bg-neutral-100 h-[250px] sm:h-[300px] md:h-auto">
            <Image
              src="/earbeats.jpeg"
              width={600}
              height={400}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Logo/brand panel */}
          <div className="flex-1 rounded-2xl bg-neutral-50 flex items-center justify-center h-[200px] sm:h-[250px] md:h-auto py-8 md:py-0">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-sans bg-gradient-to-b from-neutral-900 to-neutral-400 bg-clip-text text-transparent">
              Quora
            </h2>
          </div>
        </div>

        <section className="w-full overflow-x-hidden mt-40 lg:px-5 ">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center  lg:gap-20">
              {/* Right Image */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex flex-col items-start gap-8"
              >
                <div className="bg-[#F7F7F7] mt-10 rounded-2xl px-6 py-3">
                  <p className="font-medium text-sm md:text-base">
                    Hear every sound in detail
                  </p>
                </div>

                <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl">
                  Quora ProAudio
                </h1>

                <p className="font-mono text-gray-600 leading-7 text-sm md:text-base">
                  Dome ProAudio brings powerful bass and crisp highs for a truly
                  immersive experience. Precision-tuned for audiophiles who
                  demand more.
                </p>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="group flex items-center justify-center overflow-hidden rounded-full bg-[#EDEDED] px-6 py-4 cursor-pointer transition-all hover:bg-gray-200"
                >
                  <div className="flex items-center transition-all duration-300 group-hover:translate-x-4">
                    <FaArrowRight className="mr-2 opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />

                    <span className="font-medium">Preorder</span>

                    <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-6" />
                  </div>
                </button>
              </motion.div>

              {/* Left Content */}
              <motion.img
                src="/cards/board.jpeg"
                alt="Quora AirBeat"
                initial={{ x: 50, opacity: 0 }}
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
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default page;
