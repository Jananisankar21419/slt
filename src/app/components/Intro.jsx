"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

const Intro = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="absolute top-0 left-2 w-full z-20">
        <Navbar />
      </div>

      <motion.div
        className="absolute w-full h-screen filter brightness-60"
        initial={{ clipPath: "inset(15%)" }}
        animate={{ clipPath: "inset(0%)" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/d5.svg"
          fill={true}
          alt="background image"
          priority={true}
          className="object-cover"
        />
      </motion.div>

      {/* Hidden on small screens */}
      <motion.div
        className="hidden md:block absolute bottom-9 right-9 filter brightness-80 w-[300px] md:w-[350px] h-[400px] md:h-[500px]"
        initial={{ height: "500px" }}
        animate={{ height: "400px", md: { height: "500px" } }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/img3.jpg"
          alt="intro image"
          fill={true}
          priority={true}
          className="object-cover object-top rounded-lg"
        />
      </motion.div>

      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-9 left-9 text-[#6482AD] text-[12vw] md:text-[6vw] z-10 text-left uppercase"
      >
        SMART LIGHT
        <br />
        TECHNOLOGIES
      </motion.h1>
    </div>
  );
};

export default Intro;
