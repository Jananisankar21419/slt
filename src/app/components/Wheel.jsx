"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Picture1 from "../../../public/wheel.svg";

const Wheel = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden font-mono ">
      <div className="h-[1vh]" />
      <div ref={container}>
        <Slide
          src={Picture1}
          size={10}
          direction={"left"}
          left={"-30%"}
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[1vh]" />
    </main>
  );
};

const Slide = (props) => {
  const direction = props.direction === "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className="px-2 flex gap-5 items-center mt-20 mb-20">
      <p className="text-[7.5vw] lg:text-[4vw] xl:text-[3vw] md:text-[3.5vw] text-gray-500">
        SMART LIGHT TECHNOLOGIES
      </p>
      <span className="relative h-[5vw] w-[5vw] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};

export default Wheel;
