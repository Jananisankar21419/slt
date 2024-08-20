"use client";

import React from "react";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import Wheel from "./components/Wheel";
import ContactUs from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F5EDED] flex flex-col overflow-hidden">
      <div className="flex-grow">
        <Intro />
        <About />
        <Services />
        <Wheel />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}
