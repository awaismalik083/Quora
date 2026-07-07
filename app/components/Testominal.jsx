"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const MotionImage = motion(Image);
const Testominal = () => {
  return (
    <>
      {/* Shared tall parent — controls how long text stays pinned */}
      <div className="relative lg:h-[560vh]">
        {/* Sticky text — stays pinned while parent is in view */}
        <div className="flex sticky z-0 top-20 flex-col gap-y-10 items-center justify-center mt-40">
          <div className="bg-gray-200 h-19 flex justify-center z-0 w-34 rounded-full relative">
            <MotionImage
              src="/button.png"
              className="absolute z-30 h-13 mt-3 w-13"
              alt="button"
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-8xl lg:text-9xl font-sans">Quora</h1>
          <p className="text-md font-sans max-w-md text-center">
            It takes care of the background so you can stay focused, sharp, and
            in full control of your day.
          </p>
        </div>

        {/* Images — NOT sticky, just absolutely positioned within the tall parent */}
        <div className="hidden mt-[90vh] lg:block absolute inset-0">
          <MotionImage
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl object-cover absolute top-20 left-20"
            src="/cards/container.jpeg"
            alt="container"
            width={420}
            height={350}
          />

          <MotionImage
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl object-cover absolute top-[80vh] right-10"
            src="/earbeats.jpeg"
            alt=""
            width={360}
            height={400}
          />

          <MotionImage
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl object-cover absolute top-[160vh] left-20"
            src="/cards/eq.jpeg"
            alt=""
            width={200}
            height={200}
          />

          <MotionImage
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl object-cover absolute top-[240vh] left-20"
            src="/cards/board.jpeg"
            alt=""
            width={300}
            height={150}
          />

          <div className="absolute top-[320vh] right-20 w-[400px] h-[300px]">
            <MotionImage
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl object-cover"
              src="/cards/bubble.jpeg"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testominal;
