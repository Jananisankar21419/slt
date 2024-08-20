"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const servicesData = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "We develop world class websites delivering success with every solution regarding online applications from scratch or in Wix, always get inspired with web-based solutions.",
  },
  {
    title: "UI & UX DEVELOPMENT",
    description:
      "A great way to plan a UI & UX design about creativity. We provide satisfaction, engaging you with splendid designs. Creativity never goes wrong, all you need is the right direction with dignity.",
  },
  {
    title: "APP DEVELOPMENT",
    description:
      "We build apps and illuminate your imagination that add value to your business. Solving real world problems through cutting edge technologies and develop amazing applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-16 text-[#333]">
      <div className="max-w-7xl px-6 flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/3 text-left mb-12 lg:mb-0 hidden lg:block"
        >
          <h2 className="text-12xl text-[#6482AD] opacity-30 uppercase ml-7 rotate-90 lg:mt-28 tracking-widest">
            Services
          </h2>
        </motion.div>

        <div className="lg:w-2/3 grid grid-cols-1 gap-8 sm:gap-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative w-full h-auto sm:h-[250px] md:h-[300px] bg-[#E2DAD6] border rounded-lg p-6 sm:p-8 mt-16 sm:mt-16 flex flex-col items-center"
            >
              <div className="relative z-10">
                <span className="block mb-4 sm:mb-6">
                  <Image
                    src="/gate2.svg"
                    alt="Star Icon"
                    width={50}
                    height={50}
                    className="w-12 h-12 sm:w-14 sm:h-14 p-2 rounded"
                  />
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-grey-500 mb-2 sm:mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-lg sm:text-xl text-grey-100">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
