"use client";
import Image from "next/image";
import EncryptButton from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent text-white top-0 left-0 w-full z-10">
      <div className="flex items-center pl-2 md:pl-6 lg:pl-10">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="w-8 h-8 sm:w-18 sm:h-18 md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
      </div>
      <div className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-9 text-xs sm:text-sm md:text-base lg:text-lg p-4 sm:p-5 md:p-6 lg:p-7 pr-2 sm:pr-4 md:pr-6 lg:pr-10">
        <EncryptButton to="about">About</EncryptButton>
        <EncryptButton to="services">Services</EncryptButton>
        <EncryptButton to="testimonials">Testimonials</EncryptButton>
        <EncryptButton to="contactus">Contact</EncryptButton>
      </div>
    </nav>
  );
};

export default Navbar;
