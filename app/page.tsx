"use client"
import React from "react";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Testominal from "./components/Testominal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useCart } from "./context/Context";
import Cart from "./components/Cart";
const page = () => {
  const { isOpen, SetisOrder } = useCart();

  return (
    <>
      {isOpen ? (
        <Cart />
      ) : (
        <>
          <Navbar />
          <Hero />
          <BentoGrid />
          <Testominal />
          <Footer />
        </>
      )}
    </>
  );
};

export default page;
