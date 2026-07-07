"use client";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Speaker, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Speaker,
    title: "Simplicity",
    description:
      "We believe less is more—our products are designed for intuitive use.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "From premium components to final sound output, every detail matters.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Thoughtful design that's better for the planet.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[530px] px-3 sm:px-5">
          <div className="relative w-full h-full max-w-[1200px] mx-auto">
            <Image
              src="/Headphone.jpeg"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover rounded-2xl brightness-50"
              alt="main"
              priority
            />

            <Link
              href="/"
              className="cursor-pointer absolute z-50 top-0 mt-6 sm:mt-10 ml-4 sm:ml-5"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-sans">
                Quora
              </h1>
            </Link>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
              <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl max-w-2xl">
                Cutting-edge technology meets timeless design
              </h1>
              <p className="font-sans mt-4 sm:mt-5 max-w-xs sm:max-w-sm text-sm sm:text-base">
                Quora is like having a personal assistant for your entire home.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex items-center flex-col mt-16 sm:mt-24 lg:mt-30 justify-center px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-center">
            Sound Designed for Life
          </h1>
          <p className="text-center mt-6 sm:mt-10 font-sans max-w-md text-sm sm:text-base">
            Staying focused, moving quickly, and always aiming for high-quality
            work.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="w-full overflow-x-hidden mt-20 sm:mt-28 lg:mt-40 px-4 lg:px-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
              {/* Image */}
              <Image
                width={300}
                height={450}
                src="/grup.png"
                alt="Quora AirBeat"
                className="
                w-full
                lg:w-1/2
                h-[280px]
                sm:h-[350px]
                md:h-[500px]
                lg:h-[530px]
                rounded-3xl
                object-cover
              "
              />

              {/* Text content */}
              <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 sm:gap-8">
                <div className="bg-[#F7F7F7] mt-6 sm:mt-10 rounded-2xl px-6 py-3">
                  <p className="font-medium text-sm md:text-base">Who We Are</p>
                </div>

                <h1 className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
                  Our Mission
                </h1>

                <p className="text-gray-600 font-sans leading-7 text-sm md:text-base">
                  To craft beautifully designed speakers that deliver powerful,
                  crystal-clear sound—whether you're relaxing at home, exploring
                  the outdoors, or hosting a party. Sound that moves with you,
                  wherever life takes you.
                </p>

                <h1 className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
                  Our Vision
                </h1>

                <p className="text-gray-600 font-sans leading-7 text-sm md:text-base">
                  To become a global leader in portable audio
                  innovation—blending performance, durability, and design into
                  one seamless experience that connects people through the power
                  of sound.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white px-6 py-16 lg:mt-20 lg:mb-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            {/* Eyebrow */}
            <span className="inline-block rounded-xl bg-orange-500 px-4 py-1.5 text-sm font-medium text-white">
              Our value
            </span>

            {/* Heading row */}
            <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <h2 className="text-4xl font-sans text-gray-900 md:text-5xl">
                What We Value
              </h2>
              <p className="max-w-md text-gray-600 md:text-right">
                We believe great sound should be simple, powerful, and
                accessible. Our values are rooted in a deep respect for our
                community.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-gray-100 p-8 transition-shadow hover:shadow-md"
                >
                  <div className="mb-14 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <Icon
                      className="h-5 w-5 text-gray-900"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
